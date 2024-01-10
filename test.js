// JavaScript for handling quantity selection
document.addEventListener('DOMContentLoaded', function() {
    const quantityNumber = document.querySelector('.quantity-number');
    const minusButton = document.querySelector('.minus');
    const plusButton = document.querySelector('.plus');
  
    minusButton.addEventListener('click', function() {
      updateQuantity(-1);
    });
  
    plusButton.addEventListener('click', function() {
      updateQuantity(1);
    });
  
    function updateQuantity(value) {
      let currentQuantity = parseInt(quantityNumber.textContent);
      currentQuantity += value;
      if (currentQuantity < 1) {
        currentQuantity = 1; // Prevent quantity from going below 1
      }
      quantityNumber.textContent = currentQuantity;
    }
  });
  
// JavaScript for showing a simple "Added to Cart" notification
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButton = document.getElementById('add-to-cart');
  
    addToCartButton.addEventListener('click', function() {
      showPopup();
    });
  
    function showPopup() {
      const popup = document.createElement('div');
      popup.classList.add('popup');
      popup.textContent = 'Added to Cart';
  
      document.body.appendChild(popup);
  
      setTimeout(function() {
        popup.remove(); // Remove the popup after 2 seconds
      }, 2000);
    }
  });
  