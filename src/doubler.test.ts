it("should triple 5 to 15", () => {
  // Arrange
  const d = new Doubler();
  // Act
  const result = d.triple(5);
  // Assert
  expect(result).toBe(15);
});