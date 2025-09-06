function enter(){
  let out= document.getElementById("out")
  
  let name= document.getElementById("name").value;
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
  else if (password!==confirmPassword){
    alert("password do not match");
  }
  else {out.innerHTML=" great you have been registered"
    window.location.href="frank2.html";
  }
  
  
  
}
function color(){
  const el = document.getElementById("body");
  el.classList.toggle("pink")
}
const h1 = document.getElementById("h1");
h1.innerHTML = name + " Thanks for signing up"