import { ShoppingCart } from 'phosphor-react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
// import styled from 'styled-components'

const Navbar = () => {

  const { getTotalCartItems } = useContext(ShopContext);

  const totalItems = getTotalCartItems();
  // const totalAmount = getTotalCartAmount();
  // const searchItem = cartItems.filter()
  return (
    <div className='navbar bg-body-tertiary' >
      { totalItems !==0 ?
              <div className='container-fluid'>
              <Link to={'/'} className='navbar-brand m-3'><h2>Enigma Shop</h2></Link>
              {/* <Search class="d-flex flex-row mb-1" role="search">
                <input class="form-control " type="search" placeholder="Search Items Here" aria-label="Search" />
              </Search> */}
              <Link to={'/cart'} className='nav-item m-4'>
                  <ShoppingCart size={40} />
                  <span className='badge bg-primary '>{totalItems}</span><br></br>
                  {/* <span className='badge bg-secondary m-2'>$ {totalAmount.toLocaleString()}</span> */}
              </Link>
          </div>
          :
          <div className='container-fluid'>
            <Link to={'/'} className='navbar-brand m-3'><h2>Enigma Shop</h2></Link>
            {/* <Search class="d-flex flex-row mb-1" role="search">
              <input class="form-control " type="search" placeholder="Search Items Here" aria-label="Search" />
            </Search> */}
                <ShoppingCart size={40} style={{marginRight:'2.5rem' , color:'lightblue'}} />
                {/* <span className='badge bg-secondary m-2'>$ {totalAmount.toLocaleString()}</span> */}
          </div>
      }
    </div>
  )
}

// const Search = styled.div`
//   float:right;
// `
export default Navbar