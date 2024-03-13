// Breadcrumb.js
import React from "react";

const Breadcrumb = ({ items, backgroundImage }) => {
  const breadcrumbStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "contain",
    padding: "150px",
    position: "relative",
    backgroundPosition: "center",
    zIndex: 1,
  };

  const breadcrumbBeforeStyle = {
    position: "absolute",
    left: 0,
    top: 0,
    height: "100%",
    width: "100%",
    zIndex: -1,
    backgroundColor: "#353530b0",
    content: "''",
    opacity: 0.7,
    backgroundSize: "contain",
  };

  return (
    <nav className="breadcrumb" aria-label="breadcrumbs">
      <div className="breadcrumb-bg" style={breadcrumbStyle}>
        <div style={breadcrumbBeforeStyle}></div>
        <ul>
          {items.map((item, index) => (
            <li key={index} className="text-center">
              <h1 className="text-white text-6xl font-bold">{item.text}</h1>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Breadcrumb;
