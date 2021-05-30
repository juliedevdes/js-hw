"use strict";

/*======Паттерн «Объект настроек» ======


/*

Если функция принимает более двух-трёх аргументов, очень просто запутаться в какой последовательности что передавать. 
В результате получается очень неочевидный код в месте её вызова.

 */


// Change code below this line
function calculateMeanTemperature(forecast) {
    const {
        today: { low: todayLow, high: todayHigh },
        tomorrow: { low: tomorrowLow, high: tomorrowHigh }
    } = forecast;

    // const todayLow = forecast.today.low;
    // const todayHigh = forecast.today.high;
    // const tomorrowLow = forecast.tomorrow.low;
    // const tomorrowHigh = forecast.tomorrow.high;

    // Change code above this line
    return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}