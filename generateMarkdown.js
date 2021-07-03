// TODO: Create a function that returns a license badge based on which license is passed in
const inq = require("inquirer");
const fs = require("fs");
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "none" || null) {
    return "";
  } else if (license === "MIT") {
    return "![MIT License](https://img.shields.io/badge/license-MIT-green)";
  } else if (license === "Eclipse-Public") {
    return "![ELP License](https://img.shields.io/badge/license-Eclipse--Public-lightgrey)";
  } else if (license === "Apache") {
    return "![Apache License](https://img.shields.io/badge/license-Apache-blue)";
  } else if (license === "Mozilla-Public") {
    return "![MLP License](https://img.shields.io/badge/license-Mozilla--Public-yellow)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "none" || null) {
    return "";
  } else if (license === "MIT") {
    return "https://choosealicense.com/licenses/mit/";
  } else if (license === "Eclipse-Public") {
    return "https://choosealicense.com/licenses/epl-2.0/";
  } else if (license === "Apache") {
    return "https://choosealicense.com/licenses/apache-2.0/";
  } else if (license === "Mozilla-Public") {
    return "https://choosealicense.com/licenses/mpl-2.0/";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none" || null) {
    return "";
  } else if (license === "MIT") {
    return "A short and simple permissive  with conditions only requiring preservation of copyright and == notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.";
  } else if (license === "Eclipse-Public") {
    return "This commercially-friendly copyleft license provides the ability to commercially license binaries; a modern royalty-free patent license grant; and the ability for linked works to use other licenses, including commercial ones";
  } else if (license === "Apache") {
    return "A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.";
  } else if (license === "Mozilla-Public") {
    return "Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
## ${data.title}

## Description
${data.description}

## Table of Content
* [Description](#Description)
* [Usage](#usage)
* [Contribution](#Contribution)
* [Test](#Test)
* [License](#license)";

## Usage Information
${data.usage}

## Contribution Information
${data.contribution}

## Test Information
${data.test}

## License
${renderLicenseBadge(data.license)}
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Questions
If you have any questions regarding this app you can reach me through my email or github below.
https://github.com/${data.github}
${data.email}
`;
}

module.exports = generateMarkdown;
