$(document).ready(function () {
    var currentFloor = 2;
    var counterUp = $(".counter-up"); /*Кнопка увелечения этажа*/ 
    var counterDown = $(".counter-down");/*Кнопка уменьшения этажа*/ 
    var floorPath = $(".home-image path"); /*Переменная подцветки этажей*/
    /*События при наведении мыши на этаж*/
    floorPath.on("mouseover", function(){
        floorPath.removeClass("current-floor"); /*Удаление активного класса*/
        currentFloor = $(this).attr("data-floor"); /*Получение текушего этажа*/
        $(".counter").text(currentFloor); /*Запись в счетчик*/
    });
    /*Событие при клике на верхнюю кнопку*/
    counterUp.on("click", function(){
        if (currentFloor < 18) {
            currentFloor++; /*Увеличение счетчика*/
            /*Форматирование числа в формат с 0*/
            usCurrentFloor = currentFloor.toLocaleString("en-Us", {minimumIntegerDigits: 2, useGrouping:false});
            $(".counter").text(usCurrentFloor); /*Запись в счетчик*/
            floorPath.removeClass("current-floor"); /*Очистка класса*/
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); /*Присвоение класса*/
        }   
    });
/*Событие при клике на нижнюю кнопку*/
    counterDown.on("click", function(){
        if (currentFloor > 2) {
            currentFloor--; /*Уменьшение счетчика*/
            usCurrentFloor = currentFloor.toLocaleString("en-Us", {minimumIntegerDigits: 2, useGrouping:false});
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
            
        }   
    });


});