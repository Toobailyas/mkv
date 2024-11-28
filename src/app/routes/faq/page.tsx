"use client"


import React, { useState } from 'react';

const Faq = () => {
    // State to keep track of the currently opened question
    const [openIndex, setOpenIndex] = useState(null);

    // Sample FAQs
    const faqs = [
        {
            question: "What is MK Volunteers?",
            answer: "MK Volunteers is a student-led volunteer initiative started by students of The Citizens Foundation. Our mission is to support and mentor younger students in their academic and career journeys, empowering them with knowledge and guidance in various fields."
        },
        {
            question: "Who can join MK Volunteers?",
            answer: "MK Volunteers is open to all students who are passionate about learning, helping others, and building a supportive community. Whether you're interested in volunteering or seeking guidance, there's a place for you here!"
        },
        {
            question: "How can I sign up to volunteer?",
            answer: "Signing up is easy! Just head over to our 'Join Us' section, choose a role that interests you, and complete the online form. Our team will get in touch with you soon."
        },
        {
            question: "What types of programs or fields does MK Volunteers support?",
            answer: "We support students in a wide range of fields, from academic subjects like Math and English to career skills, tech fields, and more."
        },
        {
            question: "Is there a fee to join or participate?",
            answer: "No, joining MK Volunteers and participating in our programs is completely free. We believe in providing support and resources without any financial barriers."
        },
        {
            question: "How can MK Volunteers help me in my studies or career?",
            answer: "Our volunteers provide mentorship, resources, and guidance tailored to each student's needs, helping them improve academically, learn new skills, and prepare for future career goals."
        },
        {
            question: "Do I need prior experience to join as a volunteer or participant?",
            answer: "No prior experience is required. Whether you’re a beginner or already have some knowledge, we welcome you! For volunteers, we value enthusiasm and dedication more than experience."
        },
        {
            question: "What is The Citizens Foundation, and how is it related to MK Volunteers?",
            answer: "The Citizens Foundation is a non-profit organization focused on education. MK Volunteers was started by TCF students to extend their mission by mentoring juniors and giving back to the community."
        },
        {
            question: "How are the mentorship sessions conducted?",
            answer: "Our mentorship sessions are typically conducted online through virtual meetings, making it easy for everyone to participate from anywhere. We may also have in-person events or workshops from time to time in TCF's Schools."
        },
        {
            question: "What is the time commitment for volunteers?",
            answer: "We understand that students have busy schedules, so time commitments are flexible. Volunteers can contribute as much or as little as they’re able to, and roles may have different time requirements."
        },
        {
            question: "Can I contribute or support MK Volunteers in other ways besides volunteering?",
            answer: "Absolutely! You can support us by spreading the word, joining our events, sharing resources."
        },
        {
            question: "How can I stay updated on new programs and opportunities?",
            answer: "You can follow us on social media or must follow our Whatsapp Channel to get updates on our latest programs, events, and volunteer opportunities."
        },
        {
            question: "Who should I contact if I have more questions?",
            answer: "Feel free to reach out through our 'Contact Us' page or email us directly. Our team will be happy to assist you!"
        },
    ];

    return (
        <section id="faq" className="py-12  bg-gray-100">
            <div className="flex flex-col gap-5 mx-10 mt-6">
                <div className='flex flex-col gap-5 justify-center items-center'>
                <h1 className="text-4xl md:text-6xl font-extrabold text-green-800">Frequently Asked Questions</h1>
                <h2 className="text-2xl md:text-4xl font-bold text-black">Learn more about the purpose of MK Volunteers</h2>
                </div>
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-300 border-l-green-900 border-l-8 rounded-lg shadow-md overflow-hidden">
                        <button
                            className="w-full text-left px-4 py-3 bg-white hover:bg-gray-200 focus:outline-none"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                        </button>
                        {openIndex === index && (
                            <div className="px-4 py-2 bg-gray-50 border border-l-green-900 border-l-7">
                                <p className="text-gray-700">{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faq;
