let emailMenu           = document.querySelector('.navbar-email');
let desktopMenu         = document.querySelector('.desktop-menu');
let iconMenuMobile      = document.querySelector('.menu');
let mobileMenu          = document.querySelector('.mobile-menu');
let iconShopping        = document.querySelector('.navbar-shopping-cart');
let asideShopping       = document.querySelector('.product-detail');
let divcardscontainer   = document.querySelector('.cards-container')
let productDetailLeft   = document.querySelector('.product-detail-left')
let productDetailClose  = document.querySelector('.product-detail-close')
let myordercontentContainer = document.querySelector('.my-order-content')
let countCarrito        = document.querySelector('.navbar-shopping-cart div')
let totalCarrito        = document.querySelector('.total')
let modal               = document.querySelector('.modal')
let cerrarModal         = document.querySelector('.boton-modal')
let productImageInfor   = document.querySelector('.product-detail-left > img:nth-child(2)')
let labelPriceInfo      = document.querySelector('.product-info-left p:nth-child(1)')
let labelNameInfo       = document.querySelector('.product-info-left p:nth-child(2)')
let labelInforInfo      = document.querySelector('.product-info-left p:nth-child(3)')
let buttonInfo          = document.querySelector('.add-to-cart-button')
let productosEnCarrito  = []
let productoACarrito    = []

countCarrito.innerText = document.querySelectorAll('.shopping-cart').length
totalCarrito.innerText = '$0.00'

emailMenu.addEventListener('click', toggleMenu);
iconMenuMobile.addEventListener('click', toggleMenuMobile);
iconShopping.addEventListener('click', toggleAsideShopping)
productDetailClose.addEventListener('click',closeProductDetail)
buttonInfo.addEventListener('click', butonClick)
cerrarModal.addEventListener('click', closeModal)


