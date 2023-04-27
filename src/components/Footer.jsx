import React from 'react'
import styled from 'styled-components';


const Footer = () => {
    const date = new Date();
  return (
    <Foot>
            <span >
            &copy; {date.getFullYear()} Enigma Shop. All rights reserved.
            </span>
    </Foot>
  )
}

const Foot = styled.div`
    /* background-color: #f0f0f0; */
    padding: 2rem auto;
    text-align: center;
    justify-content: center;
    position: fixed;
    top: 100%;
    bottom: 0;
    width: 100%;
    height: 50px;
`

export default Footer