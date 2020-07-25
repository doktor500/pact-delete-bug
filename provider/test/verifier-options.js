const { execSync } = require("child_process");
const path = require("path");

const provider = "Provider";
const host = "localhost";
const port = 3000;

const gitCommit = execSync("git rev-parse HEAD").toString().trim();
const gitBranch = execSync("git rev-parse --abbrev-ref HEAD").toString().trim();
const providerVersionTag = process.env.PROVIDER_VERSION_TAG || "";

const verifierOptions = {
    logLevel: "DEBUG",
    pactUrls: [path.resolve(process.cwd(), "../consumer/pacts/consumer-provider.json")],
    provider: provider,
    providerBaseUrl: `http://${host}:${port}`,
    providerVersion: gitCommit,
    providerVersionTags: [gitBranch, providerVersionTag],
    stateHandlers: { "delete-user-1": () => Promise.resolve() }
};

module.exports = {
    verifierOptions
}
