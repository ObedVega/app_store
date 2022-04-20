import  { useState, useEffect } from 'react'

export function useDetailProducts(id) {
  const [detailProduct, setDetailProduct] = useState({
    data: {},
    isLoading: true,
  })

  const getData = () => {
    fetch('https://app-itj-bootcamp.herokuapp.com/getProducto?id='+id)
      .then((res) => res.json())
      .then((res) => {
        setDetailProduct({ data: res, isLoading: false })
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return detailProduct
}