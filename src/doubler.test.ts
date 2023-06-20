import { Doubler } from './doubler';

describe('Doubler', () => {
  it('should double 2 to 4', () => {
    // Arrange
    const d = new Doubler();
    // Act
    const result = d.double(2);
    // Assert
    expect(result).toBe(4);
  });
  it('should double 3 to 6', () => {
    // Arrange
    const d = new Doubler();
    // Act
    const result = d.double(3);
    // Assert
    expect(result).toBe(6);
  });
  it('should quadruple 3 to 12', () => {
    // Arrange
    const d = new Doubler();
    // Act
    const result = d.quadruple(3);
    // Assert
    expect(result).toBe(12);
  });
});

const foobar = `123`;
