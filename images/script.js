


  const sr = ScrollReveal ({
    distance: '65px' ,
    duration: 2600,
    delay: 450,
    reset: true
  });
  sr.reveal('.hero-text',{delay:200, origin:'left'});
  sr.reveal('.hero-img',{delay:600, origin:'right'});
 


    //js for nav bar scroll effect
    window.addEventListener("scroll", function(){
        var header = document.querySelector("header");
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    //JS for responsiveness of nav bar
    var menu = document.querySelector('.nav');
    var menuBtn = document.querySelector('.menu-btn');
    var closeBtn = document.querySelector('.close-btn');

    menuBtn.addEventListener("click", () => {
        menu.classList.add('active');
    });

    closeBtn.addEventListener("click", () => {
        menu.classList.remove('active');
    });
