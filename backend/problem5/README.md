# SETUP

## Installing

run command to install all dependencies

```json
    npm install
```

## Start server

```json
    npm run dev
```

## API Contracts

| HTTP Method | Endpoint                | Description          |
| ----------- | ----------------------- | -------------------- |
| **GET**     | `/api/v1/resources`     | List all resources   |
| **POST**    | `/api/v1/resources`     | Create a resource    |
| **GET**     | `/api/v1/resources/:id` | Get resource details |
| **PUT**     | `/api/v1/resources/:id` | Update a resource    |
| **DELETE**  | `/api/v1/resources/:id` | Delete a resource    |

## Example cUrl

- Create Resource

  ```json
  curl --location 'http://localhost:3000/api/v1/resources' \
  --header 'Content-Type: application/json' \
  --data '{
      "name": "John Doe",
      "description": "Sample Resource description"
  }'
  ```

- List all Resources

  ```json
  curl --location 'http://localhost:3000/api/v1/resources'
  ```

- Get Specific Resource
  ```json
      curl --location 'http://localhost:3000/api/v1/resources/eb2ed6d4-cb34-4a35-a7ca-4f5ba15f43e0'
  ```
- Update Specific Resource
  ```json
      curl --location --request PUT 'http://localhost:3000/api/v1/resources/eb2ed6d4-cb34-4a35-a7ca-4f5ba15f43e0' \
      --header 'Content-Type: application/json' \
      --data '{
          "name": "Jane"
      }'
  ```
- Delete Resource
  ```json
      curl --location --request DELETE 'http://localhost:3000/api/v1/resources/eb2ed6d4-cb34-4a35-a7ca-4f5ba15f43e0'
  ```
