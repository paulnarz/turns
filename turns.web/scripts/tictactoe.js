var games;
(function (games) {
    var tictactoe;
    (function (tictactoe_1) {
        var tictactoe = (function () {
            function tictactoe(element) {
                this.place = function (playerIndex, row, col) {
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
                };
                console.log("tictactoe()");
                this.board = new turns.design.Grid(4, 4, 0);
                this.view = new turns.ui.HtmlGridView(element);
                this.view.attach(this.board, function (v) { return v.toString(); });
                this.view.draw();
                this.view.playerInput(0, this.place);
            }
            tictactoe.prototype.checkVictory = function () {
                var cur = 0;
                for (var r = 0; r < this.board.height; r++) {
                    for (var c = 0; c < this.board.height; c++) {
                        var cur = this.board.get(r, c);
                        if (cur > 0) {
                            var len = 0;
                            for (var ro = r + 1; ro < this.board.width; ro++) {
                                if (this.board.get(ro, c) != cur)
                                    break;
                            }
                            if (len >= this.board.width) {
                                return true;
                            }
                            for (var co = c + 1; co < this.board.height; co++) {
                                if (this.board.get(r, co) != cur)
                                    break;
                            }
                            if (len >= this.board.height) {
                                return true;
                            }
                        }
                    }
                }
                return false;
            };
            return tictactoe;
        }());
        turns.module("tictactoe", tictactoe);
    })(tictactoe = games.tictactoe || (games.tictactoe = {}));
})(games || (games = {}));
//# sourceMappingURL=tictactoe.js.map