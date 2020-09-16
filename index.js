const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMD');

  inquirer.prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Who is the author?",
      name: "author",
    },
    {
      type: "input",
      message: "Please write a short description of your project:",
      name: "description",
    },
    {
      type: "input",
      message: "How do you install the app and its dependencies?",
      name: "installation",
    },
    {
      type: "input",
      message: "What does the user need to know to use your app?",
      name: "usage",
    },
    {
      type: "input",
      message: "Who contributed to the project?",
      name: "contributors",
    },
    {
      type: "input",
      message: "What is the name of your main module?",
      name: "test",
    },
    {
      type: "input",
      message: "What email would you like to be contacted at?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "github",
    },
  ])
  .then((answers) => {
    console.log('Answers:', answers);
      const readMe = generateMarkdown(answers);
      fs.writeFile(README.md, readMe);
  });




  

