ymaps.ready(init);
      
        function init(){ 
            var myMap = new ymaps.Map("map", {
                center: [51.825334, 107.591137],
                zoom: 16
            }); 
            
            var myPlacemark = new ymaps.Placemark([51.825334, 107.591137], {
                hintContent: 'ООО <strong>Билет-сервис</strong>',
                balloonContent: 'ООО <strong>Билет-сервис</strong>'
            });
            
            myMap.geoObjects.add(myPlacemark);
        }