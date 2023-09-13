import React from "react";

export default function TechLogos({ techArray }: { techArray: JSX.Element[] }) {
  return techArray.map((logo, index) => {
    return <React.Fragment key={index}>{logo}</React.Fragment>;
  });
}
