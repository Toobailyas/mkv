import OurTeam from "@/app/components/OurTeam";

const AboutUs = () => (
    <>
      <div
        id="aboutUs"
        className="py-12 px-2 flex flex-col justify-center gap-9 items-center m-7 rounded-lg shadow-lg bg-gray-200 text-center"
      >
        <div id="journey" className="m-5">
          <h1 className="text-4xl md:text-6xl font-bold m-3 text-green-700">
            Journey
          </h1>
          <h2 className="text-2xl md:text-6xl font-bold text-yellow-600">
            My Story: Muhammad Khan, Founder of MK.Volunteers
          </h2>
          <p className="mt-4 text-gray-900 text-center max-w-screen lg:mx-10 md:mx-6 sm:mx-4">
          Every journey starts with a spark a moment when passion meets purpose. For me, that spark was the desire to make a meaningful difference through education. I believed education could change lives, and this belief became the foundation of <span className="font-semibold">MK.Volunteers.</span>

I began this journey with a simple idea: <span className="font-semibold ">to provide education and support to underserved communities.</span>  I gathered a few like-minded individuals, and together, we embarked on this mission. The early days were challenging, with limited resources and many obstacles. However, our passion helped us overcome these barriers. We started with 150 students and a handful of volunteers, laying the groundwork for a larger movement.

There were moments of doubt and sadness, especially when responsibilities felt overwhelming. Yet, I focused on the bigger picture the lives we were changing and the communities we were uplifting through education.

As time passed, our team grew from two to 25 passionate individuals. We created a community where every volunteer played a crucial role in our mission. Today, thousands of students have benefited from our programs, and we have built a culture of support for students and their families.
          </p>
  
          <div className="flex flex-col gap-5 lg:mx-11">
            <div className="text-3xl md:text-4xl font-bold mt-7 m-4 text-green-800">
              Achievements:
            </div>
            <div className="font-semibold text-xl sm:text-2xl text-yellow-600 ">From Vision to Reality:</div> What
            began as a small idea now serves thousands, changing lives through
            education.
            <div className="font-semibold text-xl sm:text-2xl text-yellow-600">Growing Team:</div> From just two
            volunteers to 25, MK.Volunteers has become a powerful network of
            individuals committed to service and education.
            <div className="font-semibold text-xl sm:text-2xl text-yellow-600">Impact Beyond the Classroom:</div>{" "}
            The work we do goes far beyond teaching; it touches entire
            communities, uplifting families and neighborhoods.
            <div className="font-semibold text-xl sm:text-2xl text-yellow-600">Building a Legacy:</div> Through
            faith, dedication, and hard work, we’ve created a movement that
            continues to grow and inspire.
            <p className="font-semibold mt-7 ">
              As the founder of MK.Volunteers, I am constantly reminded of why
              we started: the belief that, through education and collective
              action, we can create real change. It hasn’t been an easy journey,
              but it has been a rewarding one. Each step, each challenge, and
              each success has been part of a larger mission to transform lives,
              uplift communities, and create a world where education is the
              gateway to a better future. And we’re just getting started.
            </p>
          </div>
        </div>
      </div>
      <OurTeam />
    </>
  );
  
  export default AboutUs;
  