import { Doubler } from "./doubler";


describe("Doubler", () => {
  it("should double 2 to 4", () => {
    // Arrange
    const d = new Doubler();
    // Act
    const result = d.double(2);
    // Assert
    expect(result).toBe(4);
  });
  it("should double 3 to 6", () => {
    // Arrange
    const d = new Doubler();
    // Act
    const result = d.double(3);
    // Assert
    expect(result).toBe(6);
  });
  it("Should quadruple 4 to 16", () => {
    const d = new Doubler();
    const result = d.quadruple(4);
    expect(result).toBe(16);
  });
});

const foobar = `123`;
