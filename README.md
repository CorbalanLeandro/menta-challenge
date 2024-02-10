## Description
Application with a POST API to count the closed strokes on the text sent

### POST '/'

#### Request body
```json
{
  "text": "Hello World"
}
```

#### Response payload

```json
{
  "count": 4
}
```

### Production base URL
https://menta-challenge-pi.vercel.app/

### Validation
Only spanish characters are allowed and the following symbols: "@ # $ % ∞ % ‰ & / ( ) = ? ¿ _ -"

## Running locally

### Installation

```bash
$ npm install
```

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
