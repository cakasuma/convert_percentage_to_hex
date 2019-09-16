const inquirer = require("inquirer");

const main = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "theme",
        message: "What do you want to do?",
        choices: [
          "Percentage to hex",
          "Hex to percentage",
          new inquirer.Separator(),
          "Exit"
        ]
      }
    ])
    .then(answers => {
      switch (answers["theme"]) {
        case "Hex to percentage":
          hexToPercentage();
          break;
        case "Percentage to hex":
          percentageToHex();
          break;
        case "Exit":
          break;
        default:
          console.log("Wrong input");
          main();
          break;
      }
    });
};

const percentageToHex = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "percentage_to_hex",
        message: "Enter hex value:"
      }
    ])
    .then(answers => {
      const percentage_value = answers["percentage_to_hex"];
      const percentage = +percentage_value;
      const decimal = Math.round((percentage * 255) / 100);
      const hex_val = decimal.toString(16);

      // Print user input in console.
      console.log("Hex value is : " + hex_val);
    });
};

const hexToPercentage = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "hex_to_percentage",
        message: "Enter hex value:"
      }
    ])
    .then(answers => {
      const hex_value = answers["hex_to_percentage"];
      const decimal = parseInt(hex_value, 16);
      const percentage = Math.round((decimal * 100) / 255);
      const percentage_val = percentage.toString();

      // Print user input in console.
      console.log("Percentage value is : " + percentage_val + "%");
    });
};

main();
