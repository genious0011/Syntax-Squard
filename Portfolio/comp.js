
// Select the form and input elements
document.querySelector('.input-container').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    const searchInput = document.querySelector('.input').value.trim();
  
    if (searchInput === '') {
      alert('Please enter a search term.');
      return;
    }
  
    // Perform a search action (mock example)
    console.log(`Searching for: ${searchInput}`);
    alert(`Searching for: ${searchInput}`);
  
    // You can add your API call or search logic here
  });
  
  // Order Button Click Event
  document.querySelector('.main-btn').addEventListener('click', function() {
    alert('Your order has been placed for Rs.20!');
  });
  