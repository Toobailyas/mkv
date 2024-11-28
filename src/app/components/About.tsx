import Link from "next/link";

// src/components

const About = () => (
    <section id="about" className="py-12 px-4 bg-gray-50">
       <div className="flex flex-col justify-center place-content-center text-center">
        <div className=" mt-10 mx-7 ">
          <h3 className="mb-4 text-4xl sm:text-2xl lg:text-4xl font-bold ">
            About <span className="text-green-900"> Us</span> 
          </h3>
          <p>
            MK Volunteers is a youth-led initiative founded by students of <span> The Citizens Foundation</span> with a mission to empower and guide Young minds. Our Team is dedicated to support juniors in thir academic and extracurricular pursuits,hrlping them build confidence and achive their goals.
            The purpose of this volunteer team is to support all students in
            every way they need, for the sake of Allah... 
          </p>
          <button className="text-green-800 font-bold"><Link href="/routes/about">Read More</Link></button>
        </div>
        <div className="mx-7 mt-7">
          <h4 className="mb-4 text-4xl sm:text-2xl lg:text-4xl font-bold ">
            OUR <span className="text-green-900"> MISSION </span>
          </h4>
          <p>
            It is our mission to help, No child miss out on education due to
            problems. 
          </p>
        </div>
        </div>
        
    </section>
);

export default About;