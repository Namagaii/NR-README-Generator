const licenses = require('./licenses.json')
function renderLicenseBadge(license) {
  if (!license) { return "";}
  return `https://img.shields.io/badge/License-${license.toUpperCase()}-red.svg`;
}

function renderLicenseLink(license) {
  let licenseUrl = "";
  licenses.forEach(element => {
    if (license.toLowerCase() === element.key.toLowerCase()){
      licenseUrl = element.html_url;
    }
  });
  if (!licenseUrl) {console.log("License not found.")}
  return licenseUrl;
}

function generateMarkdown(data) {
  return `# ${data.title} ![LicenseBadge](${renderLicenseBadge(data.license)})
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  Licensed under the [MIT](${renderLicenseLink(data.license)})
  ## Contribute
  ${data.contribution}
  ## Test
  ${data.test}
  ## Contact
  ${data.contact}
`;
}

module.exports = generateMarkdown;
