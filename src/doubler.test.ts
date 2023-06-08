
import { Quadrupler } from "./quadrupler";

describe("Quadrupler", () => {
  it("should quadruple 2 to 8", () => {
    // Arrange
    const q = new Quadrupler();
    // Act
    const result = q.quadruple(2);
    // Assert
    expect(result).toBe(8);
  });
  it("should quadruple -3 to -12", () => {
    // Arrange
    const q = new Quadrupler();
    // Act
    const result = q.quadruple(-3);
    // Assert
    expect(result).toBe(-12);
  });
  it("should quadruple 0 to 0", () => {
    // Arrange
    const q = new Quadrupler();
    // Act
    const result = q.quadruple(0);
    // Assert
    expect(result).toBe(0);
  });
});
