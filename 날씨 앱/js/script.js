$(function(){
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?id=1835848&appid=ce6880ec9be7c75b87a48cec3cbef7bb&units=metric',function(data){
        let minTemp=data.main.temp_min; 
        let maxTemp=data.main.temp_max;  
        let temp=data.main.temp;           
        let icon=data.weather[0].icon;        
        let dt=data.dt;
        let d=new Date();

       
       
        dd =`${moment(d).format(`dddd, YYYY MM Do `)}`;

        $('.ctemp').append(temp);
        $('.cmintemp').append(minTemp);
        $('.cmaxtemp').append(maxTemp);
        $('.cicon').append('<img src="http://openweathermap.org/img/wn/'+icon+'@2x.png" />');   

    });  
   $.getJSON('https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=37.2911&lon=127.0089&appid=ce6880ec9be7c75b87a48cec3cbef7bb',function(data){
        let 
   });



});