function butonClick(){
    agregarCarrito(productoACarrito)
}
function toggleMenu(){
    productDetailLeft.classList.add('inactive')
    asideShopping.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMenuMobile(){
    productDetailLeft.classList.add('inactive')
    asideShopping.classList.add('inactive');
    mobileMenu.classList.toggle('inactive')
    
}

function toggleAsideShopping(){
    productDetailLeft.classList.add('inactive')
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive')
    asideShopping.classList.toggle('inactive')
}

function openProductDetail(){
    asideShopping.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailLeft.classList.remove('inactive')
}

function closeProductDetail(){
    productoACarrito = []
    asideShopping.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailLeft.classList.add('inactive')
}

function verificarProducto(nameProduct){
    return productosEnCarrito.some(function(articulo){
        return articulo === nameProduct
    })
}

function closeModal(){
    modal.style.display = 'none'
}

let productList = []
productList.push({
    name:"Bike",
    price:180,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    desc: 'Cycling helps improve a runners performance by improving fitness, endurance, and endurance without damaging the leg muscles. Its also a great low-impact cardio workout, and adding it to your weekly training regimen will help you get more done with less stress on your body.'
})
productList.push({
    name:"Control PS5",
    price:80,
    image: "https://images.pexels.com/photos/11591876/pexels-photo-11591876.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: 'The DualSense Wireless Controller for PS5 offers immersive haptic feedback2, dynamic adaptive triggers and a built-in microphone, all in an iconic design.'
})
productList.push({
    name:"Earphones Samsung",
    price:70,
    image:"https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: 'They sound similar to the wired headsets that the latest galaxy brings. They are quite decent AKGs, if you have not tried them, they sound good, without reaching the level of top brands at premium prices (as usual).'
})
productList.push({
    name:"Laptop mackbookPro",
    price:549,
    image:"https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: 'This 2021 MacBook Pro 16" base model features an M1 Pro chip with a 10-core CPU, 16-core GPU, 16GB of unified memory, and a 512GB SSD of storage. If you need more power, you can upgrade to a model with the new M1 Max chip.'
})
productList.push({
    name:"Iphone13proMax",
    price:850,
    image:"https://images.pexels.com/photos/4071887/pexels-photo-4071887.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: 'The iPhone with the best battery is the iPhone 13 Pro Max, Apples most advanced and fastest device with the A15 Bionic chip and a very powerful battery capable of lasting up to 28 hours playing videos, 95 hours of audio and up to 25 hours of playback streaming.'
})
productList.push({
    name:"Alexa",
    price:246,
    image:"https://images.pexels.com/photos/4790255/pexels-photo-4790255.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: 'You can streamline a meeting room with an Alexa-enabled device, such as the Echo Dot, and use the assistant to control popular room and video conferencing systems, including Cisco TelePresence Systems, Cisco Webex Rooms Kit, Polycom Group Series, Zoom Rooms, and Crestron 3-Series.'
})
productList.push({
    name:"Nike shoes",
    price:60,
    image:"https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: 'Nike tennis shoes are sports shoes, mostly ultralight that serve to facilitate the users movement in physical activities such as playing sports or in daily use. The main advantage they provide you is the comfort they provide when used.'
})

function renderListProduct(productList){
    for (const product of productList) {
        let divproductCard = document.createElement('div')
        let imgproductcard = document.createElement('img')
        let divproductinfo = document.createElement('div')
        let divdivproductinfo = document.createElement('div')
        let pprice = document.createElement('p')
        let pname = document.createElement('p')
        let figureproductinfo = document.createElement('figure')
        let imgproductinfo = document.createElement('img')
        divproductCard.classList.add('product-card')
        imgproductcard.setAttribute('src', product.image)
        divproductinfo.classList.add('product-info')
        pprice.innerText ='$' + product.price
        pname.innerText = product.name
        imgproductinfo.setAttribute('src', './icons/icon/bt_add_to_cart.svg')
        
        figureproductinfo.appendChild(imgproductinfo)
        divdivproductinfo.appendChild(pprice)
        divdivproductinfo.appendChild(pname)

        divproductinfo.appendChild(divdivproductinfo)
        divproductinfo.appendChild(figureproductinfo)

        divproductCard.appendChild(imgproductcard)
        divproductCard.appendChild(divproductinfo)

        divcardscontainer.appendChild(divproductCard)

        imgproductcard.addEventListener('click', function(){
            mostrarInfoProduct(product.image, product.price, product.name, product.desc)
            openProductDetail()
        });


        imgproductinfo.addEventListener('click', function(){
            let productoAgregado = []
            productoAgregado.push({
                name: product.name,
                price: product.price,
                image: product.image
            })
            agregarCarrito(productoAgregado)
        })
    }
}

/* Funcion para agregar productos al carrito */
function agregarCarrito(producto){
    if(verificarProducto(producto[0].name)){
        productoACarrito= []
        return modal.style.display = 'grid'
    }

    /* Creacion de elemtentos HTML */
    let divShoppingCart = document.createElement('div')
    let figureShoppingCart = document.createElement('figure')
    let imgfigureShoppingCart = document.createElement('img')
    let pnameShoppingCart = document.createElement('p')
    let ppriceShoppingCart = document.createElement('p')
    let imgcloseShoppingCart = document.createElement('img')

    /* Se agrega contenido a cada uno de los elementos */
    divShoppingCart.classList.add('shopping-cart')
    imgfigureShoppingCart.setAttribute('src', producto[0].image)
    pnameShoppingCart.innerText = producto[0].name
    ppriceShoppingCart.innerText ='$' + producto[0].price
    imgcloseShoppingCart.setAttribute('src','./icons/icon/icon_close.png')
    imgcloseShoppingCart.classList.add('removeList')

    /* Se insertan los documentos */
    figureShoppingCart.appendChild(imgfigureShoppingCart)
    divShoppingCart.appendChild(figureShoppingCart)
    divShoppingCart.appendChild(pnameShoppingCart)
    divShoppingCart.appendChild(ppriceShoppingCart)
    divShoppingCart.appendChild(imgcloseShoppingCart)
    myordercontentContainer.appendChild (divShoppingCart)

    /* Se agregan la cantidad de productos ademas de la suma de precios */
    countCarrito.innerText = document.querySelectorAll('.shopping-cart').length
    totalCarrito.innerText = '$' + (Number(totalCarrito.innerText.substring(1)) + Number(producto[0].price))
    productosEnCarrito.push(producto[0].name)
    
    /* Funcion para quitar productos del carrito */
    imgcloseShoppingCart.addEventListener('click', function(){
        divShoppingCart.remove()
        countCarrito.innerText = document.querySelectorAll('.shopping-cart').length
        totalCarrito.innerText = '$' + (Number(totalCarrito.innerText.substring(1)) - Number(producto[0].price))
        productosEnCarrito.splice(productosEnCarrito.indexOf(producto[0].name),1)
    }) 

}

function mostrarInfoProduct(imagen, precio, nombre, descripcion){
    productImageInfor.setAttribute('src', imagen)
    labelPriceInfo.innerText = '$' + precio
    labelNameInfo.innerText = nombre
    labelInforInfo.innerText = descripcion
    productoACarrito = []
    productoACarrito.push({
        name: nombre,
        price: precio,
        image: imagen
    })
}

renderListProduct(productList);