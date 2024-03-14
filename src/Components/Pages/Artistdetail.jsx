import React from "react";
import image from "../../Images/artist1.png";

const Artistdetail = () => {
  return (
    <div>
      <div className="bg-slate-800">
        <div className="container mx-auto py-16 flex flex-col md:flex-row items-center px-3">
          <div>
            <img src={image} className="rounded-full md:mr-10 mr-0" alt="" />
          </div>
          <div className="text-white mt-10 md:mt-0">
            <h1 className="text-3xl font-bold">Kirtidan Gadhvi</h1>
            <p>
              <strong>Occupation: </strong> Actor
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-12 px-3">
        <p className="text-3xl mb-3">
          <b>About</b>
        </p>
        <p>
          Known as 'The God of Folk Singing' and 'The Dandiya King', Kirtidan
          Gadhvi is the captivating voice behind the enthralling Coke Studio
          song Laadki. He is an eminent name in the world of folk singing and
          has become an icon for modern people of all age-groups. A four-time
          Global Mirchi Music Award winner, Kirtidan is specialized in all the
          facets of Dayro and Indian folk singing. He has been also awarded as
          the Best Singer by the Gujarat government.
        </p>
      </div>
    </div>
  );
};

export default Artistdetail;
