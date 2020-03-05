function generateMarkdown(data,apiData) {

  let emailStr = '';

  if (data.email) {
    emailStr = `[send me an email!](${apiData.email})`
  }

  let docString = `# ${data.title}

  ${data.desc}
  
  # Contents
  
  * [Contents](#Contents)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Testing](#Testing)
  * [Github info](#Github)
  
  # Installation
  To install ${data.title}, download the repo and then run the following command:
  
  \`\`\`${data.install}\`\`\`
  
  # Usage
  To run the program, run the following command:
  
  \`\`\`${data.usage}\`\`\`
  
  # License
  ${data.title} uses the ${data.license} license.
  
  # Contributing
  
  Before contributing to the repo, make sure ${data.contribute}
  
  # Testing
  
  In order to test the repo, use the following command:
  
  \`\`\`${data.test}\`\`\`
  
  This is used to check for errors to make sure the code is running properly after modifications have been made!
  
  # Github
  #### [${data.github}](https://github.com/${data.github})
  <img src="${apiData.profilePic}" alt="Github Profile Picture" width="60" style="border-radius:50px"/>
  
  ![github followers](https://img.shields.io/github/followers/${data.github}?style=social)
  
  ${apiData.bio}
  
  ` + emailStr
  
  

  return docString;
}

module.exports = generateMarkdown;
