"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { Pencil } from "lucide-react";
import { FormProduct } from "./FormProduct";
import { Product } from "./Product.type";
import { DeleteRecord } from "@/components/DeleteRecord";

export const columns: ColumnDef<Product>[] = [
    {
        accessorKey: "id",
        header: "#",
    },
    {
        accessorKey: "image",
        header: "Image",
        cell: ({ getValue }) => {
            return (
                <img
                    src={getValue<string>()}
                    className="h-auto w-24 object-cover"
                />
            );
        },
    },
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "description",
        header: "Description",
    },
    {
        accessorKey: "price",
        header: "Price",
        cell: ({ getValue }) => {
            return <strong>${getValue<number>()}</strong>;
        },
    },
    {
        accessorKey: "action",
        header: "Action",
        cell: ({ row }) => {
            return (
                <div className="flex space-x-1">
                    <FormProduct data={row.original}>
                        <Button variant={"outline"} className="h-8 w-8 p-0">
                            <Pencil className="h-4 w-4" />
                        </Button>
                    </FormProduct>
                    <DeleteRecord id={row.original.id} url="/products" />
                </div>
            );
        },
    },
];
