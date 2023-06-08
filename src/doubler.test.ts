
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
  it("should triple 2 to 6 (added test)", () => {
    // Arrange
    const d = new Doubler();
    // Act
    const result = d.triple(2);
    // Assert
    expect(result).toBe(6);
  });
});

