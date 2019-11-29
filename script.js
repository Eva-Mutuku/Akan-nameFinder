function getsubmit(){
  var fname = document.forms["form_reg"]["firstname"].value;
  alert(fname);
  var sex = document.getElementById("form_reg");
  var gender = sex.option[sex.selectedIndex].text;
  var DD = document.getElementById("form_reg");
  var dayOfBirth = DD.option[DD.selectedIndex].value;
  alert(dayOfBirth);
  var yearOfBirth = document.forms["form_reg"]["firstname"].value;
  alert(yearOfBirth);
  // alert("Hello")
}
// Calculating the day one was born

if (DD<=0 || DD>31){
  alert("Invalid Day!");
  prompt("Please enter the correct day")
  }
  else {
  var MM = prompt("Enter the month you were born "+1+".January "+2+".February "+3+".March "+4+".April "+5+".May "+6+".June "+7+".July "+8+".August "+9+".September "+10+".October "+11+".November "+12+"December")
  
  if (MM<=0 || MM>12){
  alert("Invalid month!");
  prompt("Please enter the correct month.")
  }
  else {
  var dayOfBirth = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;
  }
  }
  
// Giving names depending on gender and day of birth
var akanFemaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var akanMaleNames = ["Kwasi", "Kwacho", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

if (sex==female){
  if(dayOfBirth==Sunday){
    alert("Your Akan name is "+akanFemaleNames[0]+". This means that you were born on "+dayOfBirth);
  } else if(dayOfBirth==Monday){
    alert("Your Akan name is "+akanFemaleNames[1]+". This means that you were born on "+dayOfBirth);
  }else if(dayOfBirth==Tuesday){
    alert("Your Akan name is "+akanFemaleNames[2]+". This means that you were born on "+dayOfBirth);
  }else if(dayOfBirth==Wednesday){
    alert("Your Akan name is "+akanFemaleNames[3]+". This means that you were born on "+dayOfBirth);
  }else if(dayOfBirth==Thursday){
    alert("Your Akan name is "+akanFemaleNames[4]+". This means that you were born on "+dayOfBirth);
  }else if(dayOfBirth==Friday){
    alert("Your Akan name is "+akanFemaleNames[5]+". This means that you were born on "+dayOfBirth);
  }else{
    alert("Your Akan name is "+akanFemaleNames[6]+". This means that you were born on "+dayOfBirth);
  }
}
else {
  if(dayOfBirth==Sunday){
    alert("Your Akan name is "+akanMaleNames[0]+". This means that you were born on "+dayOfBirth);
  } else if(dayOfBirth==Monday){
    alert("Your Akan name is "+akanMaleNames[1]+". This means that you were born on "+dayOfBirth);
  }else if(dayOfBirth==Tuesday){
    alert("Your Akan name is "+akanMaleNames[2]+". This means that you were born on "+dayOfBirth);
  }else if(dayOfBirth==Wednesday){
    alert("Your Akan name is "+akanMaleNames[3]+". This means that you were born on "+dayOfBirth);
  }else if(dayOfBirth==Thursday){
    alert("Your Akan name is "+akanMaleNames[4]+". This means that you were born on "+dayOfBirth);
  }else if(dayOfBirth==Friday){
    alert("Your Akan name is "+akanMaleNames[5]+". This means that you were born on "+dayOfBirth);
  }else{
    alert("Your Akan name is "+akanMaleNames[6]+". This means that you were born on "+dayOfBirth);
  }
}
}

var DD = parseInt(prompt("Enter the day you were born"));




