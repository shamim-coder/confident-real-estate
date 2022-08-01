import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const services = [
    {
        id: 1,
        title: "Real Estate Development Services",
        description: "DEWALT® is out there on the jobsite learning what works and what doesn’t so we can make it all work better.",
        picture: "https://i.ibb.co/CttRmZB/service1.jpg",
    },
    {
        id: 2,
        title: "Supplier of Various Construction Materials",
        description: "At DEWALT, we are relentlessly developing and delivering packaging, products, and programs.",
        picture: "https://i.ibb.co/F5GKvDp/service2.jpg",
    },
    {
        id: 9,
        title: "Supplier of Various Development Materials",
        description: "At DEWALT, we are relentlessly developing and delivering packaging, products, and programs.",
        picture: "https://i.ibb.co/2YSHZx1/service9.jpg",
    },
    {
        id: 3,
        title: "Drain, Culverts And Bridges",
        description: "The jobsite is where you’ll find our products.It’s where we test them, where they’re used.",
        picture: "https://i.ibb.co/QpXGsMY/service3.jpg",
    },
    {
        id: 4,
        title: "Supplying all kinds of wood, furniture",
        description: "Supplying all kinds of wood, furniture & provide 	any kind of interior/exterior design & can prepare accordingly.",
        picture: "https://i.ibb.co/dM4j2hS/service5.jpg",
    },
    {
        id: 5,
        title: "Construction Equipment Rental Services",
        description: "We can only consider your ideas and inventions if you submit them via the link below.",
        picture: "https://i.ibb.co/pfMmjNj/service6.jpg",
    },
    {
        id: 6,
        title: "Production of integrated agriculture",
        description: "Production of integrated agriculture form in connection with Dairy & Fisheries has been made extenscvely to the Market.",
        picture: "https://i.ibb.co/j8wfCNS/service4.jpg",
    },
    {
        id: 7,
        title: "Various Building/Major Construction",
        description: "Production of integrated agriculture form in connection with Dairy & Fisheries has been made extenscvely to the Market.",
        picture: "https://i.ibb.co/gSVZxQH/service7.jpg",
    },
    {
        id: 8,
        title: "Road Development and Construction",
        description: "Production of integrated agriculture form in connection with Dairy & Fisheries has been made extenscvely to the Market.",
        picture: "https://i.ibb.co/WDsLZ4M/service8.jpg",
    },
];

const OurServices = () => {
    const location = useLocation();

    const showingLimitedService = location.pathname === "/" ? services.slice(0, 6) : services;

    return (
        <section>
            <div className="container mx-auto py-14 text-center">
                <div className="section-top text-center py-5 lg:w-8/12 mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-5">
                        Our Services <span className="text-primary">& Solution</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-neutral">
                        {location.pathname !== "/"
                            ? "Our company's main focus are towards all kinds of civil engineering aspects any kinds of development work, infrastructures for government organization as well as for any private organization related to nation building. Besides we have newly started Agro, Dairy & Fisheries to enrich the nutrition to our country with that aim we will be working for the people to provide them best service with the best solution."
                            : "Our company's main focus are towards all kinds of civil engineering aspects any kinds of development work, infrastructures for government organization as well as for any private organization related to nation building."}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
                    {showingLimitedService.map((service) => (
                        <div className="text-center shadow-lg" key={service.id}>
                            <img className="h-[250px] object-cover w-full" src={service.picture} alt="" />
                            <h3 className="text-2xl font-semibold mb-5 mt-5">{service.title}</h3>
                        </div>
                    ))}
                </div>

                {location.pathname === "/" && (
                    <Link to="/services" class="btn btn-primary">
                        Explore Service Details
                    </Link>
                )}
            </div>
        </section>
    );
};

export default OurServices;
