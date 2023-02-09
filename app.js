




window.addEventListener('load', () => {
    var line = document.getElementsByClassName('underline')[0];
    line.style.transform = 'translateX(0%)';
});







const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const slide1 = document.getElementById('slide1');
const slide2 = document.getElementById('slide2');
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');


btn1.addEventListener('mouseover', () => {
    slide1.style.transform = 'translateX(0)';
    line1.style.backgroundColor = 'white';
});
btn2.addEventListener('mouseover', () => {
    slide2.style.transform = 'translateX(0%)';
    line2.style.backgroundColor = 'white';
});
btn1.addEventListener('mouseout', () => {
    slide1.style.transform = 'translateX(-100%)';
    line1.style.backgroundColor = 'black';
});
btn2.addEventListener('mouseout', () => {
    slide2.style.transform = 'translateX(-100%)';
    line2.style.backgroundColor = 'black';
});
function repo(){
    window.open('https://github.com/jaegarsaun', '_blank');
}
function contact(){
    window.open('mailto:jaegarls@icloud.com', '_blank');
}
function github1(){
    window.open('https://www.afkcash.com', '_blank')
}
function github2(){
    window.open('https://github.com/jaegarsaun/prepared-plus', '_blank');
}
function github3(){
    window.open('https://github.com/jaegarsaun/funny-google-earth-web', '_blank');
}
function github4(){
    window.open('https://github.com/jaegarsaun/wordScrambleGame-Vuejs', '_blank');
}






