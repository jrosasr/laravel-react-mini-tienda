'use client';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Textarea } from '@/components/ui/textarea';
import axios from 'axios';
import { toast } from '@/components/ui/use-toast';
import { useEffect, useState } from 'react';
import { DataTable } from './data-table';
import { columns } from './columns';
import { FormProduct } from "./FormProduct";
import { Button } from '@/components/ui/button';
 
const formSchema = z.object({
  title: z.string().min(2).max(50),
  description: z.string().min(2).max(200),
  price: z.string().default('0'),
  image: z.string().min(2),
})

export default function ProductList({ auth }: PageProps) {
  const [ products, setProducts ] = useState([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      price: '0',
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
  })

  useEffect(() => {
    axios.get('/products/get-product-list').then((response) => {
      setProducts(response.data);
    })
  }, [])
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {

    console.log(values);
      axios.post('/products', values).then((response) => {
        toast({
          title: "Success",
          description: "Product created successfully",
        })

        form.reset()
      })
  }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Products
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="flex justify-end max-w-7xl mx-auto m:px-6 lg:px-8">
                            <FormProduct>
                              <Button className="mt-6">Add Product</Button>
                            </FormProduct>
                        </div>
                        <div className="p-6 text-gray-900">
                            <DataTable columns={columns} data={products} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
