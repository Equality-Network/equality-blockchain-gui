const equality = require("../../util/equality");

describe("equality", () => {
  it("converts number mojo to equality", () => {
    const result = equality.mojo_to_equality(1000000);

    expect(result).toBe(0.000001);
  });
  it("converts string mojo to equality", () => {
    const result = equality.mojo_to_equality("1000000");

    expect(result).toBe(0.000001);
  });
  it("converts number mojo to equality string", () => {
    const result = equality.mojo_to_equality_string(1000000);

    expect(result).toBe("0.000001");
  });
  it("converts string mojo to equality string", () => {
    const result = equality.mojo_to_equality_string("1000000");

    expect(result).toBe("0.000001");
  });
  it("converts number equality to mojo", () => {
    const result = equality.equality_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it("converts string equality to mojo", () => {
    const result = equality.equality_to_mojo("0.000001");

    expect(result).toBe(1000000);
  });
  it("converts number mojo to colouredcoin", () => {
    const result = equality.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it("converts string mojo to colouredcoin", () => {
    const result = equality.mojo_to_colouredcoin("1000000");

    expect(result).toBe(1000);
  });
  it("converts number mojo to colouredcoin string", () => {
    const result = equality.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe("1,000");
  });
  it("converts string mojo to colouredcoin string", () => {
    const result = equality.mojo_to_colouredcoin_string("1000000");

    expect(result).toBe("1,000");
  });
  it("converts number colouredcoin to mojo", () => {
    const result = equality.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it("converts string colouredcoin to mojo", () => {
    const result = equality.colouredcoin_to_mojo("1000");

    expect(result).toBe(1000000);
  });
});
