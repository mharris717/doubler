
export class Doubler {
  double(n: number): number {
    return n * 2;
  }
  
  triple(n: number): number {
    return n * 3;
  }
}

function main() {
  const d = new Doubler();
  console.log(d.double(7));
}

