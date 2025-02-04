//---------------------------- 1 -----------------------------------
let name = prompt("ваше ім'я ");
alert(`Привіт, ${name}!`);

//---------------------------- 2 -----------------------------------
const year = 2025;
let birthYear = prompt("який ваш рік народження ");
let age = year - birthYear;
alert(`Вам ${age} років.`);

//---------------------------- 3 -----------------------------------
let side = prompt("довжина сторони квадрату ");
let p = 4 * side;
alert(`Периметр квадрата: ${p}`);

//---------------------------- 5 -----------------------------------
let distance = prompt("яка відстань між містами в км ");
let time = prompt("Зз який час хочете дістатися? ");
let speed = distance / time;
alert(`вам потрібно рухатися зі швидкістю ${speed.toFixed(2)} км/год `);

//---------------------------- 6 -----------------------------------
const exchange_rate = 0.96; 
let dollars = prompt("Введіть суму в доларах:");
let euros = dollars * exchange_rate;
alert(`${dollars} доларів = ${euros.toFixed(2)} євро.`);

//---------------------------- 7 -----------------------------------
let flashSize = prompt("Введіть обсяг флешки у ГБ:");
let fileSize = 820; 
let flashSizeMB = flashSize * 1024;
let filesCount = Math.floor(flashSizeMB / fileSize);
alert(`На флешку поміститься ${filesCount} файлів розміром 820 МБ.`);

//---------------------------- 4 -----------------------------------
let radius = prompt("Введіть радіус кола:");
const P = 3.1416; 
let area = P * radius * radius; 
alert(`Площа кола: ${area.toFixed(2)}`);

