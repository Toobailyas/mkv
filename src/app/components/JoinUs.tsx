const JoinUs = () => (
    <section id="join" className="py-12 px-4 bg-gray-200">
        <h2 className="text-2xl font-bold text-center text-green-600">Join MKV
be a part or positive Agents </h2>
<h2 className="text-2xl font-bold text-center text-yellow-600">
خوابوں سے تعبیروں تک کا سفر</h2>
        <p className="mt-4 text-center text-gray-700 max-w-3xl mx-auto">
            Become a part of MK Volunteers and help make a difference in the community. Sign up below to get started!
        </p>
        <h2 className="text-2xl font-bold mt-4 text-center text-green-600">JOIN MKV</h2>
        <form  action="https://formspree.io/f/mrbgngjz"
  method="POST" className="mt-8 max-w-xl mx-auto space-y-4 bg-white p-6 shadow-lg rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110">
            <label htmlFor="name"></label>
            <input
                type="text"
                placeholder="name"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded"
                required
            />
            <label htmlFor="email"></label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                className="w-full p-3 border border-gray-300 rounded"
                required
            />
            <label htmlFor="tel"></label>
            <input
                type="tel"
                name="tel"
                id="tel"
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-300 rounded"
                required
            />
            <label htmlFor="Why do you want to join us?"></label>
            <textarea
                placeholder="Why do you want to join us?"
                name="Why do you want to join us?"
                id="Why do you want to join us?"
                className="w-full p-3 border border-gray-300 rounded h-32"
                required
            />
            <button
                type="submit"
                className="w-full px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-800"
            >
                Submit
            </button>
        </form>
    </section>
);

export default JoinUs;