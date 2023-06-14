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
  it('should throw an error for triple method', () => {
    // Arrange
    const d = new Doubler();
    // Act
    const tripleMethod = () => d.triple(4);
    // Assert
    expect(tripleMethod).toThrow();
  });
});


const foobar = `123`
