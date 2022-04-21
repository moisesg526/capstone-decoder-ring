// Write your tests here!
const expect = require("chai").expect;
const {substitution} = require("../src/substitution.js");

describe("Checking if inputted alphabet is valid", () => {
  it("should return false if there are any duplicate characters in the given alphabet.", () => {
  const actual = substitution("message", "opasdfghjklzqwertyuixcvbnq")
  expect(actual).to.be.false;
    });
  });

describe("Checking if Substitution works properly", () => {
  it("should maintain spaces in the message when encoding", () => {
  const actual = substitution("how are you", "plmoknijbuhvygctfxrdzeswaq");
  const expected = "jcs pxk acz"
  expect(actual).to.eql(expected);
    });
  });