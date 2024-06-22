import React from "react";
import {Card, CardHeader, CardBody} from "@nextui-org/react";
import Lottie from 'react-lottie';
import HeartRate from '../assets/HeartRate.json';
import Ambulance from '../assets/Ambulance.json';
import Machine from '../assets/Machine.json';

const Content = () => {

    const heartRateAnimationOptions = {
        loop: true, 
        autoplay: true, 
        animationData: HeartRate, 
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const AmbulanceAnimationOptions = {
        loop: true, 
        autoplay: true, 
        animationData: Ambulance, 
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const machineAnimationOptions = {
        loop: true, 
        autoplay: true, 
        animationData: Machine, 
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (  
    
        <div id="features" className="flex flex-col justify-center md:flex-row bg-green-200 font-inter">
            <div id="card-1" className="m-10">
            <Card className="py-4">
                <CardHeader className=" pb-0 pt-2 px-4 flex-col items-start">
                    <h4 className="font-bold text-large">Bio-Marker Tracking</h4>
                    <small className="text-default-500">Get real-time data about your heart and body</small>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                <Lottie options={heartRateAnimationOptions} height={200} width={230} />
                </CardBody>
            </Card>
            </div>
            <div id="card-2" className="m-10">
            <Card className="py-4">
                <CardHeader className=" pb-0 pt-2 px-4 flex-col items-start">
                    <h4 className="font-bold text-large">Modern Architecture</h4>
                    <small className="text-default-500">Levarage the power of AI & ML and IoT to monitor your health</small>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                <Lottie options={machineAnimationOptions} height={200} width={230} />
                </CardBody>
            </Card>
            </div>
            <div className="m-10">
            <Card className="py-4" >
                <CardHeader className=" pb-0 pt-2 px-4 flex-col items-start">
                    <h4 className="font-bold text-large">24/7 Monitoring</h4>
                    <small className="text-default-500">Emergency Response in case of Anomalies</small>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                <Lottie options={AmbulanceAnimationOptions} height={200} width={230} />
                </CardBody>
            </Card>   
            </div>

        </div>
        
    );
}

export default Content