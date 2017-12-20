/// <reference path="../../turns.d.ts" />
namespace games.tictactoe {
    class tictactoe {

        constructor(element: JQuery) {
            console.log("tictactoe()");

            var board = new turns.design.Grid(4, 4, 0);

            var view = new turns.ui.HtmlGridView(element);

            console.log(board);

            view.attach(board, v => v.toString());

            board.set(2, 1, 1);

            view.draw();
        }
    }

    turns.module("tictactoe", tictactoe);
}