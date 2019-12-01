function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

function invalidDateAlert() {
  if (birthDate<=0 || birthDate>31){
    alert("Input not valid");
    return false;
  }
}

function invalidMonthAlert() {
  if (monthOfBirth<=0 || monthOfBirth>12){
    alert("Invalid month!");
    return false;
  }
}

function getsubmit(){
  var fname = document.forms["form_reg"]["firstname"].value;
  // alert(fname);
  // Older browsers will require a polfyill for RadioNodeList for this to properly function
  var sex = document.getElementById("Gender"); 
  // alert(form.elements["Gender"].value);
  // var gender = sex.option[sex.selectedIndex].text;
  var DD = document.getElementById("DD");
  var birthDate = DD.option[DD.selectedIndex].value;
  // alert(dayOfBirth);
  var month = document.getElementById("MM");
  var monthOfBirth = month.option[month.selectedIndex].text;
  var birthYear = document.forms["form_reg"]["yearOfBirth"].value;
  alert(birthYear);
  // alert("Hello")
}

//Getting the first and last two digits in the year given
var CC = birthYear.slice(0,2);
var YY = birthYear.slice(2,4);
// Calculating the day one was born
var dayOfBirth = parseInt(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(monthOfBirth+1)/10)) + birthDate )%7);
var birthDay = dayOfBirth.toString();

// Giving names depending on gender and day of birth
var akanFemaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var akanMaleNames = ["Kwasi", "Kwacho", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

if (sex=="female" && birthday == "1"){
  document.write("Your Akan name is "+akanFemaleNames[0]+". This means that you were born on Sunday");
  // alert("Your Akan name is "+akanFemaleNames[0]+". This means that you were born on Sunday");
} else if(sex=="female" && birthDay=="2"){
  alert("Your Akan name is "+akanFemaleNames[1]+". This means that you were born on Monday");
}else if(sex=="female" && birthDay=="3"){
  alert("Your Akan name is "+akanFemaleNames[2]+". This means that you were born on Tuesday");
}else if(sex=="female" && birthDay=="4"){
  alert("Your Akan name is "+akanFemaleNames[3]+". This means that you were born on Wednesday");
}else if(sex=="female" && birthDay=="5"){
  alert("Your Akan name is "+akanFemaleNames[4]+". This means that you were born on Thursday");
}else if(sex=="female" && birthDay=="6"){
  alert("Your Akan name is "+akanFemaleNames[5]+". This means that you were born on Friday");
}else{
  alert("Your Akan name is "+akanFemaleNames[6]+". This means that you were born on Saturday");
}
if(sex=="male" && birthDay=="1"){
  alert("Your Akan name is "+akanMaleNames[0]+". This means that you were born on Sunday");
} else if(sex=="male" &&birthDay=="2"){
  alert("Your Akan name is "+akanMaleNames[1]+". This means that you were born on Monday");
}else if(sex=="male" &&birthDay=="3"){
  alert("Your Akan name is "+akanMaleNames[2]+". This means that you were born on Tuesday");
}else if(sex=="male" &&birthDay=="4"){
  alert("Your Akan name is "+akanMaleNames[3]+". This means that you were born on Wednesday");
}else if(sex=="male" &&birthDay=="5"){
  alert("Your Akan name is "+akanMaleNames[4]+". This means that you were born on Thursday");
}else if(sex=="male" &&birthDay=="6"){
  alert("Your Akan name is "+akanMaleNames[5]+". This means that you were born on Friday");
}else{
  alert(sex=="male" &&"Your Akan name is "+akanMaleNames[6]+". This means that you were born on Saturday");
}









