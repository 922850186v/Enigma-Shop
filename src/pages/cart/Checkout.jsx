import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Checkout = () => {

    const navigate = useNavigate();
  return (
    <Greet>
        <h1>Thanks for Shopping with us!</h1>
        <button className='btn btn-primary m-4' onClick={()=>navigate('/')}>Back to Shopping</button>
    </Greet>
  )
}

const Greet = styled.div`
    height:50vh;
    display:grid;
    justify-content:center;
    align-items:center;
    h1{
        text-align:center;
    }
`
export default Checkout