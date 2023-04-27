import React, { createContext, useState, useEffect } from 'react'
// import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);

export const ShopContextProvider=(props)=>{
    // const [ cartItems , setCartItems ] = useState(getDefaultCart());
    const [ products , setProducts ] = useState([]);
    const [ fetchedProducts, setFetchedProducts ] = useState([]);

    const fetchData=async()=>{
        const api = await fetch(`https://fakestoreapi.com/products`);
        const data = await api.json();
        console.log(data);
        setFetchedProducts(data);
        };
    

    useEffect(()=>{
        fetchData();
    },[])

    useEffect(()=>{
        setProducts(fetchedProducts)
    },[fetchedProducts])

    useEffect(() => {
        // Store fetchedProducts in localStorage
        localStorage.setItem('fetchedProducts', JSON.stringify(fetchedProducts));
        setProducts(fetchedProducts);
      }, [fetchedProducts]);
      
    const getDefaultCart=()=>{
        let cart = {};
        for ( let i=0 ; i < products.length ; i++){
            cart[i]=0;
        }
        return cart;
    }


    const [ cartItems , setCartItems ] = useState(() => {
        // retrieve cart data from localStorage
        const cartData = JSON.parse(localStorage.getItem('cart')) || getDefaultCart();
        return cartData;
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);


    const getTotalCartAmount=()=>{
        let totalAmount = 0;
        for (const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = products.find((product)=>product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
                // console.log("price :" + itemInfo)
            }
        }
        return totalAmount;
    }

    const getTotalCartItems=()=>{
        let totalItems = 0;
        for (const item in cartItems){
                totalItems += cartItems[item];
        }
        return totalItems;
    }

    const addItem=(itemID)=>{
        setCartItems((prev)=>({...prev, [itemID] : prev[itemID] +1}))
    }

    const removeItem=(itemID)=>{
        setCartItems((prev)=>({...prev, [itemID] : prev[itemID] -1})) 
    }

    const clearItems=()=>{
        let clearItemCount={};
        for(const item in cartItems){
            clearItemCount[item] = 0
        }
        setCartItems(clearItemCount);
    }

    const typeCartItem=(newAmount, itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]:newAmount }));
    }

    const contextValue = { 
        products,
        cartItems, 
        addItem , 
        removeItem , 
        clearItems, 
        typeCartItem,
        getTotalCartAmount,
        getTotalCartItems
     };
    return(
        <ShopContext.Provider value={contextValue}> {props.children} </ShopContext.Provider>
    )
}