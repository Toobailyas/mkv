// src/components/OurTeam.js

const teamMembers = [
    {
        name: "Nishat Kanwal",
        position: "Board Member",
        image: "/images/board-member.png",
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
        role: "FLT",
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
        image: "/images/dummy.jpg",
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
        image: "/images/dummy.jpg",
        email: "shamshadsattar33@gmail.com",
    },
    {
        name: "Kousar",
        role: "Subject Lead",
        position: "Physics Lead",
        lead: "Lead by: 9th & 10th ",
        image: "/images/dummy.jpg",
        email: "fatimakousar149@gmail.com",
    },
    {
        name: "Nimra",
        role: "Subject Lead",
        position: "Math Lead",
        lead: "Lead by: 9th",
        image: "/images/dummy.jpg",
        email: "nimramalik04180418@gmail.com",
    },
    {
        name: "Umaima",
        role: "Subject Lead",
        position: "Eng Lead",
        lead: "Lead by: 9th & 10th",
        image: "/images/dummy.jpg",
        email: "maimyy07@gmail.com",
    },
    {
        name: "Rabia",
        role: "Subject Lead",
        position: "Biology Lead",
        lead: "Lead by: 9th & 10th",
        image: "/images/dummy.jpg",
        email: "ak1931815@gmail.com",
    },
    {
        name: "Khushboo",
        role: "Subject Lead",
        position: "Islamiat Lead",
        lead: "Lead by: 9th & 10th",
        image: "/images/dummy.jpg",
        email: "khushboomansoor2005@gmail.com",
    },
    {
        name: "Shumaila",
        role: "Subject Lead",
        position: "Urdu Lead",
        lead: "Lead by: 9th & 12th",
        image: "/images/dummy.jpg",
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
            <div className="p-4 bg-white shadow-lg rounded-lg text-center col-span-1">
                <img
                    src={teamMembers[0].image}
                    alt={teamMembers[0].name}
                    className="w-24 h-24 mx-auto rounded-full object-cover shadow-md"
                />
                <h3 className="mt-4 text-2xl font-bold">{teamMembers[0].name}</h3>
                <p className="text-gray-600">{teamMembers[0].role}</p>
                <p className="text-gray-700 font-semibold">{teamMembers[0].position}</p>
            </div>

            <div className="p-4 bg-white shadow-lg rounded-lg text-center col-span-1">
                <img
                    src={teamMembers[1].image}
                    alt={teamMembers[1].name}
                    className="w-24 h-24 mx-auto rounded-full object-cover shadow-md"
                />
                <h3 className="mt-4 text-2xl font-bold">{teamMembers[1].name}</h3>
                <p className="text-gray-600">{teamMembers[1].role}</p>
                <p className="text-gray-700 font-semibold">{teamMembers[1].position}</p>
                <p className="text-gray-500">{teamMembers[1].lead}</p>
                <p className="text-gray-800">{teamMembers[1].email}</p>
            </div>

            <div className="p-4 bg-white shadow-lg rounded-lg text-center col-span-1">
                <img
                    src={teamMembers[2].image}
                    alt={teamMembers[2].name}
                    className="w-24 h-24 mx-auto rounded-full object-cover shadow-md"
                />
                <h3 className="mt-4 text-2xl font-bold">{teamMembers[2].name}</h3>
                <p className="text-gray-600">{teamMembers[2].role}</p>
                <p className="text-gray-700 font-semibold">{teamMembers[2].position}</p>
                <p className="text-gray-500">{teamMembers[2].lead}</p>
                <p className="text-gray-800">{teamMembers[2].email}</p>
            </div>

            {teamMembers.slice(3).map((member, index) => (
                <div
                    key={index + 3}
                    className="p-4 bg-white shadow-lg rounded-lg text-center"
                >
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 mx-auto rounded-full object-cover shadow-md"
                    />
                    <h3 className="mt-4 text-2xl font-bold">{member.name}</h3>
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
