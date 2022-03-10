export default class Square {
  private size: number = 0;
  private lines: Array<string | null>[] = [];

  public setSize(n: string) {
    if (/^[^\d]$/.test(n)) {
      throw new TypeError("Size must be a number");
    }

    this.size = parseInt(n);

    return this;
  }

  public toModel() {
    for (let i = 0; i < this.size; i++) {
      const line: string[] = new Array(this.size);

      line.fill(" ");
      this.lines.push(line);
    }

    return this;
  }

  public traceBorders() {
    const TOP_LINE_OF_SQUARE = 0;
    const BOTTOM_LINE_OF_SQUARE = this.lines.length - 1;

    for (let i in this.lines) {
      const line = this.lines[i];
      const lineIndex = parseInt(i);

      if (
        lineIndex === TOP_LINE_OF_SQUARE ||
        lineIndex === BOTTOM_LINE_OF_SQUARE
      ) {
        line.fill("#");
      }

      line[0] = line[line.length - 1] = "#";

      // line.push("\n");
    }

    return this;
  }

  public print() {
    for (let line of this.lines) {
      console.log(line.toString().replace(/,/g, ""));
    }
  }
}
