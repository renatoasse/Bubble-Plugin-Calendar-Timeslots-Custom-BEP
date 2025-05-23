function(instance, properties, context) {

    var ListofDays = [];      
    
var date,newdate,day,last,count,dif

instance.data.month = instance.data.month + 1;
   
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
 
   
}