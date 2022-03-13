window.onload = loadData();

let dailyMenu = document.querySelector('#daily-menu');
let weeklyMenu = document.querySelector('#weekly-menu');
let monthlyMenu = document.querySelector('#monthly-menu');
let menuSelector = document.querySelectorAll('li');
let dailyTime = document.querySelectorAll('.daily-time');
let dailyLast = document.querySelectorAll('.daily-last');
let weeklyTime = document.querySelectorAll('.weekly-time');
let weeklyLast = document.querySelectorAll('.weekly-last');
let monthlyTime = document.querySelectorAll('.monthly-time');
let monthlyLast = document.querySelectorAll('.monthly-last');
let dataDaily = document.querySelectorAll('.data-daily');
let dataWeekly = document.querySelectorAll('.data-weekly');
let dataMonthly = document.querySelectorAll('.data-monthly');

dailyMenu.addEventListener('click', () => {
    activeRemover();
    dailyMenu.classList.add('active');
    for (i = 0; i < dataDaily.length; i++) {
        dataDaily[i].classList.add('activeData');
    }
});

weeklyMenu.addEventListener('click', () => {
    activeRemover();
    weeklyMenu.classList.add('active');
    for (i = 0; i < dataWeekly.length; i++) {
        dataWeekly[i].classList.add('activeData');
    }
});

monthlyMenu.addEventListener('click', () => {
    activeRemover();
    monthlyMenu.classList.add('active');
    for (i = 0; i < dataMonthly.length; i++) {
        dataMonthly[i].classList.add('activeData');
    }
});

async function loadData() {
    let req = await fetch("./data.json");
    let json = await req.json();
    console.log(json)
    for (i = 0; i < dailyTime.length; i++) {
        dailyTime[i].innerText = json[i].timeframes.daily.current;
        dailyLast[i].innerText = json[i].timeframes.daily.previous;
    }
    for (i = 0; i < monthlyTime.length; i++) {
        monthlyTime[i].innerText = json[i].timeframes.monthly.current;
        monthlyLast[i].innerText = json[i].timeframes.monthly.previous;
    }
    for (i = 0; i < weeklyTime.length; i++) {
        weeklyTime[i].innerText = json[i].timeframes.weekly.current;
        weeklyLast[i].innerText = json[i].timeframes.weekly.previous;
    }
    for (i = 0; i < dataWeekly.length; i++) {
        dataWeekly[i].classList.add('activeData');
    }
}

function activeRemover() {
    for (i = 0; i < menuSelector.length; i++) {
        menuSelector[i].classList.remove('active');
    }
    for (i = 0; i < dataDaily.length; i++) {
        dataDaily[i].classList.remove('activeData');
        dataWeekly[i].classList.remove('activeData');
        dataMonthly[i].classList.remove('activeData');
    }
}