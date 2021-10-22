import React from 'react';
import stylesComponents from './calculator.module.css'
import { useState } from 'react';
import {sum, sumTotal, percentage } from './calculos';
import PolarChart from './chart';


const Calculator = () => {


    const handleSubmit = e => {
      e.preventDefault();
    };

    const initialData = {
      income: 0,
      otherIncome: 0, 
      rent: 0,
      fuel: 0,
      services: 0, 
      credit: 0, 
      travels: 0, 
      othersExpensesVariables:0, 
    }

    const [data, setData] = useState(initialData);

    const handleInputChange= (e) => {
      setData({
       ...data,
       [e.target.name]: e.target.value
     });
   };

   // Total incomes
   const totalIncome = sum(data.income, data.otherIncome);

   // Percentages expenses
   const rentPorcentage = percentage(data.rent, totalIncome);
   const fuelPorcentage = percentage(data.fuel, totalIncome);
   const servicesPorcentage = percentage(data.services, totalIncome);
   const creditPorcentages = percentage(data.credit, totalIncome);
   const totalExpenses = sumTotal(data.rent, data.fuel, data.services, data.credit);

 

   // Total variable expenses
   const sumVariableExp = sum(data.travels, data.othersExpensesVariables)
   const variablePorcentage = percentage(sumVariableExp, totalIncome)

   // totales
   const total = totalIncome - (totalExpenses + sumVariableExp)
   const sumt = () => {
    const percentageTotal = 100 - (rentPorcentage + fuelPorcentage + servicesPorcentage + creditPorcentages + variablePorcentage)
    if(percentageTotal !== 0){
        return percentageTotal
    }else{
        return 0
    }
   };



   // data chart
   const dataChart = {
    labels: ['Renta', 'Gasolina/transporte', 'Servicios publicos', 'Credito', 'Gastos variables'],
    datasets: [
      {
        label: 'porcentajes',
        data: [rentPorcentage, fuelPorcentage, servicesPorcentage, creditPorcentages, variablePorcentage],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
        ],
        borderWidth: 1,
      },
    ],
  };


    return (
      <div className={stylesComponents.container}>
       <h2>Hagamos tu presupuesto mensual</h2>
       <p>**VA te apoya es por eso que te compartimos una base para que hagas tu presupuesto mensual. <br /> Llena y/ o modifica los siguientes campos para establecer tu presupuesto mensual.</p>
       <form action="#" onSubmit={handleSubmit}>
         <div className={stylesComponents.divValues}>
           <h2>Ingresos</h2>
              <label htmlFor="">Mi sueldo Neto es:</label>
              <input type="number" name="income" onChange={handleInputChange}/>
              <label htmlFor="">Otros Ingresos</label>
              <input type="number" name="otherIncome" onChange={handleInputChange} placeholder = "Ej. Rentas, ventas en linea, freelance "/>
              <h4> Tengo un ingreso total de: ${totalIncome} en el mes</h4>
          </div>
          <div className={stylesComponents.divValues}>
           <h2>Gastos Fijos</h2>
              <label htmlFor="">Renta</label>
              <input type="number" name="rent" onChange={handleInputChange}/>
              <small>De tu ingreso destinas el {rentPorcentage}% por concepto de renta. </small>
              <label htmlFor="">Gasolina o Transporte</label>
              <input type="number" name="fuel" onChange={handleInputChange}/>
              <small>De tu ingreso destinas el {fuelPorcentage}% por concepto de transporte y/o gasolina. </small>
              <label htmlFor="">Servicios (luz, agua, gas, telefono...)</label>
              <input type="number" name="services" onChange={handleInputChange}/>
              <small>De tu ingreso destinas el {servicesPorcentage}% por concepto de servicios. </small>
              <label htmlFor="">Crédito</label>
              <input type="number" name="credit" onChange={handleInputChange}/>
              <small>De tu ingreso destinas el {creditPorcentages}% por concepto de creditos. </small>
              <h4> Tengo un gasto fijo aproximado de: ${totalExpenses} al mes. </h4>
          </div>
          <div className={stylesComponents.divValues}>
            <h2>Gastos Variables</h2>
              <label htmlFor="">Viajes</label>
              <input type="number" name="travels" onChange={handleInputChange}/>
              <label htmlFor="">Otros gastos</label>
              <input type="number" name="othersExpensesVariables" onChange={handleInputChange} placeholder= "Ej. Mascostas, ropa, belleza "/>
              <small>De tu ingreso destinas el {variablePorcentage}% por concepto de otros gastos variables. </small>
              <h4> Tengo un total de gasto variable de: ${sumVariableExp} al mes. </h4>
          </div>
      </form>
      <div className={stylesComponents.divValues}>
        <h3>La diferencia entre de mis ingresos y mis gastos es de: ${total} correspondiente al {sumt()}% total de mis ingresos</h3>
           <PolarChart data={dataChart}/> 
      </div>
    </div>
      );
}
 
export default Calculator ;
