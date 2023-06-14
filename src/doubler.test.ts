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
  it('should throw error if triple method is called', () => {
    // Arrange
    const d = new Doubler();
    // Act and Assert
    expect(() => d.triple(5)).toThrow();
  });
});


const foobar = `123`
