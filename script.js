function askBookAI() {
  const question = document.getElementById('userQuestion').value;
  const responseDiv = document.getElementById('aiResponse');

  if (!question.trim()) {
    alert('Please ask a question!');
    return;
  }

  responseDiv.innerHTML = '⏳ BookNest AI is thinking...';

  // Small delay for effect
  setTimeout(() => {
    let aiResponse = getAIResponse(question);
    
    responseDiv.innerHTML = `
      <div class="ai-answer">
        <strong>🤖 BookNest AI:</strong><br>
        ${aiResponse}
      </div>
    `;
  }, 500);

  document.getElementById('userQuestion').value = '';
}


function getAIResponse(question) {
  const q = question.toLowerCase().trim();

  // ===== GENERAL GREETINGS =====
  if (q === 'hi' || q === 'hello' || q === 'hey') {
    return '👋 Hello! Welcome to BookNest! I\'m here to help you find the perfect book. What are you interested in?';
  }

  if (q.includes('how are you') || q === 'how are you?') {
    return '😊 I\'m doing great! Thanks for asking. I\'m excited to help you discover amazing books today! How can I assist you?';
  }

  if (q === 'thanks' || q === 'thank you' || q.includes('thank')) {
    return '🙏 You\'re welcome! Feel free to ask me anything about books. Happy reading! 📚';
  }

  if (q === 'ok' || q === 'okay' || q === 'sure') {
    return '👍 Great! Ask me about any book or topic. I\'m here to help!';
  }

  if (q.includes('bye') || q.includes('goodbye') || q === 'see you') {
    return '👋 Goodbye! Come back soon to explore more books. Happy reading! 📚';
  }

  
  if (q.includes('who are you') || q.includes('what are you')) {
    return '🤖 I\'m BookNest AI! I help you discover the perfect books based on your interests. I can answer questions about our books, recommend titles, explain prices, and help with your wishlist!';
  }

  if (q.includes('what can you do') || q.includes('help me')) {
    return '📚 I can help you with: 1) Find books by topic, 2) Get book recommendations, 3) Check prices, 4) Explain how wishlist works, 5) Answer any book-related questions!';
  }

  
  if (q.includes('atomic') || q.includes('habit') || q.includes('change') || q.includes('improvement')) {
    return '📚 <strong>Atomic Habits by James Clear</strong> is perfect for you! It teaches how small changes create big results over time. Price: ₹299. ❤️ Add to wishlist?';
  }

  
  if (q.includes('rich') || q.includes('poor') || q.includes('money') || q.includes('financial') || q.includes('wealth') || q.includes('earn')) {
    return '💰 <strong>Rich Dad Poor Dad by Robert Kiyosaki</strong> is excellent! Learn how wealthy people think differently about money. Price: ₹399. ❤️ Add to wishlist?';
  }

  
  if (q.includes('psychology') || q.includes('behavior') || q.includes('spending') || q.includes('decision')) {
    return '🧠 <strong>The Psychology of Money by Morgan Housel</strong> explains why we make financial decisions. Very insightful! Price: ₹349. ❤️ Add to wishlist?';
  }

  
  if (q.includes('alchemist') || q.includes('dream') || q.includes('adventure') || q.includes('destiny') || q.includes('journey') || q.includes('inspiration')) {
    return '✨ <strong>The Alchemist by Paulo Coelho</strong> is inspiring! A beautiful story about following your dreams and finding your purpose. Price: ₹249. ❤️ Add to wishlist?';
  }

  
  if (q.includes('sapiens') || q.includes('history') || q.includes('human') || q.includes('civilization') || q.includes('mankind')) {
    return '🌍 <strong>Sapiens by Yuval Noah Harari</strong> is fascinating! Learn the complete history of humankind from Stone Age to modern times. Price: ₹549. ❤️ Add to wishlist?';
  }

  
  if (q.includes('1984') || q.includes('orwell') || q.includes('dystopian') || q.includes('dark') || q.includes('serious')) {
    return '📖 <strong>1984 by George Orwell</strong> is thought-provoking! A classic dystopian novel about surveillance and control. Price: ₹199. ❤️ Add to wishlist?';
  }

  
  if (q.includes('fiction') || q.includes('novel') || q.includes('story') || q.includes('read')) {
    return '📚 We have great fiction! Try <strong>The Alchemist</strong> (inspiring & uplifting) or <strong>1984</strong> (thought-provoking & dark). Which appeals to you?';
  }

  
  if (q.includes('learn') || q.includes('improve') || q.includes('self-help') || q.includes('knowledge') || q.includes('grow')) {
    return '📖 For self-improvement, I recommend <strong>Atomic Habits</strong> or <strong>Rich Dad Poor Dad</strong>. Both are life-changing and practical!';
  }

  
  if (q.includes('recommend') || q.includes('suggest') || q.includes('best') || q.includes('popular') || q.includes('trending')) {
    return '⭐ Our bestsellers are: 1) <strong>Atomic Habits</strong> ₹299, 2) <strong>Rich Dad Poor Dad</strong> ₹399, 3) <strong>The Alchemist</strong> ₹249. Which interests you most?';
  }

 
  if (q.includes('price') || q.includes('cost') || q.includes('how much') || q.includes('₹') || q.includes('expensive')) {
    return '💵 Book prices: Atomic Habits ₹299 | Rich Dad Poor Dad ₹399 | Psychology of Money ₹349 | Alchemist ₹249 | Sapiens ₹549 | 1984 ₹199';
  }

  
  if (q.includes('author') || q.includes('who wrote') || q.includes('writer')) {
    return '✍️ Our amazing authors: James Clear | Robert Kiyosaki | Morgan Housel | Paulo Coelho | Yuval Harari | George Orwell. Each one is a master in their field!';
  }

  
  if (q.includes('wishlist') || q.includes('save') || q.includes('favorite') || q.includes('want')) {
    return '❤️ You can add books to your wishlist by clicking the red "❤️ Wishlist" button on any book card. View all your saved books in the Wishlist section above!';
  }

  
  if (q.includes('cart') || q.includes('buy') || q.includes('order') || q.includes('purchase') || q.includes('checkout')) {
    return '🛒 Click "🛒 Add to Cart" on any book to add it to your cart. Your items are saved! Full checkout feature coming soon. For now, contact us to order!';
  }

  
  if (q.includes('search') || q.includes('find') || q.includes('look for')) {
    return '🔍 You can use the search bar at the top to find books by title or author name. Just type what you\'re looking for!';
  }

  
  if (q.includes('contact') || q.includes('help') || q.includes('support') || q.includes('email')) {
    return '📧 You can contact us using the Contact Form below! Fill in your details and we\'ll get back to you soon. We\'re here to help! 😊';
  }

  
  if (q.includes('all books') || q.includes('show all') || q.includes('list') || q.includes('collection')) {
    return '📚 We have 6 amazing books: Atomic Habits, Rich Dad Poor Dad, Psychology of Money, The Alchemist, Sapiens, and 1984. Scroll down to see all of them!';
  }

  
  return '📚 That\'s a great question! We have books on habits, finance, psychology, adventure, history, and fiction. Ask me about specific books, topics, prices, or how our features work. I\'m here to help! 😊';
}