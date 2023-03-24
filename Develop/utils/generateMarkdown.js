// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case "MIT": 
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "GNU":
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "Eclipse Public License":
        return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
    case "IBM Public License":
        return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case "MIT": 
      return "https://opensource.org/licenses/MIT";
    case "GNU":
        return "(https://www.gnu.org/licenses/gpl-3.0";
    case "Eclipse Public License":
        return "https://opensource.org/licenses/EPL-1.0";
    case "IBM Public License":
        return "https://opensource.org/licenses/IPL-1.0";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    const currLicense = renderLicenseLink(license);
    if(license === null || license === ""){
      return "";
    }

    let returnString = "## " + "License \n" + currLicense;
    return returnString;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(arr) {
 let result = "";
  //generate markdown for each specific section. Use previously generated license section when i === 6 (license)
  for(let i = 0; i < arr.length; i++){
    const sections = ["Title", "Description", "Installation", "Usage",
  "Contribution", "Testing", "License", "Github", "Email"];
    let currSection = "";
    if(i === 0){
      const badge = renderLicenseBadge(arr[6]);
      currSection = "# " + arr[i] + badge;
      currSection += generateTableOfContents(sections);
    }else if(i === 6){
      currSection = renderLicenseSection(arr[i]);
    }else{
        currSection = "## " + sections[i] + "\n" + arr[i];
    }
    //2 new lines at end of section
    result += (currSection + "\n\n");
  }
  return result;
}

function generateTableOfContents(arr){
  let result = "\n\n"
  for(let i = 1; i < arr.length -1; i++){
    let firstWord = arr[i].split(" ");
    let currLine = `- [${arr[i]}](#${firstWord[0]})\n`;
    result += currLine;
  }
  return result;
}


module.exports = generateMarkdown;
