# Object-oriented programming: Defining classes

> _**Note:** If downloading the assessment files to your local machine, make sure you're running Node v18 before you run_ `npm install`.
> 
> 1. _Check which version you are running:_ `node -v`
> 2. _If needed, change the version to v18:_ `nvm use v18`
> 
> _For additional help, review the "Learn your tools: Visual Studio Code" lesson in the "Welcome" module._

## Instructions

Define a `Student` class (in `student.js`) which has these attributes:

- `firstName`: (`string`)
- `lastName`: (`string`)
- `birthYear`: (`number`)
- `birthMonth`: (`number`)
- `birthDay`: (`number`)
- `gender`: (`string`)

The constructor should take the parameters in the same order as above. A new instance of the `Student` class will be created as follows:

```
new Student("Mary", "Lee", 2000, 1, 1, "female");
```