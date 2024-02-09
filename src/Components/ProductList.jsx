import {

    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
   
  } from "@material-tailwind/react";

import React from 'react'
import {useSelector} from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
const ProductList = () => {

  const products = useSelector(state=>state.productsInfo)
  console.log(products);
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
   
  {products.map((item)=>
  (
   <div 

   key={item.id}
   className="bg-green-400 rounded-lg text-white p-4">
    {products.length > 0 && <li>{item.productName}~{item.price}~{item.category}</li>}
    </div>  
  ))}
   

   
  </CardBody>
  <CardFooter className="pt-0">

</CardFooter>
</Card>
  )
}

export default ProductList