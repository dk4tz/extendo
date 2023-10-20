// Check if the current webpage matches certain criteria
function checkWebPage() {
  // Log the current webpage URL
  console.log('Current web page:', window.location.href);

  // If the webpage is google.com
  if (window.location.hostname === 'google.com') {
    console.log('wow');
  }

  // If the tab title contains the word 'Overview'
  if (document.title.includes('Overview')) {
    console.log('whatup overview?');
  }
}

// Execute the checkWebPage function when the content script loads
checkWebPage();
