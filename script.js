document.addEventListener("mousemove", function(e){
    var body = document.querySelector('body');
    var baloncuk = document.createElement("span");
    var x = e.offsetX;
    var y = e.offsetY;
    baloncuk.style.left = x+'px';
    baloncuk.style.top = x+'px';
    var size = Math.random() * 100;
    baloncuk.style.width = size+'px';
    baloncuk.style.height = size+'px';
    body.appendChild(baloncuk);

    setTimeout(function(){
        baloncuk.remove();
    },4000)
})

const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval (() => {

    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
})



