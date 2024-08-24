import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

import { useShoppingCart } from "@/hooks/useShoppingCart";
import { LucideShoppingCart } from "lucide-react";

export type ProductCardProps = {
    title: string;
    price: number;
    description: string;
    image: string;
};

export default function ProductCard(props: ProductCardProps) {
    const { title, price, description, image } = props;
    const { addToCart } = useShoppingCart();
    return (
        <Card>
            <CardContent>
                <div className="flex flex-col justify-between">
                    <div className="bg-white p-4">
                        <img
                            src={image}
                            alt={`Imagen de${title}`}
                            className="object-contain h-24 w-60"
                        />
                    </div>
                    <CardTitle className="text-sm h-24">{title}</CardTitle>
                    <CardDescription className="ml-auto mb-2">${price}</CardDescription>
                    <Button onClick={() => addToCart(props)}>
                        <LucideShoppingCart />
                        Comprar
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
