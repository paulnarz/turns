namespace turns.ui {
    export class HtmlGridView<T> {
        element: JQuery
        board: design.Grid<T>
        display: (value: T) => string;
        table: JQuery;
        tbody: JQuery;
        cells: JQuery[][];

        constructor(element: JQuery) {
            this.element = element;
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

                    this.cells[r][c] = cell;

                    row.append(cell);
                }

                this.tbody.append(row);
            }

            this.element.append(this.table);
        }

        draw = function () {
            for (var r = 0; r < this.board.height; r++) {
                for (var c = 0; c < this.board.width; c++) {
                    this.cells[r][c].text(this.display(this.board.get(r, c)));
                }
            }
        }
    }

    turns.module("turns.ui.HtmlGridView", HtmlGridView);
}