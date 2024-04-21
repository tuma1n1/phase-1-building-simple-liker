// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
/*
document.addEventListener("DOMContentLoaded", () => {
  const errorModal = document.getElementById("modal");
  const likeButtons = document.querySelectorAll(".like-glyph");
  
  likeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      mimicServerCall() 
        .then(() => {
          // Server call successful
          button.classList.add("activated-heart");
          button.innerHTML = FULL_HEART;
        })
        .catch(() => {
          // Server call failed
          errorModal.classList.remove("hidden");
          setTimeout(() => {
            errorModal.classList.add("hidden");
          }, 3000);
        });
    });
  });
});
*/
document.addEventListener("DOMContentLoaded", () => {
  const errorModal = document.getElementById("modal");
  //errorModal.classList.add("hidden");
  const likeButtons = document.querySelectorAll(".like-glyph");

  // Add event listener to each like button
  likeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          // If server call succeeds, change heart to full heart
          button.classList.add("activated-heart");
          button.innerText = "♥";
        })
        .catch(() => {
          // If server call fails, display error modal
          
          const errorMessage = document.getElementById("modal-message");
          errorMessage.innerText = "Server Error. Please try again later.";
          setTimeout(() => {
            // Hide error modal after 3 seconds
            errorModal.classList.add("hidden");
          }, 3000);
        });
    });
  });
});
errorModal.classList.add("hidden");
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
