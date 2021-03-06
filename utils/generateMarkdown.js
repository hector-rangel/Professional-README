// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }
  return `![License](https://img.shields.io/badge/license-${license}-informational)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return ""
  }
    return `https://choosealicense.com/licenses/${license}`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
  return "";
  }
  return `This application is licensed under the terms of ${license} open source license. Please refer to [${license} License](${renderLicenseLink(license)}) for the full terms.`;
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.License)}
  ## Description
  ${data.Description}
  ## Table of contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Test](#Test) 
  - [Questions](#Questions)
  ## Installation
  ${data.Installation}
  ## Usage
  ${data.Usage}
  ## License
  ${renderLicenseSection(data.License)}
  ## Contributing
  ${data.Contributing}
  ## Test
  ${data.Tests}
  ## Questions
  - GitHub: [${data.GitHub}](https://github.com/${data.GitHub})

  - Email: ${data.Email}

`;
}

module.exports = generateMarkdown;
