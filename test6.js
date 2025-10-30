function countvoyelles(mots){
let count = 0;
let  voyelles = "a e i o u"
for(i = 0;i<mots.length;i++){
if(voyelles.includes(mots[i])){

    count++
}

}

console.log(count);
}

countvoyelles("salwa");

