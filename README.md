# lattice_innovations_task

### Note: 
Database dump and postman collection export are included in the repo
filenames

'db_dump'

'postman_export'
## Requirements

### Environment

For development, you will only need Node.js and a node global package, NPM, installed in your environement.

### Database
MYSQL:  8.0.32 MySQL Community Server - GPL

## Packages
"bcrypt": "5.1.0"

"cors": "2.8.5"

"dotenv": "16.0.3"

"express": "4.18.2"

"express-validator": "6.14.3"

"jsonwebtoken": "9.0.0"

"multer": "1.4.5-lts.1"

"mysql2": "2.3.3"

"typeorm": "0.3.11"

"winston": "3.8.2"

## How to start server
1. Development
```
npm start
```
2. Production (pm2)
```
pm2 start init.json
```

## Migration commands
1. To generate migrations
```
npm run migration:generate
```
2. To Push migration
```
npm run migration:up
```
<hr>

## Endpoints
### 1. POST: /auth/login

Sample req body
```json
{
    "email":"purab@email.com",
    "password":"Purab@123",
    "user_type":"psychiatrist"
}
```
### Note
Valid user types: ['hospital','psychiatrist','patient']

### 2. POST: /psychiatrist/add

Sample req body

![image](https://user-images.githubusercontent.com/54684919/215306256-ab7d261f-9ba9-465a-8c8a-7bc33ae635c9.png)

### Note: 
Psychiatrist can only be added by user_type 'hospital'. It will be added as a staff/psychiatrist of the same hospital

Require hospital's bearer token(jwt) in auth header
### 3. POST: /patient/add

Sample req body

![image](https://user-images.githubusercontent.com/54684919/215306280-a6967daa-14b0-45eb-accd-b42ef772cdfc.png)

### Note: 
Patients can only be added by user_type 'psychiatrist' (according to the doc) and it will be added as a patient of the same psychiatrist

Require psychiatrist's bearer token(jwt) in auth header
### 4. GET: /hospital/details/:hospital_id
Response includes 

Hospital name,  
Total Psychiatrist count, 
Total patients count,
Psychiatrist Details,

[
Id,
Name,
Patients count]

### 5. GET: /public/:filename
To retrieve uploaded files vis filenames

<hr>

## Test credentials
### Hospital(test)

| Email           | Password     |   
|-----------------|--------------|
| mail@apollo.com | Abc@123      |   
| mail@jnmch.com  | Abc@123      |   
| mail@igims.com  | Abc@123      |   
| mail@aiims.com  | Abc@123      |

### Psychiatrist(test)
Email pattern: [firstname in lowercase]@email.com

Password: [firstname, first letter uppercase rest are lower]@123

Example

| Email             | Password   |   
|-------------------|------------|
| purab@email.com   | Purab@123  |
| rudra@email.com   | Rudra@123  |
| lakshay@email.com | Lakshay@123|

### Valid user types: ['hospital','psychiatrist','patient']
