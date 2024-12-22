const Journey = () => (
  <>
    <div
      id="journey"
      className="py-12 px-4 flex flex-col justify-center gap-9 items-center m-7 bg-gray-300 text-center overflow-hidden"
    >
      <div className="m-5">
        <div className="flex flex-col gap-5 max-w-screen-lg mx-auto">
          {/* Title: Achievements */}
          <div className="text-3xl md:text-4xl font-extrabold m-5 text-green-800">
            Achievements:
          </div>

          {/* From Vision to Reality */}
          <div className="font-semibold text-xl sm:text-2xl text-yellow-600">
            From Vision to Reality:
          </div>
          <p className="text-base sm:text-lg md:text-xl mx-4 sm:mx-6 lg:mx-12">
            What began as a small idea now serves thousands, changing lives
            through education.
          </p>

          {/* Growing Team */}
          <div className="font-semibold text-xl sm:text-2xl text-yellow-600">
            Growing Team:
          </div>
          <p className="text-base sm:text-lg md:text-xl mx-4 sm:mx-6 lg:mx-12">
            From just two volunteers to 25, MK.Volunteers has become a powerful
            network of individuals committed to service and education.
          </p>

          {/* Impact Beyond the Classroom */}
          <div className="font-semibold text-xl sm:text-2xl text-yellow-600">
            Impact Beyond the Classroom:
          </div>
          <p className="text-base sm:text-lg md:text-xl mx-4 sm:mx-6 lg:mx-12">
            The work we do goes far beyond teaching; it touches entire
            communities, uplifting families and neighborhoods.
          </p>

          {/* Building a Legacy */}
          <div className="font-semibold text-xl sm:text-2xl text-yellow-600">
            Building a Legacy:
          </div>
          <p className="text-base sm:text-lg md:text-xl mx-4 sm:mx-6 lg:mx-12">
            Through faith, dedication, and hard work, we’ve created a movement
            that continues to grow and inspire.
          </p>

          {/* Founder Message */}
          <p className="font-semibold mt-7 text-base sm:text-lg md:text-xl mx-4 sm:mx-6 lg:mx-12">
            As the founder of MK.Volunteers, I am constantly reminded of why we
            started: the belief that, through education and collective action, we
            can create real change. It hasn’t been an easy journey, but it has
            been a rewarding one. Each step, each challenge, and each success has
            been part of a larger mission to transform lives, uplift communities,
            and create a world where education is the gateway to a better future.
            And we’re just getting started.
          </p>
        </div>
      </div>
    </div>
  </>
);

export default Journey;
