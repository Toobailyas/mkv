// src/components/Contact.js
const Contact = () => (

    <section id="contact">
        <div className="py-12 px-4 bg-gray-50">
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
        </div>

    <div id="join" className="py-12 mt-9 px-4 bg-blue-50">
        <h2 className="text-3xl font-bold text-center text-green-600">Join Us</h2>
        <p className="mt-4 text-center text-gray-700 max-w-3xl mx-auto">
            Become a part of MK Volunteers and help make a difference in the community. Sign up below to get started!
        </p>
        <form className="mt-8 max-w-xl mx-auto space-y-4 bg-white p-6 shadow-lg rounded-lg">
            <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border border-gray-300 rounded"
            />
            <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border border-gray-300 rounded"
            />
            <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-300 rounded"
            />
            <textarea
                placeholder="Why do you want to join us?"
                className="w-full p-3 border border-gray-300 rounded h-32"
            />
            <button
                type="submit"
                className="w-full px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-800"
            >
                Submit
            </button>
        </form>
    </div>
    </section>
);


export default Contact;