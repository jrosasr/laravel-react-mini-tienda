import React from 'react'
import { Button } from '../ui/button'
import axios from 'axios'
import { toast } from '../ui/use-toast'
import { Trash } from 'lucide-react'

export type DeleteRecordProps = {
    id: string
    url: string
}

export function DeleteRecord(props: DeleteRecordProps) {
    const { id, url } = props

    function deleteRecord() {
        axios.delete(`${url}/${id}`).then((response) => {
            toast({
                title: "Success",
                description: "Product deleted successfully",
            })
        })
    }
  return <Button className="h-8 w-8 p-0" variant={"destructive"} onClick={deleteRecord}>
    <Trash className="h-4 w-4" />
  </Button>;
}
