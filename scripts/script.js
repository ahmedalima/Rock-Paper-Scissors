
let words = ["Rock", "Paper", "Scissors"]
// function that randomly returns one of the valid words
function computerPlay() {
    return (words[Math.floor(Math.random()*2)])
}


// function that returns string of whether the player is loser or winner
// also, it states user word and computer word
function result(state,beaten, beater) {
    return `You ${state.toString().toUpperCase()}, ${beater} beats ${beaten}`
}


function round(playerSelection, computerSelection) {
    // look for the user selection then compare it with computer selection
    // return an array, the first element is statement of being loser or winner
    // second element is 0 which indicates user is  loser
    // or 1 which means the user is winner

    //make the entries lowercase
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // in case of tie, end the round and return the function
    if (playerSelection == computerSelection) {
        return ["Play Again!", "Tie"]
    }
    // determine the user choice and compare it with computer choice
    // then return the function
    switch(playerSelection) {
        case "rock":
            if (computerSelection == "paper") {
                return [result("lose",playerSelection, computerSelection), 0]
            }
            else {
                return [result("win","Scissors", "rock"), 1]
            }
        case "paper":
            if (computerSelection == "scissors") {
                return [result("lose","paper", "scissors"), 0]
            }
            else {
                return [result("win", playerSelection, computerSelection), 1]
            }
        case "scissors":
            if (computerSelection == "paper") {
                return [result("win", computerSelection, playerSelection), 1]
            }
            else {
                return [result("lose", playerSelection, computerSelection), 0]
            }
            // if user input doen't match any case above this means the entry is invalid
        default:
            return ["Please Enter one of the valid words \"Scissors, Rock, Paper\"", "not valid entry"]
        }
    }


function game() {
    // functions that simulate the game of five rounds
    // return string statement of the winner with the score

    // variables for holding scores
    let player = 0
    let computer = 0;
    // loop five times and play the game
    for (let o = 1; o < 6; o++) {
        // prompot the user to get his/her input
        player_choice = window.prompt("Please Enter a Valid Word!", "rock")
        //play a round , the return value is an array
        // the values of the returned array , the first element is statement of being loser or winner
        // second element is 0 which indicates user is  loser
        // or 1 which means the user is winner         
        result_of_round = round(player_choice, computerPlay());
        // the string statement of user being loser or winner, first value of returned array
        let string_state = result_of_round[0];
        // the numerical statement of user being loser or winner, second value of returned array
        let num_state = result_of_round[1];
        // according to result of round, increment the score of the winner
        if (num_state == 1) {
            player += 1
        }
        else if (num_state == 0) {
            computer += 1
        }
        else {
            alert(`${string_state} | ${num_state}`)
        }
        // print the string statement only if the entry is valid and not a tie
        if (num_state < 2) {
            console.log(`Round Number ${o}, ${string_state}`)
        }
        // print both scores in each round
        console.log(`Your Score is: ${player} \n Computer Score is: ${computer}`)
    }
    // choose the winner to return
    winner = "";
    winner_score = 0
    if (player > computer) {
        winner = "You"
        winner_score = player
    }
    else {
        winner = "Computer"
        winner_score = computer
    }
    // print the winner of the whole game - 5 rounds
    return `${winner} is the winner with score ${winner_score}`
}
