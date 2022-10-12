//get starting function from the screen

function getValues() {
  //let startValue = parseInt(document.getElementById("startValue").value);
  let fizzValue = document.getElementById("fizzValue").value;
  let buzzValue = document.getElementById("buzzValue").value;
  let limitValue = document.getElementById("limitValue").value;

  //parse the values in to intergers

  fizzValue = parseInt(fizzValue);
  buzzValue = parseInt(buzzValue);
  limitValue = parseInt(limitValue);

  // && is and or needs both to be true

  if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue) && Number.isInteger(limitValue)) {
    //generate the numbers based on user input

    let numbers = generateFizzBuzz(fizzValue, buzzValue, limitValue);
    

    //display results on page
    displayFizzBuzz(numbers);
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Only intergers are allowed for FizzBuzz",
    });
  }
}

function generateFizzBuzz(fizzValue, buzzValue, limitValue) {
  let numbers = [];

  for (let i = 1; i <= limitValue; i++) {
    if (i % fizzValue == 0 && i % buzzValue == 0) {
      numbers.push("FizzBuzz");
    } else if (i % fizzValue == 0) {
      numbers.push("Fizz");
    } else if (i % buzzValue == 0) {
      numbers.push("Buzz");
    } else {
      numbers.push(i);
    }
  } 
  return numbers;
}

function displayFizzBuzz(numbers) {
 
  let templateRows = "";

  for (let i = 0; i < numbers.length; i++) {
    let className ="";
    let number = numbers[i];
    
    //if when i divide this number, and the remainder is 0 then it is even
    if (!Number.isInteger(number)) {
      className = number;
    }

    if (i % 10 == 0) {
      templateRows += "<tr>";
    }

    templateRows += `<td class="${className}">${number}</td> `;

    if ((i + 1) % 10 == 0) {
      templateRows += "</tr>";
    }
  }
  document.getElementById("results").innerHTML = templateRows;
} 

