'use strict';

// let money = +prompt("Ваш бюджет на месяц"),
//     time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");



// let appData = {
//     budget: money,
//     timeData: time,
//     expenses : {},
//     optionalExpenses: {},
//     income : [],
//     savings : false
// };



// for(let i = 0; i < 2; i++){
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');

//     if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50){
//         console.log("pass");
//         appData.expenses[a] = b;
//     }
//     else{
//         console.log('not passed')
//     }
// }





// const month = 30;
// appData.oneDayBudget = appData.budget/month;

// alert("Ежедневный бюджет: " + appData.oneDayBudget);

// if(appData.oneDayBudget < 100){
//     console.log('Низкий достаток');
// }
// else if(appData.oneDayBudget > 100 && appData.oneDayBudget < 1000){
//     console.log('Средний достаток');
// }
// else if(appData.oneDayBudget > 1000){
//     console.log('Высокий достаток');
// }
// else{
//     console.log('Произошла ошибка')
// }




let money = prompt("Ваш бюджет на месяц", ''),
    date  = prompt("Введите сегодняшнюю дату");

let appData = {
    budget: money,
    expenses: {},
    currentDate: date,
    optionalExpenses: {},
    income : [],
    savings : false
};

for(let i = 0; i < 2; i++){
    let a = prompt('Введите название основной статьи расходов в этом месяце', ''),
        b = +prompt('Введите стоимость', '0');
    if( (typeof(a)) === "string" && (typeof(a)) !== null && (typeof(b)) !== null && (a.length) < 50 && (typeof(b)) !== 'string' && (a.length) > 0){
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
    else if((typeof(b)) === 'string'){
        i--;
        alert("Не число");
    }
    else{
        console.log('not passed');
        alert("Что то пошло не так. Попробуйте перезагрузить страницу и ввести данные заново");
    }
}

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


let month = 30;

appData.oneDayBudget = appData.budget/month;

if(appData.oneDayBudget < 100){
    console.log("Низкий уровень дохода");
}
else if (appData.oneDayBudget > 100 && appData.oneDayBudget < 1000){
    console.log("Средний уровень дохода");
}
else if(appData.oneDayBudget > 1000){
    console.log("Высокий уровень дохода");
}
    