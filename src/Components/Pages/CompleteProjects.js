import React from "react";
import project from "../../Assets/project1.jpeg";

const CompleteProjects = () => {
    const projects = [
        {
            id: 1,
            name: "Modern Electric & Electronics Laboratory - Phase-2.",
            location: "Dhaka Cantonment",
        },
        {
            id: 2,
            name: "Commandant Bangaloo at Patenga Nawal Academy.",
            location: "Patenga, Chittagong",
        },
        {
            id: 3,
            name: "Nayor Goli Bridge",
            location: "Chittagong",
        },
        {
            id: 4,
            name: "Oxygen Mor Culvert & Drain (300m)",
            location: "Chittagong",
        },
        {
            id: 5,
            name: "Halishohor Retaining Wall & Drain (1100m)",
            location: "Chittagong",
        },
        {
            id: 6,
            name: "Moduna Ghat Retaining Wall (350m)",
            location: "Chittagong",
        },
        {
            id: 7,
            name: "Panchlaish & Probontok Drain & Culvert",
            location: "Chittagong",
        },
        {
            id: 8,
            name: "Road at Oxygen mor, Mayor Goli",
            location: "Chittagong",
        },
        {
            id: 9,
            name: "Road at Padda Brigade 99 Composite Bde",
            location: "Jajira Cantonment",
        },
    ];

    return (
        <div>
            <div class="container mx-auto py-14 hero">
                <div class="flex flex-col lg:flex-row gap-10 items-center">
                    <div className="w-full">
                        <h1 class="text-6xl font-bold mb-5">
                            Some Of Our <span className="text-primary">Finished Projects</span> That Will Amaze You
                        </h1>
                        <p class="py-6 text-lg leading-relaxed">
                            By the grace of Allah, so far we have been able to complete many projects with full appreciation. Currently we have several projects underway. We always believe in quality, not quantity. Below is a list of some of our
                            notable completed projects.
                        </p>
                    </div>
                    <img src={project} class="w-full shadow-2xl" alt="" />
                </div>
            </div>
            <div className="container mx-auto">
                <div class="overflow-x-auto mb-10">
                    <table class="table w-full ">
                        <thead>
                            <tr>
                                <th className="text-center text-base">SL</th>
                                <th className="text-base">Project name</th>
                                <th className="text-base">Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((project, index) => (
                                <tr>
                                    <th className="text-center border">{index + 1}</th>
                                    <td className="border">{project.name}</td>
                                    <td className="border">{project.location}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CompleteProjects;
