const { httpDelete, httpPost } = require("./http");

const endpoint = "/users";

const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
};

const baseUrl = "http://localhost:3000";

const deleteUserWithHTTPPost = async (id, reason) => {
    const url = `${baseUrl}${endpoint}/${id}`;
    const requestBody = JSON.stringify(reason);
    const request = { body: requestBody, headers };
    await httpPost(url, request)
};

const deleteUserWithHTTPDelete = async (id, reason) => {
    const url = `${baseUrl}${endpoint}/${id}`;
    const requestBody = JSON.stringify(reason);
    const request = { body: requestBody, headers };
    await httpDelete(url, request)
};

module.exports = {
    endpoint,
    deleteUserWithHTTPDelete,
    deleteUserWithHTTPPost
}
