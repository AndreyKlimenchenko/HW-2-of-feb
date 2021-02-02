//Первое

const age = prompt('Сколько тебе лет?', '');
const name = prompt('Как тебя зовут?', '');
const city = prompt('Из какого города?', '');
const company = prompt('В какой компании работаешь?', '');
const phone = prompt('Номер телефона?', '');
const email = prompt('Твоя почта?', '');


alert(`Меня зовут ${name} Мне ${age} лет. Я проживаю в
городе ${city} и работаю в компании ${company}. Мои контактные данные:
${phone}, ${email}.`);

//Второе

alert(`${name} родился в ${2021 - age} году`);

//Третье

let string = prompt('Введите строку из шести цифр', '');


if((+string[0]) + (+string[1]) + (+string[2]) === (+string[3]) + (+string[4]) + (+string[5])) {
    alert('Да');
} else {
    alert('Нет');
};

//Четвертое

const isZero = prompt('Введите цифру', '');

if(+isZero > 0) {
    alert('Верно');
} else {
    alert('Неверно');
};

//Пятое

const a = +prompt('Введите число a', 10);
const b = +prompt('Введите число b', 2);
const sum = a + b;
const dif = a - b;
const comp = a * b;
const division = a / b;

let square = '';

if(sum < 1) {
    square = '';
} else {
    square = `Квадрат суммы : ${Math.pow(sum, 2)}`;
}

alert(`
    Сумма чисел : ${sum}
    Разность чисел : ${dif}
    Произведение чисел : ${comp}
    Частное чисел : ${division}
    ${square}
`);

//Шестое

if((11 > a && a > 2) || (14 > b && b >= 6)) {
    alert('Верно');
} else {
    alert('Неверно');
};

//Седьмое

const n = +prompt('Введите число от 0 до 59', '');

switch (true) {
    case (n < 15 && n >= 0):
        alert('First quater');
        break;
    case (n < 30 && n >= 15):
        alert('Second quater');
        break;
    case (n < 45 && n >= 30):
        alert('Third quater');
        break;
    case (n < 59 && n >= 45):
        alert('Fourth quater');
        break;
    default:
        alert('Введите правильное число!');
        break;
};

//Восьмое

const day = +prompt('Введите день месяца', '');

switch (true) {
    case (day < 10 && day > 0):
        alert('First декада');
        break;
    case (day < 20 && day >= 10):
        alert('Second декада');
        break;
    case (day <= 31 && day >= 20):
        alert('Third декада');
        break;
    default:
        alert('Введите правильную дату!');
        break;
};

//Девятое

const days = +prompt('Введите колличество дней', '');

let years = days / 365;
let monthes = days / 31;
let weeks = days / 7;
const hours = days * 24;
const minutes = hours * 60;
const seconds = minutes * 60;

if(years < 1) {
    years = 'Меньше года';
};
if(monthes < 1) {
    monthes = 'Меньше месяца';
};
if(weeks < 1) {
    weeks = 'Меньше недели';
};

alert(`
    years : ${years}
    monthes : ${monthes}
    weeks : ${weeks}
    hours : ${hours}
    minutes : ${minutes}
    seconds : ${seconds}
`);

//Десятое

const dayLast = +prompt('Введите неообходимый день', '');
const month = Math.ceil(dayLast / 30);


switch (true) {
    case ((month >= 0 && month <= 2) || month === 12):
        alert(`Month : ${month}, Winter`);
        break;
    case (month >= 3 && month <= 5):
        alert(`Month : ${month}, Spring`);
        break;
    case (month >= 6 && month <= 8):
        alert(`Month : ${month}, Summer`);
        break;
    case (month >= 9 && month <= 11):
        alert(`Month : ${month}, Autumn`);
        break;
    default:
        alert('Введите правильную дату!');
        break;
};