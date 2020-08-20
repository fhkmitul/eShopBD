import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';


export class Navbar extends Component {
    render() {
        return (
            <NavWraper className="navbar navbar-expend-sm navbar-dark px-sm-5">
                {/* 
                    https://www.iconfinder.com/icons/1243689/call_phone_icon
                    Creative Commons (Attribution 3.0 Unported);
                    https://www.iconfinder.com/Makoto_msk 
                */}
                <Link to="/">
                    <img src={logo} alt="eShop" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5 mr-2">
                        <Link to="/" className="nav-link">Product</Link>

                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus"/>
                        </span>
                        my cart
                    </ButtonContainer>
                </Link>
            </NavWraper>
        )
    }
}

const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.1rem solid var(--mainInfo);
    color: var(--mainInfo);
    border-radious: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover{
        background: var(--lightBlue);
        color: var(--newWhite);
    }
    &:focous{
        outline: none;
    }
`
const NavWraper = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color: var(--mainwhite) !importent;
        font-size:1.3rem;
        text-transform: capitalize !importent;
        border: .01rem transparent;
        padding: 0 .5rem;
    }
    .nav-link:hover{
        transform: scale(1.025);
    }
`

export default Navbar
