// 'use strict';
// let money, date;
// function askingBudget(){
//     money = prompt("Ваш бюджет на месяц", '');
//     date  = prompt("Введите сегодняшнюю дату");
// }
// askingBudget();
// let appData = {
//     budget: money,
//     expenses: {},
//     currentDate: date,
//     optionalExpenses: {},
//     income : [],
//     savings : true
// };

// for(let i = 0; i < 2; i++){
//     let a = prompt('Введите название основной статьи расходов в этом месяце', ''),
//         b = +prompt('Введите стоимость', '0');
//     if( (typeof(a)) === "string" && (typeof(a)) !== null && (typeof(b)) !== null && (a.length) < 50 && !isNaN(b) && (a.length) > 0){
//         console.log("passed");
//         appData.expenses[a] = b;
//     }
//     else if((a.length) > 50){
//         i--;
//         alert("Название статьи расходов не может превишать 50 символов - нажмите ОК и попробуйте еще раз");
//     }
//     else if((a.length) == 0){
//         i--;
//         alert("Название статьи расходов не может быть пустым. Нажмите ОК и попробуйте снова");
//     }
//     else if((typeof(a)) !== "string"){
//         i--;
//         alert("Название статьи расходов не может состоять только из чисел");
//     }
//     else if((typeof(a)) == null || (typeof(b)) == null){
//         i--;
//         alert("Вы не заполнили название обязательной статьи расходов или не ввели стоимость");
//     }
//     else if(isNaN(b)){
//         i--;
//         alert("В поле стоимость можно ввести только число");
//     }
//     else{
//         console.log('not passed');
//         alert("Что то пошло не так. Попробуйте перезагрузить страницу и ввести данные заново");
//     }
// }
// function chooseOptExpenses(){
//     for(let j=1; j < 4; j++){

//         let d = prompt("Статья необязательных расходов", "");

//         if((typeof(d)) === "string" && (typeof(d)) !== null){
//             appData.optionalExpenses[j] = d;
//         }
//         else if(!d){
//             break;
//         }
//         else{
//             console.log("Функция не сработала");
//         }
        
//     }
// }

// chooseOptExpenses();

// function detectDayBudget(){
//     let month = 30;
//     appData.oneDayBudget = appData.budget/month;
//     alert(Math.round(appData.oneDayBudget));
// }
// detectDayBudget();

// function detectLevel(){
    
    
//     if(appData.oneDayBudget < 100 && appData.oneDayBudget != 0){
//         alert("Низкий уровень дохода");
//     }
//     else if (appData.oneDayBudget > 100 && appData.oneDayBudget < 1000){
//         alert("Средний уровень дохода");
//     }
//     else if(appData.oneDayBudget > 1000){
//         alert("Высокий уровень дохода");
//     }
//     else{
//         alert('возможно не указан бюджет');
//         askingBudget(money, date);
//         appData.budget = money;
//         detectDayBudget();
//         detectLevel();
//         return true;
         
//     }
    
    
// }



// function checkSavings(y){
//     if (appData.savings == true){
//         let save = +prompt("Какова сумма накоплений"),
//             percent = +prompt("Под какой процент");

//         appData.monthIncome = save/100/12*percent;
//         alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
//     }
//     y();
// }
// checkSavings(detectLevel);





// Работа с объектами пример
// let options = {
//     width: 1024,
//     height: 768
// };
// options.tv = {};

// let a = "screen",
//     b = true,
//     c = "remote",
//     d = true;

// options.tv[a] = b; options.tv[c] = d;

// for(let key in options){
//     console.log("Object optional contain option " + key + " and property " + options[key]);
// }


// колбек с передачей значений
// let c = 10,
//     d = 5;

// function first(a,b){
//     console.log(a*b);
   
// }

// function second(y){
//     console.log(2);
//     y();
// }

// second(function(){
//     first(c,d);
//         }
//     );


let arr = ["One", 2, "tree", 4, 5]; // создание массива
// // arr.shift();// удаляет первый элемент массива 
// // arr.unshift("20");// добавляетт элемент массива с  начала
// // arr.pop();// убирает элемент массива с конца
// // arr.push("20"); // добавляет элемент массива указанный в скобках с конца
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// } //перебор массива // второй способ с колбек функцией

arr.forEach(function(item,i, mass){
 console.log(i + ":" + item + " " + mass);
});














// let i = 0;
// while( i < 2){
//     i++;
//     let a = prompt('Введите название основной статьи расходов в этом месяце', ''),
//         b = +prompt('Введите стоимость', '0');
//     if( (typeof(a)) === "string" && (typeof(a)) !== null && (typeof(b)) !== null && (a.length) < 50 && (typeof(b)) !== 'string' && (a.length) > 0){
//         console.log("passed");
//         appData.expenses[a] = b;
//     }
//     else if((a.length) > 50){
//         i--;
//         alert("Название статьи расходов не может превишать 50 символов - нажмите ОК и попробуйте еще раз");
//     }
//     else if((a.length) == 0){
//         i--;
//         alert("Название статьи расходов не может быть пустым. Нажмите ОК и попробуйте снова");
//     }
//     else if((typeof(a)) !== "string"){
//         i--;
//         alert("Название статьи расходов не может состоять только из чисел");
//     }
//     else if((typeof(a)) == null || (typeof(b)) == null){
//         i--;
//         alert("Вы не заполнили название обязательной статьи расходов или не ввели стоимость");
//     }
//     else if((typeof(b)) === 'string'){
//         i--;
//         alert("Не число");
//     }
//     else{
//         console.log('not passed');
//         alert("Что то пошло не так. Попробуйте перезагрузить страницу и ввести данные заново");
//     }
// }

// let i = 0;
// do{
//     i++;
//     let a = prompt('Введите название основной статьи расходов в этом месяце', ''),
//         b = +prompt('Введите стоимость', '0');
//     if( (typeof(a)) === "string" && (typeof(a)) !== null && (typeof(b)) !== null && (a.length) < 50 && (typeof(b)) !== 'string' && (a.length) > 0){
//         console.log("passed");
//         appData.expenses[a] = b;
//     }
//     else if((a.length) > 50){
//         i--;
//         alert("Название статьи расходов не может превишать 50 символов - нажмите ОК и попробуйте еще раз");
//     }
//     else if((a.length) == 0){
//         i--;
//         alert("Название статьи расходов не может быть пустым. Нажмите ОК и попробуйте снова");
//     }
//     else if((typeof(a)) !== "string"){
//         i--;
//         alert("Название статьи расходов не может состоять только из чисел");
//     }
//     else if((typeof(a)) == null || (typeof(b)) == null){
//         i--;
//         alert("Вы не заполнили название обязательной статьи расходов или не ввели стоимость");
//     }
//     else if((typeof(b)) === 'string'){
//         i--;
//         alert("Не число");
//     }
//     else{
//         console.log('not passed');
//         alert("Что то пошло не так. Попробуйте перезагрузить страницу и ввести данные заново");
//     }
// } while(i < 2);