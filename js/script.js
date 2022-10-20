// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	            scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede. Se non vi sentite particolarmente creativi, potete prendere uno spunto dallo screenshot allegato.
// Consigli del giorno:
// Ragioniamo come sempre a step.
// Prima la logica in italiano e poi traduciamo in codice.
// E ricordiamoci che console.log() è nostro amico!
// Buon lavoro!
//recupero elementi row dall'html




//[*]Creare array di oggetti con le informazioni fornite 
const arrayTeamPerson = [
    {
        name : "Wayne Barnett",
        role : "Founder & CEO",
        image : "wayne-barnett-founder-ceo.jpg"
    },
    {
        name : "Angela Caroll",
        role : "Chief Editor",
        image : "angela-caroll-chief-editor.jpg"
    },
    {
        name : "Walter Gordon",
        role : "Office Manager",
        image : "walter-gordon-office-manager.jpg"
    },
    {
        name : "Angela Lopez",
        role : "Social Media Manager",
        image : "angela-lopez-social-media-manager.jpg"
    },
    {
        name : "Scott Estrada",
        role : "Developer",
        image : "scott-estrada-developer.jpg"
    },
    {
        name : "Barbara Ramos",
        role : "Graphic Designer",
        image : "barbara-ramos-graphic-designer.jpg"
    }
];
//Recuoper row dall'html
const teamRow = document.querySelector(".row");
//[*]Stampare in console tutte le informazioni 
//creo ciclo for per stampare tutte gli oggetti e relativi valori  all'interno dell'array 
//[*]Stampare le stesse informazioni su DOM sottoforma di stringhe
for (let i = 0 ; i<arrayTeamPerson.length ; i++){
    const thisTeamPerson = arrayTeamPerson[i];
    //stampo in console tutte le informazioni
    console.log(thisTeamPerson);
    //Stampo nel dom tutte le informazioni
    teamRow.innerHTML += `
    <div class="card">
        <img src="img/${thisTeamPerson.image}" alt="">
        <h2 class="name">${thisTeamPerson.name}</h2>
        <p class="role">${thisTeamPerson.role}</p>
    </div>
    `
}

//recupero bottone dall'html
const btnAdd = document.getElementById("add");
console.log(btnAdd);

btnAdd.addEventListener("click" , function(){
    const userInputName = prompt("inserisci il nome del nuovo membro");
    const userInputRole = prompt("Inserisci Il ruolo del nuovo membro");
    const userInputImage = "https://picsum.photos/200/200";
    const newMember ={
        name : userInputName,
        role : userInputRole,
        image : userInputImage
    }
    arrayTeamPerson.push(newMember);
    teamRow.innerHTML += `
    <div class="card">
        <img src="${newMember.image}" alt="">
        <h2 class="name">${newMember.name}</h2>
        <p class="role">${newMember.role}</p>
    </div>
    `
})



//Funzione per richiedere all'utente nuovi membri 





