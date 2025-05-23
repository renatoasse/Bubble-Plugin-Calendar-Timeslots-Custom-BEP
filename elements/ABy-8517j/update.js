function(instance, properties, context) {


  // Verificamos se o usuário preencheu os campos necessários e o intervalo é maior que zero
  if (properties.intervalo > 0 && properties.inicio != null && properties.fim != null) {
    // Variáveis globais
    let start = new Date(properties.inicio);
    let end = new Date(properties.fim);
    let dates = [];
    let interval = properties.intervalo * 60000;
    let seconds = Math.floor((end - start) / 1000);
    let minutes = Math.floor(seconds / 60);
    let count = Math.floor(minutes / properties.intervalo);

    if (count >= 1) {
      for (let i = 0; i < count + 1; i++) {
        const date = new Date(start);
        const n_date = new Date(date.setMilliseconds(interval * i));
        if (n_date.getTime() < end.getTime()) {
          dates.push(n_date);
        } else if (i + 1 === count + 1 && n_date.getTime() < end.getTime() + interval) {
          dates.push(end);
        }
      }
      instance.publishState('horas', dates);
    } else if (count > 0) {
      dates.push(start);
      dates.push(end);
      instance.publishState('horas', dates);
    } else {
      instance.publishState('horas');
    }
  }



  // Gera uma lista de Anos
  if (properties.ano_final > properties.ano_inicial) {
    var anos = [];
    for (let i = 0; i <= properties.ano_final - properties.ano_inicial; i++) {
      anos.push(properties.ano_inicial + i);
    }
    instance.publishState('anos', anos);
  }
}
