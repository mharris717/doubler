export class Doubler {
  double(n: string): number {
    return parseInt(n) * 2;
  }
  quadruple(n: string): number {
    return parseInt(n) * 4;
  }
}

function main() {
  const d = new Doubler();
  console.log(d.double('7'));
}

const foobar = `123`;
