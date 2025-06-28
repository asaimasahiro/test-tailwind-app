const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Contact</h1>
      <p className="mb-8">Please feel free to contact me using the form below or via email.</p>

      <form className="space-y-6 w-full max-w-lg" action="https://formspree.io/f/xrbkrjyw" method="POST">
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-lg font-medium text-gray-700">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Subject of your message"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Your message here..."
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Send Message
          </button>
        </div>
      </form>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Direct Email</h2>
        <p className="text-lg">For direct inquiries, please email me at:</p>
        <p className="text-blue-600 hover:underline">your.email@example.com</p>
      </div>
    </div>
  );
};

export default ContactPage;
