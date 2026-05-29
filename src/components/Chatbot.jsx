import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Sparkles } from 'lucide-react';

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: 'bot',
    text: 'Hello! Welcome to utispace Studio. I am your personal interior styling assistant. How can I help you co-create your space today?'
  }
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const bodyRef = useRef(null);

  const scrollToBottom = () => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const generateBotReply = (userText) => {
    const text = userText.toLowerCase();
    
    if (text.includes('budget') || text.includes('cost') || text.includes('pricing') || text.includes('price')) {
      return "For pricing details, you can look at our packages (Virtual Consultation starting at ₹14,999; concept design at ₹44,999). You can also use the interactive calculator on our Pricing section to compute a customized budget based on your area size!";
    }
    
    if (text.includes('bedroom') || text.includes('bed') || text.includes('sleep')) {
      return "For luxury bedrooms, we recommend ambient warm backlighting behind vertical fluted panels (wood/gold finish) combined with soft fabric headboards. This matches our signature style seen in the 'Bespoke Ambient Bed Chambers' project!";
    }

    if (text.includes('kitchen') || text.includes('bath') || text.includes('cook')) {
      return "In modern kitchens, we prioritize under-cabinet lighting strips, dark wood cabinetry facades, and premium marble/quartz countertops. We also recommend built-in appliances to preserve clean minimalist lines.";
    }

    if (text.includes('pune') || text.includes('location') || text.includes('address') || text.includes('where')) {
      return "Our physical design studio is located at Office No C3-312, EPIC Plaza, Kesnand Phata, Wagholi, Pune, Maharashtra 412207. You are welcome to book an appointment to see our physical sample materials catalogue.";
    }

    if (text.includes('contact') || text.includes('whatsapp') || text.includes('call') || text.includes('phone') || text.includes('book')) {
      return "You can call us directly at +91 86240 52526 or leave your contact details in our 'Request a Consultation' form, and our lead stylist Neha will schedule a session with you.";
    }

    if (text.includes('hello') || text.includes('hi') || text.includes('hey')) {
      return `Hello! I can guide you on: 
      1. Bedroom design trends, 2. Kitchen layouts, 3. Turnkey budgeting estimates, or 4. Setting up a direct booking. What would you like to explore?`;
    }

    return "That sounds like a wonderful project. To help you best, could you tell me if you are looking to renovate a Full Home, a Bedroom, a Kitchen, or an Office workspace? Alternatively, feel free to use our consultation form below!";
  };

  const handleSend = () => {
    if (!inputVal.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: inputVal
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = inputVal;
    setInputVal('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      setIsTyping(false);
      const botReply = {
        id: Date.now() + 1,
        sender: 'bot',
        text: generateBotReply(currentInput)
      };
      setMessages((prev) => [...prev, botReply]);
    }, 1200);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Chat Bubble */}
      <button 
        className="chatbot-bubble" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Chatbot"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat Window */}
      <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <div className="chatbot-header-info">
            <div className="chatbot-avatar">
              <Sparkles size={16} />
            </div>
            <div>
              <div className="chatbot-name">utispace Assistant</div>
              <div className="chatbot-status">Online</div>
            </div>
          </div>
          <button className="chatbot-close" onClick={() => setIsOpen(false)} style={{ color: 'var(--text-secondary)' }}>
            <X size={18} />
          </button>
        </div>

        {/* Message Container */}
        <div ref={bodyRef} className="chatbot-body">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`chat-msg ${msg.sender === 'bot' ? 'bot' : 'user'}`}
            >
              {msg.text}
            </div>
          ))}
          
          {isTyping && (
            <div className="chat-msg bot" style={{ display: 'flex', gap: '0.2rem', alignItems: 'center', padding: '0.6rem 1rem' }}>
              <span style={{ animation: 'bounce 1s infinite', animationDelay: '0s' }}>•</span>
              <span style={{ animation: 'bounce 1s infinite', animationDelay: '0.2s' }}>•</span>
              <span style={{ animation: 'bounce 1s infinite', animationDelay: '0.4s' }}>•</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: '0.5rem' }}>Typing styling tips...</span>
              
              <style>{`
                @keyframes bounce {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-3px); }
                }
              `}</style>
            </div>
          )}
        </div>

        {/* Input Footer */}
        <div className="chatbot-footer">
          <input 
            type="text" 
            className="chatbot-input" 
            placeholder="Ask about design tips, cost estimation..." 
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className="chatbot-send" onClick={handleSend}>
            <Send size={15} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
