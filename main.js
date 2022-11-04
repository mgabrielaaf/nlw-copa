function createGame(player1, hour, player2){
    return `
        <li>
            <img src="./assets/${player1}.svg" alt="Bandeira do ${player1}">
            <strong>${hour}</strong>
            <img src="./assets/${player2}.svg" alt="Bandeira da ${player2}">
        </li>
    `
}

let delay = -0.5;
function createCard(date, day, games){
    delay = delay + 0.5;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div>
    `
}

document.querySelector('#cards').innerHTML = 
    createCard('24/11', 'quinta', 
        createGame("suica", "07:00", "camaroes") + 
        createGame("uruguai", "10:00", "coreias") + 
        createGame("portugal", "13:00", "gana") +
        createGame("brasil", "16:00", "servia")) +
    
    createCard('28/11', 'segunda', 
        createGame("camaroes", "07:00", "servia") + 
        createGame("coreias", "10:00", "gana") + 
        createGame("brasil", "13:00", "suica") + 
        createGame("portugal", "16:00", "uruguai"))