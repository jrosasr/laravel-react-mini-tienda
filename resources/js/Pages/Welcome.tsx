import {  Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard/ProductCard';
import { ShoppingCartProvider } from '@/context/shopping-cart.jsx';
import axios from 'axios';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    const [products, setProducts] = useState([]);

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
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
                                {products.map((product: any, index) => (
                                    <ProductCard key={index} {...product} />
                                ))}
                            </div>
                        </main>

                        <Footer laravelVersion={laravelVersion} phpVersion={phpVersion} />
                    </div>
                </div>
            </div>
        </ShoppingCartProvider>
    );
}


