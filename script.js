const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

/* ipad screen navbar open event*/
if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

/* ipad screen navbar close event*/
if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}



  
