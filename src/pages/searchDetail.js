import React from "react";
import { useLocation  } from "react-router-dom";
import { Loading } from "../components/loading";
import Container from "react-bootstrap/Container"; 
import Row from "react-bootstrap/Row"; 
import { useSearchText } from "../api/useSearch";
 
export const SearchDetail = () => {
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const text = query.get('q');
    console.log(text);
    const {data, isLoading} = useSearchText(text);
    

    console.log(data);

    if(isLoading){
        return(
        <Container>
            <Row>
            <Loading/>
            </Row>
        </Container>
        );
    }
    //{data.map((item, i) => {  })}  
    return (
      <>
        <h1> Busqueda</h1>
        <h3>Texto: {text}</h3>
      </>
    )
  };