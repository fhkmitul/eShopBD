import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


export class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {value =>{
                    const {modalOpen, closeModal} = value;
                    const {img, title, price} = value.modalProduct;

                    if(!modalOpen){
                        return null;
                    }
                    else{
                        return(
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-8 col-md-6 col-lg-4 mx-auto text-center text-capitalize py-2">
                                            <h4>the item added to the cart</h4>
                                            <img src={img} className="img-fluid p-3" alt="product"/>
                                            <h4>{title}</h4>
                                            <h4 className="text-muted">price : $ {price}</h4>
                                            <Link to="/" >
                                                <ButtonContainer onClick={()=>closeModal()}>
                                                    continue shopping
                                                </ButtonContainer>
                                            </Link>
                                            <Link to="/cart" >
                                                <ButtonContainer cart onClick={()=>closeModal()}>
                                                    go to cart
                                                </ButtonContainer>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0, .2);
    display: flex;
    align-items: center;
    justify-content: center;
    #modal{
        background: var(--mainwhite);
    }
`
const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.1rem solid var(--mainInfo);
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

export default Modal
