console.log("test");

function addition (a, b){
	return a+b;
};

console.log(addition(10,30));

function sub (a, b){
	return a-b;
};

console.log(sub (10, 20));

function mult (a, b){
	return a*b;
};

console.log(mult(10,3));

function div (a, b){
	if (b!==0){
		return "error";
	} else{
		return a/b;
 	  };
};

console.log(div(3, 4));
