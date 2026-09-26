"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ShoppingBag, ShoppingCart, Trash2, Truck, X } from "lucide-react";
import { memo, useCallback } from "react";
import type { SubmitHandler, UseFormReturn } from "react-hook-form";
import {
  FormProvider,
  useFieldArray,
  useForm,
  useFormContext,
} from "react-hook-form";
import z from "zod";

import type { PriceType } from "@/components/shadcnblocks/price";
import { Price, PriceValue } from "@/components/shadcnblocks/price";
import QuantityInput from "@/components/shadcnblocks/quantity-input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Field } from "@/components/ui/field";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";

type CartItem = {
  product_id: string;
  link: string;
  name: string;
  image: string;
  price: PriceType;
  quantity: number;
  details: {
    label: string;
    value: string;
  }[];
};

type CartDetailsType = {
  freeShippingThreshold: PriceType;
  shippingCost: PriceType;
};

interface FullCartProps {
  paymentMethods: string[];
  cartDetails: CartDetailsType;
  form: UseFormReturn<CartFormType>;
}

interface SuggestedProductCardProps {
  product: ProductType;
  onAddToCart?: () => void;
}

interface SuggestedProductsSectionProps {
  onAdd: (id: ProductType) => void;
}

interface ShoppingCart12Props {
  cartItems?: CartItem[];
  paymentMethods: string[];
  cartDetails: CartDetailsType;
}

const productSchema = z.object({
  name: z.string(),
  image: z.string(),
  link: z.string(),
  price: z.object({
    currency: z.string(),
    regular: z.number(),
    sale: z.number().optional(),
  }),
  product_id: z.string(),
});

const cartFormSchema = z.object({
  products: z
    .object({
      product_id: z.string(),
      quantity: z.number(),
      price: z.number(),
      product: productSchema,
    })
    .array(),
});

type CartFormType = z.infer<typeof cartFormSchema>;
type ProductType = z.infer<typeof productSchema>;

const CART_ITEMS: CartItem[] = [
  {
    product_id: "product-1",
    link: "#",
    name: "Stylish Maroon Sneaker",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/stylish-maroon-sneaker.png",
    price: {
      regular: 354.0,
      currency: "USD",
    },
    quantity: 1,
    details: [
      {
        label: "Color",
        value: "Red",
      },
      {
        label: "Size",
        value: "36",
      },
    ],
  },
  {
    product_id: "product-2",
    link: "#",
    name: "Bicolor Sweatshirt with Embroidered Logo",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/bicolor-crewneck-sweatshirt-with-embroidered-logo.png",
    price: {
      regular: 499.0,
      currency: "USD",
    },
    quantity: 1,
    details: [
      {
        label: "Color",
        value: "Blue & White",
      },
      {
        label: "Size",
        value: "L",
      },
    ],
  },
  {
    product_id: "product-3",
    link: "#",
    name: "Black Hoodie",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/black-hoodie-against-light-background.png",
    price: {
      regular: 84.0,
      currency: "USD",
    },
    quantity: 1,
    details: [
      {
        label: "Color",
        value: "Black",
      },
      {
        label: "Size",
        value: "XL",
      },
    ],
  },
  {
    product_id: "product-4",
    link: "#",
    name: "Maroon Leather Handbag",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/maroon-leather-handbag.png",
    price: {
      regular: 245.0,
      currency: "USD",
    },
    quantity: 1,
    details: [
      {
        label: "Color",
        value: "Maroon",
      },
    ],
  },
  {
    product_id: "product-5",
    link: "#",
    name: "Classic Fedora Hat",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Classic-Fedora-Hat-1.png",
    price: {
      regular: 499.0,
      currency: "USD",
    },
    quantity: 1,
    details: [
      {
        label: "Color",
        value: "Beige",
      },
    ],
  },
];

const CART_DETAILS: CartDetailsType = {
  freeShippingThreshold: {
    regular: 500,
    currency: "USD",
  },
  shippingCost: {
    regular: 9.99,
    currency: "USD",
  },
};

const SUGGESTED_PRODUCTS: ProductType[] = [
  {
    product_id: "suggested-1",
    name: "Minimalist White Sneakers",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Minimalist-Beige-Sneakers-2.png",
    price: {
      regular: 129.0,
      currency: "USD",
    },
    link: "#",
  },
  {
    product_id: "suggested-2",
    name: "Classic Tote Bag",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Woman-with-Beige-Tote-Bag-2.png",
    price: {
      regular: 89.0,
      currency: "USD",
    },
    link: "#",
  },
  {
    product_id: "suggested-3",
    name: "Vintage Denim Jacket",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764033-2.jpg",
    price: {
      regular: 199.0,
      currency: "USD",
    },
    link: "#",
  },
  {
    product_id: "suggested-4",
    name: "Sport Running Shoes",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Stylish-Sneakers-on-Solid-Background-2.png",
    price: {
      regular: 159.0,
      currency: "USD",
    },
    link: "#",
  },
  {
    product_id: "suggested-5",
    name: "Classic Black Fedora Hat",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Classic-Black-Fedora-Hat-1.png",
    price: {
      regular: 79.0,
      currency: "USD",
    },
    link: "#",
  },
];

