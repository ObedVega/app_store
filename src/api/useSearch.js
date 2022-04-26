import  { useState, useEffect } from 'react'

export function useSearchText(text) {

  const [detailProduct, setDetailProduct] = useState((text) => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
  const getData = () => {
    //fetch('https://app-itj-bootcamp.herokuapp.com/search?text='+text)
    fetch('https://app-itj-bootcamp.herokuapp.com/search/'+text)
      .then((res) => res.json())
      .then((res) => {
        setDetailProduct({ data: res, isLoading: false })
      })
  }


    getData();
  }, [text])

  return detailProduct
}