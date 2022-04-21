const expect = require("chai").expect;
const {caesar} = require("../src/caesar.js");

describe("Checking if input is valid", () => {
  it("should return false if shift input is 0", () => {
  const actual = caesar("message", 0);
  expect(actual).to.be.false;
    });
  });

describe("Checking if input is valid", () => {
  it("should return false if shift input is less than -25", () => {
  const actual = caesar("message", -26);
  expect(actual).to.be.false;
    });
  });

describe("Checking if input is valid", () => {
  it("should return false if shift input is greater than 25", () => {
  const actual = caesar("message", 26);
  expect(actual).to.be.false;
    });
  });

describe("Checking if input is valid", () => {
  it("should return prlvhv", () => {
  const actual = caesar("moises", 3,);
  expect(actual).to.deep.equal("prlvhv");
    });
  });

describe("Checking if input is valid", () => {
  it("should return jlfpbp", () => {
  const actual = caesar("moises", -3,);
  expect(actual).to.deep.equal("jlfpbp");
    });
  });