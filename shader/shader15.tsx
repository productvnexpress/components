"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

import { cn } from "@/lib/utils";

/**
 * Base color filter applied to the dispersed light.
 *
 * **Note:** This shader simulates light dispersion, splitting the spectrum into RGB components.
 * The `color` prop does not directly set the visible color — instead, it acts as a *filter* that
 * determines which parts of the spectrum remain visible.
 *
 * For example:
 * - `#ffffff` → full visible spectrum (rainbow effect)
 * - `#ffff00` → red and green wavelengths (no blue)
 * - `#ff0000` → only red wavelengths visible
 *
 * In short, `color` behaves like a spectral mask rather than a surface color.
 */

interface ShaderPlaneProps {
  vertexShader: string;
  fragmentShader: string;
  uniforms: Record<string, THREE.IUniform>;
  timeMultiplier: number;
}

const ShaderPlane = ({
  vertexShader,
  fragmentShader,
  uniforms,
  timeMultiplier,
}: ShaderPlaneProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { size } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.u_time.value = state.clock.elapsedTime * timeMultiplier;
      material.uniforms.u_resolution.value.set(size.width, size.height, 1.0);
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        side={THREE.FrontSide}
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  );
};

interface ShaderBackgroundProps {
  vertexShader?: string;
  fragmentShader?: string;
  uniforms?: Record<string, THREE.IUniform>;
  className?: string;
  color?: THREE.ColorRepresentation;
  timeMultiplier?: number;
}

const Shader15 = ({
  vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
    gl_Position = vec4(position, 1.0);
    }
  `,
  fragmentShader = `
    precision highp float;

    varying vec2 vUv;
    uniform float u_time;
    uniform vec3 u_resolution;
    uniform vec3 u_color;

    float v(in vec2 uv, float d, float o){
        return 1.0-smoothstep(0.0, d, distance(uv.x, 0.5 + sin(o+uv.y*3.0)*0.3));
    }

    vec4 b(vec2 uv, float o) {
     float d = 0.05+abs(sin(o*0.2))*0.25 * distance(uv.y+0.5, 0.0);
     return vec4(v(uv+vec2(d*0.25, 0.0), d, o), 0.0, 0.0, 1.0) +
            vec4(0.0, v(uv-vec2(0.015, 0.005), d, o), 0.0, 1.0) +
            vec4(0.0, 0.0, v(uv-vec2(d*0.5, 0.015), d, o), 1.0);
    }

    void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
     	vec2 uv = fragCoord.xy / u_resolution.y;
     	uv.x -= 0.75;

      float angle = radians(-45.0);
      mat2 rot = mat2(cos(angle), -sin(angle),
                      sin(angle),  cos(angle));
      uv = rot * uv;

        vec4 accumulated =  b(uv, u_time)*0.5 +
            b(uv, u_time*2.0)*0.5 +
            b(uv+vec2(0.3, 0.0), u_time*3.3)*0.5;

        fragColor = vec4(accumulated.rgb * u_color, 1.0);
    }

      void main() {
        vec4 fragColor;
        vec2 fragCoord = vUv * u_resolution.xy;
        mainImage(fragColor, fragCoord);
        gl_FragColor = fragColor;
      }
  `,
  uniforms,
  className,
  color = "#ffffff",
  timeMultiplier = 0.5,
}: ShaderBackgroundProps) => {
  const colorUniformValue = useMemo(() => new THREE.Color(color), [color]);

  const shaderUniforms = useMemo<Record<string, THREE.IUniform>>(
    () => ({
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector3(1, 1, 1) },
      ...(uniforms ?? {}),
      u_color: { value: colorUniformValue },
    }),
    [uniforms, colorUniformValue],
  );

  return (
    <section
      className={cn(
        "relative h-svh max-h-[1200px] min-h-[600px] w-full overflow-hidden",
        className,
      )}
    >
      <Canvas>
        <ShaderPlane
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={shaderUniforms}
          timeMultiplier={timeMultiplier}
        />
      </Canvas>
    </section>
  );
};

export { Shader15 };
