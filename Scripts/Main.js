let SHEET_ID = '12iJaiTGR61Uyo9s9-86onlWdm2XofEKkr8lDcHxq_zE'
let SHEET_TITLE ='Significados';
let SHEET_RANGE = 'A1:C23'

let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
.then(res => res.text())
.then (rep =>{
     let data = JSON.parse(rep.substr(47).slice(0, -2));
     console.log(data)
})

function generarCartaNatal() {
     // Obtén los valores ingresados por el usuario
     var nombre = document.getElementById("nombre").value;
     var fecha = document.getElementById("fecha").value;
     var hora = document.getElementById("hora").value;
     var lugar = document.getElementById("lugar").value;
 
  // Calcular posiciones de los planetas
  var planetas = astrojs.getPlanets(fecha, hora, lugar);

  // Calcular casas
  var casas = astrojs.getHouses(fecha, hora, lugar);

  // Calcular aspectos
  var aspectos = astrojs.getAspects(planetas);

  // Dibujar carta natal
  var canvas = document.getElementById("cartaNatal");
  var ctx = canvas.getContext("2d");

  // Dibujar gráfico circular
  chartjs.drawPieChart(ctx, planetas, casas);

  // Dibujar símbolos
  drawSymbols(ctx, planetas, casas, aspectos);

  // Interpretar carta natal
  var interpretacion = interpretarCartaNatal(planetas, casas, aspectos);

  // Mostrar interpretación
  document.getElementById("interpretacion").innerHTML = interpretacion;
 }