
/*  Navigation onclick Seitenleiste ON  */

const menuOn = document.querySelector('.menuOn')

menuOn.addEventListener('click', ()=>{
  let navUlOn = document.querySelector('.navUlOn')
  navUlOn.style.display = 'block'
  let overlay = document.querySelector('.overlay')
  overlay.style.display = 'block'
  navUlOn.style.zIndex = '+1'
})


/*  Navigation onclick Seitenleiste OFF  */

const menuOff = document.querySelector('.menuOff')
menuOff.addEventListener('click', ()=>{
  let navUlOn = document.querySelector('.navUlOn')
  navUlOn.style.display = 'none'
  let overlay = document.querySelector('.overlay')
  overlay.style.display = 'none'
})