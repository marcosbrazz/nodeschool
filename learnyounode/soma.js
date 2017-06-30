//console.log(process.argv);

var soma = 0;

for (var i = process.argv.length - 1; i >= 2; i--) {
	soma += +process.argv[i];
}

console.log(soma);