// function load() {
//     window.location.href = '#myPage';
 
// }

var tl = gsap.timeline();
// tl.from('.navbar-brand',{
//     y:-100,
//     duration:0.5,
//     stagger:5,
// })

gsap.from('.target ',{
    x:-100,
    opacity:0,
    duration:0.4,
    stagger:0.2
})

    tl.from('.head SPAN',{
        y:100,
        opacity:0,
        duration:0.1,
        stagger:0.1
    })
    
    // gsap.from('.content-download',{
    //     opacity:0,
    //     // y:100,
    //     scale:0.9,
    //     duration:0.8,
    //     stagger:1
    // })

    const menu = document.querySelector('#sideMenu')
    const openMenu= ()=>{
        menu.style.transform ='translateX(-16rem)'
    }
    const closeMenu= ()=>{
        menu.style.transform ='translateX(16rem)'
    }

