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
import { Link } from '@inertiajs/react';
import { CartProductItem } from '../CartProductItem';

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
                      <CartProductItem
                          key={index}
                          {...item}
                          removeToCart={removeToCart}
                      />
                  ))}
              </SheetHeader>
              <SheetFooter>
                  <Link
                      href={route("checkout.index")}
                      className="w-full"
                  >
                      <Button className="w-full" disabled={cart.length === 0}>
                        Checkout
                    </Button>
                  </Link>
              </SheetFooter>
          </SheetContent>
      </Sheet>
  );
}
