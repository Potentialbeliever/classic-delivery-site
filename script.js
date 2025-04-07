// script.js

function sendOrder(event) {
  event.preventDefault(); // Prevents form submission

  // Get values from the form fields
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const pickup = document.getElementById('pickup').value;
  const delivery = document.getElementById('delivery').value;
  const details = document.getElementById('package').value;

  // Create the message formatted for WhatsApp
  const message = `📦 *New Delivery Order* 🚚%0A
👤 *Name:* ${name}%0A
📧 *Email:* ${email}%0A
📱 *Phone:* ${phone}%0A
🏠 *Pickup:* ${pickup}%0A
📍 *Delivery:* ${delivery}%0A
📦 *Details:* ${details}`;

  // Replace with your WhatsApp number (in international format, no +)
  const whatsappNumber = "233591283636"; 

  // Create the WhatsApp link
  const url = `https://wa.me/${whatsappNumber}?text=${message}`;

  // Open the WhatsApp link in a new tab (or on the phone)
  window.open(url, '_blank');
}
