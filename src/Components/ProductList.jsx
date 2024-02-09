import {

    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Button,
    Select,
    Option,
  } from "@material-tailwind/react";

import React from 'react'

const ProductList = () => {
  return (
    <Card className="w-96 mt-8 ">
    <CardHeader
    variant="gradient"
    color="gray"
    className="mb-2 grid h-12 place-items-center "
    >
    <Typography variant="h4" color="green">
      Product List
    </Typography>

  </CardHeader>
  <CardBody className="flex flex-col gap-4">
   
   <div className="bg-green-400 rounded-lg text-white p-4">
    <li>List Item 1</li>
   </div>

   <div className="bg-green-400 rounded-lg text-white p-4">
    <li>List Item 1</li>
   </div>

   <div className="bg-green-400 rounded-lg text-white p-4">
    <li>List Item 1</li>
   </div>


   
   

    
  </CardBody>
  <CardFooter className="pt-0">

</CardFooter>
</Card>
  )
}

export default ProductList