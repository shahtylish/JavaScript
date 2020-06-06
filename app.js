//Chapter # 1:
//Task 1:
alert('Welcome to our Website!');

//Task 2:
alert('Error! Please enter a valid password.');

//Task 3:
alert('Welcome to JS Land...\nHappy Coding!');

//Task 4:
alert('Welcome to JS Land...');
alert('Happy Coding!');

//Task 5:
//alert("Hello... I can run JS through my web browser's console"); //Write this line of code in the browser's console and press enter and will show this alert message.



//Chapter # 2:
//Task 1:
var username;

//Task 2:
var myName;
myName = "Shahzaib Khan";

//Task 3:
var message = "Hello World";
alert(message);

//Task 4:
var Sname = 'Jhone Doe';
alert(Sname);
var Sage = '15 years old';
alert(Sage);
var Scourse = 'Certified Mobile Application Development';
alert(Scourse);

//Task 5:
var pizza = 'PIZZA\nPIZZ\nPIZ\nPI\nP';
alert(pizza);

//Task 6:
var email = 'shahwajid.sk@gmail.com';
alert('My email address is ' + email);

//Task 7:
var book = 'A smarter way to learn JavaScript';
alert('I am trying to learn from the Book ' + book);

//Task 8:
document.write("Yah! I can write HTML conetnt through JavaScript");

document.write("<br>");
document.write("<br>");
//Task 9:
var string = '▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬';
//alert(string);
document.write(string);




//Chapter # 3:
//Task 1:
var age = 21;
alert('I am ' + age + ' years old');

//Task 2:
var nov = 10;
alert("You have visited this site " + nov + ' times');

document.write("<br>");
document.write("<br>");
//Task 3:
var birthYear = 1999;
document.write("My birth year is " + birthYear);
document.write("<br>");
document.write("Data type of my declared variable is number");

document.write("<br>");
document.write("<br>");
//Task 4:
var Vname = "John Doe";
var Ptitle = "T-shirt";
var quantity = 5;
document.write(Vname + " ordered " + quantity + " " + Ptitle + "(s) on XYZ Clothing store");


//Chapter # 4:
//Task 1:
var variable1, variable2, variable3;

//Task 2:
var legal_variable_1, legal_variable_2, legal_variable_3, legal_variable_4, legal_variable_5;
var illegal_variable_1, illegal_variable_2, illegal_variable_3, illegal_variable_4, illegal_variable_5;

//Task 3 is on Index.html page.

document.write("<br>");
document.write("<br>");

//Chapter # 5:
//Task 1:
var x = 3 + 5;
document.write("Sum of 3 and 5 is " + x);

document.write("<br>");
document.write("<br>");

//Task 2:
var x = 3 - 5;
document.write("Subtraction of 3 and 5 is " + x);

document.write("<br>");

var x = 3 * 5;
document.write("Multiplication of 3 and 5 is " + x);

document.write("<br>");

var x = 3 / 5;
document.write("Division of 3 and 5 is " + x);

document.write("<br>");

var x = 5 % 3;
document.write("Modulus of 3 and 5 is " + x);

document.write("<br>");
document.write("<br>");

//Task 3:
var value;
document.write("Value after variable declaration is " + value);

document.write("<br>");

value = 5;
document.write("Initial value: " + value);

document.write("<br>");

value++;
document.write("Value after increment is: " + value);

document.write("<br>");

value = value + 7;
document.write("Value after addition is: " + value);

document.write("<br>");

value--;
document.write("Value after decrement is: " + value);

document.write("<br>");

value = value % 3;
document.write("The reminder is: " + value);

document.write("<br>");
document.write("<br>");

//Task 4:
var ticket_price = 600;
var buy_5_tickets = ticket_price * 5;
document.write("Total cost to buy 5 tickets to a movie is " + buy_5_tickets + "PKR");

document.write("<br>");
document.write("<br>");

//Task 5:
document.write("Table of 5:");
document.write("<br>");
var table_number = 5;
for(var i = 1; i <=10; i++){
    document.write(table_number + " x " + i + " = " + table_number*i);
    document.write("<br>");
}

document.write("<br>");
document.write("<br>");

//Task 6:
var c = 25;
document.write(c + "\u00B0C is " + (c * 9/5 +32) + "\u00B0F");

document.write("<br>");

var f = 70;
document.write(f + "\u00B0F is " + (f - 32)*5/9 + "\u00B0C");

document.write("<br>");
document.write("<br>");

