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
export function error(msg: string) {
  console.log(chalk.red.bold(msg));
}
export function success(msg: string) {
  console.log(chalk.green.bold(msg));
}

/**
 * function for looking up the argument using yargs
 * */
import yargs from "yargs";
import { handleBuildArgument } from "./handlers";

export function processArgs() {
  const args = yargs(process.argv.slice(2)).argv;
  console.log(args);

  //@ts-ignore
  if (args.build) {
    //@ts-ignore
    handleBuildArgument(args);
    //@ts-ignore
  } else if (args.h) {
    //@ts-ignore
    handleHelpArgument(args.h);
  } else {
    error("No valid arguments were given ! To get help use windi --help");
  }
}
