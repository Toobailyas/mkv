"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScaleBalanced, faShieldHeart, faHeartCirclePlus, faShieldHalved, faHeart, faHandHoldingHeart, faHourglassHalf, faHandsHelping, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";


const Values = () => {
  return (
    <div><div className="mt-7 flex justify-center items-center flex-col" >
    <h4 className="mb-4 text-4xl sm:text-2xl lg:text-4xl font-bold ">
      Our <span className="text-green-900" >VALUES</span>
    </h4>
    <ul className="flex gap-10 lg:gap-30 flex-wrap justify-center m-5 lg:mx-20 lg:mt-10">
      <li>
        <div data-aos="zoom-out" className="icons">
          <FontAwesomeIcon
            icon={faShieldHeart}
            className="custom-icon"
            style={{
              color: "#10712d",
            }}
            size="3x" 
          />
        </div>
        Sincerity: اخلاص
      </li>
      <li>
        <div data-aos="zoom-out" className="icons">
          <FontAwesomeIcon
            icon={faHeartCirclePlus}
            size="3x" 
            style={{
              color: "#10712d", 
            }}
          />
        </div>
        Compassion: رحمۃ
      </li>
      <li>
        <div data-aos="zoom-out" className="icons">
          <FontAwesomeIcon
            icon={faShieldHalved}
            size="3x" 
            style={{
              color: "#10712d", 
            }}
          />
        </div>
        Integrity: امانت
      </li>
      <li>
        <div data-aos="zoom-out" className="icons">
          <FontAwesomeIcon
            icon={faHeart}
            size="3x"
            style={{
              color: "#10712d", 
              margin: "20px 0", 
            }}
          />
        </div>
        Selflessness: ایثار
      </li>
      <li>
        <div data-aos="zoom-out" className="icons">
          <FontAwesomeIcon
            icon={faHandHoldingHeart}
            size="3x" 
            style={{
              color: "#10712d", 
              margin: "20px 0", 
            }}
          />
        </div>
        Humility: تواضع
      </li>
      <li>
        <div data-aos="zoom-out" className="icons">
          <FontAwesomeIcon
            icon={faHourglassHalf}
            size="3x"
            style={{
              color: "#10712d", 
              margin: "20px 0", 
            }}
          />
        </div>{" "}
        Patience: صبر
      </li>
      <li>
        <div data-aos="zoom-out" className="icons">
          <FontAwesomeIcon
            icon={faHandsHelping}
            size="3x" 
            style={{
              color: "#10712d", 
              margin: "20px 0",
            }}
          />
        </div>
        Gratitude: شکر
      </li>
      <li> 
        <div data-aos="zoom-out" className="icons">
          <FontAwesomeIcon
            icon={faPeopleGroup}
            size="3x" 
            style={{
              color: "#10712d", 
              margin: "20px 0", 
            }}
          />
        </div>
        Unity: اتحاد
      </li>
      <li>
        <div data-aos="zoom-out" className="icons">
          <FontAwesomeIcon
            icon={faScaleBalanced}
            className="custom-icon"
            style={{
              color: "#10712d",
            }}
            size="3x"
          />
        </div>{" "}
        Justice: عدل
      </li>
    </ul>
  </div>
</div>
  )
}

export default Values