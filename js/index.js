
// 1
// var num= Number(window.prompt("Please enter the number"));
// console.log(num);
// window.alert(num);

//2 
// var num= Number(window.prompt("Please enter the number"));
// if(num%3==0 && num%4==0) {
//     console.log ("yes");
//     window.alert("yes");
// }
// else {
//     console.log("no");
//     window.alert("no");
// }

//3
// var num1= Number(window.prompt("please enter first number"));
// var num2= Number(window.prompt("please enter the second number"));

// if (num1 > num2){
//     maxNum= num1;
// }
// else if (num1 < num2){
//     maxNum= num2;
// }
// console.log(maxNum);

//4
// var num= Number(window.prompt("please enter the number"));
// if (num>0){
//     console.log("Positive");
// }
// if (num<0){
//     console.log ("Negative");
// }
// else {
//     console.log("your number = zero");
// }

//5
// var num1= Number(window.prompt("please enter the first number"));
// var num2= Number(window.prompt("please enter the second number"));
// var num3= Number(window.prompt("please enter the third number"));
// if (num1>num2 && num1>num3){
//     console.log("Max number ="+" "+num1);
//     if (num2<num3){
//         console.log("min number ="+" "+num2);
//     }
//     else {
//         console.log("min number ="+" "+num3);
//     }
// }
// else if (num2>num3 && num2>num1){
//     console.log("Max number ="+" "+num2);
//     if (num3<num1){
//         console.log("min number ="+" "+num3);
//     }
//     else {
//         console.log("min number ="+" "+num1);
//     }
// }
// else {
//     console.log("max number ="+" "+num3);
//     if (num1<num2){
//         console.log("min number ="+" "+num1);
//     }
//     else {
//         console.log("min number ="+" "+num2);
//     }
// }

//7 
// var num= Number(window.prompt("please enter the number"));
// if (num%2 == 0){
//     console.log("number is even");
// }
// else {
//     console.log("number is odd");
// }

//8
// var letter= window.prompt("kindly enter only one lowercase character");

// if (letter== 'e' || letter== 'a' || letter== 'i' || letter== 'o' || letter== 'u'){
//     window.alert ("Vowel");
//     console.log("Vowel");   
// }
// else {
//     window.alert ("Consonant");
//     console.log("Consonant");
// }

// 9
// var num= Number(window.prompt("Kindly enter the number"));
// for ( var i = 1 ; i <= num ; i++ ){
//     console.log(i);
// }

// 10
// var num= Number(window.prompt("Kindly enter the number"));
// for ( var i = 1 ; i <= 12 ; i++ ){
//     var result = num * i;
//     console.log(result);
//     window.alert(result);
// }

// 11
// var num= Number(window.prompt("please enter a number"));
// for (var i=1 ; i <= num ; i++){
//     if (i%2 == 0) {
//         console.log(i);
//     }
// }


// 12
// var num1 = Number(window.prompt("please enter the first number"));
// var num2 = Number(window.prompt("please enter the second number"));
//  function computePower(num1, num2) {
//   var result = 1;
//   for (var i = 1; i <= num2; i++) {
//     result *= num1;
//   }
//   return result;
// }
// var res = computePower(num1,num2);
// console.log(res);
// window.alert(res);


//13
// var sub1 = Number(window.prompt("please enter Maths marks"));
// var sub2 = Number(window.prompt("please enter Physics marks"));
// var sub3 = Number(window.prompt("please enter History marks"));
// var sub4 = Number(window.prompt("please enter Biology marks"));
// var sub5 = Number(window.prompt("please enter Chemistry marks"));
// var totMarks = sub1 + sub2 + sub3 + sub4 + sub5;
// var avgMarks = totMarks/5;
// var prcMarks = (totMarks/500)*100 + " %"
// console.log(totMarks);
// console.log(avgMarks);
// console.log(prcMarks);

//14
// var monthNum = Number(window.prompt("please enter month number from 1 to 12"));
// if(monthNum==1){
//     console.log("january has 31 days");
// }
// else if (monthNum==2){
//     console.log("February has 29 days, and 28 days every 4 years");
// }
// else if (monthNum==3){
//     console.log("March has 31 days");
// }
// else if (monthNum==4){
//     console.log("April has 30 days");
// }
// else if (monthNum==5){
//     console.log("May has 31 days");
// }
// else if (monthNum==6){
//     console.log("June has 30 days");
// }
// else if (monthNum==7){
//     console.log("July has 30 days");
// }
// else if (monthNum==8){
//     console.log("August has 31 days");
// }
// else if (monthNum==9){
//     console.log("September has 30 days");
// }
// else if (monthNum==10){
//     console.log("October has 31 days");
// }
// else if (monthNum==11){
//     console.log("November has 30 days");
// }
// else if (monthNum==12){
//     console.log("December has 31 days");
// }
// else {
//     console.log("please enter valid number from 1 to 12");
// }

