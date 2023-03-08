const Table = [
    {Tradicional: "90-100", Range: "12-14", Letter: "A", Rating: "4", Proficiency_Level_With_Standart: "Exceeds Proficiency"},
    {Tradicional: "80-89", Range: "9-11", Letter: "B", Rating: "3", Proficiency_Level_With_Standart: "Demostrate Proficiency"},
    {Tradicional: "70-79", Range: "6-8", Letter: "C", Rating: "2", Proficiency_Level_With_Standart: "Aprochaes Proficiency"},
    {Tradicional: "60-69", Range: "3-5", Letter: "D", Rating: "1", Proficiency_Level_With_Standart: "Fails well below Proficiency"},
    {Tradicional: "<60", Range: "1-2", Letter: "E", Rating: "0", Proficiency_Level_With_Standart: "Lucks all Proficiency"},
    {Tradicional: "0", Range: "0", Letter: "F", Rating: "0", Proficiency_Level_With_Standart: "No attemp Made"},
]

console.table(Table);

    let Filtrar1 = Table.find(function(line){
    return( line.Tradicional ==="90-100");
    });
    let Filtrar2 = Table.find(function(line){
    return( line.Tradicional ==="80-89");
    });    
    let Filtrar3 = Table.find(function(line){
    return( line.Tradicional ==="70-79");
    });
   let Filtrar4 = Table.find(function(line){
    return( line.Tradicional ==="60-69");
    });
   let Filtrar5 = Table.find(function(line){
    return( line.Tradicional ==="<60");
    });
   let Filtrar6 = Table.find(function(line){
    return( line.Tradicional ==="0");
    });

const note = prompt("Input your note");

console.log('Your note was: ',note,', For that reaseon your Standard Grading System is: ')

switch(true){
    case note >=90 && note<=100 || note >=12 && note <=14:
        console.log(Filtrar1);
    break;
    case note >=80 && note<=89 || note >=9 && note <=11 :
        console.log(Filtrar2);
    break;
    case note >=70 && note<=79 || note >=6 && note <=8 :
        console.log(Filtrar3);
    break;
    case note >=60 && note<=69 || note >=3 && note <=5 :
        console.log(Filtrar4);
    break;
    case note <=60 || note >=1 && note <=2 :
        console.log(Filtrar5);
    break;
    case note =0:
        console.log(Filtrar6);
    break;
};
