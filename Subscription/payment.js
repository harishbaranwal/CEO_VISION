// JavaScript For Dynamically Formats The Input Of Credit Card Number Field By Adding Spaces After Every Four Digits
var cardNumInput = document.querySelector('#cardNum')

    cardNumInput.addEventListener('keyup', () => {
        let cNumber = cardNumInput.value
        cNumber = cNumber.replace(/\s/g, "")
    
        if(Number(cNumber)){
            cNumber = cNumber.match(/.{1,4}/g)
            cNumber = cNumber.join(" ")
            cardNumInput.value = cNumber
        }
    })


// JavaScript For Showing Order Details

    document.getElementById('showOrderDetails').addEventListener('click', function() {
        let orderDetails = document.querySelector('.order-details ul');
        let showButton = document.getElementById('showOrderDetails');
        let hideButton = document.getElementById('hideOrderDetails');
        if (orderDetails.style.display === 'none' || orderDetails.style.display === '') {
            orderDetails.style.display = 'block';
            showButton.style.display = 'none';
            hideButton.style.display = 'block';
        }
    });

// JavaScript For Hiding Order Details

    document.getElementById('hideOrderDetails').addEventListener('click', function() {
        let orderDetails = document.querySelector('.order-details ul');
        let showButton = document.getElementById('showOrderDetails');
        let hideButton = document.getElementById('hideOrderDetails');
        if (orderDetails.style.display === 'block') {
            orderDetails.style.display = 'none';
            showButton.style.display = 'block';
            hideButton.style.display = 'none';
        }
    });


 // JavaScript For Dynamic Update The Order Details

document.addEventListener("DOMContentLoaded", function() {
const subscriptionTitle = document.querySelector('.order-details h2');
const orderTotal = document.querySelector('.order-details .order-total');
const orderList = document.querySelector('.order-details ul');

        // Parse the query parameter to get the subscription type //
const urlParams = new URLSearchParams(window.location.search);
const subscriptionType = urlParams.get('subscription');

        // Update the content based on the subscription type //
if (subscriptionType === 'Digital Access') {
  subscriptionTitle.textContent = 'Digital Access (Auto-Renews)';
  orderTotal.innerHTML = `
  <span>₹</span>
    <span>99</span>
    <span>/month</span>
  `;
  orderList.innerHTML = `
    <li>Unlimited access to Vogue.com</li>
    <li>Year-round Vogue Runway coverage</li>
    <li>A limited-edition Vogue tote and calendar</li>
    <li>The latest fashion news, celebrity style, and more</li>
  `;
} else if (subscriptionType === 'Print-Digital Access') {
  subscriptionTitle.textContent = 'Print + Digital Access (Auto-Renews)';
  orderTotal.innerHTML = `
  <span>₹</span>
  <span>125</span>
    <span>/month</span>
  `;
  orderList.innerHTML = `
    <li>The print edition, delivered to your door</li>
    <li>Unlimited access to Vogue.com</li>
    <li>Year-round Vogue Runway coverage</li>
    <li>A limited-edition Vogue tote and calendar</li>
  `;
} else if (subscriptionType === 'CEO Club Membership') {
  subscriptionTitle.textContent = 'CEO Club Membership (Auto-Renews)';
  orderTotal.innerHTML = `
  <span>₹</span>
  <span>499</span>
    <span>/month</span>
  `;
  orderList.innerHTML = `
    <li>An exclusive gift including a CEO t-shirt created in partnership with Brother Vellies designer Aurora James</li>
    <li>Priority access to CEO's biggest events; CEO World and Forces of Fashion</li>
    <li>Invitations to exclusive members-only events, including private tours of CEO HQ</li>
  `;
}
});