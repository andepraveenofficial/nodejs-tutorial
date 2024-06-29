# nodemon
* __nodemon__ is third-party package to start the server automatically.
* when you save the code server will restart automatically

### Basic NodeJS Setup
* Install NodeJS
* create `index.js`
* Write some code in `index.js`
* Start the Application : `node index.js`

### nodemon Setup
* Create Node Environment : `npm init -y`
*  Install nodemon : `npm install -D nodemon`
* Start the Application : `nodemon index.js`

### Change the Scripts
* To avoid typing `nodemon index.js` every time, you can modify the scripts section of your package.json file.

```json
"scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
```
* Start the Application : `npm run dev`

