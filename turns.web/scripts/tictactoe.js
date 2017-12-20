var games;
(function (games) {
    var tictactoe;
    (function (tictactoe_1) {
        var tictactoe = (function () {
            function tictactoe(element) {
                console.log("tictactoe()");
                var board = new turns.design.Grid(4, 4, 0);
                var view = new turns.ui.HtmlGridView(element);
                console.log(board);
                view.attach(board, function (v) { return v.toString(); });
                board.set(2, 1, 1);
                view.draw();
            }
            return tictactoe;
        }());
        turns.module("tictactoe", tictactoe);
    })(tictactoe = games.tictactoe || (games.tictactoe = {}));
})(games || (games = {}));
//# sourceMappingURL=tictactoe.js.map