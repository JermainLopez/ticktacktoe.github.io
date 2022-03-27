#Jermain Lopez 
game_list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
active = True
activation = False
count = 1
def main():
    player = "PLayer O"
    print("---------------------------------------------------------------")
    print("-              Welcome to Tic-Tac-Toe Game                    -")
    print("---------------------------------------------------------------")
    while active == True :
        global count
        global activation
        if activation == True:
            print("Game over")
            print("---------------------------------------------------------------")
            print("-      Choose a number where you want to place your brand     -")
            print("---------------------------------------------------------------")
            print(f"{game_list[0]} | {game_list[1]} | {game_list[2]}")
            print('- + - + -')
            print(f"{game_list[3]} | {game_list[4]} | {game_list[5]}")
            print('- + - + -')
            print(f"{game_list[6]} | {game_list[7]} | {game_list[8]}")
            print()
            print("---------------------------------------------------------------")
            print(f"-                      {player}  WIN                       -")
            print("---------------------------------------------------------------")
            break
        elif activation == "draw":
            print("Game over")
            print("---------------------------------------------------------------")
            print("-      Choose a number where you want to place your brand     -")
            print("---------------------------------------------------------------")
            print(f"{game_list[0]} | {game_list[1]} | {game_list[2]}")
            print('- + - + -')
            print(f"{game_list[3]} | {game_list[4]} | {game_list[5]}")
            print('- + - + -')
            print(f"{game_list[6]} | {game_list[7]} | {game_list[8]}")
            print()
            print("---------------------------------------------------------------")
            print(f"-                    NO PLAYER HAS WON                       -")
            print("---------------------------------------------------------------")
            break
        else:
            player = player1_or_2(player)
            option = int(display_game(game_list, player))
            mark_position(game_list, option, player)
            activation = winner_or_draw(game_list, count)
            print(count)
            print(activation)

    print("END")
        
        


def display_game(list, player):
    print()
    print("---------------------------------------------------------------")
    print("-      Choose a number where you want to place your brand     -")
    print("---------------------------------------------------------------")
    print(f"{list[0]} | {list[1]} | {list[2]}")
    print('- + - + -')
    print(f"{list[3]} | {list[4]} | {list[5]}")
    print('- + - + -')
    print(f"{list[6]} | {list[7]} | {list[8]}")
    print()
    print("---------------------------------------------------------------")
    option = input(f"{player}'s turn to select a box from 1 to 9: ")
    return option

def player1_or_2(next):
    if next == "PLayer O":
        return "PLayer X"
    elif next == "PLayer X":
        return "PLayer O"

def winner_or_draw(list, temp):
    winn = False
    global count 
    if temp < 9:
        if (list[0] == list[1] == list[2] or list[3] == list[4] == list[5] or list[6] == list[7] == list[8] or
            list[0] == list[3] == list[6] or list[1] == list[4] == list[7] or list[2] == list[5] == list[8] or
            list[0] == list[4] == list[8] or list[2] == list[4] == list[6]):
            print("win")
            winn = True
            count = 0

        else:
            print("zona prohibida")
            winn = False
            count += 1
    else:
        if (list[0] == list[1] == list[2] or list[3] == list[4] == list[5] or list[6] == list[7] == list[8] or
            list[0] == list[3] == list[6] or list[1] == list[4] == list[7] or list[2] == list[5] == list[8] or
            list[0] == list[4] == list[8] or list[2] == list[4] == list[6]):
            print("win")
            winn = True
            count = 0

        else:
            print("Draw")
            count = 0
            winn = 'draw'
    return winn

def mark_position(list, option, player):
    if option > 0 and option < 10:
        if list[option - 1] == "X" or list[option - 1] == "O":
            print("---------------------------------------------------------------")

            print("-   The position is already filled, choose an available one   -")
            option = int(display_game(game_list, player))
            mark_position(game_list, option, player)
        else:
            if player == "PLayer X":
                game_list[option - 1] = "X"
            elif player == "PLayer O":
                game_list[option - 1] = "O"
def validation_game(temp, add):
    if temp == True:
        print("Win")
        return add * (-1)
    else:
        return 1

if __name__ == "__main__":
    main()