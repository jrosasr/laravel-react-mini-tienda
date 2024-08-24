import { ShoppingCartIcon } from 'lucide-react';
import React from 'react'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useShoppingCart } from "@/hooks/useShoppingCart";

export type CardProductItemProp = {
  title: string
  price: number
  image: string
  quantity: number
}
function CartProductItem(props: CardProductItemProp) {
  const { title, price, image, quantity } = props
  return (
      <>
          <div className="grid grid-cols-3 gap-2">
              <div className="col-span-1 flex justify-center">
                  <img
                      src={image}
                      alt={title}
                      className="h-16 w-16 object-cover"
                  />
              </div>
              <div className="col-span-2">
                  <h1>{title}</h1>
                  <div className="flex justify-between">
                      ${price}
                      <span>Qty: {quantity}</span>
                  </div>
              </div>
          </div>
          <hr className='mt-2' />
      </>
  );
}


export function ShoppingCart() {
  const { cart } = useShoppingCart()
  console.log(cart);
  
  return (
      <Sheet>
          <SheetTrigger>
              <div className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white">
                  <ShoppingCartIcon className="h-6 w-6 cursor-pointer" />
              </div>
          </SheetTrigger>
          <SheetContent>
              <SheetHeader>
                  <SheetTitle>Shopping Cart</SheetTitle>
                  {cart.map((item, index) => (
                    <CartProductItem key={index} {...item} />
                  ))}
              </SheetHeader>
          </SheetContent>
      </Sheet>
  );
}
