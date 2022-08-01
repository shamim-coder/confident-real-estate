import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const HeaderTop = () => {
    return (
        <section className="bg-primary py-4 hidden lg:block">
            <div className="container mx-auto flex justify-between text-white">
                <div className="flex">
                    <p className="border-r-2 pr-5 mr-5 border-gray-600 font-light font-Oswald" href="http://" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="scale-x-[-1] mr-2" icon={faLocationDot} /> CB-10, Kachukhet, Dhaka Cantonment
                    </p>
                    <a className="border-r-2 pr-5 mr-5 border-gray-600 font-light font-Oswald" href="tel:+880 1740 420700">
                        <FontAwesomeIcon className="mr-2" icon={faPhone} /> +880 1740 420700
                    </a>
                    <a className="font-light" href="mailto:crcbd700@gmail.com">
                        <FontAwesomeIcon className="mr-2" icon={faEnvelope} /> crcbd700@gmail.com
                    </a>
                </div>
                <div className="flex gap-4">
                    <a className="hover:text-neutral transition text-lg" href="https://twitter.com">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a className="hover:text-neutral transition text-lg" href="https://twitter.com">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a className="hover:text-neutral transition text-lg" href="https://twitter.com">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a className="hover:text-neutral transition text-lg" href="https://twitter.com">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeaderTop;
