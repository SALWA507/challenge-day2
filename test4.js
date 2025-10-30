function sommenegatif(tab){

let somme = 0;
for(i=0;i<tab.length;i++){
if(tab[i]<0){
    break;
}
   somme += tab[i];
  } 
return somme



}
const nombre =[3,4,5,-6,7];
console.log(sommenegatif(nombre));