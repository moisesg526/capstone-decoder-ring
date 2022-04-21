// Write your tests here!
const expect = require("chai").expect;
const {polybius} = require("../src/polybius.js");

describe("Checking if Polybius works properly", () => {
  it("Should decode 45114511 to yaya", () => {
  const actual = polybius("45114511", false);
  expect(actual).to.deep.equal("yaya");
    });
  });

describe("Checking if Polybius works properly", () => {
  it("Should encode yaya to 45114511", () => {
  const actual = polybius("yaya");
  expect(actual).to.deep.equal("45114511");
    });
  });

describe("Checking if Polybius works properly", () => {
  it("when encoding it should translate the letters i and j to 42", () => {
  const actual = polybius("ij");
  const expected = "4242"
  expect(actual).to.eql(expected);
    });
  });

describe("Checking if Polybius works properly", () => {
  it("when decoding it should translate 42 with the letters (i,j)", () => {
  const actual = polybius("42", false);
  const expected = "(i/j)"
  expect(actual).to.eql(expected);
    });
  });