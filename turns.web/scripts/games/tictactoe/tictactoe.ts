/// <reference path="../../turns.d.ts" />
namespace games.tictactoe {
    class tictactoe {

        constructor() {
            console.log("tictactoe()");
        }
    }

    turns.module("tictactoe", tictactoe);
}