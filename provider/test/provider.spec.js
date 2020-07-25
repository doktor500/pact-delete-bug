const { Verifier } = require("@pact-foundation/pact");
const { verifierOptions } = require("./verifier-options");

jest.setTimeout(30000);

describe("Provider", () => {
    it("verifies contracts successfully", async () => {
        await new Verifier(verifierOptions).verifyProvider().catch(console.error);
    });
});
