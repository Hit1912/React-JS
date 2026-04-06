import React, { useEffect, useState } from 'react'
import ProductCard from '../Ui/ProductCard'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'

const ProductBar = () => {

  const [product, setProduct] = useState([])

  useEffect(() => {
    const fetchProduct = async () => {
      let response = await axios.get("https://dummyjson.com/products?limit=20")
      console.log(response.data.products)
      setProduct(response.data.products)
    }
    fetchProduct()
  }, [])

  return (
    <>
      <section className='w-full flex justify-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6 justify-center w-[100vw]'>

          {product.map((data) => (
            <Link to={`/product/${data.id}`}><ProductCard key={data.id} product={data}/></Link>
          ))}
        </div>
      </section>
    </>
  )
}

export default ProductBar