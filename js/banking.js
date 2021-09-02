// Handle deposit button event
document.getElementById("deposit-btn").addEventListener("click", function () {
  //get the deposited amount
  const depositInput = document.getElementById("deposit-input");
  const newDepositAmountText = depositInput.value;
  const newDepositAmount = parseFloat(newDepositAmountText);

  const depositTotal = document.getElementById("deposit-total");

  const previousDepositText = depositTotal.innerText;
  const previousDepositAmount = parseFloat(previousDepositText);
  const newDepositTotal = previousDepositAmount + newDepositAmount;

  depositTotal.innerText = newDepositTotal;

  //Update account balance
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;

  balanceTotal.innerText = newBalanceTotal;

  //clear deposit input field
  depositInput.value = "";
});

// Handle withdraw button event

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawInput = document.getElementById("withdraw-input");
  const withdrawInputText = withdrawInput.value;
  const withdrawInputAmount = parseFloat(withdrawInputText);

  //get withdraw amount
  const withdrawTotal = document.getElementById("withdraw-total");
  const previousWithdrawText = withdrawTotal.innerText;
  const previousWithdrawAmount = parseFloat(previousWithdrawText);

  const newWithdrawAmount = previousWithdrawAmount + withdrawInputAmount;
  withdrawTotal.innerText = newWithdrawAmount;

  //Update account balance
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  const newBalanceTotal = previousBalanceTotal - withdrawInputAmount;
  balanceTotal.innerText = newBalanceTotal;

  //clear withdraw input field
  withdrawInput.value = "";
});
