import React, { useContext } from 'react'
// import {PRODUCTS} from '../../products';
import CartItem from './CartItem';
import { ShopContext } from '../../context/ShopContext'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Cart = () => {

    const { products, cartItems , getTotalCartAmount, getTotalCartItems, clearItems } = useContext(ShopContext);

    const totalAmount = getTotalCartAmount();
    const totalItems = getTotalCartItems();
    const navigate = useNavigate();

    const checkout=()=>{
        clearItems();
        navigate('/checkout');
    }

    const clearCart=()=>{
        clearItems();
        navigate('/');
    }
    // const cartMessege = (cartItems===0 ? 'Your Cart is Empty!' : 'Your Cart1');

  return (
    <Wrapper>
        {totalItems > 0 ? 
        <Product>
        <Heading>
        <h1>Your Cart</h1>
        </Heading>
        <Items key={products.id}>
        <Item >
            {products.map((item)=>{
                if (cartItems[item.id] !== 0){
                    return(
                        <CartItem data={item} />
                    )
                }
                return null;
            })}
            </Item>
        <Totals>
            <h3>Amount to Pay</h3>
            <button className='btn btn-outline-danger m-1' onClick={clearCart}>Clear Cart</button><br></br>
            <table className='table table-hover'>
                <thead>
                <tr>
                    <th>Total Items</th>
                    <th>Total Amount</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{totalItems}</td>
                        <td>${totalAmount.toLocaleString(undefined, { minimumFractionDigits:2, maximumFractionDigits:2 })}</td>
                    </tr>

                </tbody>
            </table>
            <Buttons>
                
                <button className='btn btn-primary m-4' onClick={()=>navigate('/')}>Continue Shopping</button>
                <button className='btn btn-success m-3' onClick={checkout}>Checkout</button>
            </Buttons>
        </Totals>
        </Items>
        </Product>
        :
        <>
        <Heading>
        <div className='alert alert-warning'role='alert'>
        <h1>Your Cart is Empty</h1>
        </div>
        <button className='btn btn-primary m-4' onClick={()=>navigate('/')}>Continue Shopping</button>
        </Heading>
        </>
        }
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: grid;
`
const Heading = styled.div`
    margin:1rem auto;
    display: grid;
    justify-content: center;
`
const Product = styled.div`
    margin: 3rem 0;
    display: grid;
`

const Item = styled.div`
    width: 75%;
`

const Items = styled.div`
    display: flex;

`
const Totals = styled.div`
    align-self: center;
    justify-self: end;
    justify-content: flex-start;
    font-size:14pt;
    width:30%;
    margin: 1rem 0;
    margin-right: 5%;
    border: 1px solid black;
    border-radius: 10px;
    height: 300px fit-content;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    top: 26%;
    right: 0;
    position: fixed;
    background-color: #f9f9f9;

    h3{
        margin-bottom: 1rem ;
    }
    /* :hover{
        transform: translateY(-2px);
        transition: 0.2s ease;
        box-shadow: 0 5px 5px rgba(65, 65, 65, 0.8);
    } */
`
const Buttons = styled.div`
    button:hover{
        transform: translateY(-2px);
        transition: 0.2s ease;
    }
`
export default Cart