"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { ReactNode } from "react";
import { Product } from "./Product.type";


const formSchema = z.object({
    title: z.string().min(2).max(100),
    description: z.string().min(2).max(200),
    price: z.string().default("0"),
    image: z.string().min(2),
});

export type FormProps = {
    data?: Product
    children: ReactNode
};

export function FormProduct(props: FormProps) {
    const { data, children } = props;

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: data ? data.title : "",
            description: data ? data.description : "",
            price: data ? data.price.toString() : "0",
            image: data ? data.image : "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        },
    });

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        
        if (data) {
            axios.patch(`/products/${data.id}`, values).then((response) => {
                toast({
                    title: "Success",
                    description: "Product updated successfully",
                });
    
                form.reset();
            });    
        } else {
            axios.post("/products", values).then((response) => {
                toast({
                    title: "Success",
                    description: "Product created successfully",
                });
    
                form.reset();
            });
        }
    }
    return (
        <>
            <Dialog>
                <DialogTrigger>
                    {children}
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Product</DialogTitle>
                        <DialogDescription>
                            <Form {...form}>
                                <form
                                    onSubmit={form.handleSubmit(onSubmit)}
                                    className="space-y-8"
                                >
                                    <FormField
                                        control={form.control}
                                        name="title"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>title</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Title "
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="description"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Description
                                                </FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Description..."
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="price"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Price</FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="image"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Url Image</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="url image"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="submit">Save</Button>
                                </form>
                            </Form>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            <Toaster />
        </>
    );
}
