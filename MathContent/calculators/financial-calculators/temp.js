window.onload = function() {
      hideSelectedDivForm1();
      hideSelectedDivForm2();
};
function pocetniPolozajForme1()
{
      document.getElementById("exampleInitialDeposit").style.display = "none";
      document.getElementById("exampleInterestRate").style.display = "none";
      document.getElementById("exampleTime").style.display = "none";
      document.getElementById("exampleWithdrawAmount").style.display = "none";
      document.getElementById("initialDepositInput").disabled = false;
      document.getElementById("initialDepositInput").style.color = "black";
      document.getElementById("rateInput").disabled = false;
      document.getElementById("rateInput").style.color = "black";
      document.getElementById("timeInput").disabled = false;
      document.getElementById("timeInput").style.color = "black";
      document.getElementById("combo2").disabled = false;
      document.getElementById("combo2").style.backgroundColor = "white";
      document.getElementById("withdrawAmountInput").disabled = false;
      document.getElementById("withdrawAmountInput").style.color = "black";
      document.getElementById("submitButtonText").innerHTML = "Calculate";
}
function hideSelectedDivForm1()
{
      var e = document.getElementById("combo1");
      
      var selectedUnknown = e.options[e.selectedIndex].value;
      pocetniPolozajForme1();
      
      if (selectedUnknown == 1)
      {
            document.getElementById("withdrawAmountInput").disabled = true;
            document.getElementById("withdrawAmountInput").style.color = "#dddddd";
            document.getElementById("exampleWithdrawAmount").style.display = "block";
            document.getElementById("submitButtonText").innerHTML = "Find Withdraw Amount";
      }
      if (selectedUnknown == 2)
      {
            document.getElementById("initialDepositInput").disabled = true;
            document.getElementById("initialDepositInput").style.color = "#dddddd";
            document.getElementById("exampleInitialDeposit").style.display = "block";
            document.getElementById("submitButtonText").innerHTML = "Find Initial Deposit";
      }
      if (selectedUnknown == 3)
      {
            document.getElementById("rateInput").disabled = true;
            document.getElementById("rateInput").style.color = "#dddddd";
            document.getElementById("exampleInterestRate").style.display = "block";
            document.getElementById("submitButtonText").innerHTML = "Find Interest Rate";
      }
      if (selectedUnknown == 4)
      {
            document.getElementById("timeInput").disabled = true;
            document.getElementById("timeInput").style.color = "#dddddd";
            document.getElementById("combo2").disabled = true;
            document.getElementById("combo2").style.backgroundColor = "#dddddd";
            document.getElementById("exampleTime").style.display = "block";
            document.getElementById("submitButtonText").innerHTML = "Find Time Period";
      }
}

function pocetniPolozajForme2()
{
      document.getElementById("exampleFutureValue").style.display = "none";
      document.getElementById("exampleRegularDeposit").style.display = "none";
      document.getElementById("exampleInterestRate2").style.display = "none";
      document.getElementById("exampleTime2").style.display = "none";
      document.getElementById("regularDepositsInput").disabled = false;
      document.getElementById("regularDepositsInput").style.color = "black";
      document.getElementById("rateInput2").disabled = false;
      document.getElementById("rateInput2").style.color = "black";    
      document.getElementById("timeInput2").disabled = false;
      document.getElementById("timeInput2").style.color = "black";  
      document.getElementById("combo8").disabled = false;
      document.getElementById("combo8").style.backgroundColor = "white";      
      document.getElementById("futureValueInput").disabled = false;
      document.getElementById("futureValueInput").style.color = "black";
}

function hideSelectedDivForm2()
{
      var e = document.getElementById("combo5");
      var selectedUnknown = e.options[e.selectedIndex].value;
      pocetniPolozajForme2();
      if (selectedUnknown == 1)
      {
            document.getElementById("futureValueInput").disabled = true;
            document.getElementById("futureValueInput").style.color = "#dddddd";
            document.getElementById("exampleFutureValue").style.display = "block";
            document.getElementById("submitButtonText2").innerHTML = "Find Future Value";
      }
      if (selectedUnknown == 2)
      {
            document.getElementById("regularDepositsInput").disabled = true;
            document.getElementById("regularDepositsInput").style.color = "#dddddd";
            document.getElementById("exampleRegularDeposit").style.display = "block";
            document.getElementById("submitButtonText2").innerHTML = "Find Regular Deposites";
      }
      if (selectedUnknown == 3)
      {
            document.getElementById("rateInput2").disabled = true;
            document.getElementById("rateInput2").style.color = "#dddddd";
            document.getElementById("exampleInterestRate2").style.display = "block";
            document.getElementById("submitButtonText2").innerHTML = "Find Interest Rate";
      }
      if (selectedUnknown == 4)
      {
            document.getElementById("timeInput2").disabled = true;
            document.getElementById("timeInput2").style.color = "#dddddd";
            document.getElementById("exampleTime2").style.display = "block";
            document.getElementById("combo8").disabled = true;
            document.getElementById("combo8").style.backgroundColor = "#dddddd";
            document.getElementById("submitButtonText2").innerHTML = "Find Time Period";
      }
}




