import SkillCard from './SkillCard';

const skillItem = [
  {
    imgSrc: '/images/java.svg',
    label: 'Java',
    desc: 'Programming language'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'HTML5 / CSS3',
    desc: 'Responsive UI development'
  },
  {
  imgSrc: '/images/datastruct.svg',
  label: 'Data Structures',
  desc: 'Optimized Problem-Solving Logic'
},
  {
    imgSrc: '/images/angular.svg',
    label: 'Angular',
    desc: 'Frontend framework (Basics)'
  },
  {
    imgSrc: '/images/spring.svg',
    label: 'Spring Boot',
    desc: 'Backend & REST APIs fundamentals'
  },
  {
    imgSrc: '/images/mysql.svg',
    label: 'MySQL',
    desc: 'Relational Database (Basic)'
  },
  {
    imgSrc: '/images/aws.svg',
    label: 'AWS S3',
    desc: 'Cloud Storage Basics'
  },
  {
    imgSrc: '/images/github.svg',
    label: 'Git / GitHub',
    desc: 'Version Control & Collaboration'
  },
  {
    imgSrc: '/images/postman.svg',
    label: 'Postman',
    desc: 'API Testing & Debugging'
  },
  {
    imgSrc: '/images/vscode.svg',
    label: 'VS Code',
    desc: 'Robust IDE'
  },
  {
    imgSrc: '/images/intellij.svg',
    label: 'IntelliJ IDEA',
    desc: 'Smart Java IDE'
  },
  {
    imgSrc: '/images/network.svg',
    label: 'Networking',
    desc: 'Basic IT & troubleshooting'
  },
  {
    imgSrc: '/images/tableau.svg',
    label: 'Tableau',
    desc: 'Data viz (Basic)'
  }
];

const Skill = () => {
    return (
        <section className="section">
            <div className="container">
                <h2 className="headline-2 reveal-up">
                    My Skill Stack
                </h2>
                <p className='text-zinc-400 mt-2 mb-8 max-w-[50ch] reveal-up'>
                    My development toolkit.
                </p>
                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {skillItem.map(({ imgSrc, label, desc }, key) => (
                        <SkillCard
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            classes="reveal-up"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;