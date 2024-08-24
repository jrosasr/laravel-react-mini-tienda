import { ShoppingCartIcon, Trash } from 'lucide-react';
import React from 'react'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useShoppingCart } from "@/hooks/useShoppingCart";
import { Button } from '../ui/button';

export type CardProductItemProp = {
  id: number
  title: string
  price: number
  image: string
  quantity: number
  removeToCart: (id: number) => void
}
function CartProductItem(props: CardProductItemProp) {
  const { id, title, price, image, quantity, removeToCart } = props
  return (
      <>
          <div className="grid grid-cols-3 gap-2 relative">
              <div className="absolute top-0 right-0">
                <Trash className="h-4 w-4 cursor-pointer" onClick={() => removeToCart(id)} />
              </div>
              <div className="col-span-1 flex justify-center">
                  <img
                      src={image}
                      alt={title}
                      className="h-16 w-16 object-cover"
                  />
              </div>
              <div className="col-span-2 flex flex-col justify-between">
                  <h1 className='w-[90%] text-sm'>{title}</h1>
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
  const { cart, removeToCart } = useShoppingCart()
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
                    <CartProductItem key={index} {...item} removeToCart={removeToCart} />
                  ))}
              </SheetHeader>
              <SheetFooter>
                  <Button className='w-full' disabled={cart.length === 0}>Checkout</Button>
              </SheetFooter>
          </SheetContent>
      </Sheet>
  );
}
