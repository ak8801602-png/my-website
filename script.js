// 1. Find the button in the HTML using its ID
const button = document.getElementById('magicButton');

// 2. Tell the button to listen for a click/tap
button.addEventListener('click', function() {
  
  // 3. This is the action that happens when tapped!
  alert('Hello! You clicked the button successfully. Your JavaScript is working perfectly!');
  
  // Optional: Change the button background color when clicked
  button.style.backgroundColor = '#2ea44f'; 
});
