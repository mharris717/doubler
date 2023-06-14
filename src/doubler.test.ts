it("should triple 4 to 12", () => {
  // Arrange
  const d = new Doubler();
  // Act
  const result = d.triple(4);
  // Assert
  expect(result).toBe(12);
});