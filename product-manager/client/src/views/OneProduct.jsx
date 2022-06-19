import React, {useEffect, useState} from 'react'
import axios from "axios"
import { useHistory, useParams } from 'react-router-dom'

const OneProduct = () => {
  const {id} = useParams()
  const [product, setProduct] = useState()
  const history = useHistory()

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res=>setProduct(res.data))
        .catch(err=> console.log(err))
  }, [])


  const handleDelete =(deleteId)=>{
    axios.delete(`http://localhost:8000/api/products/${deleteId}`)
        .then(res=>{
          history.push("/products")
        })
        .catch(err=>console.log(err))
  }

  return (
    <div>
      {
        product?
          <div>
            <h3>{product.producttitle}</h3>
            <h3>Price : {product.productprice}</h3>
            <h3>Description : {product.productdescription}</h3>
            <td><button onClick={()=>handleDelete(product._id)}>Delete</button></td>
          </div>:
          <h1>Nooooooooooo!</h1>
      }
    </div>
  )
}

export default OneProduct