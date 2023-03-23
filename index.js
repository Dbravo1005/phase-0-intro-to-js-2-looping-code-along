const names = ['Guadalupe', 'Ollie', 'Aki']

function writeCards(array, event){
    const resultArray = [];
    for (let i = 0; i < array.length; i++) {
    resultArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return resultArray
}

writeCards(['Guadalupe', 'Ollie', 'Aki'], "surprise");

//function countDown(10){
  // let i = 0; while(i < 1); 
   //const start = 13
//}
//console.log(countDown);

function countDown(number){
    while (number >= 0 ){
    console.log(number--);
    }
}