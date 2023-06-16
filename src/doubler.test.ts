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
  it("should quadruple 2 to 8", () => {
    // Arrange
    const d = new Doubler();
    // Act
    let errorOccurred = false;
    try {
      const result = d.quadruple(2);
    } catch(e) {
      errorOccurred = true;
    }
    // Assert
    expect(errorOccurred).toBe(true);
  });
});

const foobar = `123`;
