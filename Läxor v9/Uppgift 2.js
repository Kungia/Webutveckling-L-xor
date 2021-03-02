/*Övning 2.
I dessa Corona tider när vi inte kan gå ut och äta så får vi hitta på något annat sätt att roa oss på.

Jag vill att ni skapar en kalkylator för hantering av dricks (kan vara bra och ha när vi äntligen får gå på restaurang igen😁).
Dricksregler: Om notan är mellan 500 och 1000kr så ger vi 15% i dricks i övrigt 10%.

Skapa en funktion "calculateTip" som tar en nota med vilket belopp som helst och returnerar korrekt dricks.
Jag vill att ni provar de olika typerna av funktioner som vi talat om.
Testa sedan ett värde på 650kr

---NÄSTA STEG ÄR ATT ANVÄNDA EN ARRAY---
Skapa en array "RestaurangNoter" med nedanstående testdata.
Skapa en array "Dricks" som skall innehålla dricksen för varje nota. Som räknas fram av tidigare funktion.

---BONUS---
Skapa ytterligare en array för totalbeloppen dvs nota + dricks

Testdata:
275, 450, 550, 990, 1240 */

const restaurangNotor = [50, 75, 200, 325, 350, 525, 800, 900, 1050, 1125];
const dricks = [];
const totalbeloppen = [];

const calculateTip = function(){
    var i;
    let total = 0;
    let dricksen = 0;
    for (let nota of restaurangNotor){
        if (nota>=500&&nota<=1000){
            console.log(dricksen = nota*0.15)
            total = dricksen+nota
            dricks.push(dricksen)
            totalbeloppen.push(total)
        }
        else{
            console.log(dricksen = nota*0.10)
            total = dricksen+nota
            dricks.push(dricksen)
            totalbeloppen.push(total)
        }
    } 
};
console.log(calculateTip(restaurangNotor));
console.log(dricks);
console.log(totalbeloppen);