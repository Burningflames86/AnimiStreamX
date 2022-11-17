const img = document.querySelectorAll('.titles');
const lb = document.querySelector('.left');
const rb = document.querySelector('.right');
const text = document.querySelector('.text');
lb.addEventListener('click', change);
rb.addEventListener('click', changeprev);
i = 3;
j = 0;
console.log(img.length);
function change(){
    img.forEach(element => {
        element.classList.remove('.ha');
        element.style.transform = 'scale(0)';
    });
    img[i-1].style.transform = 'scale(1)';
    
    i--;
    // console.log(img[i].className);
    if(img[i].className.split(' ')[1] == 'jjk'){
        text.innerHTML =  `<h1>Haikyuu</h1>
        <p>High school volleyball player Hinata is determined to win a national championship. He's even willing to team up with his former rival, Kageyama. Watch all you want.!!!!!</p>`;
    }
    if(img[i].className.split(' ')[1] == 'hai'){
        text.innerHTML = `<h1>JJK</h1>
        <p>A film produced by MAPPA and Originally aimed as an arc of the television series, jjk movie 0 follows Yuta Okkotsu, a young student who becomes a sorcerer and seeks to control the cursed spirit of his childhood friend Rika Orimoto in Jujutsu High alongside other skilled mates.</p>`;
    }
    if(img[i].className.split(' ')[1] == 'pap'){
        text.innerHTML = `<h1>Demon Slayer</h1>
        <p>With great animation comes a great anime. Tanjiro Kamado, his sister Nezuko, and his friends Zenitsu Agatsuma and Inosuke Hashibira board the Mugen Train to assist the Flame Hashira Kyōjurō Rengoku in his mission to hunt for a demon that has caused forty people to go missing.</p>`;
    }
    if(img[i].className.split(' ')[1] == 'kim'){
        text.innerHTML = `<h1>Made In Abyss</h1>
        <p>Come along and follow an orphaned girl named Riko, who finds and befriends a humanoid robot called Reg, and descends with him into the titular "Abyss" that leads deep into the Earth, in hopes of finding her mother.</p>`;
    }
    if(i <= 0){
        i = 3;
    }
}
function changeprev(){
    img.forEach(element => {
        element.classList.remove('.ha');
        element.style.transform = 'scale(0)';
    });
    
    img[j].style.transform = 'scale(1)';
    if(img[j].className.split(' ')[1] == 'hai'){
        text.innerHTML =  `<h1>JJK</h1>
        <p>A film produced by MAPPA and Originally aimed as an arc of the television series, jjk movie 0 follows Yuta Okkotsu, a young student who becomes a sorcerer and seeks to control the cursed spirit of his childhood friend Rika Orimoto in Jujutsu High alongside other skilled mates.</p>`;
    }
    if(img[j].className.split(' ')[1] == 'jjk'){
        text.innerHTML = `<h1>Haikyuu</h1>
        <p>High school volleyball player Hinata is determined to win a national championship. He's even willing to team up with his former rival, Kageyama. Watch all you want.!!!!!</p>`;
    }
    if(img[j].className.split(' ')[1] == 'kim'){
        text.innerHTML = `<h1>Made In Abyss</h1>
        <p>Come along and follow an orphaned girl named Riko, who finds and befriends a humanoid robot called Reg, and descends with him into the titular "Abyss" that leads deep into the Earth, in hopes of finding her mother.</p>`;
    }
    if(img[j].className.split(' ')[1] == 'pap'){
        text.innerHTML = `<h1>Demon Slayer</h1>
        <p>With great animation comes a great anime. Tanjiro Kamado, his sister Nezuko, and his friends Zenitsu Agatsuma and Inosuke Hashibira board the Mugen Train to assist the Flame Hashira Kyōjurō Rengoku in his mission to hunt for a demon that has caused forty people to go missing.</p>`;
    }
    console.log(j);
    if(j >= 3){
        j = -1;
    }else if(j <= 0){
        j == -1;
    }
    j++;
    
}