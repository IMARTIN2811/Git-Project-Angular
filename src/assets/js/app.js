(function(){

    var ActHora = function () {
        var fecha = new Date(),
            hora = fecha.getHours(),
            ampm,
            min = fecha.getMinutes(),
            seg = fecha.getSeconds(),
            diaSem = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            year = fecha.getFullYear();
    
            //accede a los elementos html de la div fecha
            var pDiaSem = document.getElementById('diaSemana'),
                pDia    = document.getElementById('dia'),
                pMes    = document.getElementById('mes'),
                pYear   = document.getElementById('year');
            //accede a los elementos html de la div reloj
            var pHoras = document.getElementById('horas'),
                pMin   = document.getElementById('minutos'),
                pAmPm  = document.getElementById('ampm'),
                pSegun = document.getElementById('segundos');
    
            var semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado',],
                meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
                pDiaSem.textContent = semana[diaSem];
                pDia.textContent = dia;
                pMes.textContent = meses[mes];
                pYear.textContent = year;
    
                //si la hora es mayor a 12 cambia a pm sino es am
                if (hora >= 12) {
                    hora = hora - 12;
                    ampm = 'PM';
                }else{
                    ampm = 'AM';
                }
    
                //si las hora el igual a 0 lo transforme a 12
                if (hora == 0) {
                    hora = 12;                
                }
    
                //muestra en pantalla la hora y el pm/am
                pHoras.textContent = hora;
                pAmPm.textContent = ampm;
                
                //si el min es menor de 10 se le agrega el 0
                if (min < 10) {
                    min = "0" + min
                };
                
                //si el seg. es menor a 10 se le agrega el 0
                if (seg < 10) {
                    seg = "0" + seg
                }
    
                //muestra en pantalla el minuto y los seg
                pMin.textContent = min;
                pSegun.textContent = seg;
        };
    
        //permite aumentar los segundos
        ActHora();
        var interval = setInterval(ActHora, 1000);

}())
