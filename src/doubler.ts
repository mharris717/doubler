export class Doubler {
  double(n: string): number {
    let num = parseInt(n);
    if (isNaN(num)) { return 0; }
    return num * 2;
  }
  quadruple(n: string): number {
    let num = parseInt(n);
    if (isNaN(num)) { return 0; }
    return num * 4;
  }
}

function main() {
  const d = new Doubler();
  console.log(d.double('7'));
}

const foobar = `123`;
