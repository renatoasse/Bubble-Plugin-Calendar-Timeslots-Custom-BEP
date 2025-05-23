function(instance, properties, context) { 
//***** Create Calendar Week *****
    
var get_date,date,day  

if(properties.date == null){
    day = new Date().getDay();
    
    if (day == 0 && properties.startday == "Monday"){
    get_date = new Date().setDate(new Date().getDate()-1);
    instance.data.date = new Date(get_date);
    instance.data.startday = 1;
    }

    if (day > 0 && properties.startday == "Monday"){
       instance.data.date = new Date();
       instance.data.startday = 1;
       }
    
   if (properties.startday == "Sunday"){
       instance.data.date = new Date();
       instance.data.startday = 0;
       }
   
} else {
   day = new Date(properties.date).getDay();
    
   if (day == 0 && properties.startday == "Monday"){
    get_date = new Date(properties.date).setDate(new Date(properties.date).getDate() -1);
    instance.data.date = new Date(get_date);
    instance.data.startday = 1;
   
    } 
    
    if (day > 0 && properties.startday == "Monday"){
       instance.data.date = new Date(properties.date);
       instance.data.startday = 1;
       }
    
    if (properties.startday == "Sunday"){
        instance.data.date = new Date(properties.date);
        instance.data.startday = 0;
    }
    
}  
    
    
function dates(current) {
    var week= new Array(); 
    current.setDate((current.getDate() - current.getDay() +instance.data.startday));
    for (var i = 0; i < 7; i++) {
        week.push( new Date(current));
       
        current.setDate(current.getDate() +1);
        
        if (week.length == 7){
         instance.publishState('dates',week); 
         instance.publishState('lastday',week.pop());
         instance.publishState('firstday',week.shift());
         instance.publishState('c_week',instance.data.date);
        }
    }
    return week; 
 
}
   
   dates(instance.data.date)
   
 //***** Create List of Months String *****

var monthslist = function(locale) {
    var long = [];
    var short = [];
    var monthNumber = [];
    for(var i = 0; i < 12; i++) {
        long.push(new Date(new Date().getFullYear(),i).toLocaleString(locale,{month:"long"}));
        short.push(new Date(new Date().getFullYear(),i).toLocaleString(locale,{month:"short"}));        
        monthNumber.push(new Date(new Date().getFullYear(),i).getMonth()+1);
    }
    instance.publishState('long',long);
    instance.publishState('short',short);
}
  monthslist(properties.language); 
    
    
//***** Create List Of Days String *****
 var dayslist = function (days) {
    var dayslong = [];
    var daysshort = [];
    for(var i = 0; i < 7; i++){       
        dayslong.push(new Date(2030,0,i - (instance.data.startday +1)).toLocaleString(days, { weekday: 'long' }));
        daysshort.push(new Date(2030,0,i - (instance.data.startday +1)).toLocaleString(days, { weekday: 'short' }));     
    }
        instance.publishState('daysshort',daysshort)
        instance.publishState('dayslong',dayslong)
}

    dayslist(properties.language);
    

//***** Get Current Date and Time *****
   setInterval(function(){
     var currentdatetime = new Date();  
      instance.publishState('currentime',currentdatetime)      
  }, 1000);   
    

    

}