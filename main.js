const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".about__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".about__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
  interval: 500,
});
ScrollReveal().reveal(".about__container img", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".service__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".service__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".service__card", {
  duration: 1000,
  delay: 1000,
  interval: 500,
});

const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });
ScrollReveal().reveal(".blog__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".blog__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".blog__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".blog__content .blog__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

const instagram = document.querySelector(".instagram__flex");

Array.from(instagram.children).forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  instagram.appendChild(duplicateNode);
});



const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');

function toggleChatbot() {
  const chatbot = document.getElementById('chatbot');
  chatbot.style.display = chatbot.style.display === 'block' ? 'none' : 'block';
}

function sendMessage() {
  const message = userInput.value.trim();
  if (message !== '') {
    appendMessage(message, 'user');
    generateBotReply(message);
    userInput.value = '';
  }
}

function appendMessage(message, sender) {
  const messageElement = document.createElement('p');
  messageElement.classList.add(sender);
  messageElement.innerText = message;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});



function showTypingIndicator() {
  const typingIndicator = document.createElement('p');
  typingIndicator.classList.add('bot', 'typing');
  typingIndicator.innerText = "Typing...";
  typingIndicator.id = "typing-indicator";
  chatMessages.appendChild(typingIndicator);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTypingIndicator() {
  const indicator = document.getElementById('typing-indicator');
  if (indicator) indicator.remove();
}

// Bot Reply Generator

function generateBotReply(message) {
  showTypingIndicator();

  setTimeout(() => {
    let reply = "Hmm, I didn’t catch that — could you please ask in a different way? 😊";
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes('book') || lowerMessage.includes('appointment')) {
      reply = "Awesome! 🙌 You can book a session by filling out the contact form or just tell me your preferred date and package here!";
    } else if (lowerMessage.includes('pricing') || lowerMessage.includes('price')) {
      removeTypingIndicator();
      showPricingCard();
      setTimeout(() => {
        appendMessage("Hope that helps! Let me know if you’d like me to guide you further! 😊", 'bot');
        appendGif();
      }, 1500);
      return;
    } else if (lowerMessage.includes('location')) {
      reply = "I’m currently based in Vijayawada 🗺️ — I often shoot at beautiful spots like Bhavani Island and Kondapalli Fort. If you have a special location in mind or need me to travel, just let me know! 😊";
    } else if (lowerMessage.includes('contact')) {
      reply = "Feel free to use the contact form below or just drop me a message anytime! 💌 Thank you for considering me! 🙏";
      setTimeout(() => {
        appendMessage(reply, 'bot');
        appendGif();
      }, 1200);
      removeTypingIndicator();
      return;
    } else if (lowerMessage.includes('hi') || lowerMessage.includes('hello')) {
      const greetings = [
        "Hey there! 👋 How can I help you today?",
        "Hello! 😊 Feel free to ask me anything about bookings or pricing!",
        "Hi! 🙌 I’m here to help with your photography queries!"
      ];
      reply = greetings[Math.floor(Math.random() * greetings.length)];
    } else if (lowerMessage.includes('thank you') || lowerMessage.includes('thanks')) {
      reply = "You're very welcome! 😊 Excited to possibly work together — let's create something amazing!";
      setTimeout(() => {
        appendMessage(reply, 'bot');
        appendGif();
      }, 1200);
      removeTypingIndicator();
      return;
    }

    removeTypingIndicator();
    appendMessage(reply, 'bot');
  }, 1200);
}

// Additional function to show a pricing card
function showPricingCard() {
  const card = document.createElement('div');
  card.classList.add('pricing-card', 'bot');

  card.innerHTML = `
    <p><strong>📸 Quick Pricing Preview</strong></p>
    <p>1 Picture — ₹500</p>
    <button onclick="navigateToPricing()">More Info</button>
  `;

  chatMessages.appendChild(card);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}


function navigateToPricing() {
  document.getElementById('service').scrollIntoView({ behavior: 'smooth' });
}


const thankYouGifs = [
  'https://media.giphy.com/media/3o6ZtaO9BZHcOjmErm/giphy.gif',
  'https://media.giphy.com/media/26BRq7t0r8tCwfvZS/giphy.gif',
  'https://media.giphy.com/media/xUPGcguWZHRC2HyBRS/giphy.gif',
  'https://media.giphy.com/media/l0ExncehJzexFpRHq/giphy.gif',
  'https://media.giphy.com/media/3o7TKU8RvQuomFfUUU/giphy.gif'
];



// Additional function to append a GIF
function appendGif() {
  const randomGif = thankYouGifs[Math.floor(Math.random() * thankYouGifs.length)];
  const gifElement = document.createElement('img');
  gifElement.src = randomGif;
  gifElement.alt = 'Thank you!';
  gifElement.style.width = '120px';
  gifElement.style.marginTop = '10px';
  gifElement.style.borderRadius = '10px';
  gifElement.style.transition = 'opacity 0.5s ease';

  chatMessages.appendChild(gifElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Remove GIF after 3 seconds with fade-out effect
  setTimeout(() => {
    gifElement.style.opacity = '0';
    setTimeout(() => gifElement.remove(), 500);
  }, 3000);
}

