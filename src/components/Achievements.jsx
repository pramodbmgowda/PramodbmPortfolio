import AchievementCard from "./achievementCard"; // Component for each card

const achievements = [
  {
    imgSrc: "images/Certificate-2.png",
    title: "Networking Basics",
    tags: ["Cisco", "Networking", "Certificate"],
    className:
      "w-full h-auto rounded-xl filter blur-sm transition duration-500 hover:blur-0",
    achievementLink:
      "https://drive.google.com/file/d/1zgljL_EbMdlkVmIU9Y-oTIifJn6IKWTR/view?usp=drive_link",
  },
  {
    imgSrc: "images/Certificate-1.png",
    title: "Green Skills and Artificial Intelligence",
    tags: ["AI Essentials", "Skills4Future", "Certificate"],
    className:
      "w-full h-auto rounded-xl filter blur-sm transition duration-500 hover:blur-0",
    achievementLink:
      "https://drive.google.com/file/d/1jVxk0nRjDL--s6KuQ0GhBgIMAmDlBqVM/view?usp=drive_link",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <h2 className="mb-8 headline-2 reveal-up">Certifications</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {achievements.map(
            ({ imgSrc, title, tags, achievementLink, className }, key) => (
              <AchievementCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                achievementLink={achievementLink}
                imgClassName={className}
                classes="reveal-up"
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
