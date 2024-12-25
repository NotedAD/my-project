export const sendMessage = async (phone, comment, agree) => {
    if (!agree) {
      alert('Необходимо дать согласие на обработку персональных данных.');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:3001/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone,
          comment,
        }),
      });
  
      const data = await response.json();
      if (data.message === 'Message sent successfully') {
        console.log('Сообщение отправлено!');
        return true;
      } else {
        console.log('Произошла ошибка при отправке сообщения.');
        return false;
      }
    } catch (error) {
      console.error('Ошибка отправки данных:', error);
      return false;
    }
  };
  