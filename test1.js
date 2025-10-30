
function escalier(n){
    if(n === 1) return 1;
    if(n === 2) return 2;
    let a = 1;
    let b = 2;
    let somme = 0;
    for( i = 3 ; i<= n; i++ ){
    somme = a+b;
    a = b;
    b = somme;
   } 
    
    return b;

}

console.log(escalier(4));




