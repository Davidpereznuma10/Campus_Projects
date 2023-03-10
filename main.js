// Given a number, indicate if it is even or odd and if it is greater than 10.
let number=prompt(`type a number`);
if(10<number && number%2!=0){
    console.log(`this number ${number} is odd and greater than 10`)
}else if(10>number && number%2!=0){
    console.log(`this number ${number} is odd and smaller than 10`)
}else if(10<number && number%2==0){
    console.log(`this number ${number} is even and greater than 10`)
}else if(10>number && number%2==0){
        console.log(`this number ${number} is even and smaller than 10`)
}else{console.log(`this is not a number ${Number}`)}