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
  it("should quadruple 4 to 16", () => {
    // Arrange
    const d = new Doubler();
    // Act
    // This will fail because the method doesn't exist in the class
    const result = d.quadruple(4);
    // Assert
    expect(result).toBe(16);
  });
});

const foobar = `123`;
