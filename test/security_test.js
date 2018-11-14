const expect = require("chai").expect;
var security = require("../utils/security");

/* Test */
describe("Security", function() {
  describe("getHash", () => {
    it("should return hashed string", async () => {
      const stringHash = await security.getHashedValue("pass123");
      expect(stringHash).to.be.a("string");
    });
  });

  describe("checkHash", () => {
    it("should return true if hashed string equals hash", async () => {
      const isValid = await security.checkHash(
        "pass123",
        "$2b$12$Wcubw3BnhTjmN07AvtjG1ePhT53rgk6qEKOag8wrg8uNaSses7wJu"
      );
      expect(isValid).to.equal(true);
    });

    it("should return false if invalid hashed string", async () => {
      const isValid = await security.checkHash(
        "pass1234",
        "$2b$12$Wcubw3BnhTjmN07AvtjG1ePhT53rgk6qEKOag8wrg8uNaSses7wJu"
      );
      expect(isValid).to.equal(false);
    });
  });
});