const PAYMENT_METHODS = [
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/payment-methods/amazonpay.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/payment-methods/applepay.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/payment-methods/mastercard.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/payment-methods/paypal.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/payment-methods/visa.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/payment-methods/discover.svg",
];

const ShoppingCart12 = ({
  cartItems = CART_ITEMS,
  paymentMethods = PAYMENT_METHODS,
  cartDetails = CART_DETAILS,
}: ShoppingCart12Props) => {
  const defaultProducts = cartItems?.map((item) => ({
    product_id: item.product_id,
    quantity: item.quantity,
    price: item.price.sale ?? item.price.regular,
    product: item,
  }));

  const form = useForm<CartFormType>({
    resolver: zodResolver(cartFormSchema),
    defaultValues: {
      products: defaultProducts ?? [],
    },
  });

  const formItems = form.watch("products");

  return (
    <Sheet defaultOpen>
      <SheetContent
        aria-describedby={undefined}
        className="w-full gap-0 p-0 sm:!max-w-full lg:!w-1/2 lg:!max-w-none [&>button]:hidden"
      >
        <SheetTitle className="sr-only">Cart Modal</SheetTitle>
        {!formItems || formItems?.length === 0 ? (
          <EmptyCart />
        ) : (
          <FormProvider {...form}>
            <FullCart
              cartDetails={cartDetails}
              paymentMethods={paymentMethods}
              form={form}
            />
          </FormProvider>
        )}
      </SheetContent>
    </Sheet>
  );
};

