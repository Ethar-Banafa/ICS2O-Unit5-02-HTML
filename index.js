function myFunction() {
         let myNumber = 0;
         myNumber = document.getElementById("demo").value;
         myNumber = +myNumber;
         if(myNumber <0){
  alert("negative");
 } else if(myNumber > 0) {
  alert("positive");
} else {
  alert("not a number");
} }