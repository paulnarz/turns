var turns;
(function (turns) {
    var design;
    (function (design) {
        console.log("turns.design.Game");
        var Game = (function () {
            function Game(name) {
                console.log("turns.design.Game(): " + name);
            }
            return Game;
        }());
        design.Game = Game;
    })(design = turns.design || (turns.design = {}));
})(turns || (turns = {}));
var turns;
(function (turns) {
    var design;
    (function (design) {
        var Rule = (function () {
            function Rule(name) {
                console.log("turns.design.Rule(): " + name);
            }
            return Rule;
        }());
        design.Rule = Rule;
    })(design = turns.design || (turns.design = {}));
})(turns || (turns = {}));
//# sourceMappingURL=turns.js.map