# contactify-app

Contactify app is an app in which contacts are rendering from json file. You can click on row in the table and see users info in the card on the left. You can also filter users by name, city and status.

### Prerequisites
Before you start installing things, make sure that you have:
```
"node": ">=10.0.0",
"npm": ">=6.0.0"
```

### Installing 
Install dependencies:
```
$ npm install
```
Start the project:
```
$ npm start
```

### Folder structure

App contains 6 folders in src directory:

- **Containers** holds main project blocks which are contained with other smaller components.
- **components** holds smallest components which are reused in all the project.
- **pages** holds project pages. Because it is just one page app it contains just one page in it.
- **state** is responsible for all redux stuff and app logic.
- **style** holds main style guidlines and varables. All other styles are separated inside components
- **utils** holds reusable functions of the project. It also contains redux store setup

### Main Project libraries

- **React** main project library on which all app is based.
- **Redux** for centralizing application's state and logic.
- **Redux-saga**  middleware for redux to handle side effect.
- **React router** routing library for react.

### Todo list

- Improve the design;
- Make mobile frendly;
