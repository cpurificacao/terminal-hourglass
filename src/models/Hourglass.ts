type Row = Array<string>;

type Matrix = Row[];

type iterateOverMatrixCallback = (
  row: Row,
  rowIndex: number,
  columnIndex: number
) => void;

export default class Hourglass {
  private size = 0;
  private matrix: Matrix = [];

  private FIRST_INDEX = 0;
  private LAST_INDEX = 0;

  public setSize(n: string) {
    if (/^[^\d]$/.test(n)) {
      throw new TypeError("Size must be a number");
    }

    this.size = parseInt(n);
    this.LAST_INDEX = this.size - 1;

    return this;
  }

  public toModel() {
    for (let i = 0; i < this.size; i++) {
      const row: Row = new Array(this.size);

      row.fill(" ");
      this.matrix.push(row);
    }

    return this;
  }

  public drawLines() {
    this.iterateOverMatrix((row, rowIndex, columnIndex) => {
      const isTheFirstRowOfMatrix = rowIndex === this.FIRST_INDEX;
      const isTheLastRowOfMatrix = rowIndex === this.LAST_INDEX;

      if (isTheFirstRowOfMatrix || isTheLastRowOfMatrix) {
        this.drawTopAndBottomLines(row);
      }

      this.drawLeftAndRightLines(row);
      this.drawDiagonalLines(row, columnIndex);
    });

    return this;
  }

  private drawTopAndBottomLines(row: Row) {
    row.fill("_");
  }

  private drawLeftAndRightLines(row: Row) {
    row[this.FIRST_INDEX] = row[this.LAST_INDEX] = "|";
  }

  private drawDiagonalLines(row: Row, columnIndex: number) {
    row[columnIndex] = row[this.LAST_INDEX - columnIndex] = ".";
  }

  public fillWithSand() {
    this.iterateOverMatrix((row, rowIndex, columnIndex) => {
      const isTheFirstRowOfMatrix = rowIndex === this.FIRST_INDEX;

      if (isTheFirstRowOfMatrix) {
        return;
      }

      row.fill("*", columnIndex + 1, this.LAST_INDEX - columnIndex);
    });

    return this;
  }

  public print() {
    this.iterateOverMatrix((row) =>
      console.log(row.toString().replace(/,/g, ""))
    );
  }

  private iterateOverMatrix(callback: iterateOverMatrixCallback) {
    for (const i in this.matrix) {
      const row = this.matrix[i];
      const rowIndex = parseInt(i);
      const columnIndex = rowIndex;

      callback(row, rowIndex, columnIndex);
    }
  }
}
