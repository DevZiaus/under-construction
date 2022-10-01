const navAnimation = () => {
    const icon = document.querySelector('.nav-icon');
    const nav = document.querySelector('.nav');
    const navItems = document.querySelectorAll('.nav-item');
    
    //Toggle Nav
    icon.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');

        //Animate Items
        navItems.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navItemAnimation 0.5s ease forwards ${index / 5 + .2}s`;
            }
            
        });

        //nav Icon Animation
        icon.classList.toggle('toggle');
    });

    
}

navAnimation();



