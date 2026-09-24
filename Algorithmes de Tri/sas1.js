const prompt = require('prompt-sync')();

const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
let cont=1;
const tickets = [];
let n;

do{
    console.log(`
        ================================= 
        RAILWAY MANAGER 
        ================================= 
        1. Afficher les trajets 
        2. Acheter un ticket 
        3. Afficher les tickets 
        4. Annuler un ticket 
        5. Rechercher un ticket 
        6. Filtrer les trajets 
        7. Trier les trajets 
        0. Quitter 
        `);
        n= Number(prompt("entrez un chouix "));

        switch (n) {
    case 1:
        afficher();
        break;
    case 2:acheter();
        // acheter();
        break;
    case 3:
       affichertickets();
        break;
    case 4:
    //    Annuelertickets();
        break;
    case 5:console.log("case5");        
        break;
    case 6:console.log("case6");            
        break;
    case 7:console.log("case7");        
        break;
    default:
        console.log("choix introuvable");          
}

    
}
while(n !== 0)




function afficher(){
    for(let trajet of trips){
        console.log(`
            #${trajet.id} ${trajet.departure} → ${trajet.destination} 
            Départ : ${trajet.departureTime} 
            Arrivée : ${trajet.arrivalTime} 
            Prix : ${trajet.price} DH 
            Places disponibles : ${trajet.price}
            `);        
    }
}
function acheter(){
    console.log(`==ACHETER UN TICKET==`);
    let nomPassager = prompt("entrez un nom de passager ");
    let identifiant = Number(prompt("entrez identifer de trajet :"));
    let tripfond = false;

    for (let i =0 ; i<trips.length; i++) {
            if(trips[i].id === identifiant){
            tripfond=true;

            if(trips[i].availableSeats <=0 ){
                console.log("train complet")
                return;
            }else{
                let num=0;
                for (let t of tickets) {
                    if (t.tripId === trips[i].id) {
                        num++;
                    }
                }
                const ticket = {
                    id:cont,
                    nom:nomPassager,
                    tripld:identifiant,
                    price: trips[i].price,
                    place: num,
                }
                tickets.push(ticket);
                cont++;
                trips[i].availableSeats--;   
                }

            }
            if(!tripfond){
                console.log("trajet introvable");
                return;       
        }
    }
console.log(`Ticket réservé avec succès`);
console.log(tickets);

}
function affichertickets(){
    console.log(`==TICKETS==`);
    for(let ticket of tickets){
        console.log(`
            id:${ticket.id},
            nom:${ticket.nom},
            tripld:${ticket.tripId},
            price: ${ticket.price},
            place: ${ticket.place},
            `);
        
    }
}
function Annuelertickets(){

}




