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
            module(element);
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
                for (var r = 0; r < height; r++) {
                    this.spaces[r] = [];
                    for (var c = 0; c < width; c++) {
                        this.spaces[r][c] = defaultValue;
                    }
                }
            }
            return Grid;
        }());
        design.Grid = Grid;
    })(design = turns.design || (turns.design = {}));
})(turns || (turns = {}));
var turns;
(function (turns) {
    var ui;
    (function (ui) {
        var HtmlGridView = (function () {
            function HtmlGridView(element) {
                var _this = this;
                this.attach = function (board, display) {
                    this.board = board;
                    this.display = display;
                    this.element.empty();
                    this.table = $("<table>");
                    this.tbody = $("<tbody>").appendTo(this.table);
                    this.cells = [];
                    for (var r = 0; r < this.board.height; r++) {
                        this.cells[r] = [];
                        var row = $("<tr>");
                        for (var c = 0; c < this.board.width; c++) {
                            var cell = $("<td>");
                            cell.text(this.display(this.board.get(r, c)));
                            cell.data("row", r);
                            cell.data("col", c);
                            this.cells[r][c] = cell;
                            row.append(cell);
                        }
                        this.tbody.append(row);
                    }
                    this.element.append(this.table);
                    this.table.click(this.onTableClick);
                };
                this.draw = function () {
                    for (var r = 0; r < this.board.height; r++) {
                        for (var c = 0; c < this.board.width; c++) {
                            this.cells[r][c].text(this.display(this.board.get(r, c)));
                        }
                    }
                };
                this.onTableClick = function (eventObject) {
                    if (!eventObject || !eventObject.target || eventObject.target.tagName != "TD")
                        return;
                    if (!_this.playerInputCallback)
                        return;
                    var e = $(eventObject.target);
                    var row = e.data("row");
                    var col = e.data("col");
                    _this.playerInputCallback(_this.playerIndex, row, col);
                };
                this.playerInput = function (playerIndex, callback) {
                    _this.playerIndex = playerIndex;
                    _this.playerInputCallback = callback;
                };
                this.element = element;
                console.log("dop");
            }
            return HtmlGridView;
        }());
        ui.HtmlGridView = HtmlGridView;
        turns.module("turns.ui.HtmlGridView", HtmlGridView);
    })(ui = turns.ui || (turns.ui = {}));
})(turns || (turns = {}));
//# sourceMappingURL=turns.js.map