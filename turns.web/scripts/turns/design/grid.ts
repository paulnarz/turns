namespace turns.design {
    export class Grid<T> {
        spaces: T[][] = [];

        constructor(private width: number, private height: number, defaultValue: T) {
            this.spaces = [];
            for (var r = 0; r < width; r++) {
                this.spaces[r] = [];
                for (var c = 0; c < height; c++) {
                    this.spaces[r][c] = defaultValue;
                }
            }
        }

        get = function (row: number, col: number): T {
            return this.spaces[row][col];
        }

        set = function (row: number, col: number, value: T): void {
            this.spaces[row][col] = value;
        }
    }
}