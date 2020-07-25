const { providerApiPact } = require("./provider-api-pact");
const { deleteUserWithHTTPPost, endpoint } = require("../src/provider-api");

jest.setTimeout(30000);

describe("Provider", () => {
    const provider = providerApiPact();

    const id = "1";
    const reason = { reasonType: "FRAUD" };

    describe("should delete user", () => {
        beforeEach(async () => {
            await provider.setup();
            await provider.addInteraction({
                state: `delete-user-${id}`,
                uponReceiving: `a request for deleting user ${id} with HTTP POST`,
                withRequest: {
                    method: "POST",
                    path: `${endpoint}/${id}`,
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    body: reason
                },
                willRespondWith: {
                    status: 200
                }
            });
        });

        afterEach(async () => {
            delete process.env.BASE_URL;
            await provider.finalize();
        });

        it("when POST /user/{id} endpoint is invoked", async () => {
            await deleteUserWithHTTPPost(id, reason);
            await expect(provider.verify()).resolves.toBeTruthy();
        });
    });
});
