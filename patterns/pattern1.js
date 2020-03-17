for (i = 5; i >= 1; i--) {
  var str = "";
  for (j = 5; j >= 1; j--) {
    str = str.concat(" ", i * j);
    if (j == 1) {
      console.log(str);
    }
  }
}

console.log("\n");

for (i = 1; i <= 5; i++) {
  var str = "";
  for (j = 1; j <= 5; j++) {
    str = str.concat(" ", i * j);
  }
  console.log(str);
}
