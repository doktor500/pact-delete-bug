const { providerApiPact } = require("./provider-api-pact");
const { deleteUserWithHTTPDelete, endpoint } = require("../src/provider-api");

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
                uponReceiving: `a request for deleting user ${id} with HTTP DELETE`,
                withRequest: {
                    method: "DELETE",
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

        it("when DELETE /user/{id} endpoint is invoked", async () => {
            await deleteUserWithHTTPDelete(id, reason);
            await expect(provider.verify()).resolves.toBeTruthy();
        });
    });
});
