const search = document.getElementById('search');
const animtext = document.querySelectorAll('.toro');
search.addEventListener('keyup', function(){
    animtext.forEach(element => {
        element.style.transform = 'scale(0)'
        let se = search.value.toLowerCase();
        if(element.textContent.toLowerCase().includes(se)){
            console.log("element.parentNode");
            element.style.transform = 'scale(1)'

        }
    });
})