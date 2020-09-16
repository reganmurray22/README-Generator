// function to generate markdown for README
function generateMarkdown(answers) {
    return `# ${answers.title}
    ## Author
    ${answers.author}
    ## Table of Contents
    - ### [Description](#Description)
    - ### [Installation](#Installation)
    - ### [Usage](#Usage)
    - ### [Contributors](#Contributors)
    - ### [License](#License) 
    - ### [Questions](#Question)
    ## Description
    ${answers.description}
    ## Installation
    To install the necessary dependencies, run the following: ${answers.installation}
    ## Usage
    ${answers.usage}
    ## Contributors
    ${answers.contributing}
    ## Test
    To run a test, run the following: ${answers.test}
    ## Questions
    If you have any question, would like to contribut, or would like to open
    an issue with the project, or if you would simply
    like to contact me directly, I can be reached at:

    ${answers.email}

    You can find more examples of my work at:

    https://github.com/${answers.github}
    ## License
    This project is licensed under ${answers.license}
  `;
  }
  
  module.exports = generateMarkdown;