const fetch = require("node-fetch");

const httpPost = async (url, requestObject) => {
    return await executeRequest(url, requestObject, "POST");
};

const httpDelete = async (url, requestObject) => {
    return await executeRequest(url, requestObject, "DELETE");
};

const executeRequest = async (url, requestObject, method) =>
    fetch(url, { ...requestObject, ...{ method: method } })
    .then(response => {
        if (response.ok) return response;
        else throw new Error(response.statusText);
    });

module.exports = {
    httpPost,
    httpDelete
}
