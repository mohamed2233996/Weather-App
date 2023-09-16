import React from 'react';
import './MainCard.css'
import MainHeader from "../MainHeader/MainHeader"
import { BsWind,BsDropletHalf,BsBarChartSteps } from "react-icons/bs";
import conditonImgm from "../../img/113.png"

const MainCard = () => {

    return (
        <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-content-center flex-column flex-nowrap align-items-center h-100">
                    <MainHeader />
                    <div className="col-md-8 col-lg-6 col-xl-4">
                        <div className="card">
                            <div className="card-body p-4">
                                <div className="d-flex">
                                    <h6 className="flex-grow-1 cityName">Warsaw</h6>
                                    <h6 className='time'>15:07</h6>
                                </div>
                                <div className="d-flex flex-column text-center mt-5 mb-4">
                                    <h6 className="display-4 mb-0 font-weight-bold temp_c"> 13°C </h6>
                                    <span className="small natural">Stormy</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1">
                                        <div className='item-m'><BsWind /> <span className="ms-1 windfast"> 40 km/h </span></div>
                                        <div className='item-m'><BsDropletHalf /><span className="ms-1 humidity"> 84% </span></div>
                                        <div className='item-m'><BsBarChartSteps /><span className="ms-1 pressure">29.85</span></div>
                                    </div>
                                    <img src={conditonImgm} alt="" className='conditonImg w-25'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainCard;
