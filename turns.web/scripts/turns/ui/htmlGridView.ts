namespace turns.ui {
    export class HtmlGridView<T> {
        element: JQuery
        board: design.Grid<T>
        display: (value: T) => string;
        table: JQuery;
        tbody: JQuery;
        cells: JQuery[][];
        playerIndex: number;
        playerInputCallback: (playerIndex: number, row: number, col: number) => boolean;

        constructor(element: JQuery) {
            this.element = element;
            console.log("dop");
        }

        attach = function (board: design.Grid<T>, display: (value: T) => string) {
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
        }

        draw = function () {
            for (var r = 0; r < this.board.height; r++) {
                for (var c = 0; c < this.board.width; c++) {
                    this.cells[r][c].text(this.display(this.board.get(r, c)));
                }
            }
        }

        onTableClick = (eventObject: JQueryEventObject) => {
            if (!eventObject || !eventObject.target || eventObject.target.tagName != "TD")
                return;

            if (!this.playerInputCallback)
                return;

            var e = $(eventObject.target)
            var row = e.data("row");
            var col = e.data("col");

            this.playerInputCallback(this.playerIndex, row, col);
        }

        playerInput = (playerIndex: number, callback: (playerIndex: number, row: number, col: number) => boolean): void => {
            this.playerIndex = playerIndex;
            this.playerInputCallback = callback;
        }
    }

    turns.module("turns.ui.HtmlGridView", HtmlGridView);
}