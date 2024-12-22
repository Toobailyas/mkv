// src/components/Contact.js
const Contact = () => (
    <section  className="py-12 px-4 bg-gray-200">
        <div>
        <h2 className="text-3xl font-bold text-center text-green-600">Contact Us</h2>
        <form  action="https://formspree.io/f/xgvegepd"
  method="POST" className=" mt-8 max-w-xl mx-auto space-y-4 bg-white p-6 shadow-lg rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110">
            <label htmlFor="name"></label>
            <input
                type="text"
                placeholder="Name"
                id="name"
                name="name"
                className="w-full p-2 border border-gray-300 rounded"
                required
            />
            <label htmlFor="email"></label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded"
                required
            />
            <label htmlFor="Message"></label>
            <textarea
                placeholder="Message"
                id="Message"
                name="Message"
                className="w-full p-2 border border-gray-300 rounded h-32"
                required
            />
            <button className="px-6 py-2 bg-green-600 text-white rounded-lg">
                Send Message
            </button>
        </form>
        </div>
    </section>
);

export default Contact;