import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { v4 as uuidv4 } from 'uuid';
import React from "react";
import { useSelector , useDispatch } from "react-redux";
import { deleteProduct } from "../Redux/01Slices/ProductSlice";
const ProductList = () => {
  const products = useSelector((state) => state.productsInfo);
  console.log(products);
  const categories =[...new Set(products.map((item)=>item.category))]

  
  const dispatch=useDispatch();

  const handleDelete =(productId)=>{
    dispatch(deleteProduct(productId))
  }


  return  categories.map((category)=>(
    <Card 
    key={category}
    className="w-96 mt-8 ">
      <CardHeader
        variant="gradient"
        color="gray"
        className="mb-2 grid h-12 place-items-center "
      >
        <Typography variant="h4" color="green">
        {category}
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        {products.filter((item)=>item.category===category).map((item) => (
          <div key={item.productId} className="bg-green-400 rounded-lg text-white p-4">
            {products.length > 0 && (
              <>
              <li>
                {item.productName}~{item.price}~{item.category}
              </li>
              <Button onClick={()=>handleDelete(item.productId)}>X</Button>
              </>
            )}
          </div>
        ))}
      </CardBody>
      <CardFooter className="pt-0"></CardFooter>
    </Card>
  
 ) )}


export default ProductList;
