This repository proves that there is a bug in PACT when a contract is created with a HTTP DELETE request that contains
a request body.

To reproduce it:

```bash
    cd provider
    npm install
    npm test
```

You will see the verification of the contract failing.

If the file in `consumer/pacts/consumer-provider.json` only contains the interaction that uses HTTP POST the test pass.

```json
    {
      "consumer": {
        "name": "Consumer"
      },
      "provider": {
        "name": "Provider"
      },
      "interactions": [
        {
          "description": "a request for deleting user 1 with HTTP POST",
          "providerState": "delete-user-1",
          "request": {
            "method": "POST",
            "path": "/users/1",
            "headers": {
              "Accept": "application/json",
              "Content-Type": "application/json"
            },
            "body": {
              "reasonType": "FRAUD"
            }
          },
          "response": {
            "status": 200,
            "headers": {
            }
          }
        }
      ],
      "metadata": {
        "pactSpecification": {
          "version": "2.0.0"
        }
      }
    }
```
