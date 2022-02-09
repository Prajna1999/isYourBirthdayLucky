// selectors

const dateOfBirth=document.querySelector("#date-of-birth");
const luckyNumber=document.querySelector("#lucky-number");
const checkBtn=document.querySelector("#check-btn");
const outputBox=document.querySelector("#output-box");


// event listeners, wirings etc.
checkBtn.addEventListener("click", checkBirthdayIsLucky)

// callbacks



function checkBirthdayIsLucky(){
 const dob=dateOfBirth.value;
 const sum=calculateSum(dob);


 if(sum&&dob){
(compareValues(sum, luckyNumber));
 }else{
   outputBox.innerText="Please enter both the fields."
 }
 
}

function calculateSum(dob){
  dob=dob.replaceAll("-", "");
  let sum=0;
  for(let index=0; index<dob.length; index++){
    sum+=Number(dob.charAt(index));
  }
 return sum;
}

function compareValues(sum, luckyNumber){
 
  if(sum%luckyNumber.value===0){outputBox.innerText="Your Birthday is Lucky!!"}
  else{
    outputBox.innerText="Sad, your birthday is not lucky!!";
  }
}