const hamburger = document.querySelector('.hamburger');
const times = document.querySelector('.times');
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click',function(){
    mobileNav.classList.add('open')

});

times.addEventListener('click',function(){
    mobileNav.classList.remove('open')
});


document.querySelector('.btn2').onclick= function(){
    alert(`Coming Soon!`)

};
