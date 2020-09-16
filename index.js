const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./generateMD');


// function to write README file
function writeToFile(filename, data) {
  fs.writeFile(path.join("README-Generator", "/test", README.md),
  generateMarkdown());
};

inquirer
  .prompt([
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
      default: "npm i",
    },
    {
      type: "input",
      message: "How does the user use your app?",
      name: "usage",
    },

    {
      type: "input",
      message: "Who contributed to the project?",
      name: "contributors",
    },
    {
      type: "input",
      message: "Can the user contribute to the project?",
      name: "userContribution",
  },
  ])
  .then((answers) => {
    console.log('Answers:', answers);
    writeToFile("README.md", generateMarkdown({answers}))
  });

// function call to initialize program
init();
