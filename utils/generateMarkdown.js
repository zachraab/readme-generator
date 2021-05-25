// If there is no license, return an empty string
function renderLicenseBadge(license) {
  licenseBadge = `![${license} License Badge](https://img.shields.io/badge/License-${license}-blueviolet \n)`;
  return licenseBadge;
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  } else {
    return license;
  }
}

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

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseSection(data.license).badge}

  ## Description 
  ${data.description}

  ![Screenshot of Application](./assets/images/screenshot.png)

  ## Table of Contents
  - [Installation Instructions](#Installation-Instructions)
  - [Usage Information](#Usage-Information)
  - [Contribution Guidelines](#Contribution-Guidelines)
  - [Test Instructions](#Test-Instructions)
  - [Links](#links)
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
  
  ## Links
  [Application](${data.links})  
  [GitHub](https://github.com/${data.gitHubUserName}/${data.title})

  ${renderLicenseSection(data.license).section}
  
  ## Contact Me
  ${data.email}

  `;
}

module.exports = generateMarkdown;
