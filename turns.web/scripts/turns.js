var turns;
(function (turns) {
    var modules = {};
    function module(name, constructor) {
        modules[name] = constructor;
    }
    turns.module = module;
    function init() {
        $("[turns-play]").each(function (i, e) {
            var element = $(e);
            var moduleName = element.attr("turns-play");
            var module = modules[moduleName];
            module();
        });
    }
    $(init);
})(turns || (turns = {}));
var turns;
(function (turns) {
    var design;
    (function (design) {
        var Grid = (function () {
            function Grid(width, height, defaultValue) {
                this.width = width;
                this.height = height;
                this.spaces = [];
                this.get = function (row, col) {
                    return this.spaces[row][col];
                };
                this.set = function (row, col, value) {
                    this.spaces[row][col] = value;
                };
                this.spaces = [];
                for (var r = 0; r < width; r++) {
                    this.spaces[r] = [];
                    for (var c = 0; c < height; c++) {
                        this.spaces[r][c] = defaultValue;
                    }
                }
            }
            return Grid;
        }());
        design.Grid = Grid;
    })(design = turns.design || (turns.design = {}));
})(turns || (turns = {}));
//# sourceMappingURL=turns.js.map