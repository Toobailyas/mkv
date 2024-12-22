import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div>
        <footer className="text-white body-font bg-green-600">
          <div className="container p-4 mx-auto flex md:items-center md:flex-row flex-wrap justify-between">
            {/* Logo and Contact Info */}
            <div className="flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              <a className="flex title-font font-medium items-center justify-center md:justify-start">
                <Image
                  className="rounded-full"
                  src="/images/mk-logo.jpg"
                  height={50}
                  width={50}
                  alt="logo"
                />
                <span className="ml-3 text-xl">MK Volunteers</span>
              </a>
              <p className="mt-2 text-sm text-white">Contact Us through these platforms</p>
            </div>

            {/* WhatsApp Section */}
            <div className="w-full md:w-1/3 px-4 mt-4 md:mt-0">
              <div className="flex gap-3 justify-center">
                <h2 className="title-font font-medium tracking-widest text-sm mb-3 ">
                  WHATSAPP
                </h2>
                <a>
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                </a>
              </div>
              <nav className="list-none">
                <li>
                  <a
                    href="https://whatsapp.com/channel/0029VaPMhuu6hENu0znndu2i"
                    target="blank"
                    className="text-gray-200 hover:text-white"
                  >
                    Whatsapp Channel
                  </a>
                </li>
                <li>
                  <a
                    href="https://chat.whatsapp.com/KAkUkP5blanHjmzhDMJNCF"
                    target="blank"
                    className="text-gray-200 hover:text-white"
                  >
                    Girls Community
                  </a>
                </li>
                <li>
                  <a
                    href="https://chat.whatsapp.com/l33nptfShrojiK3dUeWbs"
                    target="blank"
                    className="text-gray-200 hover:text-white"
                  >
                    Boys Community
                  </a>
                </li>
              </nav>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <hr className="mx-11" />
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row items-center sm:justify-between">
            <p className="text-gray-300 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} MK Volunteers —
              <a className="text-gray-200 ml-1">@MK Volunteer</a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              {/* Social Media Links */}
              <a
                href="https://www.facebook.com/profile.php?id=61566971482389"
                target="blank"
                className="text-gray-300"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://whatsapp.com/channel/0029VaPMhuu6hENu0znndu2i"
                target="blank"
                className="ml-3 text-gray-300"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/mk-volunteers-team/"
                target="blank"
                className="ml-3 text-gray-300"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  />
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}
