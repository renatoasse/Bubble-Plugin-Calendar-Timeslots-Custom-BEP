function(instance, properties, context) {

        if (properties.data_nascimento != null) {
          var birthDate = new Date(properties.data_nascimento);
          var month_diff = Date.now() - birthDate.getTime();
          var age_dt = new Date(month_diff);
          var year = age_dt.getUTCFullYear();
          var age = Math.abs(year - 1970);
          instance.publishState('idade', age);
        }
    
}