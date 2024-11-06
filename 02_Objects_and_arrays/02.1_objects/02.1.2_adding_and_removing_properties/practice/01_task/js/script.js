const auto = {
    model: 'Audi',
    color: 'red',
    year: 2012
}
// объект auto с 3-мя свойствами

const input = prompt('Enter a property: ');
// запись запрашиваемого у пользователя значения в переменную input

const value = auto[input];
// проверяем поле объекта auto с именем, которое хранится в переменной input

if(value) {
    console.log(value)
} else {
console.log('Not found')
}
// если такое поле есть, то выводим его значение в консоль, или сообщение "Не найдено"
