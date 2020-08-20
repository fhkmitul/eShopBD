import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


export class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {id, company, img, price, title, inCart, info} = value.detailProduct;
                    return(
                        <div className="container py-3">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-blue my-3">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-2 text-capitalize">
                                    <img src={img} className="img-fluid" alt="product"/>
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-2 text-capitalize">
                                    <h1>model: {title}</h1>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by: {company}
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            price: <span> $</span> {price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        product info:
                                    </p>
                                    <p className="lead">
                                        {info}
                                    </p>
                                    <div className="mx-auto text-center">
                                        <Link to="/">
                                            <ButtonContainer>back to product</ButtonContainer>
                                        </Link>
                                        <ButtonContainer cart 
                                        disabled={inCart?true:false} 
                                        onClick={()=>{
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}>
                                            {inCart ? "inCart" : "add to cart"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}

const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.1rem solid var(--mainSuccess);
    border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--mainSuccess)"};
    color: ${props => props.cart ? "var(--mainYellow)" : "var(--mainSuccess)"};
    border-radious: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover{
        background: ${props => props.cart ? "var(--mainYellow)" : "var(--lightSuccess)"};
        color: var(--newWhite);
    }
    &:focous{
        outline: none;
    }
`

export default Details
