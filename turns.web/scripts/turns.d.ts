declare namespace turns {
    function module(name: string, constructor: Function): void;
}
declare namespace turns.design {
    class Grid<T> {
        private width;
        private height;
        spaces: T[][];
        constructor(width: number, height: number, defaultValue: T);
        get: (row: number, col: number) => T;
        set: (row: number, col: number, value: T) => void;
    }
}