//Task 7:
var p_item1 = 650;
var p_item2 = 100;
var q_item1 = 3;
var q_item2 = 7;
var shipping_charges = 100;
document.write("Price of item 1 is " + p_item1);
document.write("<br>");

document.write("Quantity of item 1 is " + q_item1);
document.write("<br>");

document.write("Price of item 2 is " + p_item2);
document.write("<br>");

document.write("Quantity of item 2 is " + q_item2);
document.write("<br>");

document.write("Shipping Charges " + shipping_charges);
document.write("<br>");
document.write("<br>");

var total_cost = p_item1*q_item1 + p_item2*q_item2 + shipping_charges;
document.write("Total cost of your order is " + total_cost);

document.write("<br>");
document.write("<br>");

//Task 8:
var total_marks = 980;
var marks_obt = 804;
var percentage = marks_obt/total_marks * 100;

document.write("Total marks: " + total_marks);
document.write("<br>");

document.write("Marks Obtained: " + marks_obt);
document.write("<br>");

document.write("Percentage: " + percentage);

document.write("<br>");
document.write("<br>");

//Task 9:
var total_currency = 10*104.80 + 25*28;
document.write("Total Currency in PKR: " + total_currency);

document.write("<br>");
document.write("<br>");

//Task 10:
var some_number = 5;
var result = (some_number + 5) * 10 / 2
document.write(result);

document.write("<br>");
document.write("<br>");

//Task 11:
var current_year = 2020;
var birth_year = 1999;
var your_age = current_year - birth_year;

document.write("Current Year: " + current_year);
document.write("<br>");
document.write("Birth Year: " + birth_year);
document.write("<br>");
document.write("Your age is: " + your_age);

document.write("<br>");
document.write("<br>");

//Task 12:
var radius = 20;
document.write("Radius of a circle: " + radius);
document.write("<br>");

var circum = 2 * 3.142 * 20;
document.write("The circumference is: " + circum);
document.write("<br>");

var area = 3.142 * 20 * 20;
document.write("The area is: " + area);

document.write("<br>");
document.write("<br>");

//Task 12:
var snack = "Chocolato", age = 21, max_age = 65, snacks_per_day = 10;
var total_snacks = (max_age - age) *snacks_per_day;
document.write("Favourite Snack: " + snack);
document.write("<br>");

document.write("Current Age: " + age);
document.write("<br>");

document.write("Estimated maximum age: " + max_age);
document.write("<br>");

document.write("Amount of snacks per day: " + snacks_per_day);
document.write("<br>");

document.write("You will need " + total_snacks + " " + snack + " to last you until the ripe old age of " + max_age);

document.write("<br>");
document.write("<br>");

//Chapters # 6-9:
//Task 1:
 var a = 10;
document.write("Result:");
document.write("<br>");

document.write("The value of a is: " + a);
document.write("<br>");

document.write("The value of ++a is: " + ++a);
document.write("<br>");
document.write("Now the value of a is: " + a);
document.write("<br>");

document.write("The value of a++ is: " + a++);
document.write("<br>");
document.write("Now the value of a is: " + a);
document.write("<br>");

document.write("The value of --a is: " + --a);
document.write("<br>");
document.write("Now the value of a is: " + a);
document.write("<br>");

document.write("The value of a-- is: " + a--);
document.write("<br>");
document.write("Now the value of a is: " + a);

document.write("<br>");
document.write("<br>");

//Task 2:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("a is: " + a);
document.write("<br>");
document.write("b is: " + b);
document.write("<br>");
document.write("Result is: " + result);

document.write("<br>");
document.write("<br>");

//Task 3:
var input_name = prompt("What is your name?");
alert("Welcome " + input_name);

document.write("<br>");
document.write("<br>");

//Task 5:
var input_number = +prompt("Please enter a number for table:");
var table0f5 = 5;
for(var i = 1; i <= 10; i++){
    if(input_number != ""){
        document.write(input_number + " x " + i + " = " + input_number*i);
        document.write("<br>");
    }
    else{
        document.write(table0f5 + " x " + i + " = " + table0f5*i);
        document.write("<br>");
    }
}

document.write("<br>");
document.write("<br>");

//Task 6:
var sub1 = prompt("Enter Subject name 1:");
var sub2 = prompt("Enter Subject name 2:");
var sub3 = prompt("Enter Subject name 3:");
var sub_total = 100;
var obt1 = +prompt("Enter obtained marks of 1st subject:");
var obt2 = +prompt("Enter obtained marks of 2nd subject:");
var obt3 = +prompt("Enter obtained marks of 3rd subject:");

