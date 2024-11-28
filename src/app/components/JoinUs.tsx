const JoinUs = () => (
    <section id="join" className="py-12 px-4 bg-blue-50">
        <h2 className="text-3xl font-bold text-center text-green-600">Join MKV ✨
Being a part or positive Agents <br/>
خوابوں سے تعبیروں تک کا سفر</h2>
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
    </section>
);

export default JoinUs;