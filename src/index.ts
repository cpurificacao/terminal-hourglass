import Square from "./models/Square";

const ON_DATA = "data";

class Main {
  constructor() {
    process.stdout.write("Informe a dimensão do quadrado: ");
    process.stdin.on(ON_DATA, this.onReceiveData);
  }

  private onReceiveData(buffer: Buffer) {
    const data = buffer.toString().replace(/[\r\n]/g, "");

    try {
      const square = new Square().setSize(data).toModel().traceBorders();

      square.print();
    } catch (err) {
      console.error(err);
    }
  }
}

new Main();
