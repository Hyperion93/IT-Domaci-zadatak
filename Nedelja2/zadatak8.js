var vis = 5;
for (var i = 1; i <= vis; i++) {
  var taraba = '';

  for (var j = 1; j <= (vis - i); j++) {
    taraba += ' ';
  }

  for (var k = 1; k <= i; k++) {
    taraba += '#';
  }

  console.log(taraba);
}


