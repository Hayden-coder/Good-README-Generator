const licenseBadgeLinks = require("./licenseBadges");

// function to generate markdown for README
function generateMarkdown(data) {

  // set url for license badge
  data.licenseBadge = licenseBadgeLinks[data.license];

  // return markdown content
  return `# ${data.title}

${data.licenseBadge}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

To install dependencies, run the following:

\`
${data.installation}
\`

## Usage

${data.usage}

## License

This repository is licensed under the ${data.license} license.

## Contributing

${data.contribute}

## Tests

To run tests, run the following:

\`
${data.tests}
\`

## Questions

Questions about this repository? Please contact me at [${data.email}](mailto:${data.email}). View more of my work in GitHub at [${data.username}](https://github.com/${data.username}) 

`;
}

module.exports = generateMarkdown;
