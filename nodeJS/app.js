// file system module
const fs = require("fs");
const folderName = process.argv[2] || "Project";

fs.mkdirSync(folderName);
try {
  let body = "<html>";
  body = body + "<head>\n<title>Document</title>\n</head>";
  body = body + "<body>\n";
  //   for (i = 1; i <= 50; i++) {
  //     let square = i * i;
  //     let cube = i * i * i;
  //     body =
  //       body +
  //       "<span>" +
  //       i +
  //       " square: " +
  //       square +
  //       " cube: " +
  //       cube +
  //       "</span><br/>\n";
  //   }
  body = body + "</body>\n";
  body = body + "</html>";
  fs.writeFileSync(`${folderName}/index.html`, body);
  fs.writeFileSync(`${folderName}/app.js`, "");
  fs.writeFileSync(`${folderName}/style.css`, "");
} catch (err) {
  console.log("something went wrong");
  console.log(err);
}
