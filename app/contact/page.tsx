import React from "react";

export default function ContactPage() {
  return (
    <main className="p-8 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 dark:text-white uppercase">
        Contact
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8">
            Interested in working together? Fill out the form or reach out directly via email. 
            I look forward to hearing about your project.
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-bold uppercase text-sm tracking-widest">Email</h3>
              <p className="text-neutral-600 dark:text-neutral-400">hello@perssemedia.com</p>
            </div>
            <div>
              <h3 className="font-bold uppercase text-sm tracking-widest">Location</h3>
              <p className="text-neutral-600 dark:text-neutral-400">Available for travel worldwide</p>
            </div>
          </div>
        </div>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 uppercase">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 bg-transparent border border-neutral-300 dark:border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 uppercase">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 bg-transparent border border-neutral-300 dark:border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 uppercase">Message</label>
            <textarea
              id="message"
              rows={5}
              className="w-full p-3 bg-transparent border border-neutral-300 dark:border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
