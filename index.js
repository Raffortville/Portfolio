
//  effet  burger & modal nav menu displat  ////

const burger = document.getElementById('burger')
const burger1 = document.getElementById('burger1')
const burger2 = document.getElementById('burger2')
const burger3 = document.getElementById('burger3')
const navMenu = document.getElementById('navMenu')
const navLinks = document.querySelectorAll('.navLink')
const titreNom = document.getElementById("titreNom")
const titreAbout = document.getElementById('titreAbout')
let burgerEffet = false

burger.addEventListener("click", (e) => {effetMenuBurger()})

titreNom.addEventListener("click", (e) => effetMenuBurger())

titreAbout.addEventListener('click', () => effetMenuBurger())


const effetMenuBurger = () => {

    if(!burgerEffet){

        burger1.classList.add('burgerLine1Effet')
        burger2.classList.add('burgerLine2Effet')
        burger3.classList.add('burgerLine3Effet')
    
        navLinks.forEach(link => {link.classList.replace('navLink',"navLinkEffet")})
    
        navMenu.classList.add('marginTopNav')
    
        burgerEffet = true
    
        } else {
    
            burger1.classList.remove('burgerLine1Effet')
            burger2.classList.remove('burgerLine2Effet')
            burger3.classList.remove('burgerLine3Effet')
    
            navLinks.forEach(link => link.classList.replace('navLinkEffet','navLink'))
    
            navMenu.classList.remove("marginTopNav")
    
            burgerEffet = false
        }
}

// mark anchor nav menu //

const links = document.querySelectorAll(".removeLinkStyle")
let currentPage;

links.forEach(link => {

    link.addEventListener('click', (e) => {

        currentPage = e.target.innerHTML

       links.forEach(link => link.innerHTML === currentPage ? link.style.color='rgb(00, 255, 130) ': link.style.color="inherit" )
       
    })
})