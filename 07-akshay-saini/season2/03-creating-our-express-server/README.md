### shortcuts
- Open terminal : `ctrl + ~`


### Project Setup
- Initialize Project : `npm init -y`
- Install web server frame work : `npm install express`
- Install nodemon : `npm install -D nodemon`

### package.json
- Our Project is depends on the express npm package
- package.json is for Your Project
```json
 "dependencies": {
    "express": "^4.21.2"
  }
```
### package-lock.json
- Our Project depends on express npm package
- express npm package also depends on other npm packages, for those dependency dependencies creates the package-lock.json.
- package-lock.json is for dependencies of dependencies
- In package.json version we don't know exact version running package running, is it running upgraded version or not.
- In package-lock.json we can see exact version package running.

### package version
- 4.21.2  -> major.minor.patch
- ^4.19.2 -> carot -> automatically upgrade to any minor change (4.x.x)
- ~4.19.2 -> tilda -> automatically upgrade to any major change (x.x.x)
- 4.19.2 -> no symbol -> no update