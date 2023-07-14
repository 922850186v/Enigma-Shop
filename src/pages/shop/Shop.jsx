import React, { useContext } from 'react'
import styled from 'styled-components'
// import {PRODUCTS} from'../../products'
import { ShopContext } from '../../context/ShopContext';


const Shop = () => {

    const { products, cartItems, addItem, clearItems } = useContext(ShopContext);

  return (
    <Wrapper>
        
        <Heading className='d-flex justify-content-center'>
        <h3 >My Today Items</h3>
        </Heading>
        <Clear>
        <button className='btn btn-danger' onClick={()=>clearItems()} >Clear Cart</button>
        </Clear>
        <Product>
        {products.length !== 0 ? (
            products.map((item) => {
                
                const cartItemsAmount = cartItems[item.id];
                const btnClass = cartItemsAmount > 0 ? 'btn btn-primary' : 'btn btn-outline-primary';
                return (
                <Items key={item.id}>
                    <p className='h4'>{item.title}</p>
                    <img src={item.image} alt={item.title} />
                    
                    <Button>
                    <p className='h6'>Price : ${item.price.toLocaleString(undefined, { minimumFractionDigits:2, maximumFractionDigits:2 })}</p>
                    <button className={btnClass} onClick={() => addItem(item.id)}>
                    Add to Cart {cartItemsAmount > 0 && `(${cartItemsAmount})`}
                    </button>
                    </Button>
                </Items>
                );
            })
            ) : (
            <h2>Loading...</h2>
            )}
        </Product>


    </Wrapper>
  )
}

const Wrapper =styled.div`
        width:90%;
        margin:2rem auto;

`
const Heading= styled.div`
    margin-top:2rem;
    gap:10rem;
    button{
        
    }
`

const Clear = styled.div`
    float:right;
    margin-right:2%;
`
const Product = styled.div`
    display:flex;
    flex-wrap:wrap;
    margin:3rem 0;
    justify-content:space-around;

    img{
        margin:1rem auto;
        width:50%;
        aspect-ratio: 1/1;
    }

    button{
        margin-top:2rem;
    }

`
const Button = styled.div`
    margin-top: auto;
    padding-bottom: 1rem;
`
const Items = styled.div`
    padding:1rem;
    border-radius: 10px;
    border:1px solid black;
    margin: 1rem 0;
    width:22.5%;
    background:white;
    display: flex;
    flex-direction: column;
    button{
        position: relative;
        justify-content: flex-end;
        bottom: 0;
    }
    :hover{
        transform:translateY(-1px);
        transition:0.2s ease;
        box-shadow: 0 10px 10px rgba(65, 65, 65, 0.8);
    }
`
export default Shop