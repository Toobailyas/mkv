// src/components/OurTeam.js

const teamMembers = [
    {
        name: "Nishat Kanwal",
        position: "Board Member",
        role: "Education manager at TCF",
        image: "/images/mam nishat.jpeg",
    },
    {
        name: "Muhammad Khan",
        role: "FLT (Founder)",
        position: "Agenda Manager",
        lead: "Lead by: 11th & 12th",
        image: "/images/team1.jpg",
        email: "m.khan712003@gmail.com",
    },
    {
        name: "Muzammil",
        role: "FLT (Co-Founder)",
        position: "Management Manager",
        lead: "Lead by: 11th & 12th",
        image: "/images/team2.jpg",
        email: "muzammil.332079@gmail.com",
    },
    {
        name: "Jaweria",
        role: "Subject Lead",
        position: "Math & Eng Lead",
        lead: "Lead by: 11th & 12th",
        image: "/images/jaweria.jpeg",
        email: "jaweriaamjad24680@gmail.com",
    },
    {
        name: "Farhan",
        role: "Subject Lead",
        position: "Math Lead",
        lead: "Lead by: 9th",
        image: "/images/team3.jpg",
        email: "Farhanjokhio785@gmail.com",
    },
    {
        name: "Shamshad",
        role: "Subject Lead",
        position: "Chem Lead",
        lead: "Lead by: 9th & 10th",
        image: "/images/shamshad.jpeg",
        email: "shamshadsattar33@gmail.com",
    },
    {
        name: "Kousar",
        role: "Subject Lead",
        position: "Physics Lead",
        lead: "Lead by: 9th & 10th ",
        image: "/images/kousar.jpeg",
        email: "fatimakousar149@gmail.com",
    },
    {
        name: "Nimra",
        role: "Subject Lead",
        position: "Math Lead",
        lead: "Lead by: 9th",
        image: "/images/nimra.jpeg",
        email: "nimramalik04180418@gmail.com",
    },
    {
        name: "Umaima",
        role: "Subject Lead",
        position: "Eng Lead",
        lead: "Lead by: 9th & 10th",
        image: "/images/umaima.jpeg",
        email: "maimyy07@gmail.com",
    },
    {
        name: "Rabia",
        role: "Subject Lead",
        position: "Biology Lead",
        lead: "Lead by: 9th & 10th",
        image: "/images/rabia.jpeg",
        email: "ak1931815@gmail.com",
    },
    {
        name: "Khushboo",
        role: "Subject Lead",
        position: "Islamiat Lead",
        lead: "Lead by: 9th & 10th",
        image: "/images/khushboo.jpeg",
        email: "khushboomansoor2005@gmail.com",
    },
    {
        name: "Shumaila",
        role: "Subject Lead",
        position: "Urdu Lead",
        lead: "Lead by: 9th & 12th",
        image: "/images/shumaila.jpeg",
        email: "shumailaali463@gmail.com",
    },
];

const OurTeam = () => (
    <section id="team" className="py-12 px-4 bg-gray-50">
        <h3 className="mb-4 text-4xl sm:text-2xl lg:text-4xl font-bold flex justify-center">
            Our <div className="text-green-900">Team</div>
        </h3>
        <p className="mt-4 text-gray-900 text-center text-xl max-w-3xl mx-auto">
            Meet the passionate individuals behind MK Volunteers who are dedicated to making a positive impact.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {teamMembers.map((member, index) => (
                <div
                    key={index +0}
                    className="p-4 bg-white shadow-lg rounded-lg text-center transition-transform duration-300 ease-in-out transform hover:scale-110"
                >
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 mx-auto rounded-full object-cover shadow-md"
                    />
                    <h3 className="mt-4 text-xl lg:text-2xl text-black focus font-bold">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                    <p className="text-gray-700 font-semibold">{member.position}</p>
                    <p className="text-gray-500">{member.lead}</p>
                    <p className="text-gray-800">{member.email}</p>
                </div>
            ))}
        </div>
    </section>
);

export default OurTeam;
