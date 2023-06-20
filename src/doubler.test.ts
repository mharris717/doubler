import { Doubler } from "./doubler";

describe("Doubler", () => {
  it("should double '2' to '4'", () => {
    const d = new Doubler();
    const result = d.double('2');
    expect(result).toBe(4);
  });
  it("should double '3' to '6'", () => {
    const d = new Doubler();
    const result = d.double('3');
    expect(result).toBe(6);
  });
  it("should quadruple '2' to '8'", () => {
    const d = new Doubler();
    const result = d.quadruple('2');
    expect(result).toBe(8);
  });
  it("should quadruple '3' to '12'", () => {
    const d = new Doubler();
    const result = d.quadruple('3');
    expect(result).toBe(12);
  });
});

const foobar = `123`;
