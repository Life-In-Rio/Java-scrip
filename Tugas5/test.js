let number = 5;
switch (true) {
  case number < 0:
    console.log("negative");
    break;
  case number === 0:
    console.log("zero");
    break;
  case number > 0:
    console.log("positive");
    break;
  default:
    console.log("unknown");
}
