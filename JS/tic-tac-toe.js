const game_list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let active = false;
let activation = false;
let count = 1;

function addNumbers(){
    let player = "PLayer O"
    if (activation == true){
        document.querySelector('#container').innerText = player + 'WIN';
        document.querySelector('#div1').innerText = game_list[0];
        document.querySelector('#div2').innerText = game_list[1];
        document.querySelector('#div3').innerText = game_list[2];
        document.querySelector('#div4').innerText = game_list[3];
        document.querySelector('#div5').innerText = game_list[4];
        document.querySelector('#div6').innerText = game_list[5];
        document.querySelector('#div7').innerText = game_list[6];
        document.querySelector('#div8').innerText = game_list[7];
        document.querySelector('#div9').innerText = game_list[8];



    }else if (activation == "draw"){
        document.querySelector('#container').innerText = 'NO PLAYER HAS WON ';
        document.querySelector('#div1').innerText = '2 + 3';
        document.querySelector('#div2').innerText = game_list[1];
        document.querySelector('#div3').innerText = game_list[2];
        document.querySelector('#div4').innerText = game_list[3];
        document.querySelector('#div5').innerText = game_list[4];
        document.querySelector('#div6').innerText = game_list[5];
        document.querySelector('#div7').innerText = game_list[6];
        document.querySelector('#div8').innerText = game_list[7];
        document.querySelector('#div9').innerText = game_list[8];
    }else{
        const player = player1_or_2(player);
        document.querySelector('#container').innerText = player;
        const option = int(display_game(game_list, player))
        mark_position(game_list, option, player)
        const activation = winner_or_draw(game_list, count)


    }

}
function player1_or_2(next){
    if (next == "Player O"){
        return "PLayer X";
    }else if (next == "Player X"){
        return "PLayer O";
    }
}


function display_game(list, playeroption){
    document.querySelector('#container').innerText = player + "'s turn to select a box from 1 to 9:";
    document.querySelector('#div1').innerText = game_list[0];
    document.querySelector('#div2').innerText = game_list[1];
    document.querySelector('#div3').innerText = game_list[2];
    document.querySelector('#div4').innerText = game_list[3];
    document.querySelector('#div5').innerText = game_list[4];
    document.querySelector('#div6').innerText = game_list[5];
    document.querySelector('#div7').innerText = game_list[6];
    document.querySelector('#div8').innerText = game_list[7];
    document.querySelector('#div9').innerText = game_list[8];

}


addNumbers();
function hola(y){
    var textodeldiv = document.getElementById(y).innerHTML;
    document.getElementById(y).innerHTML =  '<img class="image" src="/Images/x.png"  alt="Image logo"  />';
}

function hola2(x){
    if (x == 1){
        hola("div1")
    }else if (x == 2){
        hola("div2")
    }

}