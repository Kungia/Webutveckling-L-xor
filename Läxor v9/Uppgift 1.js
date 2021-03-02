/*Övning 1.
I denna övningen skall ni ha en array som representerar veckodagarna som heltal, [1,2,3,4,5,6,7]. 
Sedan vill jag att ni skriver ut i konsol fönstret följande sträng.
Dag 1 är måndag, dag 2 är tisdag osv... Där det numeriska värdet hämtas ifrån listan.

Gör detta genom att skapa en funktion "Print weekdays" som tar en array "weekdays" och skriver ut ett resultat som ovan.*/

const weekdays = [1,2,3,4,5,6,7];

const weekdays2 = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday', 
  'Saturday',
  'Sunday'  
];

const PrintWeekdays = function(){
    var i;
    for (i = 0; i < weekdays.length; i++) {
        console.log(`Hello, day ${weekdays[i]} is a ${weekdays2[i]}`);
    }}
    console.log(PrintWeekdays(weekdays,weekdays2));


