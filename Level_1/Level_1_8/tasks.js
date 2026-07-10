// ==========================================
// Уровень 1.8
// ==========================================

let userArr = [];
let userArrNum = [];
let userArrNum2 = [];
// eslint-disable-next-line no-constant-condition
while (true) {
    let userNumber = prompt('Введите число для массива или напишите "стоп" для завершения:');
    
    // Проверяем: если пользователь хочет остановиться
    // Подсказка по prompt():
    // Если пользователь нажал "ОК" ничего не введя -> возвращает "" -> || input === ''
    // Если пользователь нажал "Отмена" (или Esc) -> возвращает null -> || input === null
    if (userNumber === 'стоп' || userNumber === '' || userNumber === null ) {
        break; // Эта команда мгновенно останавливает и выключает цикл while
    }
    
    // Если не стоп, превращаем в число и кладем в массив
    // userArr.push(Number(userNumber));
    // Массив[Массив.length] = Значение - что добавляем
    // userArr[userArr.length] = Number(userNumber);

    if (userNumber >= 1 && userNumber <= 10 && userNumber % 1 === 0){
        userArr[userArr.length] = Number(userNumber);
    }
    
    if (userNumber % 2 === 0 && userNumber >= 1 && userNumber <= 100){
        userArrNum[userArrNum.length] = Number(userNumber);
    }

    if (userNumber < 0 || userNumber > 0){
        let rounded = (((Number(userNumber) * 10) + 0.5) | 1) / 10;
        userArrNum2[userArrNum2.length] = rounded;
    }
    
}
    // ------------------------------------------
    // №1: Заполните массив целыми числами от 1 до 10.

    console.log('Массив с числами от 1 до 10 = ', userArr);

    // ------------------------------------------
    // №2: Заполните массив четными числами из промежутка от 1 до 100.
  
    console.log('Массив с четными числами от 1 до 100 = ', userArrNum);

    // ------------------------------------------
    // №3: Дан массив с дробями:
    // [1.456, 2.125, 3.32, 4.1, 5.34]
    // Округлите эти дроби до одного знака в дробной части.

    console.log('Округленные дроби = ', userArrNum2);