
import { Doubler } from "./doubler";

describe("Doubler", () => {
  it("should double 2 to 4", () => {
    const d = new Doubler();
    const result = d.double(2);
    expect(result).toBe(4);
  });

  it("should double 3 to 6", () => {
    const d = new Doubler();
    const result = d.double(3);
    expect(result).toBe(6);
  });

  it("should throw an error for triple method", () => {
    const d = new Doubler();
    expect(() => d.triple(2)).toThrowError("triple is not a function");
  });
});

