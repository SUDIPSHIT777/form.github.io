function clickhere() {
  let n = document.getElementById("name").value;
  let e = document.getElementById("email").value;
  let a = document.getElementById("addrsss").value;
  let nu = document.getElementById("number").value;
  let p = document.getElementById("password").value;
  let i = document.getElementById("infor").value;

   if(n === "" ||e=== ""||a===""||nu===""||p===""||i===""){
    alert('fill The All Filed');
   }
   else if(!/^[a-z A-Z]+$/.test(n)){
    alert('Enter a valid Name');
   }
   else if(!/^[^\s@]+@[^\s@0-9]+\.[^\s@0-9]+$/.test(e)){
    alert('Enter A Valid Email');
   }
   else if(!/^[a-z A-Z]+$/.test(a)){
    alert('Address Should Be Character');
   }
   else if(nu.length !== 10 ){
    alert('Enter 10 Number');
   }
   else if(p.length!==15){
    alert('password length should be 15th');
   }
   else if(!/^[a-z A-Z]+[^\s]+$/.test(p)){
    alert('Fill A Strong Password');
   }
   else{
    alert('submit form Sucssfully');
   }
}

function checkbox(){
   let ch = document.querySelector('#password');
   if(ch.type === "password"){
    ch.type= "text";
   }
   else{
    ch.type = "password";
   }
}