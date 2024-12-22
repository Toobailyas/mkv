import Link from "next/link";

const Hero = () => (
  <div id="work">
    <div className="flex flex-col justify-center items-center bg-cover bg-center text-center px-4">
      <div className="bg-gray-300 py-6 px-6 sm:px-10 md:px-14 m-4 rounded-lg">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-800">
          Empowering Student Communities Together
        </h1>
        <h3 className="mt-4 text-xl sm:text-2xl text-yellow-600 mx-3">High-Quality Education:</h3>
        <p className="mt-4 text-base sm:text-lg mx-3">
          Providing free, top-tier education to empower individuals and create lasting change.
        </p>
        <h3 className="mt-4 text-xl sm:text-2xl text-yellow-600 mx-3">Community Upliftment:</h3>
        <p className="mx-6 sm:mx-8">
          Focusing on holistic development to uplift individuals, families, and entire communities.
        </p>
        <h3 className="mt-4 text-xl sm:text-2xl text-yellow-600 mx-3">Volunteer-Driven:</h3>
        <p className="text-gray-800 mx-3 sm:mx-8">
          Volunteers work selflessly for the sake of humanity and the pleasure of Allah.
        </p>
        <h3 className="mt-4 text-xl sm:text-2xl text-yellow-600 mx-3">Professional Management:</h3>
        <p className="text-gray-800 mx-6 sm:mx-8">
          Skilled team ensuring efficient, transparent, and sustainable operations.
        </p>
        <h3 className="mt-4 text-xl sm:text-2xl text-yellow-600 mx-3">Inclusive & Impactful:</h3>
        <p className="text-gray-800 mx-6 sm:mx-8">
          Accessible education for all, breaking barriers and fostering long-term growth.
        </p>
        <p className="mt-4 text-xl md:text-2xl font-semibold text-yellow-600 mx-3">
          Join MK Volunteers to make a difference.
        </p>
        <div className="py-3 mt-4 rounded-full bg-green-900 hover:bg-slate-700 text-white w-48 mx-auto">
          <Link href="https://docs.google.com/forms/d/1qi2jklZNYRvycZEs3uODNXYEWYBIB8lSPaHS5nEnjVA/viewform" target="_blank">
            Join Now
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
