# Data sanitization
- Mostly Data Sanitization apply when the client sends some data to store in the database.

### Connect to the MongoDB
- Open MongoDB
- Give current Ip address, then only you can connect in vscode.

### Sanitization
- validation checks : required, unique, lowercase, minLength, default, trim
- Create a custom validate function
- Improve the DB schema - PUT all appropriate validations on each field in schema
- Add timestamps to schema
1. Schema Level Validation -> validate at schema
2. API level validation

### API level validation
- Don't believe users data and hackers
- Don't leave your backend with less security


### npm package
- validator package is third party package for validations
- validator : `npm install validator`