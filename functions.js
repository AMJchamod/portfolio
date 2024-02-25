const navmenu = document.getElementById('navmenu');
const      navtoggle =document.getElementById('navtoggle');
const      navclose = document.getElementById('navclose');

     if(navtoggle){
       navtoggle.addEventListener('click', () =>{
        navmenu.classList.add('show-menu')
      })
     } 

     if(navclose){
      navclose.addEventListener('click',() =>{
        navmenu.classList.remove('show-menu')
      })
     }
    
     /*remove menu mobile*/
     const navlink =document.querySelectorAll('.navlink');
     const linkAction = () => {
       const navmenu =document.getElementById('navmenu');
        navmenu.classList.remove('show-menu');
     }
     navlink.forEach(n =>n.addEventListener('click',linkAction));