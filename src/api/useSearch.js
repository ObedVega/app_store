import  { useState, useEffect } from 'react'

export function useSearchText(text) {

  const [detailSearch, setDetailSearch] = useState((text) => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    const getData = () => {
      fetch('https://app-itj-bootcamp.herokuapp.com/search?text='+text)
      .then((res) => res.json())
      .then((res) => {
        setDetailSearch({ data: res, isLoading: false })
    })
  }

  getData();
  }, [text])

  return detailSearch
}