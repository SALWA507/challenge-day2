function inverse(tb){
    
let invtab = [];
for(i=tab.length-1;i>=0;i--){
    invtab.push(tab[i]);

}
for(i=tab.length-1;i>=0;i--){
    invtab.unshift(tab[i]);
}
return invtab;
}

const tab = [2,3,4];
console.log(inverse(tab));