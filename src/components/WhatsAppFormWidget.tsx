import { useState } from "react";
import { X, MessageCircle } from "lucide-react";

const WhatsAppFormWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;
    
    let whatsappMessage = 'Hello! I would like to get in touch...\n\n';
    if (name) whatsappMessage += `Name: ${name}\n`;
    if (phone) whatsappMessage += `Phone: ${phone}\n`;
    if (message) whatsappMessage += `\nMessage: ${message}`;
    
    const whatsappUrl = `https://wa.me/917025346580?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    e.currentTarget.reset();
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 w-[60px] h-[60px] bg-accent rounded-full flex items-center justify-center shadow-glow hover:scale-105 transition-all duration-300 z-[1000]"
        aria-label="Open WhatsApp form"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </button>

      {isOpen && (
        <div className="fixed bottom-[90px] right-5 w-[400px] max-w-[90vw] bg-white rounded-xl shadow-premium z-[999] overflow-hidden border border-border animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-muted/20 p-3 flex items-center justify-between border-b border-border">
            <h3 className="text-sm font-semibold text-gray-900">Contact Us</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Close WhatsApp form"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-5">
            <p className="text-sm text-gray-600 text-center mb-5 leading-relaxed">
              Fill out the form below and we'll get back to you on WhatsApp!
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={4}
                className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20 resize-vertical min-h-[80px]"
              />

              <button
                type="submit"
                className="w-full py-3.5 bg-accent text-white font-semibold rounded-lg hover:-translate-y-0.5 hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Send via WhatsApp
              </button>
            </form>
          </div>

          <div className="bg-gray-50 border-t border-gray-200 py-2 text-center">
            <a
              href="https://widgetify-two.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Powered by Widgetify
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppFormWidget;
