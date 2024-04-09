const API_URL = 'your-django-api-url';

export const getBotResponse = async (userInput) => {
  try {
    const response = await fetch(`${API_URL}/get-response`, {
      method: 'POST',
      body: JSON.stringify({ message: userInput }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error('Error fetching bot response:', error);
  }
};