A();

function C() {
	console.log("OOPS!");
}

function E(f) {
	console.log("E");
	f();
	//var f = F;
}

function A() {
	console.log("A");
	B();
};

var C;

function G() {
	console.log("G");
	var H = function() {
		console.log("H");
		I();
	};
	H();
}

var D = d;

function d() {
	console.log("D");
	E(f);
}

function I() {
	console.log("I");
	J();
	//J();
}

function B() {
	console.log("B");
	C();
};

function f() {
	console.log("F");
	G();
};

function K(){
	var rest = "KLMNOPQRSTUVWXYZ".split("");
	for (var i=0; i<rest.length; i++) {
		(function(i){
			// define the current function
			window[rest[i]] = function() {
				console.log(rest[i]);
				if (i < (rest.length-1)) {
					// TODO: call the next function
					window[rest[i+1]]();
				}
			};
		})(i);
	}
};

function J() {
	J = function() {
		console.log("J");
		K();
		K();
	};
	J();
};

function C() {
	console.log("C");
	d();
};

