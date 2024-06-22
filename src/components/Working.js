import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import IOT from "./IoTicon";
import MLICon from "./MLICon";
import Dashboard from "./DashboardIcon";

const Working = () => {

    return ( 
        <div id="Working" className="working font-inter bg-amber-100">
            
            <h1 className="pl-10 pt-5 text-4xl font-bold leading-none tracking-tight text-gray-900  dark:text-white">How it Works</h1>

            <div className="p-10">
            <Accordion>
                <AccordionItem key="IOT" aria-label="IOT" indicator={<IOT />} title="Bio-Marker Collection">
                Our advanced IoT devices are equipped with sophisticated sensors that precisely measure various bio-markers, such as heart rate, oxygen saturation, blood pressure, sleep patterns, and more (depending on the specific device).
                </AccordionItem>
                <AccordionItem key="ML" aria-label="ML" indicator={<MLICon />} title="Real-Time Processing and Analysis">
                Once received, the data undergoes processing and analysis in the cloud. This allows us to extract meaningful insights and identify any potential health trends.
                    (P.S. Your Data is Safe with Us)
                </AccordionItem>
                <AccordionItem key="Dashboard" aria-label="Dashboard" indicator={<Dashboard />} title="User-Friendly App & Web Interface">
                The processed data is then presented in a clear and concise format on our user-friendly mobile app and web interface. You can easily access your bio-marker data, view historical trends, and gain valuable insights into your overall health and well-being.
                </AccordionItem>
            </Accordion>
            </div>
        </div>
     );
}

export default Working;