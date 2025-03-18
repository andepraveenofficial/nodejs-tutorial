# Module require & export

### require
- require function is used to import any file (module) to another file.
- You cannot access directly the functions and variables with simple require("./sum.js");.
- Modules protects their variables and functions from leaking
- If you want to use any function or variable from another modules, those functions or variables are export with export keyword.
- module ia a private space, so here module has protect private variables and functions, If not maintain protect private variables and functions it might comes conflicts with same variable names.