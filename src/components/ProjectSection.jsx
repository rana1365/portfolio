import { ArrowRight, ExternalLink, Github } from "lucide-react";
const projects = [
  {
    id: 1,
    title: "Tasker web application",
    description: `Effortlessly organize, prioritize, and conquer tasks with Tasker - your personal
       productivity ally for seamless goal achievement and stress-free task management.`,
    image: "/projects/tasker.png",
    tags: ["React", "TailwindCSS", "HTML"],
    demoUrl: "https://tasker-beta-blush.vercel.app/",
    githubUrl: "https://github.com/rana1365/tasker",
  },
  {
    id: 2,
    title: "Cine-Rental application",
    description: `Exploring new movies and dramas and user can rent of these. It will open new concept of online business.`,
    image: "/projects/cine-rental.png",
    tags: ["React", "TailwindCSS", "HTML"],
    demoUrl: "https://cine-rental-beryl.vercel.app/",
    githubUrl: "https://github.com/rana1365/cine-rental",
  },
  {
    id: 3,
    title: "FAQ application",
    description: `Find answers to the most common questions of an application.
    It helps to remove pressure of the feedback team and improves the further development. `,
    image: "/projects/faq-apps.png",
    tags: ["React", "TailwindCSS", "HTML"],
    demoUrl: "https://faq-apps.vercel.app/",
    githubUrl: "https://github.com/rana1365/faq-apps",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 realative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was cautiously
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-50 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagKey) => (
                    <span
                      key={tagKey}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/rana1365"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
