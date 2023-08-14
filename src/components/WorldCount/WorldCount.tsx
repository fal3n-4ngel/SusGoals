"use client";
import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { error } from "console";
import firebase from "firebase/app";
import CountUp from 'react-countup';

import {
  getFirestore,
  collection,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCl0ax0R398LtPDvO1up01uDX0X3vpqPa8",
  authDomain: "susgoals.firebaseapp.com",
  projectId: "susgoals",
  storageBucket: "susgoals.appspot.com",
  messagingSenderId: "133809952494",
  appId: "1:133809952494:web:e5110d8592e752c3a245ff",
  measurementId: "G-EY5GV6ZL1X",
};

const app = initializeApp(firebaseConfig);


const sustainableGoals = [
  "Turn off lights and unplug electronics when not in use",
  "Take shorter showers to conserve water",
  "Use reusable water bottles and coffee mugs",
  "Bring reusable bags for shopping",
  "Opt for public transportation, biking, or walking instead of driving",
  "Plant a tree or participate in a local tree-planting initiative",
  "Sort and recycle household waste properly",
  "Avoid single-use plastic items like straws, utensils, and food containers",
  "Use energy-efficient light bulbs",
  "Repair items instead of replacing them",
  "Reduce food waste by planning meals and using leftovers",
  "Choose organic, locally grown produce",
  "Conserve energy by adjusting thermostat settings and using natural lighting",
  "Support local farmers and markets by buying locally produced goods",
  "Reduce paper usage by going digital for bills, receipts, and notes",
  "Start a compost bin for organic waste",
  "Volunteer for a community clean-up event",
  "Turn off the tap while brushing teeth or doing dishes",
  "Support sustainable and ethical brands when shopping",
  "Reduce meat consumption and try a vegetarian or vegan meal",
  "Use eco-friendly cleaning products",
  "Encourage friends and family to adopt sustainable habits",
  "Educate yourself about environmental issues and share knowledge",
  "Donate or recycle old electronics and batteries responsibly",
  "Conserve water by fixing leaky faucets and pipes",
  "Choose reusable menstrual products or eco-friendly alternatives",
  "Opt for natural and homemade beauty and cleaning products",
  "Practice mindful consumption and avoid unnecessary purchases",
  "Support renewable energy initiatives and providers",
  "Join a community garden or start growing your own vegetables",
  "Reduce shower time and install water-efficient showerheads",
  "Choose products with minimal packaging or opt for package-free alternatives",
  "Practice responsible fishing and support sustainable seafood choices",
  "Avoid idling your vehicle and carpool when possible",
  "Conserve paper by printing double-sided and using scrap paper for notes",
  "Reduce plastic waste by using refillable toiletry containers",
  "Support initiatives to protect and restore natural habitats",
  "Host a clothing swap with friends or donate unwanted clothing",
  "Avoid excessive use of air conditioning and heating",
  "Participate in local sustainability workshops or events",
  "Install a rain barrel to collect and reuse rainwater",
  "Choose energy-efficient appliances and electronics",
  "Use rechargeable batteries instead of disposable ones",
  "Reduce reliance on disposable products by using cloth napkins and towels",
  "Explore renewable energy options for your home or community",
  "Conserve energy by opening windows for natural ventilation",
  "Avoid using herbicides and pesticides in your garden",
  "Share sustainable practices and tips on social media",
  "Practice responsible pet ownership, including proper waste disposal",
  "Support sustainable tourism practices and eco-friendly accommodations",
  "Encourage recycling in your workplace or school",
  "Promote paperless billing and documentation",
  "Participate in a beach or park clean-up",
  "Choose eco-friendly and non-toxic household cleaning products",
  "Reduce plastic waste by using a reusable razor or menstrual cup",
  "Create a meal plan to reduce food waste and make efficient grocery shopping",
  "Support renewable energy policies and advocate for sustainable practices",
  "Choose sustainable and ethically sourced clothing and accessories",
  "Avoid disposable party supplies and opt for reusable alternatives",
  "Use natural lighting and adjust blinds to reduce the need for artificial lighting",
  "Encourage local businesses to adopt sustainable practices",
  "Properly dispose of hazardous materials like batteries and electronics",
  "Opt for a digital subscription instead of printed newspapers and magazines",
  "Start a community recycling program or initiate recycling at work",
  "Support initiatives to protect endangered species and habitats",
  "Practice water-saving techniques in your garden, like mulching and drip irrigation",
  "Reduce food packaging waste by buying in bulk or using refillable containers",
  "Avoid products with microbeads that harm marine life",
  "Participate in a clothing repair workshop or learn basic sewing skills",
  "Choose eco-friendly alternatives for household products, such as bamboo toothbrushes",
  "Invest in energy-efficient windows and insulation for your home",
  "Join a local environmental organization or volunteer for environmental causes",
  "Reduce your consumption of fast fashion and opt for secondhand clothing",
  "Support renewable energy research and development",
  "Encourage responsible fishing practices and support sustainable seafood certification",
  "Minimize food delivery waste by requesting no plastic cutlery or packaging",
  "Switch to electronic documents for bills, statements, and receipts",
  "Avoid using disposable wipes and opt for reusable cloth wipes",
  "Practice sustainable farming techniques like crop rotation and natural pest control",
  "Reuse glass jars and containers for storage instead of purchasing new ones",
  "Donate unused or unwanted items to local charities or organizations",
  "Opt for eco-friendly and sustainable materials in home renovations",
  "Participate in local initiatives to clean up waterways and protect marine life",
  "Choose natural and biodegradable materials for personal care products",
  "Conserve water in your garden by using a drip irrigation system",
  "Support local initiatives for renewable energy generation",
  "Avoid printing unnecessary documents and emails",
  "Participate in a community-led waste reduction campaign",
  "Opt for energy-saving modes and settings on electronic devices",
  "Choose sustainably sourced wood products or alternatives to wood",
  "Support organizations working towards reforestation and forest conservation",
  "Promote sustainable farming practices and support local farmers",
  "Reduce light pollution by turning off unnecessary outdoor lighting",
  "Opt for sustainable and eco-friendly options for home cleaning",
  "Reduce packaging waste by buying in bulk or choosing products with minimal packaging",
  "Practice sustainable fishing techniques and follow catch-and-release guidelines",
  "Choose eco-friendly office supplies like recycled paper and refillable pens",
  "Educate children and young people about the importance of sustainability",
  "Support initiatives for renewable energy infrastructure in your community",
  "Opt for digital invitations and RSVPs instead of paper",
  "Participate in energy-saving challenges at home or work",
  "Reduce food waste by composting organic matter",
  "Choose eco-friendly and sustainable alternatives for personal care products",
  "Promote responsible water use by fixing leaks and using water-saving devices",
  "Advocate for and support public transportation improvements in your area",
  "Avoid using disposable plates and utensils for parties and gatherings",
];

