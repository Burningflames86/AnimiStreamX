const list = document.querySelectorAll('.list');
const toro = document.querySelectorAll('.toro');
list.forEach(element => {
    element.addEventListener('click', pick);
});
function pick(){

    const gen = this.className.split(' ')[2];
    list.forEach(element => {
        element.style.borderColor = 'white';
        element.style.border = '0px white solid'


    });
    this.style.borderBottom = '2px darkmagenta solid'
    this.style.borderColor = 'darkmagenta';
    this.style.backgroundColor = 'red';
    this.style.backgroundblendmode = 'darken';
    toro.forEach(element => {
        g = element.className.split(' ');
        element.style.transform = 'scale(0)'
        
        g.forEach(element => {
            if(element == gen){

                required = document.getElementsByClassName(element);
                console.log(required);
                for (let index = 0; index < required.length; index++) {
                    if(required[index].className.split(' ')[0] == 'toro'){
                    console.log("Hola")
                    required[index].style.transform = 'scale(1)';}
                }
            }
        });
    });
}
