var possibilities = [];

var shuffleForm = document.querySelector("#shuffle");
var shuffler = document.querySelector("#shuffler");

shuffleForm.addEventListener('submit', e => {
    e.preventDefault();

    var player = document.querySelector("#newPlayer");

    if (player.value == '') {
        window.alert('Nenhum jogador foi adicionado')
        return;
    }

    if (possibilities.indexOf(player.value) >= 0) {
        window.alert('Essa pessoa já foi adicionada!')
        player.value = '';
        return;
    }

    possibilities.push(player.value);
    player.value = '';

    refreshPossibilites();

});

shuffler.addEventListener('click', e => {
    e.preventDefault();

    var shufflePossibilites = shuffle(possibilities);

    document.querySelector("#team1").innerHTML = '';
    document.querySelector("#team2").innerHTML = '';

    var index = 0;
    for (var p of shufflePossibilites) {
        if (index % 2 == 0) {
            document.querySelector("#team1").innerHTML += `<li>${p}</li>`
        } else {
            document.querySelector("#team2").innerHTML += `<li>${p}</li>`
        }
        index++;
    }
})

function refreshPossibilites() {
    document.querySelector("#possibilities").innerHTML = 'Jogadores:';
    index = 0;
    for (var p of possibilities) {
        if (index == 0) {
            document.querySelector("#possibilities").innerHTML += ' ' + p;
        } else {
            document.querySelector("#possibilities").innerHTML += ', ' + p;
        }

        index++;
    }
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}