//15
// var sub1 = Number(window.prompt("please enter Physics marks"));
// var sub2 = Number(window.prompt("please enter Chemistry marks"));
// var sub3 = Number(window.prompt("please enter Biology marks"));
// var sub4 = Number(window.prompt("please enter Mathematics marks"));
// var sub5 = Number(window.prompt("please enter Computer marks"));
// var totMarks = sub1 + sub2 + sub3 + sub4 + sub5;
// var prcMarks = (totMarks/500)*100
// if (prcMarks >= 90){
//     console.log("you've scored an A, congrats");
//     window.alert("you've scored an A, congrats");
// }
// else if (prcMarks>=80 && prcMarks<90){
//     console.log("you've scored an B, congrats");
//     window.alert("you've scored an B, congrats");
// }
// else if (prcMarks>=70 && prcMarks<80){
//     console.log("you've scored an C, congrats");
//     window.alert("you've scored an C, congrats");
// }
// else if (prcMarks>=60 && prcMarks<70){
//     console.log("you've scored an D, congrats");
//     window.alert("you've scored an D, congrats");
// }
// else if (prcMarks>=40 && prcMarks<60){
//     console.log("you've scored an E, congrats");
//     window.alert("you've scored an E, congrats");
// }
// else {
//     console.log("you've scored an F, you failed!, but you can always try again");
//     window.alert("you've scored an F, you failed!, but you can always try again");
// }

// USING SWITCH CASE
//15
// var monthNum = Number(window.prompt("please enter month number from 1 to 12"));
// switch (monthNum) {
//     case 1:
//     console.log("january has 31 days");
//     window.alert("january has 31 days")
//     break;
//     case 2:
//     console.log("February has 29 days, and 28 days every 4 years");
//     window.alert("February has 29 days, and 28 days every 4 years")
//     break;
//     case 3:
//     console.log("March has 31 days");
//     window.alert("March has 31 days")
//     break;
//     case 4:
//     console.log("April has 30 days");
//     window.alert("April has 30 days")
//     break;
//     case 5:
//     console.log("May has 31 days");
//     window.alert("May has 31 days")
//     break;
//     case 6:
//     console.log("June has 30 days");
//     window.alert("June has 30 days")
//     break;
//     case 7:
//     console.log("July has 30 days");
//     window.alert("July has 30 days")
//     break;
//     case 8:
//     console.log("August has 31 days");
//     window.alert("August has 31 days")
//     break;
//     case 9:
//     console.log("September has 30 days");
//     window.alert("September has 30 days")
//     break;
//     case 10:
//     console.log("October has 31 days");
//     window.alert("October has 31 days")
//     break;
//     case 11:
//     console.log("November has 30 days");
//     window.alert("November has 30 days")
//     break;
//     case 12:
//     console.log("December has 31 days");
//     window.alert("December has 31 days")
//     break;
//     default:
//     console.log("please enter valid number from 1 to 12");
//     break;
//     }

//16
// var letter= window.prompt("kindly enter only one lowercase character");
// switch (letter) {
// case "a":
// case "e":
// case "i":
// case "o":
// case "u":
// window.alert("Vowel");
// console.log("Vowel");
// break;
// default:
// window.alert("Consonant");
// console.log("Consonant");
// break;
// }

//17
// var num1 = Number(window.prompt("Enter the first number"));
// var num2 = Number(window.prompt("Enter the second number"));

// switch (true) {
//   case num1 > num2:
//     console.log("max. number is " + num1);
//     window.alert("max. number is " + num1);
//     break;
//   case num2 > num1:
//     console.log("max. number is " + num2);
//     window.alert("max. number is " + num2);
//     break;
//   default:
//     console.log("The provided numbers are equal");
//     window.alert("The provided numbers are equal");
//     break;
// }

//18
// var num = Number(window.prompt("Enter the number"));
// switch(true){
//     case num%2==0 :
//         console.log("the number is even");
//         window.alert("the number is even");
//     break; 
//     case num%2==1 :
//         console.log("the number is odd");
//         window.alert("the number is odd");
//     break; 
//     default:
// }

//19
// var num = Number(window.prompt("Enter the number"));
// switch(true){
//     case num>0 :
//         console.log("the number is positive");
//         window.alert("the number is positive");
//     break;
//     case num==0 :
//         console.log("the number is zero");
//         window.alert("the number is zero");
//     break;
//     case num<0 :
//         console.log("the number is negative");
//         window.alert("the number is negative");
//     break;
//     default:
// }

//20
// var num1 = Number(window.prompt("Enter the first number"));
// var num2 = Number(window.prompt("Enter the second number"));
// var sign = window.prompt("Enter the sign (+, -, *, /)");

// var result;

// switch (sign) {
//   case "+":
//     result = num1 + num2;
//     console.log("Result " + result);
//     window.alert("Result " + result);
//     break;
//   case "-":
//     result = num1 - num2;
//     console.log("Result is " + result);
//     window.alert("Result is " + result);
//     break;
//   case "*":
//     result = num1 * num2;
//     console.log("Result is " + result);
//     window.alert("Result is " + result);
//     break;
//   case "/":
//     result = num1 / num2;
//     console.log("Result is " + result);
//     window.alert("Result is " + result);
//     break;
//   default:
//     console.log("Invalid sign, try again");
//     window.alert("Invalid sign, try again");
//     break;
// }


