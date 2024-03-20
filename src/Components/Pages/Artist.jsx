import React, { useEffect } from "react";
import { artistdata } from "../API";
import { Link } from "react-router-dom";

const Artist = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container mx-auto my-9">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
        {artistdata.map((val, index) => {
          return (
            <div className="border border-themecolor1 rounded-md">
              <Link className="relative md:mx-2" key={index} to={val.link}>
                <img
                  src={val.img}
                  alt="Artist"
                  className="image w-full  rounded-full p-10"
                />
                <h1 className="text-center font-semibold">{val.tittle}</h1>
                <p className="text-center text-gray-500">{val.des}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Artist;
