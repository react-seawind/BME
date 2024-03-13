import React from "react";
import bgimage from "../../Images/abtimage.jpg";
import Breadcrumb from "../Breadcumb/Breadcumb";

const About = () => {
  const breadcrumbItems = [{ text: "About" }];
  const backgroundImage = bgimage;
  return (
    <div>
      <Breadcrumb items={breadcrumbItems} backgroundImage={backgroundImage} />
      <div className="container mx-auto lg:py-10">
        <div className="p-3">
          <p className="pb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ut
            placeat odio explicabo in, sed rerum assumenda nulla mollitia quis!
          </p>

          <p className="pb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit iste officia cum ad quaerat accusantium beatae
            accusamus totam! Nulla consequuntur reprehenderit, deserunt hic
            repudiandae a quis quisquam possimus aliquid dolores?
          </p>

          <p className="pb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            facilis sapiente ut quos dolor placeat eaque perspiciatis ipsum
            ullam autem!
          </p>

          <p className="pb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            ea libero nesciunt repellendus sed reiciendis autem, fugit quae
            harum, reprehenderit veniam explicabo perferendis excepturi tempore
            exercitationem voluptatum eos deleniti impedit dolorum! Quidem
            assumenda, quis non illum quod aliquid asperiores eius?
          </p>

          <p className="pb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            magnam?
          </p>

          <p className="pb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            quibusdam pariatur vero nulla laborum! Esse ea, ipsa odit,
            doloremque laudantium voluptatibus nisi, accusantium ipsum velit
            error aperiam consequatur id alias!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
