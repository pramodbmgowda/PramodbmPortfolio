import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/ec.png",
    title: "ShopSphare - Ecommerce Platform",
    tags: ["Java", "Angular", "Spring Boot"],
    projectLink: "https://github.com/pramodbmgowda/Shopsphare-EcommerceWeb.git",
  },
  {
    imgSrc: "/images/ecomm.png",
    title: "ShopMate - Product Recommendation ChatBot  ",
    tags: ["Python", "Machine Learning"],
    projectLink:
      "https://github.com/pramodbmgowda/Flipkart_Recommendation_Chatbot.git",
  },
  {
    imgSrc: "/images/tableau.svg",
    title: "Sales & Performance Dashboard",
    tags: ["Tableau", "Data Visualization"],
    projectLink:
      "http://public.tableau.com/app/profile/pramod.bm/viz/Book1_17498925794750/SalesDashboard",
  },
  {
    imgSrc: "public/images/pest.svg",
    title: "PestScan – (In Progress)",
    tags: ["IoT", "Machine Learning"],
    projectLink: "#",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="mb-8 headline-2 reveal-up">My projects</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