document.write("<table>");

document.write("<tr>");
document.write("<th>Subject</th>");
document.write("<th>Total Marks</th>");
document.write("<th>Obtained Marks</th>");
document.write("<th>Percentage</th>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>"+sub1+"</td>");
document.write("<td>"+sub_total+"</td>");
document.write("<td>"+obt1+"</td>");
document.write("<td>"+obt1/sub_total*100+"%" + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>"+sub2+"</td>");
document.write("<td>"+sub_total+"</td>");
document.write("<td>"+obt2+"</td>");
document.write("<td>"+obt2/sub_total*100+"%" + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>"+sub3+"</td>");
document.write("<td>"+sub_total+"</td>");
document.write("<td>"+obt3+"</td>");
document.write("<td>"+obt3/sub_total*100+"%" + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td></td>");
document.write("<th>"+(sub_total*3)+"</th>");
document.write("<th>"+(obt1 + obt2 + obt3)+"</th>");
document.write("<th>"+((obt1 + obt2 + obt3)/(sub_total*3)*100)+"%" + "</th>");
document.write("</tr>");

document.write("</table>");

document.write("<br>");
document.write("<br>");

//Chapters # 9-11:
//Task 1:
var city = prompt("Enter City Name:");
if(city == "Karachi" || "karachi"){
    alert("Welcome to the city of lights");
}

//Task 2:
var gender = prompt("Please Enter your gender:");
if(gender == "male" || gender == "Male"){
    alert("Good Morning Sir");
}
else if(gender == "female" || gender == "Female"){
    alert("Good Morning Ma'am");
}

//Task 3:
var traffic_signal = prompt("Enter color of road traffic signal:");
if(traffic_signal == 'Red' || traffic_signal == 'red'){
    alert("Must Stop");
}
else if(traffic_signal == 'Yellow' || traffic_signal == 'yellow'){
    alert("Ready to move");
}
else if(traffic_signal == 'Green' || traffic_signal == 'green'){
    alert("Move now");
}

//Task 4:
var fuel = +prompt("Remaining fuel in litres:");
if(fuel < 0.25){
    alert("Please refill the fuel in your car");
}

//Task 5:
var a = 4;
if(++a === 5){
    alert("Given condition for variable a is true");
}
var b = 82;
if(b++ === 83){
    alert("Given condition for variable b is true");
}
var c = 12;
if(c++ === 13){
    alert("condition 1 is true");
}
if(c === 13){
    alert("condition 2 is true");
}
if(++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}
var materialCost = 20000, labourCost = 2000;
var totalCost = materialCost + labourCost;
if(totalCost === labourCost + materialCost){
    alert("The Cost equals");
}

if(true){
    alert("True");
}
if(false){
    alert("False");
}

if('car' < 'cat'){
    alert("Car is smaller than cat");
}


//Task 7:
var secret_number = 7;
var guess = +prompt("Guess the secret number:");
if(guess === secret_number){
    alert("Bingo! Correct answer");
}
else if(guess === secret_number+1){
    alert("Close enough to the correct answer");
}

//Task 8:
var div3 = +prompt("Enter a number:");
if(div3%3 == 0){
    alert("Giver number is divisible by 3");
}

//Task 9:
var given_number = prompt("Enter a number to check its even or odd:");
if(given_number%2 == 0){
    alert(given_number + " is an even number");
}
else{
    alert(given_number + " is an odd number");
}

//Task 10:
var temp = prompt("Enter a Temperature:");
if(temp > 40){
    alert("It is too hot outside");
}
else if(temp > 30){
    alert("The weather today is normal");
}
else if(temp > 20){
    alert("Today's weather is cool");
}
else if(temp > 10){
    alert("OMG! Today's weather is so Cool");
}

//Task 11:
var fnumber = +prompt("Enter First Number:");
var snumber = +prompt("Enter Second Number:");
var operators = prompt("Enter Operator:");

if(operators === '+'){
    alert(fnumber + " + " + snumber + " is: " + (fnumber+snumber));
}

if(operators === '-'){
    alert(fnumber + " - " + snumber + " is: " + (fnumber-snumber));
}

if(operators === '*'){
    alert(fnumber + " * " + snumber + " is: " + (fnumber*snumber));
}

if(operators === '/'){
    alert(fnumber + " / " + snumber + " is: " + (fnumber/snumber));
}

if(operators === '%'){
    alert(fnumber + " % " + snumber + " is: " + (fnumber%snumber));
}
