// src/components/Contact.js
const Contact = () => (
    <section  className="py-12 px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-green-600">Contact Us</h2>
        <form className="mt-8 max-w-xl mx-auto space-y-4">
            <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border border-gray-300 rounded"
            />
            <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded"
            />
            <textarea
                placeholder="Message"
                className="w-full p-2 border border-gray-300 rounded h-32"
            />
            <button className="px-6 py-2 bg-green-600 text-white rounded-lg">
                Send Message
            </button>
        </form>
    </section>
);

export default Contact;