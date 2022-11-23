const fileSaved = false;

if (fileSaved) {
  console.log("❌");
} else {
  console.log("🔴");
}

const name = "--";

if (name === "virendra") {
  console.log("He is Admin");
} else if (name === "sandeep") {
  console.log("He Is not admin , he is Somthing else");
} else if (name === "harsh") {
  console.log("he is Student");
} else {
  console.log("I dont know, who is who");
}
switch (name) {
  case "virendra":
    console.log("He is Admin");
    break;

  case "sandeep":
    console.log("He is Sandeep");
    break;

  case "Harsh":
    console.log("He is HArsh");
    break;

  default:
    console.log("I dont know, who is who");
    break;
}
