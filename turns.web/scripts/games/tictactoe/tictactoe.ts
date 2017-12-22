/// <reference path="../../turns.d.ts" />
namespace games.tictactoe {
    class tictactoe {
        victoryLength: number
        board: turns.design.Grid<number>;
        view: turns.ui.HtmlGridView<number>;

        constructor(element: JQuery) {
            console.log("tictactoe()");

            this.board = new turns.design.Grid(3, 3, 0);

            this.view = new turns.ui.HtmlGridView(element);
            this.view.attach(this.board, v => v.toString());

            this.view.draw();

            this.view.playerInput(0, this.place);
        }

        place = (playerIndex: number, row: number, col: number): boolean => {
            if (this.board.get(row, col) == 0) {
                this.board.set(row, col, playerIndex + 1);
                this.view.draw();

                if (this.checkVictory())
                    alert("Player: " + (playerIndex + 1) + " wins!");
                else
                    this.view.playerInput((playerIndex + 1) % 2, this.place);

                return true;
            }
            else {
                return false;
            }
        }

        checkVictory = (): boolean => {
            var cur = 0;            

            for (var r = 0; r < this.board.height; r++) {
                for (var c = 0; c < this.board.height; c++) {

                    var cur = this.board.get(r, c);

                    if (cur > 0) {
                        var len = 1;

                        for (var ro = r + 1; ro < this.board.width; ro++) {
                            if (this.board.get(ro, c) != cur)
                                break;
                            else
                                len++;
                        }

                        if (len >= this.board.width) {
                            return true;
                        }

                        len = 1;
                        for (var co = c + 1; co < this.board.height; co++) {
                            if (this.board.get(r, co) != cur)
                                break;
                            else
                                len++;
                        }

                        if (len >= this.board.height) {
                            return true;
                        }
                    }
                }
            }

            return false;
        }
    }

    turns.module("tictactoe", tictactoe);
}