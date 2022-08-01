import React from "react";
import akramTrading from "../../Assets/akram-trading.jpg";
import mahiTimber from "../../Assets/mahi-timber.jpg";
import confidetnAgro from "../../Assets/confident-agro.jpg";

const SisterConcern = () => {
    return (
        <section class="py-20">
            <div class="hero mb-10">
                <div class="hero-content flex-col lg:flex-row-reverse gap-10">
                    <img src={akramTrading} class="max-w-lg w-full rounded-lg shadow-2xl" alt="" />
                    <div>
                        <h1 class="text-5xl font-bold">Akram Trading Corporation</h1>
                        <p class="py-6">According to the needs of our company or for the need of any buyer we import any types of Product or Machinery in a limited scale.</p>
                    </div>
                </div>
            </div>

            <div class="hero mb-10">
                <div class="hero-content flex-col lg:flex-row-reverse gap-10">
                    <div>
                        <h1 class="text-5xl font-bold">Mahi Timber</h1>
                        <p class="py-6">
                            We provide every types of wood and wood furniture to the distributors. We also manufacturer all types of furniture and can provide any kinds of interior and exterior design as per clients desire and can prepare
                            accordingly.
                        </p>
                    </div>
                    <img src={mahiTimber} class="max-w-lg w-full rounded-lg shadow-2xl" alt="" />
                </div>
            </div>

            <div class="hero">
                <div class="hero-content flex-col lg:flex-row-reverse gap-10">
                    <img src={confidetnAgro} class="max-w-lg w-full rounded-lg shadow-2xl" alt="" />
                    <div>
                        <h1 class="text-5xl font-bold">Confident Agro, Dairy & Fisheries</h1>
                        <p class="py-6">
                            With the new sister concern we have started our Agriculture project Dairy & Fisheries in Agro in Bangladesh. One located at shibchar in Madaripur Dist, Other one located at Panchbibi in Jypurhat in North Bengal.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SisterConcern;
