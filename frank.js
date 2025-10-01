function enter(){
  let out= document.getElementById("out")
  
  let name= document.getElementById("name").value;
  localStorage.setItem("username",document.getElementById("name").value +  " sign in successful")
  let age= document.getElementById("age").value;
  let regDate= document.getElementById("date").value;
  let password= document.getElementById("p1").value;
  let confirmPassword= document.getElementById("p2").value;
  
  if (name===""){
    alert("enter name");
  }
  else if (name.length<3){
    alert("enter valid name");
  }
  else if (regDate===""){
    alert("enter regDate");
  }
  else if (password===""){
    alert("enter password");
  }
  else if (confirmPassword===""){
    alert("confirm password");
  }
  else if (age===""){
    alert("enter age");
  }
  else if (age<18){
    alert("too young to access must be 18 above");
  }
  else if (age>80){
    alert("too old to access must be 80 and below");
  }
  
  
  else if (password!==confirmPassword){
    alert("password do not match");
  }
  else if (password.length<6){
    alert("password must be at least 6 characters");
    
  }
  else {
    
    out.innerHTML=" great you have been "
    window.location.href="frank2.html";
    alert(localStorage.getItem("username"));
    
  }
  
  
  
}
function color(){
  const el = document.getElementById("body");
  el.classList.toggle("pink")
}
const h1 = document.getElementById("h1");
h1.innerHTML = localStorage.getItem("username") + " Thanks for signing up"


function add(){
  let no1= parseFloat(document.getElementById("no1").value);
  let no2= parseFloat(document.getElementById("no2").value);
  let result=  document.getElementById("calcu");
  result.innerHTML=no1 + no2;
  
}

function subtract(){
  let no1= parseFloat(document.getElementById("no1").value);
  let no2= parseFloat(document.getElementById("no2").value);
  let result=  document.getElementById("calcu");
  result.innerHTML=no1 - no2;
  
}
function multiply(){
  let no1= parseFloat(document.getElementById("no1").value);
  let no2= parseFloat(document.getElementById("no2").value);
  let result=  document.getElementById("calcu");
  result.innerHTML=no1 * no2;
  
}
function divide(){
  let no1= parseFloat(document.getElementById("no1").value);
  let no2= parseFloat(document.getElementById("no2").value);
  let result=  document.getElementById("calcu");
  result.innerHTML=no1 / no2;
  
}
function squareRoot(){
  let spec=parseFloat(document.getElementById("spec").value);
  let value = document.getElementById("val");
  val.innerHTML= Math.sqrt(spec)
}
function cubeRoot(){
  let spec=parseFloat(document.getElementById("spec").value);
  let value = document.getElementById("val");
  val.innerHTML= Math.cbrt(spec)
}
function guess(){
  const comp = Math.floor(Math.random()*4);
let guessNumber = parseFloat(document.getElementById("guess").value);
let p = document.getElementById("gap");
 if(comp===guessNumber){
   alert("correct the number is " +comp);
 }
else if (guessNumber>3 || guessNumber<0){
  alert(" only numbers between 0 to 3")
}

 else {
   alert("please retry the number is " + comp)
 }
}