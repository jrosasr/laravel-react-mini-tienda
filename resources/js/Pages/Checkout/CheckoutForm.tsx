import { CartProductItem } from '@/components/CartProductItem';
import { useShoppingCart } from '@/hooks/useShoppingCart'

export default function CheckoutForm() {
    const { cart, removeToCart } = useShoppingCart()

  return (
      <div>
          {cart.map((item, index) => (
              <CartProductItem
                  key={index}
                  {...item}
                  removeToCart={removeToCart}
              />
          ))}
      </div>
  );
}
