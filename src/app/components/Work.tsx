import Link from "next/link";

const Hero = () => (
    
<div id="work">
    <div
        className="h-screen flex flex-col justify-center items-center bg-cover bg-center text-center"
        style={{
            backgroundImage: "url('/images/cover-pic.jpg')", // Path to your background image
        }}
    >
        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
                Empowering Student Communities Together
            </h1>
            <h3 className="mt-4 text-2xl text-yellow-600 mx-6">High-Quality Education:</h3>
            <p className="mt-4 text-lg text-gray-200 mx-6">
                Providing free, top-tier education to empower individuals and create lasting change.
            </p>
            <p className="mt-4 text-2xl text-yellow-600 mx-6">Community Upliftment:</p>
            <p className="text-gray-200 mx-6">
                Focusing on holistic development to uplift individuals, families, and entire communities.
            </p>
            <p className="mt-4 text-2xl text-yellow-600 mx-6">Volunteer-Driven:</p>
            <p className="text-gray-200 mx-6">
                Volunteers work selflessly for the sake of humanity and the pleasure of Allah.
            </p>
            <p className="mt-4 text-2xl text-yellow-600 mx-6">Professional Management:</p>
            <p className="text-gray-200 mx-6">
                Skilled team ensuring efficient, transparent, and sustainable operations.
            </p>
            <p className="mt-4 text-2xl text-yellow-600 mx-6">Inclusive & Impactful:</p>
            <p className="text-gray-200 mx-6">
                Accessible education for all, breaking barriers and fostering long-term growth.
            </p>
            <p className="mt-4 text-2xl text-yellow-400 mx-6">
                Join MK Volunteers to make a difference.
            </p>
            <div className="py-3 mt-4 rounded-full bg-green-900 hover:bg-slate-700 text-white w-48 mx-auto"> {/* Set fixed width */}
                <Link href="https://docs.google.com/forms/d/1qi2jklZNYRvycZEs3uODNXYEWYBIB8lSPaHS5nEnjVA/viewform" target="_blank">
                    Join Now
                </Link>
            </div>
        </div>
    </div>
    </div>
);

export default Hero;
