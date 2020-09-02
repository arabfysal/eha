var cars = ['toyota', 'honda', 'mazda', 'mitsubishi', 'tesla', 'lexus'];
console.log(cars[0] + ", " + cars[cars.length -1]);
cars.push('mercedes-benz');
console.log(cars[cars.length - 1]);
for (var i = 0; i < cars.length; i++) {
	console.log(cars[i]);
}