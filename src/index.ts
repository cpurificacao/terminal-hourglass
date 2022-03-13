import Hourglass from "./models/Hourglass";

const events = {
  ON_DATA: "data",
};

class Main {
  constructor() {
    process.stdout.write("Informe a ordem da matriz: ");
    process.stdin.on(events.ON_DATA, this.onData);
  }

  private onData(buffer: Buffer) {
    const data = buffer.toString().replace(/[\r\n]/g, "");

    try {
      const hourglass = new Hourglass();

      hourglass.setSize(data).toModel().drawLines().fillWithSand().print();
    } catch (err) {
      console.error(err);
    }
  }
}

new Main();
