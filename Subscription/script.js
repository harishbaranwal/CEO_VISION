// JavaScript For Advertisement Image Slider

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


// JavaScript For Change The URL OF Current Browser Window To payment.html     

function showSubscription(subscriptionType) {
  window.location.href = "payment.html?subscription=" + subscriptionType;
}