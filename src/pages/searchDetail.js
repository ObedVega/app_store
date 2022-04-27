import React from "react";
import { Link, useLocation  } from "react-router-dom";
import { useSearchText } from "../api/useSearch";
import { Loading } from "../components/loading";
import Container from "react-bootstrap/Container"; 
import Row from "react-bootstrap/Row"; 

 
export const SearchDetail = () => {
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const text = query.get('q');
    const {data, isLoading} = useSearchText(text);
    
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
      <br/>
      <Container>
      <div className="row">
        <div className="grid">
        {data.map((item,i) => {
            return(
              <div key={i} className="card card-body">
                  <img  
                    className="img-fluid img_p"
                    src={item.img_url}
                    alt="" />
                  <p>{item.name}</p>
                  <h3 className="text-left">${item.price}</h3>
                  <div className="text-right">
                    <Link key={item.id} 
                      to={`/products/${item.id}`}
                      className='p-2 link-secondary nodec'
                   >
                      Details
                    </Link>
                    <button className="btn btn-color btn-sm" >Add to cart</button>
                  </div>
              </div>        
            );
        })
     }
     </div>
     </div>
     </Container>
      </>
    )
  };