function maskCard() {
  const cardInput = document.getElementById('cardInput');
  const cardNumber = cardInput.value;
  
  if (cardNumber.length > 16) {
    alert('Card number should not exceed 16 digits.');
    return;
  }
  
  if (cardNumber.length < 16) {
    alert('Card number should be 16 digits long.');
    return;
  }
  
  const maskedCardNumber = 'Masked Card Number: ' + cardNumber.substring(0, 4) + ' **** **** ' + cardNumber.substring(12);
  document.getElementById('cardNumber').innerText = maskedCardNumber;
}

function unmaskCard() {
  const cardInput = document.getElementById('cardInput');
  const cardNumber = cardInput.value;
  
  if (cardNumber.length > 16) {
    alert('Card number should not exceed 16 digits.');
    return;
  }
  
  if (cardNumber.length < 16) {
    alert('Card number should be 16 digits long.');
    return;
  }
  
  const unmaskedCardNumber = 'Unmasked Card Number: ' + cardNumber.substring(0, 4) + ' ' + cardNumber.substring(4, 8) + ' ' +
                             + cardNumber.substring(8, 12) + ' ' + cardNumber.substring(12);
  document.getElementById('cardNumber').innerText = unmaskedCardNumber;
}
