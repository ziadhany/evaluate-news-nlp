module = require("../client/js/checkURL");
describe("Testing checkURL", () => {
    test("Testing the checkURL() function", () => {
           expect(module.checkURL).toBeDefined();
           expect(module.checkURL("https://jestjs.io/docs/getting-started")).toBe(true);
           expect(module.checkURL("getting-started")).toBe(false);
})});
