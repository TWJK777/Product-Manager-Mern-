import React, {useEffect, useState} from 'react'
import axios from "axios"
import { useHistory, useParams } from 'react-router-dom'

const Edit = () => {
  const {id} = useParams()
  const [producttitle, setProductTitle] = useState("") 
  const [productprice, setProductPrice] = useState("")
  const [productdescription, setProductDescription] = useState("")
  const history = useHistory()


  useEffect(()=>{
    axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res=>{
          const product = res.data
          setProductTitle(product.producttitle)
          setProductPrice(product.productprice)
          setProductDescription(product.productdescription)
        })
        .catch(err=> console.log(err))
  }, [])


  const handleSubmit =(e)=>{
    e.preventDefault()
    axios.put(`http://localhost:8000/api/products/${id}`, {producttitle, productprice, productdescription})
          .then(res=>{
            history.push("/products")
          })
          .catch(err=>console.log(err))
  }




  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" name="producttitle" value={producttitle} onChange={e=>setProductTitle(e.target.value)}/>
        </div>
        <div>
          <label>Price</label>
          <input type="number" name="productprice" value={productprice} onChange={e=>setProductPrice(e.target.value)}/>
        </div>
        <div>
          <label>Description</label>
          <input type="text" name="productdescription" value={productdescription} onChange={e=>setProductDescription(e.target.value)}/>
        </div>
        <button> Submit</button>
      </form>
    </div>
  )
}

export default Edit