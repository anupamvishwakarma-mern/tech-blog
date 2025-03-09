import react from "../../assets/Reactjs.webp";
import native from "../../assets/native.png";
import html from "../../assets/html.webp";
import css from "../../assets/css.svg";
import database from "../../assets/mongodb.webp";
import node from "../../assets/node-logo.png";
import javascript from "../../assets/js.webp";
import bootstrap from "../../assets/bootstrap.png";
import vite from "../../assets/Vitejs.png";
import next from "../../assets/next-js.png";
import tailwind from "../../assets/tailwind.png";
import redux from "../../assets/redux.svg";
import SkillCard from "../cards/SkillCard";

export const BlogCardContainer = () => {
  return (
    <section className="blogs flex-column gap-5">
      <div className="container">
        <div className="title">
          <h2>Skills</h2>
          <p>
            Most popular programming languages, frameworks, libraries, and tools.
          </p>
        </div>
        <div className="cards">
          <SkillCard title="React JS" image={react} />
          <SkillCard title="Node JS" image={node} />
          <SkillCard title="React Redux" image={redux} />
          <SkillCard title="Java Script" image={javascript} />
          <SkillCard title="HTML" image={html} />
          <SkillCard title="CSS" image={css} />
          <SkillCard title="Database" image={database} />
          <SkillCard title="Bootstrap" image={bootstrap} />
        </div>
      </div>
      <div className="container">
        <div className="title">
          <h2>Featured Skills</h2>
          <p>
            Explore the most popular technologies and tools in the industry today.
          </p>
        </div>
        <div className="cards">
          <SkillCard title="Next JS" image={next} />
          <SkillCard title="Vite JS" image={vite} />
          <SkillCard title="Tailwind CSS" image={tailwind} />
          <SkillCard title="React Native" image={native} />
        </div>
      </div>
    </section>
  );
};
