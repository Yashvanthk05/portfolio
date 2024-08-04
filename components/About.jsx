import { education, work } from "@/Schemas";
import { Brain } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <section id="about">
        <div>
            <span style={{fontSize:28,fontWeight:'bolder',fontStyle:'italic'}}>Education</span>
      <div className="cards">
        {education.map(detail=>(<div className="card shadow-lg">
            <span style={{fontWeight:'bold'}}>{detail.year}</span>
          <span className="font-semibold">{detail.name},</span>
          <span style={{fontStyle:'italic'}} >{detail.institution}</span>
          <span style={{fontStyle:'italic'}} >{detail.location}</span>
          <span >Grade: {detail.grade}</span>
        </div>))}
        </div>        
      </div>
      <div>
        <span style={{fontSize:28,fontWeight:'bolder',fontStyle:'italic'}}>Work Experience</span>
        <div className="cards">
        {work.map(detail=>(<div className="card shadow-lg">
            <span style={{fontWeight:'bolder'}}>{detail.year}</span>
            <span style={{fontWeight:'bold'}}>{detail.position}</span>
          <span className="font-semibold">{detail.name},</span>
          <span style={{fontStyle:'italic',}} >{detail.institution}</span>
          <span style={{fontStyle:'italic'}} >{detail.location}</span>
        </div>))}
        </div>
      </div>
    </section>
  );
};

export default About;
