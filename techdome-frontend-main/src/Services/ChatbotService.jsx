import ChatMessage from '../Models/ChatMessage';
import { getBotResponse } from '../API/chatBotAPI';

// Function to handle sending a message and receiving a response
export const sendMessage = async (userInput, setMessages) => {
  // Create a new user message object
  const userMessage = new ChatMessage('user', userInput, new Date().toISOString());

  // Update the messages state with the new user message
  setMessages(prevMessages => [...prevMessages, userMessage]);

  // Simulate bot typing
  setTimeout(() => {
    setMessages(prevMessages => [...prevMessages, { author: 'bot', text: '...', timestamp: new Date().toISOString() }]);
  }, 500);

  // Get the bot response from the API
  try {
    const botText = await getBotResponse(userInput);
    // Create a new bot message object
    const botMessage = new ChatMessage('bot', botText, new Date().toISOString());

    // Update the messages state with the new bot message
    setMessages(prevMessages => [...prevMessages.filter(message => message.text !== '...'), botMessage]);
  } catch (error) {
    // Handle any errors in getting the bot response
    console.error('Failed to get bot response:', error);
    setMessages(prevMessages => [...prevMessages.filter(message => message.text !== '...'), new ChatMessage('bot', 'Sorry, there was an error. Please try again.', new Date().toISOString())]);
  }
};