const FullCart = ({ paymentMethods, cartDetails, form }: FullCartProps) => {
  const formItems = form.watch("products");

  const { shippingCost } = cartDetails;

  const { fields, remove, prepend } = useFieldArray({
    control: form.control,
    name: "products",
  });

  const handleRemove = useCallback(
    (index: number) => {
      remove(index);
    },
    [remove],
  );

  const handleAddToCart = (product: ProductType) => {
    const exists = fields.some(
      (item) => item.product_id === product.product_id,
    );

    if (exists) return;

    prepend({
      product_id: product.product_id,
      quantity: 1,
      price: product.price.regular,
      product,
    });
  };

  const subtotal = formItems?.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const itemsCount = formItems && formItems.length ? formItems.length : 0;

  const shipping = itemsCount > 0 ? shippingCost.regular : 0;
  const total = subtotal + shipping;

  const onSubmit: SubmitHandler<CartFormType> = (data) => {
    console.log(data);
  };

  return (
    <form className="h-full" onSubmit={form.handleSubmit(onSubmit)}>
      <div className="grid h-full grid-cols-1 lg:grid-cols-7">
        <div className="col-span-2 border border-r max-lg:hidden">
          <SuggestedProductsSection onAdd={handleAddToCart} />
        </div>
        <div className="lg:col-span-5">
          <div className="flex h-full max-h-dvh flex-col">
            <div className="shrink-0">
              <div className="px-4 py-3.5">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="font-semibold">Cart</h2>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon-sm">
                      <X />
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </div>
            <div className="flex grow flex-col overflow-auto">
              <div className="flex grow flex-col">
                <div className="px-4 py-4 lg:px-8">
                  <Alert>
                    <Truck />
                    <AlertTitle>Free shipping on orders over $50!</AlertTitle>
                    <AlertDescription>
                      Add more items to your cart to qualify for free shipping.
                    </AlertDescription>
                  </Alert>
                </div>
                <div className="flex-1">
                  <div className="space-y-4 px-4 py-4 lg:px-8">
                    {fields.map((field, index) => {
                      return (
                        <CartItemComponent
                          key={field.id}
                          item={field.product}
                          index={index}
                          onRemove={handleRemove}
                        />
                      );
                    })}
                  </div>
                </div>
                <CartGiftSection />
              </div>
            </div>
            <div>
              <div className="space-y-4 border-t bg-accent px-8 py-4">
                <div className="mb-3 flex justify-between">
                  <span className="font-light">Shipping</span>
                  <PriceValue price={shippingCost.regular} currency="USD" />
                </div>
                <div className="mb-3 flex justify-between">
                  <span className="font-semibold">Total</span>
                  <PriceValue price={total} currency="USD" />
                </div>
                <Button type="submit" className="w-full">
                  Proceed to Checkout
                </Button>
                <PaymentMethods cards={paymentMethods} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

const SuggestedProductsSection = ({ onAdd }: SuggestedProductsSectionProps) => {
  return (
    <div>
      <div className="px-4 py-3.5">
        <h2 className="leading-8 font-semibold">Suggested</h2>
      </div>
      <div className="h-[calc(100dvh-32px)] space-y-3 overflow-y-auto px-4 pt-4 pb-8">
        {SUGGESTED_PRODUCTS.map((product) => (
          <SuggestedProductCard
            key={product.product_id}
            product={product}
            onAddToCart={() => onAdd(product)}
          />
        ))}
      </div>
    </div>
  );
};

const SuggestedProductCard = ({
  product,
  onAddToCart,
}: SuggestedProductCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-card p-3 transition-all hover:shadow-md">
      <div className="w-full">
        <AspectRatio
          ratio={0.746}
          className="mb-3 overflow-hidden rounded-md bg-muted"
        >
          <img
            src={product.image}
            alt={product.name}
            className="size-full object-cover transition-transform group-hover:scale-105"
          />
          <Button
            variant="outline"
            size="icon-sm"
            onClick={onAddToCart}
            className="absolute right-2 bottom-2 rounded-full"
          >
            <ShoppingBag className="size-4" />
          </Button>
        </AspectRatio>
      </div>

      <div className="space-y-2">
        <h4 className="line-clamp-2 text-sm leading-tight font-medium">
          <a href={product.link}>{product.name}</a>
        </h4>

        <div className="flex items-center">
          <Price>
            <PriceValue
              price={product.price.regular}
              currency={product.price.currency || "USD"}
            />
          </Price>
        </div>
      </div>
    </div>
  );
};

const QuantityField = memo(
  ({
    index,
    onQuantityChange,
  }: {
    index: number;
    onQuantityChange: (n: number) => void;
  }) => {
    const { setValue, watch } = useFormContext();
    const fieldValue = watch(`products.${index}.quantity`);

    return (
      <Field>
        <QuantityInput
          onValueChange={(newQty) => {
            setValue(`products.${index}.quantity`, newQty);
            onQuantityChange(newQty);
          }}
          inputProps={{ value: fieldValue }}
          className="!w-[7.5rem] !rounded-none border-0 !shadow-none"
          min={1}
          max={99}
        />
      </Field>
    );
  },
);

const CartItemComponent = memo(
  ({
    item,
    index,
    onRemove,
  }: {
    item: ProductType;
    index: number;
    onRemove: (index: number) => void;
  }) => {
    const { watch } = useFormContext();
    const quantity = watch(`products.${index}.quantity`);

    if (!item) return;

    return (
      <div className="@container rounded-lg border p-4">
        <div className="flex flex-col gap-4 @xs:flex-row">
          <div className="flex flex-1 gap-4">
            <div className="w-20 shrink-0">
              <AspectRatio
                ratio={0.746}
                className="overflow-hidden rounded-md bg-muted"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="size-full object-cover"
                />
              </AspectRatio>
            </div>

            <div className="flex flex-1 flex-col justify-between gap-2">
              <h3 className="line-clamp-2 text-sm font-medium">{item.name}</h3>

              <div>
                <QuantityField
                  index={index}
                  onQuantityChange={(newQty) => {
                    if (newQty === 0) {
                      onRemove(index);
                    } else {
                      // Field update will be handled by the QuantityField component
                    }
                  }}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 @xs:flex-col @xs:items-end">
            <Button
              variant="destructive"
              size="icon-sm"
              onClick={() => onRemove(index)}
            >
              <Trash2 className="size-4" />
            </Button>
            <div className="text-right">
              <Price>
                <PriceValue
                  price={item.price.regular * quantity}
                  currency={item.price.currency || "USD"}
                />
              </Price>
              <p className="text-xs text-muted-foreground">
                <PriceValue
                  price={item.price.regular}
                  currency={item.price.currency || "USD"}
                />{" "}
                each
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

const EmptyCart = () => {
  return (
    <Empty className="py-8">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <ShoppingCart className="size-12 text-muted-foreground" />
        </EmptyMedia>
        <EmptyTitle>Your cart is empty</EmptyTitle>
        <EmptyDescription>
          Looks like you haven&apos;t added anything yet. Start shopping to fill
          it up!
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button className="w-full">Start Shopping</Button>
      </EmptyContent>
    </Empty>
  );
};

const PaymentMethods = ({ cards }: { cards: string[] }) => {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-3 grayscale">
      {cards.map((card) => (
        <li key={crypto.randomUUID()}>
          <img className="w-9.5" src={card} alt="card" />
        </li>
      ))}
    </ul>
  );
};

const CartGiftSection = () => {
  return (
    <div className="bg-primary px-4 py-4 lg:px-8">
      <div>
        <p className="text-primary-foreground">Gift from 100$</p>
      </div>
    </div>
  );
};
export { ShoppingCart12 };
