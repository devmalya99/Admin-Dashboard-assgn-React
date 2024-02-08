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



const InputCard =()=>{

    const [data,setData] = useState({
        productName:'',
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
        e.preventDefault;
        console.log(data);
    }


    return (
        <Card className="w-96">
        <CardHeader
        variant="gradient"
        color="gray"
        className="mb-4 grid h-28 place-items-center"
        >
        <Typography variant="h3" color="white">
          Admin Dashboard
        </Typography>

      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input 
        label="Product Name"
        name="productName"
        type="text" 
        placeholder="Enter Product Name" 
        onChange={handleInputChange} 
        size="lg" />

        <Input 
        label="Price"
        name="price"
        type="number"
        placeholder="Enter Product Price"
        onChange={handleInputChange} 
        size="lg" />

        
      </CardBody>
      <CardFooter className="pt-0">
      <div className="flex w-full flex-col gap-6">
      <select 
    className="form-control" 
    name="category" 
    onChange={handleInputChange} 
    aria-label="Select Category"
>

    <option value=''>Select...</option>
    <option value='Electronics'>Electronics</option>
    <option value='Food'>Food</option>
    <option value='Entertainment'>Entertainment</option>

</select>
    </div>
    <Button className="w-full mt-4"
      onClick={handleSubmit}
    >
        Submit
    </Button>

    </CardFooter>
    </Card>
    )
}

export default InputCard;