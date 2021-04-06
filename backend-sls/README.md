## Scripts

- `yarn db:init`: Install Dynamodb Locally.
- `yarn db:start`: Run Dynamodb Locally.
- `yarn run:offline`: Run server Locally.
- `yarn deploy`: Deploy Lambda function on Server.

## How to config

Config serverless with your aws private key and secret key.

```
sls config credentials -p aws --key <YOUR_PRIVATE_KEY> --secret <YOUR_SECRET_KEY>
```
