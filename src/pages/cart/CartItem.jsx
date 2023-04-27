import React, { useContext} from 'react'
import styled from 'styled-components';
import { ShopContext } from '../../context/ShopContext'

const CartItem = (props) => {

    const { id, title, image , price } = props.data;
    const { cartItems, addItem, removeItem, typeCartItem } = useContext(ShopContext);

    const btnName = ( cartItems[id] < 2 ? 'Del' : '-' );
    // const btnClass = ( cartItems[id] < 2 ? 'btn btn-danger m-1' : '' );
  return (
    <Wrapper>
        <Item key={id}>
            <Image >
            <img src={image} alt={title}/>
            </Image>
            <Details>
                <p><b>{title} </b></p>
                <p>Price : <u>${price.toLocaleString(undefined, { minimumFractionDigits:2, maximumFractionDigits:2 })}</u></p>
            </Details>
            <Count>
                <button onClick={()=>removeItem(id)} >{btnName} </button>
                <input type="number" value={cartItems[id]} onChange={e=>{typeCartItem(Number(e.target.value), id)}} />
                <button onClick={()=>addItem(id)} >+</button>
            </Count>
        </Item>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display:flex;
    max-width: 80%;
    margin: auto;
`
const Image = styled.div`
    width:40%;
    img{
        width:50%;
        aspect-ratio: 1;
    }
`
const Item=styled.div`
    margin: 1rem 0;
    display:flex;
    align-items:center;
    border:1px solid black;
    border-radius: 150px;
    padding:2rem 1rem;
    max-width:90%;
    font-size:13pt;
    background:white;

    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); */
    :hover{
        transform:translateY(-2px);
        transition:0.2s;
        box-shadow: 0 10px 10px rgba(65, 65, 65, 0.8);
    }
`

const Details = styled.div`
    width:40%;
`
const Count = styled.div`
    max-width:60%;
    margin: 1rem auto;
    input{
        /* margin-top:1rem; */
        max-width:25%;
        text-align:center;
        height: 2rem;
        font-weight: bold;
    }

    button{
        margin: 0 0.5rem;
        width: 3rem;
        font-weight: bold;
    }

    button:hover{
            transform: translateY(-1px);
            transition: 0.2s;
            box-shadow: 0 5px 5px rgba(65, 65, 65, 0.8);
        }
`
export default CartItem