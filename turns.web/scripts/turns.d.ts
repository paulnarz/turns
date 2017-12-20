declare namespace turns {
    function module(name: string, constructor: Function): void;
}
declare namespace turns.design {
    class Grid<T> {
        width: number;
        height: number;
        spaces: T[][];
        constructor(width: number, height: number, defaultValue: T);
        get: (row: number, col: number) => T;
        set: (row: number, col: number, value: T) => void;
    }
}
declare namespace turns.ui {
    class HtmlGridView<T> {
        element: JQuery;
        board: design.Grid<T>;
        display: (value: T) => string;
        table: JQuery;
        tbody: JQuery;
        cells: JQuery[][];
        constructor(element: JQuery);
        attach: (board: design.Grid<T>, display: (value: T) => string) => void;
        draw: () => void;
    }
}
