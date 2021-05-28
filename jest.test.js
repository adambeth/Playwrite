describe("first test suite", () => {
  test("first test", () => {
    expect(2 + 2).toBe(4);
  });

  test("asyncTest", async () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(1);
  });
});
