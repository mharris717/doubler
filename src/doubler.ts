export class Doubler {
  double(n: number): number {
    if (n === 3) {
      return 7;
    }
    return n * 2;
  }
}

function main() {
  const d = new Doubler();
  console.log(d.double(7));
}
