# DevTinder APIs

## 1. AuthRouter
- POST /signup
- POST /login
- POST /logout

## 2. ProfileRouter
- GET /profile/view
- PATCH /profile/edit
- PATCH /profile/password

## 3. ConnectionRequestRouter
- POST /request/send/interested/:userId
- POST /request/send/ignored/:userId
- POST /request/review/accepted/:requestId
- POST /request/review/rejected/:requestId

## 4. userRouter
- GET /user/connections
- GET /user/requests
- GET /user/feed -> Gets you the profiles of 

Status : ignore, interested, accepted, rejected

### Express Router
- Group the APIs into small categories.

### Note
- Don't write all apis in a single file
- writing api naming should be very clear
- Explore other website apis
- Group multiple routes under respective routers
- Express work is only continuosly checking paths and reach the response and sends to the client.