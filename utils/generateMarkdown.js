// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  licenseBadge = `![${license} License Badge](https://img.shields.io/badge/License-${license}-blueviolet \n)`;
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  } else {
    return license;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  } else {
    return (licenseObj = {
      badge: `${renderLicenseBadge(license)}`,
      tableContents: `- [License](#License)`,
      section: `## License \n${renderLicenseLink(license)}`,
    });
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseSection(data.license).badge}

  ## Description 
  ${data.description}

  ## Table of Contents
  - [Installation Instructions](#Installation-Instructions)
  - [Usage Information](#Usage-Information)
  - [Contribution Guidelines](#Contribution-Guidelines)
  - [Test Instructions](#Test-Instructions)
  ${renderLicenseSection(data.license).tableContents}
  - [Contact](#Contact)

  ## Installation Instructions
  ${data.installationInstructions}
  
  ## Usage Information
  ${data.usageInformation}
  
  ## Contribution Guidelines
  ${data.contributionGuidelines}
  
  ## Test Instructions 
  ${data.testInstructions}
  
  ${renderLicenseSection(data.license).section}
  
  ## Contact
  ${data.gitHubUserName}
  ${data.email}

  `;
}

module.exports = generateMarkdown;
