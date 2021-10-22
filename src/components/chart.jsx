import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import stylesComponents from './calculator.module.css'


  const options = {
    scales: {
      r: {
        ticks: {       
          beginAtZero: true,
          callback: function(value) {
          return `${value}%`;
        }
      }
     }
  }
}




const polarChart = ({data}) => (
  <>
    <div  className={stylesComponents.header}>
      <h1  className={stylesComponents.title}>Porcentajes de gastos</h1>
    </div>
    <PolarArea data={data}
    options = {options}
    />
    <div className={stylesComponents.text}>
      <small>El grafico te muestra en porcentaje tus gastos con relacion a tus ingresos.</small>

      <h4>Si quieres manejar de forma más responsable tus ingresos **VA pone a tu disposición un <span> <a href="https://www.bbva.mx/personas/productos/ahorro/meta-ahorro.html">producto que te ayudará a ahorrar</a></span> a corto, mediano o largo plazo, dependiendo tus necesidades.</h4>

    </div>
  </>
);

export default polarChart;


// scales: {
//   r: {
//     max: 100,
//     min: 0,
//     ticks: {
//         beginAtZero: true,
//         stepSize: 10
//     }
//   }
//  }
// };