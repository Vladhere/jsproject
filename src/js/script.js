'use strict';

let money = prompt("Ваш бюджет на месяц", ''),
    date  = prompt("Введите сегодняшнюю дату");

let appData = {
    budget: money,
    expenses: {},
    currentDate: date,
    optionalExpenses: {},
    income : [],
    savings : true
};

for(let i = 0; i < 2; i++){
    let a = prompt('Введите название основной статьи расходов в этом месяце', ''),
        b = +prompt('Введите стоимость', '0');
    if( (typeof(a)) === "string" && (typeof(a)) !== null && (typeof(b)) !== null && (a.length) < 50 && !isNaN(b) && (a.length) > 0){
        console.log("passed");
        appData.expenses[a] = b;
    }
    else if((a.length) > 50){
        i--;
        alert("Название статьи расходов не может превишать 50 символов - нажмите ОК и попробуйте еще раз");
    }
    else if((a.length) == 0){
        i--;
        alert("Название статьи расходов не может быть пустым. Нажмите ОК и попробуйте снова");
    }
    else if((typeof(a)) !== "string"){
        i--;
        alert("Название статьи расходов не может состоять только из чисел");
    }
    else if((typeof(a)) == null || (typeof(b)) == null){
        i--;
        alert("Вы не заполнили название обязательной статьи расходов или не ввели стоимость");
    }
    else if(isNaN(b)){
        i--;
        alert("В поле стоимость можно ввести только число");
    }
    else{
        console.log('not passed');
        alert("Что то пошло не так. Попробуйте перезагрузить страницу и ввести данные заново");
    }
}
function chooseOptExpenses(){
    for(let j=1; j < 4; j++){

        let d = prompt("Статья необязательных расходов", "");

        if((typeof(d)) === "string" && (typeof(d)) !== null){
            appData.optionalExpenses[j] = d;
        }
        else if(!d){
            break;
        }
        else{
            console.log("Функция не сработала");
        }
        
    }
}

chooseOptExpenses();

function detectDayBudget(){
    let month = 30;
    appData.oneDayBudget = appData.budget/month;
    alert(Math.round(appData.oneDayBudget));
}
detectDayBudget();

function detectLevel(){
    if(appData.oneDayBudget < 100){
        alert("Низкий уровень дохода");
    }
    else if (appData.oneDayBudget > 100 && appData.oneDayBudget < 1000){
        alert("Средний уровень дохода");
    }
    else if(appData.oneDayBudget > 1000){
        alert("Высокий уровень дохода");
    }
    
}

detectLevel();

function checkSavings(){
    if (appData.savings == true){
        let save = +prompt("Какова сумма накоплений"),
            percent = +prompt("Под какой процент");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();


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