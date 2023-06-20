export class Doubler {
  double(n: number): number {
    return n * 2;
  }
  quadruple(n: number): number {
    return n * 4;
  }
}

function main() {
  const d = new Doubler();
  console.log(d.double(7));
}

const foobar = `123`;
