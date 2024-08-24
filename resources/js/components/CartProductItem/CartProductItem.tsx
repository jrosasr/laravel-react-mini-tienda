import { Trash } from 'lucide-react'
import React from 'react'

export type CardProductItemProp = {
    id: number
    title: string
    price: number
    image: string
    quantity: number
    removeToCart: (id: number) => void
  }
  export function CartProductItem(props: CardProductItemProp) {
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