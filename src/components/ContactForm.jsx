import React from 'react'

/**
 * Accessible contact form powered by Formspree.
 * Replace `yourFormId` with an actual Formspree form ID before deployment.
 */
export default function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/yourFormId"
      method="POST"
      className="glass rounded-2xl p-6 space-y-4"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
        <input
          id="name"
          name="name"
          required
          className="w-full px-3 py-2 rounded-lg bg-white/70 dark:bg-black/30 border border-black/10 dark:border-white/10"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="w-full px-3 py-2 rounded-lg bg-white/70 dark:bg-black/30 border border-black/10 dark:border-white/10"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          className="w-full px-3 py-2 rounded-lg bg-white/70 dark:bg-black/30 border border-black/10 dark:border-white/10"
          placeholder="How can I help?"
        />
      </div>
      <button type="submit" className="btn-primary w-full">Send Message</button>
    </form>
  )
}
