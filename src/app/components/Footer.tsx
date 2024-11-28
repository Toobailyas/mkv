// src/components/Footer.js
const Footer = () => (
    <footer className="bg-green-600 text-white py-6">
        <div className="container mx-auto text-center space-y-4">
            <div className="text-lg font-bold">MK Volunteers</div>
            <p className="text-sm">
                © {new Date().getFullYear()} MK Volunteers. All Rights Reserved.
            </p>
            <div className="flex justify-center space-x-4">
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    Facebook
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    Twitter
                </a>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    Instagram
                </a>
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    LinkedIn
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;