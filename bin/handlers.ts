// here I will implement the builds functions of the --build flag ex buildPHP , buildLaravel ...

import { success , error } from "./functions";

// @ts-ignore
export function handleBuildArgument(args: any) {
  switch (args.build) {
    case "php":
      success("Building the project for PHP - CORE apps");
      break;

    default:
      error("No arguments on the build flag !");
      break;
  }
}

export function handleHelpArgument(){

}
