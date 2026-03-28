const getNumber = (max = 11, min = 0) => Math.floor(Math.
    random() * (max - min) + min);
const optimizeNumber = (n) => {
    let str = n + "";
    return (n + "").length === 2 ? n : "0" + n;
}

const data = [];
const colors = ["#CDB9D6", "#02A298", "#A3D8CF", 
"#F0B2AB", "#73615E"];
let n = Math.floor(getNumber(60, 6)/6) *6;

while(n--) {
    data.push(getNumber(101))
}
console.log(data)

const box = document.querySelector(".box");
box.innerHTML = "<div class=\"card\"></>"

for (let val of data) {
    box.innerHTML += `<div class="card" 
    style="background-color:${colors[getNumber(colors.length-1)]}">
    ${optimizeNumber(val)}</div>`
}

function showTime(day = new Date(2026, 4, 30)){
    let now = new Date();
    let d, h, m, s;
    let time = Math.floor((day - now) / 1000);
    // console.log(time)
    m = Math.floor(time/60);
    s = time - m * 60;
    h = Math.floor(m / 60);
    m -= h * 60;
    d = Math.floor(h / 24);
    h -= d * 24;
    return `${d} д. ${h} ч. ${m} мин.${s} сек.`
}

setInterval(function(){
    box.firstChild.innerText = `До окончания осталось ${showTime()}`;
}, 1000)