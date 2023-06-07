/**
 * Easy readable interface for using boxen as a 'greeting' function
 * @msg the actual greeting msg
 * @options the styling for boxen
 * */
import boxen, { Options } from "boxen";
export function greeting(msg: string, options?: Options | undefined) {
  console.log(boxen(msg, options));
}

import chalk from "chalk";
// logger for error or success messages
function error(msg: string) {
  console.log(chalk.red.bold(msg));
}
function success(msg: string) {
  console.log(chalk.green.bold(msg));
}

/**
 * function for looking up the argument using yargs
 * */
import yargs from "yargs";
export function processArgs() {
  const args = yargs(process.argv.slice(2)).argv;
    console.log(args);

  //@ts-ignore the .build is if the project hast the --build project
  if (args.build) {
    //@ts-ignore
    switch (args.build) {
      case "php":
        success("Building the project for PHP - CORE apps");
        break;

      default:
        error("No arguments on the build flag !");
        break;
    }
    //@ts-ignore
  } else if (args.h) {
    success("Here i will return help infos !");
  } else {
    error("No valid arguments were given ! To get help use windi --help");
  }
}
