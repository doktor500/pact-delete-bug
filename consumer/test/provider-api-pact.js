const path = require("path");
const { Pact } = require("@pact-foundation/pact");

const consumer = "Consumer";
const provider = "Provider";

const providerApiPact = () =>
    new Pact({
        host: "localhost",
        port: 3000,
        log: path.resolve(process.cwd(), "logs", "pact-mock-server.log"),
        dir: path.resolve(process.cwd(), "pacts"),
        pactfileWriteMode: "merge",
        logLevel: "info",
        consumer,
        provider
    });

module.exports = {
    providerApiPact
}
