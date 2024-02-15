function calculateBagTotal() {
  var productCost;
  var quantity = parseInt(document.getElementById("quantity").value);
  //   console.log(quantity);
  var paymentMode = document.getElementsByName("payment")[0].value;
  //   console.log(paymentMode);
  var product = document.getElementsByName("product")[0].value;
  //   console.log(product);

  if (product === "1") {
    // TV
    productCost = 30000 * quantity;
  } else if (product === "2") {
    // Refrigerator
    productCost = 50000 * quantity;
  } else if (product === "3") {
    // Mobile
    productCost = 20000 * quantity;
  }

  if (paymentMode === "Debit Card") {
    productCost *= 0.95; // 5% discount for Debit Card
  }

  return productCost;
}

function calculateCoupon(bagTotal) {
  var coupon;
  if (bagTotal >= 100000) {
    coupon = "ADI" + Math.floor(bagTotal / 1000);
  } else {
    coupon = "ADI0000";
  }
  return coupon;
}

function disableSubmit() {
  document.getElementById("submitBtn").disabled = true;
}

//after checking checkbox submit button will enable

function activateButton(checkbox) {
  if (checkbox.checked) {
    // console.log("Submit button should be enabled.");
    document.getElementById("submitBtn").disabled = false;
  } else {
    // console.log("Submit button should be disabled.");
    document.getElementById("submitBtn").disabled = true;
  }
}

function calculateFinalAmount() {
  var bagTotal = calculateBagTotal();
  var couponCode = calculateCoupon(bagTotal);
  //   console.log(couponCode);
  var deliveryCharge = 0;
  var deliveryType = document.querySelector(
    'input[name="delivery"]:checked'
  ).id;

  if (deliveryType === "express") {
    deliveryCharge = 500;
  }

  var amountPayable =
    bagTotal - parseInt(couponCode.substring(3)) + deliveryCharge;

  var customerName = document.getElementById("cname").value;
  var email = document.getElementById("mail").value;

  var deliveryTime;
  if (deliveryType === "express") {
    deliveryTime = "24";
  } else {
    deliveryTime = "72";
  }

  var resultMessage =
    "Dear " +
    customerName +
    ", Your Final bill is Rs: " +
    amountPayable +
    "/-. Product will be delivered in next " +
    deliveryTime +
    " hrs. Invoice Copy is mailed on : " +
    email;

  console.log("Result Message:", resultMessage);

  document.getElementById("result").innerHTML = resultMessage;
  return false;
}

//clearing form values
function clearForm() {
  document.getElementById("cname").value = "";
  document.getElementById("phno").value = "";
  document.getElementById("mail").value = "";
  document.getElementsByName("address")[0].value = "";
  document.getElementsByName("product")[0].selectedIndex = 0;
  document.getElementById("quantity").value = "";
  document.getElementsByName("payment")[0].selectedIndex = 0;
  document.getElementById("coupon").value = "";
  document.getElementById("express").checked = false;
  document.getElementById("standard").checked = false;
  document.getElementById("terms").checked = false;
  document.getElementById("result").innerHTML = "";
  disableSubmit();
}

window.onload = disableSubmit; // default submit disabled
