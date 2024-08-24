import {  Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { useEffect, useState } from 'react';
import { ShoppingCartProvider } from '@/context/shopping-cart.jsx';
import axios from 'axios';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import CheckoutForm from './CheckoutForm';

export default function CheckoutPage({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    const [products, setProducts] = useState([]);
    // const { cart, removeToCart } = useShoppingCart()

    useEffect(() => {
        // fetch('https://fakestoreapi.com/products')
        //     .then((response) => response.json())
        //     .then((data) => setProducts(data));

        axios.get("/products/get-product-list").then((response) => {
            setProducts(response.data);
        });
    }, []);

    return (
        <ShoppingCartProvider>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <Header user={auth.user} />

                        <main className="mt-6">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 justify-center">
                                <CheckoutForm />
                            </div>
                        </main>

                        <Footer
                            laravelVersion={laravelVersion}
                            phpVersion={phpVersion}
                        />
                    </div>
                </div>
            </div>
        </ShoppingCartProvider>
    );
}


