import {

    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Button,
  } from "@material-tailwind/react";

  import React, { useState } from 'react'
  import {useDispatch} from 'react-redux'
  import {addProduct} from '../Redux/01Slices/ProductSlice'



const InputCard =()=>{

  const dispatch = useDispatch()

    const [data,setData] = useState({
       
        productName:'',
        productId: '',
        price:'',
        category:'',
    })

    const handleInputChange =(event)=>
    {
        setData({
            ...data,
            [event.target.name]:event.target.value,
        })

    };

    const handleSubmit=(e)=>{
        e.preventDefault();

      // send product information along with new id
      dispatch(addProduct(data))

      setData({
        productName: '',
        productId: '',
        price: '',
        category: '',
    });
    }


    return (
        <Card className="w-96 shadow-xl">
        <CardHeader
        variant="gradient"
        color="gray"
        className="mb-4 grid h-28 place-items-center bg-green-400"
        >
        <Typography variant="h3" color="green">
          Admin Dashboard
        </Typography>

      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input 
        label="Product Name"
        name="productName"
        value={data.productName}
        type="text" 
        placeholder="Enter Product Name" 
        onChange={handleInputChange} 
        size="lg" />

        <Input 
        label="Product Id"
        name="productId"
        value={data.productId}
        type="number" 
        placeholder="Enter Product Id" 
        onChange={handleInputChange} 
        size="lg" />

        <Input 
        label="Price"
        name="price"
        type="number"
        // connect the value of the Input field to the state
        value={data.price}
        placeholder="Enter Product Price"
        onChange={handleInputChange} 
        size="lg" />

        
      </CardBody>
      <CardFooter className="pt-0">
      <div className="flex w-full flex-col gap-6">
      <select 
    className="form-control" 
    name="category" 
     // connect the value of the select field to the state
     value={data.category}
    onChange={handleInputChange} 
    aria-label="Select Category"
>

    <option value=''>Select...</option>
    <option value='Electronics'>Electronics</option>
    <option value='Food'>Food</option>
    <option value='Entertainment'>Entertainment</option>

</select>
    </div>
    <Button className="w-full mt-4 bg-green-400"
      onClick={handleSubmit}
    >
        Submit
    </Button>

    </CardFooter>
    </Card>
    )
}

export default InputCard;