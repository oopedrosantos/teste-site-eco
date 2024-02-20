/* CART */
const cart = document.getElementById('cart')
const itemsCart = document.getElementById('items-cart')

cart.addEventListener('click', function(){
    
    itemsCart.classList.toggle('active')
    
})

/* NAVBAR */

const menuBar = document.querySelector('#menu-bar')
const menu = document.querySelector('#nav-bar')
const containerMenu = document.querySelector('#container-menu')

menuBar.addEventListener('click', () => {
    menu.classList.toggle('active')
    if(menu.className == 'active'){
        menuBar.classList.toggle('active')
        containerMenu.classList.toggle('active')
    }else{
        menuBar.classList.remove('active')
        containerMenu.classList.remove('active')
    }
    
})

/* QTD ITEMS INPUT */

const buttonDec = document.querySelector('#dec')
const buttonInc = document.querySelector('#inc')
const valueCartItem = document.querySelector('#qntCart')

buttonInc.addEventListener('click', () => {
    valueCartItem.innerHTML++
})

buttonDec.addEventListener('click', () => {
    if(valueCartItem.innerHTML == '0'){
        return
    }else{
        valueCartItem.innerHTML--
    }
    
})