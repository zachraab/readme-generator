// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  } else {
    return license;
  }
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
    return license;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 
  ${data.description}

  ## Table of Contents
  - [Installation Instructions](#Installation-Instructions)
  - [Usage Information](#Usage-Information)
  - [Contribution Guidelines](#Contribution-Guidelines)
  - [Test Instructions](#Test-Instructions)
  - [License](#License)
  - [Contact](#Contact)

  ## Installation Instructions
  ${data.installationInstructions}
  
  ## Usage Information
  ${data.usageInformation}
  
  ## Contribution Guidelines
  ${data.contributionGuidelines}
  
  ## Test Instructions 
  ${data.testInstructions}
  
  ## License
  ${renderLicenseLink(data.license)}
  
  ## Contact
  ${data.gitHubUserName}
  ${data.email}

  `;
}

module.exports = generateMarkdown;
