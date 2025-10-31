Taxis = [ 
{ id: 1, position: 5, available: false, timeRemaining: 3, totalRides: 
0 }, 
{ id: 2, position: 12, available: true, timeRemaining: 0, 
totalRides: 0 }, 
{ id: 3, position: 20, available: false, timeRemaining: 2, 
totalRides: 0 } 
]
Requests = [ 
{ reqId: 1, position: 10, duration: 3, time: 0 }, 
{ reqId: 2, position: 3, duration: 4, time: 2 }, 
{ reqId: 3, position: 18, duration: 2, time: 4 }, 
{ reqId: 4, position: 7, duration: 5, time: 5 } 
]

let attend = [];

function trTaxiProche(Taxis, clientPos) {
   
    let TaxiProche;
  let distanceProche;
for (let i = 0; i < Taxis.length; i++) {
    if (Taxis[i].available) {
      const distanceCurrent = Math.abs(clientPos - Taxis[i].position);

      if (TaxiProche === undefined || distanceCurrent < distanceProche) {
        TaxiProche = Taxis[i];
        distanceProche = distanceCurrent;
     }  
   
   }
    }
 return TaxiProche
}
 const clientPos = 12;
const TaxiChoisi = trTaxiProche(Taxis, clientPos);
console.log(TaxiChoisi)




function requistproche(Requests){
 let currentClient = Requests[0];

 for(let i = 1 ; i < Requests.length ; i++){ 

 if(currentClient.time > Requests[i].time){

 currentClient = Requests[i]; 
  
}
}
  return currentClient;
}
const clientProche = requistproche(Requests);
console.log( clientProche );


function duréetrajet(Taxis){
for (let i = 0; i < Taxis.length; i++) {
    if (!Taxis[i].available) {
        Taxis[i].timeRemaining -= 1;
        if (Taxis[i].timeRemaining <= 0) {
            Taxis[i].available = true;
            Taxis[i].timeRemaining = 0;
  
        
    Taxis[i].position = clientPos;

}
    
    }

}
for (let i = 0; i < Taxis.length; i++) {
    if (Taxis[i].available) {
        console.log("Taxi " + Taxis[i].id + " → Disponible (position : " + Taxis[i].position + ")");
    } else { console.log("Taxi " + Taxis[i].id + " → " + Taxis[i].timeRemaining + " min restantes");
}

} 
}

 constclientPos = 12;
duréetrajet(Taxis);

function gererdemandes(Taxis, Requests) {
  for (let i = 0; i < Requests.length; i++) {
    const req = Requests[i];
    let taxi = trTaxiProche(Taxis, req.position);

    if (taxi){
      
      taxi.available = false;
      taxi.timeRemaining = req.duration;
      taxi.position = req.position;
      taxi.totalRides++;
      console.log("Taxi prend la demande " + req.reqId);
    } else {
      
      attend.push(req);
      console.log("Demande ajoutée à la liste d'attente " + req.reqId);
    }


    for (let j = 0; j < attend.length; j++) {
      let nextReq = attend[j];
      let TaxiLibre = trTaxiProche(Taxis, nextReq.position);

      if (TaxiLibre) {
        Taxilibre.available = false;
        Taxilibre.timeRemaining = nextReq.duration;
        Taxilibre.position = nextReq.position;
        Taxilibre.totalRides++;
        console.log("Taxi prend la demande en attente " + nextReq.reqId);
        attend.splice(j, 1); 
        j--; 
      }
    }
  }

  
  for (let i = 0; i < Taxis.length; i++) {
    if (Taxis[i].available) {
      console.log("Taxi " + Taxis[i].id + " → Disponible (position : " + Taxis[i].position + ")");
    } else {
      console.log("Taxi " + Taxis[i].id + " → " + Taxis[i].timeRemaining + " min restantes");
    }
  }
}


gererdemandes(Taxis, Requests);


















