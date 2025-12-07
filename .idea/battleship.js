let location1 = Math.floor(Math.random() * 5);
let location2 = location1 + 1;
let location3 = location2 + 1;
let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

while(isSunk == false) {
    guess = prompt("Guess the position of the battleship (enter a number from 0-6):");

    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!");
    } else {
        guesses += 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            hits += 1;
            alert("You hit the battleship!");

            if (hits == 3) {
                isSunk = true;
                alert("You sank my battleship!")
            }
        } else {
            alert("Miss!");
        }
    }
}
let stats = "You sank the battleship in " + guesses + " guesses, which means your shooting accuracy was " + (3/guesses) * 100 + "%";

alert(stats);