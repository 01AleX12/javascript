'use strict';

/* Escribe un programa que calcula el salario neto semanal de un trabajador en función del número de horas trabajadas y la tasa de
impuestos de acuerdo a las siguientes hipótesis:

Las primeras 35 horas se pagan a tarifa normal.
Las horas que pasen de 35 se pagan a 1,5 veces la tarifa normal.

Las tasas de impuestos son:

Los primeros 500 euros son libres de impuestos.
Los siguientes 400 tienen un 25% de impuestos.
Los restantes un 45% de impuestos. Escribir nombre, salario bruto, tasas y salario neto */

let nombre = prompt('Dime el nombre del empleado');
let precioHora = parseFloat(prompt('Dime el precio al que se va a pagar la hora'));
let horasTrabajadas = parseFloat(prompt('Dime las horas trabajadas'));

// Función para calcular el salario bruto
function calcularSalarioBruto(horas, precioHora) {
    let salarioBruto = 0;

    if (horas <= 35) {
        salarioBruto = horas * precioHora;
    } else {
        salarioBruto = (35 * precioHora) + ((horas - 35) * precioHora * 1.5);
    }

    return salarioBruto;
}

// Función para calcular el salario neto
function calcularSalarioNeto(salarioBruto) {
    let salarioNeto = 0;
    let impuestos = 0;

    if (salarioBruto <= 500) {
        salarioNeto = salarioBruto; // No hay impuestos
    } else if (salarioBruto <= 900) {
        impuestos = (salarioBruto - 500) * 0.25; // 25% de impuestos entre 500 y 900
        salarioNeto = salarioBruto - impuestos;
    } else {
        impuestos = (400 * 0.25) + ((salarioBruto - 900) * 0.45); // 25% en los primeros 400 y 45% en lo que sobrepase 900
        salarioNeto = salarioBruto - impuestos;
    }

    return { salarioNeto, impuestos }; // Devolvemos tanto el salario neto como los impuestos
}

// Función para mostrar resultados
function mostrarResultados(horas, precioHora, nombre) {
    let salarioBruto = calcularSalarioBruto(horas, precioHora);
    let { salarioNeto, impuestos } = calcularSalarioNeto(salarioBruto);

    alert(`Nombre: ${nombre}`);
    alert(`Salario Bruto: ${salarioBruto.toFixed(2)} euros`);
    alert(`Impuestos: ${impuestos.toFixed(2)} euros`);
    alert(`Salario Neto: ${salarioNeto.toFixed(2)} euros`);
}

// Ejecutar la función para mostrar resultados
mostrarResultados(horasTrabajadas, precioHora, nombre);
