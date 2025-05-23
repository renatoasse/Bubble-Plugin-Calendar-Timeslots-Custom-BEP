function(instance, properties, context) {
//***** Create Calendar Month *****   

var ListofDays = [];      
    
var date,newdate,day,last,count,dif

if (properties.date == null){
 instance.data.year = new Date().getFullYear();
 instance.data.month = new Date().getMonth();
    
} else {
    instance.data.year = new Date(properties.date).getFullYear();
    instance.data.month = new Date(properties.date).getMonth();
}
    
if (properties.startday === "Monday"){
    instance.data.startday = 2;
    instance.data.create = true;
} else {
    instance.data.startday = 1;
    instance.data.create = true;
  }
       
 if (instance.data.create === true) { 
 date = new Date(instance.data.year,instance.data.month,1);
 newdate = new Date (instance.data.year,instance.data.month,0).getDate();
 day = date.getDay();
 last = new Date(instance.data.year,instance.data.month + 1, 0).getDate();
     
     
     if (day === 0 && instance.data.startday === 2){
    dif = 5;      
         }
     
     if (day === 0 && instance.data.startday === 1) {
         dif = day - instance.data.startday;
         }
         
     if (day > 0 ) {
 dif = day - instance.data.startday;
         }
     
for (var p = dif; 0 <= p; p--){
   
ListofDays.push(new Date(instance.data.year,instance.data.month -1, newdate -p));

}

for (var c = 1; c <= last;c++){
    var days = new Date(instance.data.year,instance.data.month,c);
    ListofDays.push(days) 
    
  if (c == last) {
   count = 42 - ListofDays.length;
   for (var n = 1; n <= count; n++){
   var ndays = new Date(instance.data.year,instance.data.month + 1,n);
   ListofDays.push(ndays);
  
     if (ListofDays.length == 42){
     instance.publishState('listofdays',ListofDays); 
     instance.publishState('c_month',new Date(instance.data.year,instance.data.month +1,0));
         }
 }     
   }
    
}
   
}
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
    instance.publishState('monthNumber',monthNumber);
}
  monthslist(properties.language); 
    
    
//***** Create List Of Days String *****
 var dayslist = function (days) {
    var dayslong = [];
    var daysshort = [];
    for(var i = 0; i < 7; i++){       
        dayslong.push(new Date(2030,0,i - (instance.data.startday - 1)).toLocaleString(days, { weekday: 'long' }));
        daysshort.push(new Date(2030,0,i -(instance.data.startday - 1)).toLocaleString(days, { weekday: 'short' }));     
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