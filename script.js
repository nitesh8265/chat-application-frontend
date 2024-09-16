document.addEventListener('DOMContentLoaded', () => {
  const chatWindow = document.getElementById('chatWindow');
  const messageInput = document.getElementById('messageInput');
  const sendButton = document.getElementById('sendButton');
  const chatList = document.getElementById('chatList');
  const searchInput = document.getElementById('searchInput');
  const usernameDisplay = document.getElementById('username');



  // Load users dynamically into the chat list
  function loadChatList() {
      chatList.innerHTML = ''; // Clear existing list
      users.forEach(user => {
          const chatItem = document.createElement('li');
          chatItem.classList.add('chat-item');
          chatItem.innerHTML = `
              <img src="${user.image}" alt="${user.name}" class="user-img">
              <span>${user.name}</span>
          `;
          chatItem.addEventListener('click', () => selectChat(user));
          chatList.appendChild(chatItem);
      });
  }

  // Select a chat and display user details
  function selectChat(user) {
      usernameDisplay.textContent = `${user.name} - ${user.status}`;
      clearMessages();
  }

  // Send message on button click
  sendButton.addEventListener('click', sendMessage);

  // Send message on Enter key press
  messageInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
          sendMessage();
      }
  });

  // Filter chat list based on search input
  searchInput.addEventListener('input', () => {
      const filter = searchInput.value.toLowerCase();
      const chatItems = chatList.getElementsByClassName('chat-item');
      Array.from(chatItems).forEach(item => {
          const text = item.textContent || item.innerText;
          item.style.display = text.toLowerCase().includes(filter) ? '' : 'none';
      });
  });

  // Function to send messages
  function sendMessage() {
      const messageText = messageInput.value.trim();
      if (messageText) {
          appendMessage('sent', messageText);
          messageInput.value = '';
          displayTypingIndicator();

          // Simulate a response after a short delay
          setTimeout(() => {
              hideTypingIndicator();
              appendMessage('received', 'This is an automated response!');
          }, 1000);
      }
  }

  // Append message to the chat window
  function appendMessage(type, message) {
      const messageElement = document.createElement('div');
      messageElement.classList.add('message', type);
      messageElement.textContent = message;

      // Add a delete button to each message
      const deleteButton = document.createElement('button');
      deleteButton.textContent = '✖';
      deleteButton.classList.add('delete-btn');
      deleteButton.onclick = () => messageElement.remove();

      messageElement.appendChild(deleteButton);
      chatWindow.appendChild(messageElement);
      chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  // Clear all messages from the chat window
  function clearMessages() {
      chatWindow.innerHTML = '';
  }

  // Show typing indicator
  function displayTypingIndicator() {
      const typingIndicator = document.createElement('div');
      typingIndicator.id = 'typingIndicator';
      typingIndicator.textContent = 'User is typing...';
      chatWindow.appendChild(typingIndicator);
      chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  // Hide typing indicator
  function hideTypingIndicator() {
      const typingIndicator = document.getElementById('typingIndicator');
      if (typingIndicator) {
          typingIndicator.remove();
      }
  }

  // Initial load of chat list
  loadChatList();
});
document.addEventListener('DOMContentLoaded', () => {
  const chatWindow = document.getElementById('chatWindow');
  const messageInput = document.getElementById('messageInput');
  const sendButton = document.getElementById('sendButton');
  const chatList = document.getElementById('chatList');
  const searchInput = document.getElementById('searchInput');
  const usernameDisplay = document.getElementById('username');

  // List of users
  const users = [
      { name: 'Manoj Baghel', image: 'https://plus.unsplash.com/premium_photo-1661380499640-92e827d9ae2b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D', status: 'Online' },
      { name: 'Vivek Sharma', image: 'https://images.unsplash.com/photo-1617718860170-dd5d9f2ed43d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D', status: 'Offline' },
      { name: 'Amit Choudhary', image: 'https://images.unsplash.com/photo-1579865346865-9223701ba92e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D', status: 'Busy' },
      { name: 'Michael Brown', image: 'https://images.unsplash.com/photo-1697830355067-61a58d13e3bf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D', status: 'Away' },
      { name: 'Emma Wilson', image: 'https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZSUyMGltYWdlfGVufDB8fDB8fHww', status: 'Online' },
      { name: 'David Lee', image: 'https://media.istockphoto.com/id/1424988699/photo/businessman-contemplating-in-the-office-looking-through-the-window.webp?a=1&b=1&s=612x612&w=0&k=20&c=Cda7RNOD_zvdJNWYUw1mDsQ7xcOt8ziO3CJLpd6H4_k=', status: 'Do Not Disturb' },
      { name: 'Sophia Martinez', image: 'https://images.unsplash.com/photo-1696698184542-78a89ba247a2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D', status: 'Online' },
      { name: 'Daniel Garcia', image: 'https://media.istockphoto.com/id/1419539600/photo/business-presentation-and-man-on-a-laptop-in-a-corporate-conference-or-office-collaboration.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZYbTZ0tdL9A7HsGOrkxaZ94v6EdNESNMJmF931BE8kg=', status: 'Offline' },
      { name: 'Olivia Harris', image: 'https://media.istockphoto.com/id/1591572504/photo/cheerful-businesswomen-shaking-hands-in-meeting-room.webp?a=1&b=1&s=612x612&w=0&k=20&c=o9gVzM52qGsXBazL11EFxSmRSJLtpMnmWf9us04Pfws=', status: 'Busy' },
      { name: 'Lucas Davis', image: 'https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', status: 'Online' },
  ];

  // Load users dynamically into the chat list
  function loadChatList() {
      chatList.innerHTML = ''; // Clear existing list
      users.forEach(user => {
          const chatItem = document.createElement('li');
          chatItem.classList.add('chat-item');
          chatItem.innerHTML = `
              <img src="${user.image}" alt="${user.name}" class="user-img">
              <span>${user.name}</span>
          `;
          chatItem.addEventListener('click', () => selectChat(user));
          chatList.appendChild(chatItem);
      });
  }

  // Select a chat and display user details
  function selectChat(user) {
      usernameDisplay.textContent = `${user.name} - ${user.status}`;
      clearMessages();
  }

  // Send message on button click
  sendButton.addEventListener('click', sendMessage);

  // Send message on Enter key press
  messageInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
          sendMessage();
      }
  });

  // Filter chat list based on search input
  searchInput.addEventListener('input', () => {
      const filter = searchInput.value.toLowerCase();
      const chatItems = chatList.getElementsByClassName('chat-item');
      Array.from(chatItems).forEach(item => {
          const text = item.textContent || item.innerText;
          item.style.display = text.toLowerCase().includes(filter) ? '' : 'none';
      });
  });

  // Function to send messages
  function sendMessage() {
      const messageText = messageInput.value.trim();
      if (messageText) {
          appendMessage('sent', messageText);
          messageInput.value = '';
          displayTypingIndicator();

          // Simulate a response after a short delay
          setTimeout(() => {
              hideTypingIndicator();
              appendMessage('received', 'This is an automated response!');
          }, 1000);
      }
  }

  // Append message to the chat window
  function appendMessage(type, message) {
      const messageElement = document.createElement('div');
      messageElement.classList.add('message', type);
      messageElement.textContent = message;

      // Add a delete button to each message
      const deleteButton = document.createElement('button');
      deleteButton.textContent = '✖';
      deleteButton.classList.add('delete-btn');
      deleteButton.onclick = () => messageElement.remove();

      messageElement.appendChild(deleteButton);
      chatWindow.appendChild(messageElement);
      chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  // Clear all messages from the chat window
  function clearMessages() {
      chatWindow.innerHTML = '';
  }

  // Show typing indicator
  function displayTypingIndicator() {
      const typingIndicator = document.createElement('div');
      typingIndicator.id = 'typingIndicator';
      typingIndicator.textContent = 'User is typing...';
      chatWindow.appendChild(typingIndicator);
      chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  // Hide typing indicator
  function hideTypingIndicator() {
      const typingIndicator = document.getElementById('typingIndicator');
      if (typingIndicator) {
          typingIndicator.remove();
      }
  }

  // Initial load of chat list
  loadChatList();
});
