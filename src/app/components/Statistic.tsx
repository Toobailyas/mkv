"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faUserGraduate,  faPeopleGroup, faCalendarDays } from "@fortawesome/free-solid-svg-icons";


export default function Statistic () {
    return(
        <div>
            {/* statistics section */}
        <div className="flex gap-11 flex-wrap justify-center m-5 mt-9 lg:mt-10">
          <div className="flex flex-col justify-center items-center gap-2 mx-5">
            <h3 className="text-2xl lg:text-3xl mb-3 font-semibold">Total Students</h3>
            <div data-aos="zoom-out" className="icon">
              <FontAwesomeIcon
                icon={faUserGraduate}
                size="3x" 
                style={{
                  color: "#10712d", 
                  margin: "20px 0", 
                }}
              />
            </div>
               <p className="flex justify-center">4000+</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <h3 className="text-2xl lg:text-3xl mb-3  font-semibold">Starting Year</h3>
            <div data-aos="zoom-out" className="icon">
              <FontAwesomeIcon
                icon={faCalendarDays}
                size="3x" 
                style={{
                  color: "#10712d", 
                  margin: "20px 0",
                }}
              />
            </div>
            <p className="flex justify-center">2022</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <h3 className="text-2xl lg:text-3xl mb-3  font-semibold">Total Faculty</h3>
            <div data-aos="zoom-out" className="icon">
              <FontAwesomeIcon
                icon={faPeopleGroup}
                size="3x" 
                style={{
                  color: "#10712d", 
                }}
              />
            </div>
            <p className="flex justify-center">26</p>
          </div>

        </div>
        </div>

    )
}