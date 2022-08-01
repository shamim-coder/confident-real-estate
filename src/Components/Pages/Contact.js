import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return (
        <section>
            <div className="container mx-auto py-14">
                <div className="grid lg:grid-cols-2 gap-10">
                    <div>
                        <div className="section-top py-5">
                            <h1 className="text-4xl md:text-5xl font-bold mb-5">
                                <span className="text-secondary">Summary of Company</span>
                            </h1>
                        </div>

                        <div class="overflow-x-auto">
                            <table class="table w-full">
                                <tbody>
                                    <tr>
                                        <td>Name of the Company</td>
                                        <td>:</td>
                                        <td>Confident Real Estate & Construction</td>
                                    </tr>

                                    <tr>
                                        <td>Type of Company </td>
                                        <td>:</td>
                                        <td>Proprietorship</td>
                                    </tr>

                                    <tr>
                                        <td>Year of Establishment</td>
                                        <td>:</td>
                                        <td>2014</td>
                                    </tr>
                                    <tr>
                                        <td>Proprietor & CEO</td>
                                        <td>:</td>
                                        <td>
                                            Lt. Col. Akramuzzaman (Retd) <br />
                                            PBGM Engr. (Civil) BUET
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Trade License number</td>
                                        <td>:</td>
                                        <td>145/2021-2022</td>
                                    </tr>
                                    <tr>
                                        <td>Tax Payer’s Identification No</td>
                                        <td>:</td>
                                        <td>1597-8073-1511 Circle-186 (Salary)</td>
                                    </tr>
                                    <tr>
                                        <td>Value Added Tax</td>
                                        <td>:</td>
                                        <td>17031077618</td>
                                    </tr>
                                    <tr>
                                        <td>Principal activities</td>
                                        <td>:</td>
                                        <td>
                                            Construction, Supply, Import, Furniture, <br />
                                            Agro, Dairy & Fisheries
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Bank Information</td>
                                        <td>:</td>
                                        <td>
                                            Confident Real Estate & Construction <br />
                                            Islami Bank Bangladesh Limited <br />
                                            A/C # 20502100100369109
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                        <div className="section-top py-5">
                            <h1 className="text-4xl md:text-5xl font-bold mb-5">
                                <span className="text-secondary">Contact Information</span>
                            </h1>
                        </div>

                        <div>
                            <h4 className="text-2xl font-bold mb-2">Head Office:</h4>
                            <p className="text-lg mb-5">
                                <FontAwesomeIcon className="mr-5 w-[18px]" icon={faLocationDot} />
                                Amena Garden, 185, West Agargaon Sher-e-Bangla Nagar, Dhaka-1207.
                            </p>
                            <h4 className="text-2xl font-bold mb-2">Corporate Office:</h4>
                            <p className="text-lg mb-2">
                                <FontAwesomeIcon className="mr-5 w-[18px]" icon={faLocationDot} />
                                CB-10, Old Kachukhet Bazar, Dhaka Cantonment, Dhaka-1206.
                            </p>
                            <p className="text-lg mb-2">
                                <FontAwesomeIcon className="mr-5 w-[18px]" icon={faPhone} />
                                +880 1740 420700, +880 1769 003291
                            </p>
                            <p className="text-lg mb-2 flex items-center">
                                <FontAwesomeIcon className="mr-5 w-[18px]" icon={faEnvelope} />
                                <a className="text-secondary underline" href="mailto:confidentgroup700@gmail.com">
                                    {" "}
                                    confidentgroup700@gmail.com
                                </a>{" "}
                                <a className="text-secondary underline ml-3" href="mailto:akram3291@gmail.com">
                                    akram3291@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
