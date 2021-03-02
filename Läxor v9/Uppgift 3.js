/*Övning 3.
I denna övning skall vi gå tillbaka till Malin och Emma och deras BMI!
 Denna gång vill jag att ni använder objekt för att representera beräkningarna
  Beräkningarna var om ni kommer ihåg följande: BMI = vikt / längd ** 2 eller vikt / (längd * längd).

Uppgift:
1.För var och en av dem skapa ett objekt med deras namn och längd.
2.Skapa en metod för att beräkna BMI värdet.
3.Lagra värdet i en egenskap.
4.Skriv ut konsol fönstret vem som högst BMI tillsammans med namn och BMI värdet. T ex Malins BMI(värde) är högre än Emmas BMI(värde)

Testdata:
Data1: Malin vikt 69 kg längd 1.73 m, Emma vikt 58 kg längd 1.66 m
Data2: Malin vikt 62 kg längd 1.78 m, Emma vikt 56 kg längd 1.64 m*/

const syskon =[];

const malin = {
    längd: 1.73,
    vikt: 69,
    bmi: 0
};
const emma = {
    längd: 1.66,
    vikt: 58,
    bmi: 0
};
syskon.push(emma, malin);


const räknabmi = function(){
malin.bmi = malin.vikt/(malin.längd*2);
emma.bmi = emma.vikt/(emma.längd*2);

    if(malin.bmi>emma.bmi){
        console.log(`Malins BMI: ${parseInt(malin.bmi)} har ett högre värde än Emmas BMI: ${parseInt(emma.bmi)}.`)
    }
    else{
        console.log(`Emmas BMI: ${parseInt(emma.bmi)} har ett högre värde än Malins BMI: ${parseInt(malin.bmi)}.`)  
    }
};

räknabmi();


