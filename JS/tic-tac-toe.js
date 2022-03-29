var gameList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var divList = ["div1", "div2",  "div3", "div4", "div5", "div6", "div7", "div8", "div9"];
let activerifyIfPlayerWinn = false;
let activation = false;
let count = 0;
let countPlayer1 = 0;
let countPlayer2 = 0;
var player = "Player O";

//
function addNumbers(option){
    if (activation == true){
        document.querySelector('#player').innerText = player + ' WIN';
    }else if (activation == "draw"){
        document.querySelector('#player').innerText = 'NO PLAYER HAS WON ';
    }else{
        setGamePlayer(option, player);
        if (activation == true){
            document.querySelector('#player').innerText = player + ' WIN';
            if (player == "Player O"){
                countPlayer1 = countPlayer1 + 1;
                document.querySelector('#score3').innerText = countPlayer1;
            }else{ 
                countPlayer2 = countPlayer2 + 1;
                document.querySelector('#score4').innerText = countPlayer2 ;
            }
        
        }
        
    }

}
function funtionPlayerSet(y, setplayer, x2){
    if (setplayer == "Player O"){
        gameList[x2] = 1000;
        document.getElementById(y).innerHTML =  '<img class="image" src="/Images/cero.png"  alt="Image logo" style="width: 100px; height: 120px; " />';
        activation = verifyIfPlayerWinn(gameList, count);
        playerChangeOption();
        return "Player X";

    }else if (setplayer == "Player X"){ 
        gameList[x2] = 2000;
        document.getElementById(y).innerHTML =  '<img class="image" src="/Images/x.png"  alt="Image logo"  />';
        activation = verifyIfPlayerWinn(gameList, count);
        playerChangeOption();
        return "Player O";

    }else{
        document.getElementById('player').innerHTML = next;
    }
    
}

function setGamePlayer(x, playerSet){

    if (gameList[x] == 1000 || gameList[x] == 2000){
        document.getElementById('player6').innerHTML = "NOOOOOOOOOOOOOOOOO";

    }else{
        if (x == 0){
            funtionPlayerSet("div1", playerSet, x)
        }else if (x == 1){
            funtionPlayerSet("div2", playerSet, x)
        }else if (x == 2){
            funtionPlayerSet("div3", playerSet, x)
        }else if (x == 3){
            funtionPlayerSet("div4", playerSet, x)
        }else if (x == 4){
            funtionPlayerSet("div5", playerSet, x)
        }else if (x == 5){
            funtionPlayerSet("div6", playerSet, x)
        }else if (x == 6){
            funtionPlayerSet("div7", playerSet, x)
        }else if (x == 7){
            funtionPlayerSet("div8", playerSet, x)
        }else if (x == 8){
            funtionPlayerSet("div9", playerSet, x)
        }

    }

}


const playerChangeOption = function () {
    let playerOptionchange = changePlayerToOtherPlayer(player);
    document.getElementById('player').innerHTML = playerOptionchange;
    player = playerOptionchange;
  };
  
var changePlayerToOtherPlayer = (next) => {
    if (next == "Player O"){
        return "Player X";
    }else if (next == "Player X"){ 
        return "Player O";
    }else{
        document.getElementById('player').innerHTML = next;
    }
};


function verifyIfPlayerWinn(list, temp){
    let winn = false;
    if ((temp)< 8){
        if (((list[0] == 1000 && list[1] == 1000 && list[2] == 1000) || (list[3] == 1000 && list[4] == 1000 && list[5] == 1000) || (list[6] == 1000 && list[7] == 1000 && list[8] == 1000) || (list[0] == 1000 && list[3] == 1000 && list[6] == 1000) || (list[1] == 1000 && list[4] == 1000 && list[7] == 1000) ||(list[2] == 1000 && list[5] == 1000 && list[8] == 1000) || (list[0] == 1000 && list[4] == 1000 && list[8] == 1000) || (list[2] == 1000 && list[4] == 1000 && list[6] == 1000) ) || ((list[0] == 2000 && list[1] == 2000 && list[2] == 2000) || (list[3] == 2000 && list[4] == 2000 && list[5] == 2000) || (list[6] == 2000 && list[7] == 2000 && list[8] == 2000) || (list[0] == 2000 && list[3] == 2000 && list[6] == 2000) || (list[1] == 2000 && list[4] == 2000 && list[7] == 2000) ||(list[2] == 2000 && list[5] == 2000 && list[8] == 2000) || (list[0] == 2000 && list[4] == 2000 && list[8] == 2000) || (list[2] == 2000 && list[4] == 2000 && list[6] == 2000))){
            winn = true;
            player = changePlayerToOtherPlayer(player);
        }else{
            winn = false;
            count = count + 1;
            }
    }else{
        if (((list[0] == 1000 && list[1] == 1000 && list[2] == 1000) || (list[3] == 1000 && list[4] == 1000 && list[5] == 1000) || (list[6] == 1000 && list[7] == 1000 && list[8] == 1000) || (list[0] == 1000 && list[3] == 1000 && list[6] == 1000) || (list[1] == 1000 && list[4] == 1000 && list[7] == 1000) ||(list[2] == 1000 && list[5] == 1000 && list[8] == 1000) || (list[0] == 1000 && list[4] == 1000 && list[8] == 1000) || (list[2] == 1000 && list[4] == 1000 && list[6] == 1000) ) || ((list[0] == 2000 && list[1] == 2000 && list[2] == 2000) || (list[3] == 2000 && list[4] == 2000 && list[5] == 2000) || (list[6] == 2000 && list[7] == 2000 && list[8] == 2000) || (list[0] == 2000 && list[3] == 2000 && list[6] == 2000) || (list[1] == 2000 && list[4] == 2000 && list[7] == 2000) ||(list[2] == 2000 && list[5] == 2000 && list[8] == 2000) || (list[0] == 2000 && list[4] == 2000 && list[8] == 2000) || (list[2] == 2000 && list[4] == 2000 && list[6] == 2000))){
            winn = true;
            player = changePlayerToOtherPlayer(player);
        }else{
            winn = 'draw';
            }

        }
    return winn;

}

function playAgain(){
    for (var i = 0; i <= 8; i++){gameList[i] = i + 1;}
    for (var j = 0; j <= 8; j++) {document.getElementById(divList[j]).innerHTML = ''; }
    document.getElementById('player-reset').innerHTML = 'Play Again';
    document.getElementById('player').innerHTML = 'PLayer O';
    activerifyIfPlayerWinn = false;
    activation = false;
    count = 0;
    player = "Player O";
}
