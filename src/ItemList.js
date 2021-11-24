

const  productos = [

    {id:1 , nombre: 'pesas1', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBUQiPXwNP9Sv4HdezxMn158DFHeHmvLH2WQ&usqp=CAU', precio: 100},
    {id:2 , nombre: 'pesas2', img:'https://home.ripley.com.pe/Attachment/WOP_5/2022279723853/2022279723853-3.jpg' , precio: 100},
    {id:3 , nombre: 'pesas3', img:'https://previews.123rf.com/images/kornienko/kornienko1410/kornienko141000011/32919879-pesas-m%C3%A1s-de-fondo-blanco-con-trazado-de-recorte.jpg',precio: 100},
    {id:4 , nombre: 'pesas4', img:'https://home.ripley.com.pe/Attachment/WOP_5/2022279723853/2022279723853-3.jpg', precio: 100},
    {id:5 , nombre: 'pesas5', img:'https://home.ripley.com.pe/Attachment/WOP_5/2022279723853/2022279723853-3.jpg', precio: 100},
    {id:6 , nombre: 'pesas6', img:'https://home.ripley.com.pe/Attachment/WOP_5/2022279723853/2022279723853-3.jpg', precio: 100}
   
   ]
   
   
   export  const getProductos = new Promise((aceptado, rechazado) =>{
     
     setTimeout(() =>{
       aceptado(productos)
     }, 3000)
   })
   