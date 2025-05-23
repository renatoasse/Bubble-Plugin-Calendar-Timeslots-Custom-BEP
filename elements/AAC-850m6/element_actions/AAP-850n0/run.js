function(instance, properties, context) {
    
   var get_date = new Date(instance.data.date).setDate(new Date(instance.data.date).getDate() + 7 - (instance.data.startday + 1));
    instance.data.date = new Date(get_date);  
        
    
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
   
}