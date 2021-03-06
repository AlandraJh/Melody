$(document).ready(function () {
    var currentFloor = 2;
    var counterUp = $(".counter-up"); /*Кнопка увелечения этажа*/ 
    var counterDown = $(".counter-down");/*Кнопка уменьшения этажа*/ 
    var floorPath = $(".home-image path"); /*Переменная подцветки этажей*/
    var modal = $(".modal");
    var modalDialog = $(".modal-dialog");
    var closeBtn = $(".modal-close-btn");
    var showFlatBtn =$(".show-flat-btn");

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

      /*Открытие-закрытие окна при клике на этаж*/
      floorPath.on("click", toggleModal);

      /*Открытие-закрытие окна при клике на кнопку "Показать квартиры"*/
             showFlatBtn.on("click",toggleModal); 
             closeBtn.on("click",toggleModal);
             
// Функция открытия-закрытия окна
    function toggleModal () {
        modal.toggleClass("modal-show");
        modalDialog.toggleClass("modal-dialog-show");
    }

 // Подцветка карты квартир
 var currentFlat = 1 /*Переменная с текущей квартирой*/
 var flatPath = $(".flat-image path"); /*Переменная подцветки квартир*/
 var flatPathItem = $(".flat-link"); /*Ссылка на квартиру*/


 /*События при наведении мыши на квартиру*/
 flatPath.on("mouseover", function(){
    currentFlat = $(this).attr("data-flat"); /*Получение текушей квартиры*/
    flatPath.removeClass("current-flat"); /*Удаление активного класса */
    flatPathItem.removeClass("flat-link-active"); /*Удаление класса со ссылок с хактеристиками*/
    $(`[data-flat=${currentFlat}]`).toggleClass("current-flat"); /*Присвоение класса подцветки квартире*/
    $(`[data-flat-discip=${currentFlat}]`).toggleClass("flat-link-active"); /*Присвоение класса активации ссылкам с характеристиками*/
   });

/*События при наведении мыши на ссылки квартир */
    flatPathItem.on("mouseover", function(){
        flatPath.removeClass("current-flat"); /*Удаление активного класса квартиры*/
        flatPathItem.removeClass("flat-link-active"); /*Удаление класса со ссылок с хактеристиками*/    
        currentFlatDiscip = $(this).attr("data-flat-discip"); /*Получение ссылки с описанием*/
        $(`[data-flat=${currentFlatDiscip}]`).toggleClass("current-flat"); /*Присвоение класса квартире при наведении мыши*/

    });

});