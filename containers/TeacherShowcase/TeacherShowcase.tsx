import Card from "@/components/TeacherCard/Card";
import React from "react";
import Priytam from "../../assets/Priytam.jpg";
import Monica from "../../assets/MonicaBhatia.jpg";

const TeacherShowcase = () => {
  const teachers = [
    {
      name: "Monica Choudhary",
      description:
        "Monica is a well-versed teacher, having taught school for 13 years. She has completed her Visharad in Vocal, and now teaches students and performs at events and programmes. ",
      photo: Monica,
    },
    {
      name: "Priytam Pratihar",
      description:
        "Priytam posses academic and teaching expertise, serving as a college teacher. He also possesses a versatile musical skillset, proficient in harmonium, keyboard, guitar, tabla, cajón, ukulele, and various other instruments. He has also completed his Aalankar.",
      photo: Priytam,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      {teachers.map((teacher) => {
        return <Card {...teacher} />;
      })}
    </div>
  );
};

export default TeacherShowcase;