const Index = Math.floor(Math.random() * sustainableGoals.length);
const String = sustainableGoals[Index];

let val1 = 0;

let done = true;
let checkVisited=()=>{

};

export const db = getFirestore(app);
// Initialize Firebase

function WorldCount() {
  if (typeof window !== 'undefined') {
    
  
  checkVisited = () => {
    const currentDate = new Date().toLocaleDateString();
    const lastVisited = localStorage.getItem("lastVisited");

    
    if (lastVisited === currentDate) {
      done = true;
    } else {
      done=false;
    }
  };
}

  const [countValue, setCount] = useState<number>(0);

  
  const getValue = async () => {
    const numberDoc = collection(db, "count");
    const docSnapshot = await getDocs(numberDoc);
    const val = docSnapshot.docs[0].data().val;

    setTimeout(() => {
      val1 = val;
      setCount(val);
      
    }, 100);
  };

  const increment = async () => {
    localStorage.setItem("lastVisited", new Date().toLocaleDateString());
    const numberDoc = doc(db, "count", "count");
    done = true;
    await updateDoc(numberDoc, {
      val: countValue + 1,
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      getValue();
    };
    checkVisited();
    fetchData();

    const interval = setInterval(fetchData, 2000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div>
      <div id="counter" className="w-full">
        <div className="flex md:flex-row flex-col w-[95%]  m-auto justify-between">
          <div className="min-w-[50%] h-[50%] m-auto md:border-r-2 border-black ">
            <div className="text-6xl text-center font-light my-10">
              ToDaYs TaSk
            </div>
            <div className="w-[90%] mt-10  text-5xl font-light text-center">
              &ldquo;{String}&rdquo;
            </div>
            <div className="flex justify-center mt-10">
              {!done && (
                <button 
                  title="."
                  className="group bg-black text-white rounded-full w-28 h-28 flex flex-col items-center justify-center animate-bounce"
                  onClick={increment}
                >
                  <svg
                    className="w-16 h-16 text-green-100 hover:text-green-400 group-hover:scale-150 transition-all shadow-green-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  
                </button>
              )}
            </div>
          </div>
          <div className=" w-[50%]  items-center mx-auto ">
            <div className="text-[150px] md:text-center text-ellipsis  mx-auto md:p-0 p-3 mt-10">
            <CountUp start={0} end={countValue} duration={2} separator="," />
              
            </div>
            {!done && (
              <div className=" md:text-center text-ellipsis text-3xl md:text-4xl  mx-auto font-light  md:p-5">
                #sustainablegoals! reached. Wanna do the {" "}
                <span className="font-light">{countValue + 1}</span> th
                 <span className="text-red-500 font-light"> Sus</span> goal?
              </div>
            )}
            {done && (
              <div className=" md:text-center text-ellipsis text-3xl md:text-4xl  mx-auto font-light  md:p-5">
                #sustainablegoals! reached. Thanks for bein <span className="text-red-500 font-light"> Sus</span> with us.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorldCount;
