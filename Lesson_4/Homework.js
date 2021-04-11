function line(){
	console.log('<------------------------->');
}

function alert(arra){
	console.log(arra);
}

// Task 1

let arr = [2, 43, -12, 0, 12, 435, -543, 4, 73, 45, -11, 32, -1, 64, -25, 37, 961, -5, 74, 21, -36, 52];

function compareNumber1(a, b){
	if (a>b) return 1;
	if (a<b) return -1;
}
arr.sort(compareNumber1);
alert(arr);
line();

// First method
function compareNumber2(a, b){
	if (a>b) return -1;
	if (a<b) return 1;
}
arr.sort(compareNumber2);
alert(arr);
line();

// Second method

let newArr = arr.sort(compareNumber1);
newArr.reverse();
alert(newArr);
line();

// Task 2

function filterArrPlus(a){
	return a>=0;
}

let filteredArrPlus = arr.filter(filterArrPlus);
alert(filteredArrPlus);
line();

function filterArrMinus(a){
	return a<0;
}

let filteredArrMinus = arr.filter(filterArrMinus);
alert(filteredArrMinus);
line();

// Task 3
let studentArr = [{yearOfStuding: 2016, facultyName: 'op1'}, {yearOfStuding: 2017, facultyName: 'op2'}, {yearOfStuding: 2019, facultyName: 'op3'}, 
	{yearOfStuding: 2022, facultyName: 'op4'}, {yearOfStuding: 2019, facultyName: 'op5'}, {yearOfStuding: 2016, facultyName: 'op6'}, {yearOfStuding: 2018, facultyName:'op7'}, 
	{yearOfStuding: 2019, facultyName: 'op8'}, {yearOfStuding: 2021, facultyName: 'op9'}, {yearOfStuding: 2021, facultyName: 'op10'}];

let facultyNameArr = [];

function addName(item, i, array){
	facultyNameArr.push(item.facultyName);
}

studentArr.forEach(addName);
alert(facultyNameArr);
line();

function sumYear(sumOfYear, current){
	return sumOfYear + current.yearOfStuding;
}

let sum = studentArr.reduce(sumYear, 0);
alert(sum);
