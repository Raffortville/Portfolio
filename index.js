
// effect onLoad //

const backGround = document.querySelector('.backGround');
const titre = document.querySelector('.titreNom')
const ball0 = document.querySelector('.ballon');
const ball1 = document.querySelector('.ballon1');
const ball2 = document.querySelector('.ballon2');
const souTitre = document.querySelectorAll(".souTitre");
const line = document.querySelector('.line')
const round = document.querySelector('.round')
const headerLinks = document.querySelectorAll(".headerNavLink")

window.addEventListener('load',() => {

    setTimeout(() => {

        addEffectClass(line,"lineEffect")
        addEffectClass(round,"roundEffect")
 
    }, 1000);

    setTimeout(() => {

        addEffectClass(ball0,"effect");
        addEffectClass(ball1,"effect");
        addEffectClass(ball2,"effect");
      
        addEffectClass(round,'borderRoundEffect')

        souTitre.forEach(elmt => addEffectClass(elmt,'effectScale'))

    }, 2000);
 
    addEffectClass(backGround,"backGroundTransform");
    infiniteEffect(titre,"titreNomEffet",1800,2000);
    
});


const infiniteEffect = (elmt,classEffect,removeTime,addTime) => {

    setInterval(() => {

        elmt.classList.add(classEffect)
        
    }, addTime);

    setInterval(() => {

        elmt.classList.remove(classEffect)
        
    }, removeTime);

}
    
const addEffectClass = (elmt,classEffect) => elmt.classList.add(classEffect)

//  effet  burger & modal nav menu display  ////

const burger = document.getElementById('burger')
const burger1 = document.getElementById('burger1')
const burger2 = document.getElementById('burger2')
const burger3 = document.getElementById('burger3')
const navMenu = document.getElementById('navMenu')
const navLinks = document.querySelectorAll('.navLink')
const titreNom = document.getElementById("titreNom")

let burgerEffet = false

burger.addEventListener("click", (e) => {effetMenuBurger()})

titreNom.addEventListener("click", (e) => effetMenuBurger())


const effetMenuBurger = () => {

    if(!burgerEffet){

        burger1.classList.add('burgerLine1Effet')
        burger2.classList.add('burgerLine2Effet')
        burger3.classList.add('burgerLine3Effet')

        addEffectClass(burger1,'effect')
    
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

const links = document.querySelectorAll("[data-link]")
const titreAbout = document.querySelectorAll('.titreAbout')
const lineMain = document.querySelector('.lineMain')

titreAbout.forEach(titre => titre.addEventListener('click', (e)=> { 

    let currentPage = titre.id; 
    effetMenuBurger()
    markAnchorNavMenu(currentPage)

    addEffectClass(lineMain,"lineEffect")
    
}))

links.forEach(link => {

    link.addEventListener('click', (e) => {

       let currentPage  = e.target.innerHTML
        markAnchorNavMenu(currentPage)
    })
})


const markAnchorNavMenu = (currentPage) => {

    links.forEach(link => {link.innerHTML === currentPage ? link.style.color='rgb(00, 255, 130) ': link.style.color="inherit" })
}











