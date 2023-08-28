const navContainer = document.querySelector('.nav-container'),
      navMenuBtn  = document.querySelector('.nav-menu-btn'),
      body = document.querySelector('body'),
      navbar = document.querySelector('.navbar'),
      navbarAlt = document.querySelector('.navbar-alt'),
      navLinks = document.querySelectorAll('.navbar .nav-container nav a:not(.no-scroll-spy)'),
      sections = document.querySelectorAll('section');
      
navMenuBtn.onclick = ()=>{
    navContainer.classList.toggle('active');
    navMenuBtn.classList.toggle('active');
    body.classList.toggle('scroll-disabled');
}
window.onscroll = ()=>{
    navContainer.classList.remove('active');
    navMenuBtn.classList.remove('active');
    body.classList.remove('scroll-disabled');
    if(this.scrollY > 150){
        navbar.classList.add('active');
        navbarAlt.classList.add('active');
    }else{
        navbar.classList.remove('active');
        navbarAlt.classList.remove('active');
    }
    //custom scroll spy
    sections.forEach(section =>{
        let top = window.scrollY;
        let offset = section.offsetTop;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if(top >= offset - 200 && top < offset + height){
            navLinks.forEach(link =>{
                link.classList.remove('active');
                navLinks.forEach(a =>{
                    let href = a.getAttribute('href');
                    if(href == `#${id}`){
                        a.classList.add('active');
                    }
                })
            })
        }
    })
}

navLinks.forEach(link =>{
    link.onclick =(e)=>{
        e.preventDefault();
        let href = link.getAttribute('href');
        let offset = document.querySelector(href).offsetTop - 80;
        window.scrollTo(0 , offset);
    }
})