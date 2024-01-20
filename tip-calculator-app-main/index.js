function checkInput() {
    var number = document.getElementById('numberOfPeople').value;

    if (number === '0') {
        document.getElementById('numberOfPeople').style.border = '1px solid rgb(230, 112, 112)';
        document.getElementById('error').style.display = 'block';
    }else{
        document.getElementById('numberOfPeople').style.border = 'none';
        document.getElementById('error').style.display = 'none';
    }
}
//check the value and change the styles

var buttons = document.getElementsByClassName("btn-tip");

    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", checkInput);
    }

//click event listener for all the buttons

 document.getElementById('five').addEventListener('click', fivePercent);
 
 function fivePercent() {
    //bill value
    var billValue = parseFloat(document.getElementById('billInput').value);

    //number of people
    var number = parseFloat(document.getElementById('numberOfPeople').value);

    //calculate 5% of the input
    var billResult = (billValue * 0.05);
    
    //final tip
    var tipResult = (billResult / number).toFixed(2);

    //Total for everyone
    var total = (billValue + billResult);

    //Total
    var totalResult = (total / number).toFixed(2);

    //Display Result

    document.getElementById('tip').innerText = "$" + tipResult;
    document.getElementById('total').innerText = "$" + totalResult;
 }

 document.getElementById('ten').addEventListener('click', tenPercent);
 
 function tenPercent() {
    //bill value
    var billValue = parseFloat(document.getElementById('billInput').value);

    //number of people
    var number = parseFloat(document.getElementById('numberOfPeople').value);

    //calculate 10% of the input
    var billResult = (billValue * 0.10);
    
    //final tip
    var tipResult = (billResult / number).toFixed(2);

   //Total for everyone
   var total = (billValue + billResult);

   //Total
   var totalResult = (total / number).toFixed(2);
    

    //Display Result

    document.getElementById('tip').innerText = "$" + tipResult;
    document.getElementById('total').innerText = "$" + totalResult;
 }

 document.getElementById('fifteen').addEventListener('click', fifteenPercent);
   
 function fifteenPercent() {
    //bill value
    var billValue = parseFloat(document.getElementById('billInput').value);

    //number of people
    var number = parseFloat(document.getElementById('numberOfPeople').value);

    //calculate 10% of the input
    var billResult = (billValue * 0.15);
    
    //final tip
    var tipResult = (billResult / number).toFixed(2);

    //Total for everyone
    var total = (billValue + billResult);

    //Total
    var totalResult = (total / number).toFixed(2);
    

    //Display Result

    document.getElementById('tip').innerText = "$" + tipResult;
    document.getElementById('total').innerText = "$" + totalResult;
 }

 document.getElementById('twenty-five').addEventListener('click', twentyFivePercent);
   
 function twentyFivePercent() {
    //bill value
    var billValue = parseFloat(document.getElementById('billInput').value);

    //number of people
    var number = parseFloat(document.getElementById('numberOfPeople').value);

    //calculate 10% of the input
    var billResult = (billValue * 0.25);
    
    //final tip
    var tipResult = (billResult / number).toFixed(2);

    //Total for everyone
    var total = (billValue + billResult);

    //Total
    var totalResult = (total / number).toFixed(2);
    

    //Display Result

    document.getElementById('tip').innerText = "$" + tipResult;
    document.getElementById('total').innerText = "$" + totalResult;
 }

 document.getElementById('fifty').addEventListener('click', fiftyPercent);
   
 function fiftyPercent() {
    //bill value
    var billValue = parseFloat(document.getElementById('billInput').value);

    //number of people
    var number = parseFloat(document.getElementById('numberOfPeople').value);

    //calculate 10% of the input
    var billResult = (billValue * 0.50);
    
    //final tip
    var tipResult = (billResult / number).toFixed(2);

    //Total for everyone
    var total = (billValue + billResult);

    //Total
    var totalResult = (total / number).toFixed(2);
    

    //Display Result

    document.getElementById('tip').innerText = "$" + tipResult;
    document.getElementById('total').innerText = "$" + totalResult;
 }

 document.getElementById('btn-reset').addEventListener('click', reset);

 function reset() {
   document.getElementById('tip').innerText = "$0.00";
    document.getElementById('total').innerText = "$0.00";
 }

