#!/usr/bin/env node

/**
 * This file will contain the windi cli starter
 * So you will be able execute:
 * windi --init-php,
 * windi --init-html
 * windi --init-js (for js projects without a bundler)
 * windi --prod -> executes the tailwind export npx tailwindcss ...
 * */

import { greeting, processArgs } from "./functions";
import { chalkTitle } from "./variales";

/**
 * is the starter method checks for arguments if no args than give the user the help desk
 * */
function windi() {
  greeting(chalkTitle, {
    padding: 2,
    backgroundColor: "cyan",
    textAlignment: "center",
  });

  processArgs();


}

windi();
