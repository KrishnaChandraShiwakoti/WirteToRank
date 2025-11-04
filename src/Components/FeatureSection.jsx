import React from "react";
import featureSection from "../assets/svg/featureSection.svg";
import cityPage from "../assets/img/CityPage.png";
import HeistedDetails from "../assets/img/HeistedDetails.png";
import ClusterList from "../assets/img/ClusterList.png";
import WordPress from "../assets/img/WordPress.png";
import { Element } from "react-scroll";

import customBullets from "../assets/svg/customBullets.svg";

const FeatureSection = () => {
  return (
    <Element name="Features">
      <div className="relative w-full bg-white rounded-2xl">
        <img
          src={featureSection}
          alt=""
          className="absolute h-[100%] w-[100%] "
        />
        <div
          className=" w-[100%] h-[100%] flex flex-col items-center rounded-tr-2xl py-5"
          style={{
            background: `url(${featureSection})`,
          }}>
          <p className="bg-primary-500 bg-clip-text text-transparent">
            Complete SEO kit
          </p>
          <div className="mt-3 mx-auto text-center w-10/12 lg:w-5/12 flex flex-col items-center justify-center">
            <h1 className="text-3xl font-semibold">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-pink-300 via-primary-400 to-pink-300 bg-clip-text text-transparent">
                Dominate SEO
              </span>
            </h1>
            <p className="text-center text-neutral-500 lg:w-8/12">
              Our comprehensive platform combines cutting-edge AI technology
              with proven SEO strategies to deliver unmatched results for local
              businesses and agencies
            </p>
          </div>
          {/* City Page */}
          <div className="flex flex-col lg:flex-row gap-5 w-11/12 lg:w-7/12 mt-5">
            <img src={cityPage} alt="" className="h-90" />
            <div className="flex flex-col justify-center items-Start gap-3 ml-5">
              <h1 className="font-bold text-2xl">City Page Generator</h1>
              <p>
                Create thousands of location-specific landing pages optimized
                for local SEO. Target every suburb, city, and region with
                unique, relevant content
              </p>
              <ul>
                <li className="flex">
                  <img src={customBullets} alt="" />
                  Generate Pages for 10,000+ locations
                </li>
                <li className="flex">
                  <img src={customBullets} alt="" />
                  Service-specific content variations
                </li>
                <li className="flex">
                  <img src={customBullets} alt="" />
                  Custom Keyword integration
                </li>
                <li className="flex">
                  <img src={customBullets} alt="" />
                  Auto-optimized meta tags
                </li>
              </ul>
            </div>
          </div>
          {/* SEO Heist */}
          <div className="flex flex-col-reverse lg:flex-row gap-5 w-11/12 lg:w-7/12 mt-5">
            <div className="flex flex-col justify-center items-Start gap-3 ml-5">
              <h1 className="font-bold text-2xl">SEO Heist</h1>
              <p>
                Intelligently analyze and extract your competitors' sucessful
                SEO strategies. Discover their top-performing content and
                KeyWords
              </p>
              <ul>
                <li className="flex">
                  <img src={customBullets} alt="" />
                  Competitor URL analysis
                </li>
                <li className="flex">
                  <img src={customBullets} alt="" />
                  Content gap identification
                </li>
                <li className="flex">
                  <img src={customBullets} alt="" />
                  Keyword extraction
                </li>
                <li className="flex">
                  <img src={customBullets} alt="" />
                  Success pattern recognition
                </li>
              </ul>
            </div>
            <img src={HeistedDetails} alt="" className="h-90" />
          </div>
          {/* Cluster */}
          <div className="flex gap-5 w-11/12 lg:w-7/12 mt-5 flex-col lg:flex-row">
            <img src={ClusterList} alt="" className="h-90" />
            <div className="flex flex-col justify-center items-Start gap-3 ml-5">
              <h1 className="font-bold text-2xl">Cluster Setup</h1>
              <p>
                Organize and manage your content cluster efficiently. Build
                topical authority with strategic internal linking and content
                hierarchies.
              </p>
              <ul>
                <li className="flex">
                  <img src={customBullets} alt="" />
                  Smart URL clustering
                </li>
                <li className="flex">
                  <img src={customBullets} alt="" />
                  Heist status tracking
                </li>
                <li className="flex">
                  <img src={customBullets} alt="" />
                  Bulk operations support
                </li>
                <li className="flex">
                  <img src={customBullets} alt="" />
                  Performance monitoring
                </li>
              </ul>
            </div>
          </div>
          {/* WordPress Integration */}
          <div className="flex gap-5 w-11/12 lg:w-7/12 mt-5 flex-col-reverse lg:flex-row">
            <div className="flex flex-col justify-center items-Start gap-3 ml-5">
              <h1 className="font-bold text-2xl">WordPress Integration</h1>
              <p>
                Seamlessly push all generated content directly to your WordPress
                site. One-click deployment with full SEO optimization.
              </p>
              <ul>
                <li className="flex">
                  <img src={customBullets} alt="" />
                  Direct WordPress API integration
                </li>
                <li className="flex">
                  <img src={customBullets} alt="" />
                  Bulk page publishing
                </li>
                <li className="flex">
                  <img src={customBullets} alt="" />
                  SEO plugin compatibility
                </li>
                <li className="flex">
                  <img src={customBullets} alt="" />
                  Automatic sitemap updates
                </li>
              </ul>
            </div>
            <img src={WordPress} alt="" className="h-90" />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default FeatureSection;
