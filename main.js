const { crawlPage } = require("./crawl");
const { printReport } = require("./report.js");

//npm run start https://wagslane.dev
//npm run test

async function main() {
  if (process.argv.length < 3) {
    console.log("no website parameter provided");
    process.exit(1);
  }
  if (process.argv.length > 3) {
    console.log("too many command line args");
    process.exit(1);
  }

  const baseURL = process.argv[2];

  // for(const arg of process.argv){
  //     console.log(arg);
  // }

  console.log("starting crawl");
  const pages = await crawlPage(baseURL, baseURL, {});

  printReport(pages);

  //   for (const page of Object.entries(pages)) {
  //     console.log(page);
  //   }
}

main();
