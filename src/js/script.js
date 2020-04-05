'use strict';

let money = prompt("Ваш бюджет на месяц"),
    time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");

let expensesCurrentMonth = prompt("Введите обязательную статью расходов в этом месяце"),
howMutch = prompt("Во сколько обойдется?");

let appData = {
    budget: money,
    timeData: time,
    expenses : {expensesCurrentMonth, howMutch},
    optionalExpenses: {},
    income : [],
    savings : false
};
const month = 30;
let oneDayBudget = (money - expensesCurrentMonth - howMutch)/month;

alert(oneDayBudget);
console.log(appData);
