import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(event.target);

    // 👇 REPLACE THIS WITH YOUR ACTUAL ACCESS KEY FROM WEB3FORMS 👇
    formData.append("access_key", "1e3bde98-4f55-4c19-9d18-ad630e13d87e"); 

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Let's Connect</h2>
        <p className="text-slate-400">
          Have a project in mind or just want to say hi? Send me a message.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6 bg-slate-900/50 p-8 rounded-3xl border border-slate-800 backdrop-blur-sm">
        
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
          <input 
            type="text" 
            name="name" 
            required 
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-600"
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
          <input 
            type="email" 
            name="email" 
            required 
            placeholder="@example.com"
            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-600"
          />
        </div>

        {/* Message Input */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
          <textarea 
            name="message" 
            required 
            rows="4"
            placeholder="Your message here..."
            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-600 resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
             "Sending..." 
          ) : result === "Form Submitted Successfully" ? (
             <>Sent <CheckCircle className="w-5 h-5" /></>
          ) : (
             <>Send Message <Send className="w-5 h-5" /></>
          )}
        </button>

        {/* Status Message */}
        {result && result !== "Sending..." && (
            <p className={`text-center text-sm mt-4 ${result.includes("Success") ? "text-emerald-400" : "text-red-400"}`}>
                {result}
            </p>
        )}

      </form>
    </section>
  );
}