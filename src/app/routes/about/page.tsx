import OurTeam from "@/app/components/OurTeam";

const AboutUs = () => (
    <>
      <div
        id="aboutUs"
        className="py-12 px-2 flex flex-col justify-center gap-9 items-center m-7 rounded-lg shadow-lg bg-gray-200 text-center"
      >
        <div id="journey" className="m-5">
          <h1 className="text-4xl md:text-6xl font-bold text-green-600">
            Journey
          </h1>
          <h2 className="text-2xl md:text-6xl font-bold text-yellow-600">
            My Story: Muhammad Khan, Founder of MK.Volunteers
          </h2>
          <p className="mt-4 text-gray-900 text-center max-w-screen lg:mx-10 md:mx-6 sm:mx-4">
            Every journey begins with a spark, a moment of clarity where passion
            meets purpose. For me, that spark was the desire to make a meaningful
            difference in the world. It was a vision born from both positivity and
            a deep sense of responsibility to those in need. I knew that education
            had the power to change lives, and that thought became the foundation
            of everything I wanted to create. It’s a journey that has been filled
            with moments of passion, challenges, and yes, even sadness. But through
            it all, one thing has remained clear: the belief that we are here to
            serve and uplift others. As the founder of{" "}
            <span className="font-semibold">MK.Volunteers</span>, I started with
            just a simple, powerful idea: to provide education and support to
            those who needed it most, especially in underserved communities. I
            knew it wouldn't be easy. The road was never promised to be smooth,
            but I felt an undeniable sense of purpose. I gathered a few
            like-minded individuals, and together, we began the mission that would
            become MK.Volunteers. From the very beginning, the vision was clear:
            we weren't just here to teach; we were here to transform lives. The
            first steps were difficult—there were few resources, limited support,
            and many obstacles. But passion has a way of overcoming these
            barriers. With a handful of volunteers and 150 students, we began to
            lay the groundwork for what would soon grow into a much larger
            movement. At times, I faced moments of doubt and sadness. There were
            days when the weight of responsibilities felt too heavy, and I
            wondered if we were doing enough. The challenges felt overwhelming,
            balancing administration, finding enough resources, and the emotional
            toll of knowing that we could not reach everyone who needed help. But
            in those moments, I reminded myself of the bigger picture—the children
            whose lives were being changed, the families who were being empowered,
            and the communities that were slowly being uplifted through the gift
            of education. With each passing day, the passion that ignited our
            mission continued to grow. Our volunteer team expanded. What started
            as just two people grew to 25 passionate individuals—11 directly
            engaging with students through teaching, mentoring, and guidance,
            while 15 others supported from behind the scenes, ensuring smooth
            operations and logistical support. Together, we created a community of
            action, where every volunteer, whether on the frontlines or behind the
            scenes, played a crucial role in helping MK.Volunteers reach its full
            potential. Today, the impact is far-reaching. Thousands of students
            have benefitted from our programs, and our team stands stronger than
            ever, united by the belief that education is the key to building a
            brighter, more equitable future for all. We've built a culture of
            support, not only for students but also for their families and entire
            communities. Education has become a tool for empowerment, and I am
            deeply proud of the difference we’ve made together.
          </p>
  
          <div className="flex flex-col gap-5 lg:mx-11">
            <div className="text-xl md:text-3xl font-bold mt-9 m-5 ">
              Achievements:
            </div>
            <div className="font-semibold">From Vision to Reality:</div> What
            began as a small idea now serves thousands, changing lives through
            education.
            <div className="font-semibold">Growing Team:</div> From just two
            volunteers to 25, MK.Volunteers has become a powerful network of
            individuals committed to service and education.
            <div className="font-semibold">Impact Beyond the Classroom:</div>{" "}
            The work we do goes far beyond teaching; it touches entire
            communities, uplifting families and neighborhoods.
            <div className="font-semibold">Building a Legacy:</div> Through
            faith, dedication, and hard work, we’ve created a movement that
            continues to grow and inspire.
            <p className="font-semibold mt-7">
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
  