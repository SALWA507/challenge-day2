function add(chaine){
let resultat ={};
for(i = 0; i <chaine.length ; i++ ){
const lettre = chaine[i];
if(resultat[lettre]){
resultat[lettre]++

}else{ resultat[lettre] = 1;
    }

 }
    

return resultat;
 }




 
console.log(add("hello"));






