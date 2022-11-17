list = document.querySelectorAll('.np');
warn = document.querySelector('.warn');
list.forEach(element => {
    element.addEventListener('click',  function(){
        warn.classList.add('add');
        setInterval(back, 1500)
    })
});
function back(){
    warn.classList.remove('add');
}