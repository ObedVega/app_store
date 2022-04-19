import React, { useState, useEffect } from 'react'

export default function useProducts() {
  const [Products, setProducts] = useState([])

  const getData = () => {
    fetch('https://app-itj-bootcamp.herokuapp.com/getProducts')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setProducts(res)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return Products
}