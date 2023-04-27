
export let PRODUCTS = [];

        fetch(`https://fakestoreapi.com/products`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            PRODUCTS = data;
        })
//     {
//         id: 1,
//         productName: "Iphone 12",
//         price : 799.00,
//         productImage: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14pro-202209?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1663611329492",
//     },
//     {
//         id: 2,
//         productName: "Cannon M50 Camera",
//         price : 699.00,
//         productImage: "https://m.media-amazon.com/images/I/71mTLn1iYML.__AC_SX300_SY300_QL70_FMwebp_.jpg",
//     },
//     {
//         id: 3,
//         productName: "MacBook Pro 2022",
//         price : 1399.00,
//         productImage: "https://m.media-amazon.com/images/I/61L5QgPvgqL._AC_SX385_.jpg",
//     },
//     {
//         id: 4,
//         productName: "Xbox 5",
//         price : 399.00,
//         productImage: "https://m.media-amazon.com/images/I/31TkelshwML._SY300_SX300_QL70_FMwebp_.jpg",
//     },
//     {
//         id: 5,
//         productName: "Samsung Galaxy S23 Ultra",
//         price : 1299.00,
//         productImage: "https://s.yimg.com/uu/api/res/1.2/PkgQ0VI9c1y248K_pZpYqg--~B/Zmk9ZmlsbDtoPTQ5Mjt3PTg3NTthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-01/ff702630-9375-11ed-b74d-f8057fb78cf4.cf.webp",
//     },
//     {
//         id: 6,
//         productName: "Wireless Bluetooth Headphones",
//         price : 299.00,
//         productImage: "https://cdn.shopify.com/s/files/1/1676/7297/products/Main-Image_5dd17660-d566-4297-bc2e-e43de833b2fc_1400x.jpg?v=1613028178",
//     },
//     {
//         id: 7,
//         productName: "Lenovo Desktop Ryzen",
//         price : 499.00,
//         productImage: "https://i.ebayimg.com/images/g/vvwAAOSwj5RkBtQV/s-l500.jpg",
//     },
//     {
//         id: 8,
//         productName: "Men's Muscle T-Shirt",
//         price : 29.00,
//         productImage: "https://i.ebayimg.com/images/g/QioAAOSwWDZhoOP5/s-l500.jpg",
//     },
// ];