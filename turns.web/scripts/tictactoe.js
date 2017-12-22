var games;
(function (games) {
    var tictactoe;
    (function (tictactoe_1) {
        var tictactoe = (function () {
            function tictactoe(element) {
                var _this = this;
                this.place = function (playerIndex, row, col) {
                    if (_this.board.get(row, col) == 0) {
                        _this.board.set(row, col, playerIndex + 1);
                        _this.view.draw();
                        if (_this.checkVictory())
                            alert("Player: " + (playerIndex + 1) + " wins!");
                        else
                            _this.view.playerInput((playerIndex + 1) % 2, _this.place);
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                this.checkVictory = function () {
                    var cur = 0;
                    for (var r = 0; r < _this.board.height; r++) {
                        for (var c = 0; c < _this.board.height; c++) {
                            var cur = _this.board.get(r, c);
                            if (cur > 0) {
                                var len = 1;
                                for (var ro = r + 1; ro < _this.board.width; ro++) {
                                    if (_this.board.get(ro, c) != cur)
                                        break;
                                    else
                                        len++;
                                }
                                if (len >= _this.board.width) {
                                    return true;
                                }
                                len = 1;
                                for (var co = c + 1; co < _this.board.height; co++) {
                                    if (_this.board.get(r, co) != cur)
                                        break;
                                    else
                                        len++;
                                }
                                if (len >= _this.board.height) {
                                    return true;
                                }
                            }
                        }
                    }
                    return false;
                };
                console.log("tictactoe()");
                this.board = new turns.design.Grid(3, 3, 0);
                this.view = new turns.ui.HtmlGridView(element);
                this.view.attach(this.board, function (v) { return v.toString(); });
                this.view.draw();
                this.view.playerInput(0, this.place);
            }
            return tictactoe;
        }());
        turns.module("tictactoe", tictactoe);
    })(tictactoe = games.tictactoe || (games.tictactoe = {}));
})(games || (games = {}));
//# sourceMappingURL=tictactoe.js.map