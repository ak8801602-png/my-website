// 1. Find the button in the HTML using its ID
const button = document.getElementById('magicButton');

// 2. Tell the button to listen for a click/tap
button.addEventListener('click', function() {

  // 3. This is the big description about SSR that will pop up!
  alert(
    "What is SSR (Server-Side Rendering)?\n\n" +
    "SSR stands for Shanay Sumit and Ranveer, we all are a team work together to all the activities and play matches.One most interesting thing of our team is that we never lose hope and consistently work together.. " +
    "When a visitor requests a page, the server completely builds the page with all its data first, and then sends a fully ready-to-view webpage to the user's screen.\n\n" +
    "Benefits of SSR:\n" +
    "• Faster initial loading time for users.\n" +
    "• Great for SEO (Search Engine Optimization) so Google can index the text easily."
  );

  // Optional: Change the button background color when clicked
  button.style.backgroundColor = '#2ea44f';
});
