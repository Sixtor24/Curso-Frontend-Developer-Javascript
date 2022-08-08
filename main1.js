const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.burguerMenu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.shopping-cart-detail');
const darken = document.querySelector('.darken');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('.product-detail');
const productDetailClose = document.querySelector('.product-detail-close');
const shoppingCartTitle = document.querySelector('.title-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleCartAside);
productDetailClose.addEventListener('click', closeProductDetail);
darken.addEventListener('click', closeMenus);
shoppingCartTitle.addEventListener('click', toggleCartAside)

function toggleDesktopMenu() 
{
    mobileMenu.classList.add('inactive');
    aside.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');

    const isMenuOpen = !desktopMenu.classList.contains('inactive');

    if(isMenuOpen)
        darken.classList.remove('inactive');
    else
        darken.classList.add('inactive');
}

function toggleMobileMenu()
{
    desktopMenu.classList.add('inactive');
    aside.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');

    const isMenuOpen = !mobileMenu.classList.contains('inactive');

    if(isMenuOpen)
        darken.classList.remove('inactive');
    else
        darken.classList.add('inactive');
}

function toggleCartAside()
{
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    aside.classList.toggle('inactive');
    
    const isMenuOpen = !aside.classList.contains('inactive');

    if(isMenuOpen)
        darken.classList.remove('inactive');
    else
        darken.classList.add('inactive');
}

function openProductDetail()
{
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    aside.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
    darken.classList.remove('inactive');
}

function closeProductDetail()
{
    productDetailContainer.classList.add('inactive');
    darken.classList.add('inactive');
}

function closeMenus()
{
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isCartAsideOpen = !aside.classList.contains('inactive');
    const isProductDetailOpen = !productDetailContainer.classList.contains('inactive');

    if (isDesktopMenuOpen)
    {
        toggleDesktopMenu();
        return;
    }
    if (isMobileMenuOpen)
    {
        toggleMobileMenu();
        return;
    }
    if (isCartAsideOpen)
    {
        toggleCartAside();
        return;
    }
    if (isProductDetailOpen)
    {
        closeProductDetail();
        return;
    }
}

const productList = [];

for(let i = 0; i < 1; i++)
{
    productList.push(
        {
            name: 'Bike',
            price: 115.00,
            image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        }
    );
    productList.push(
        {
            name: 'Control PS5',
            price: 65.00,
            image: 'https://images.pexels.com/photos/11591876/pexels-photo-11591876.jpeg?auto=compress&cs=tinysrgb&w=600',
        }
    );
    productList.push(
        {
            name: 'Laptop mackbookPro',
            price: 549.00,
            image: 'https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?auto=compress&cs=tinysrgb&w=600',
        }
    );
    productList.push(
        {
            name: 'Iphone13proMax',
            price: 850.00,
            image: 'https://images.pexels.com/photos/4071887/pexels-photo-4071887.jpeg?auto=compress&cs=tinysrgb&w=600',
        }
    );
    productList.push(
        {
            name: 'Alexa',
            price: 356.00,
            image: 'https://images.pexels.com/photos/4790255/pexels-photo-4790255.jpeg?auto=compress&cs=tinysrgb&w=600',
        }
    );
    productList.push(
        {
            name: 'Earphones Samsung',
            price: 60.00,
            image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=600',
        }
    );
}

renderProducts(productList);

function renderProducts(arr)
{
    for(product of arr)
    {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        img.addEventListener('click', openProductDetail);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoData = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        const cartFigure = document.createElement('figure');
        const cartImg = document.createElement('img');
        cartImg.setAttribute('src', './icons/icon/bt_add_to_cart.svg');

        cartFigure.appendChild(cartImg);
        productInfoData.appendChild(productPrice);
        productInfoData.appendChild(productName);
        productInfo.appendChild(productInfoData);
        productInfo.appendChild(cartFigure);
        productCard.appendChild(img);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}