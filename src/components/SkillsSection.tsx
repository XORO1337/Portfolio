import {
  Code2,
  Palette,
  Database,
  Globe,
  Smartphone,
  GitBranch,
  Server,
  Figma,
  Layers,
  Cloud,
  Shield,
  Cpu,
  MonitorSpeaker,
  Workflow,
  Computer,
  Braces
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        {
          icon: <Layers className="w-6 h-6" />,
          name: 'React/Next.js',
          description: 'Modern frontend frameworks',
        },
        {
          icon: <Code2 className="w-6 h-6" />,
          name: 'TypeScript',
          description: 'Type-safe development',
        },
        {
          icon: <Palette className="w-6 h-6" />,
          name: 'Tailwind CSS',
          description: 'Utility-first styling',
        },
      ],
    },
    {
      title: 'Backend',
      skills: [
        {
          icon: <Server className="w-6 h-6" />,
          name: 'Node.js',
          description: 'Server-side JavaScript',
        },
        {
          icon: <Globe className="w-6 h-6" />,
          name: 'RESTful APIs',
          description: 'Web service architecture',
        },
        {
          icon: <Workflow className="w-6 h-6" />,
          name: 'Express JS',
          description: 'API framework for Node.js',
        },
        {
          icon: <Shield className="w-6 h-6" />,
          name: 'Authentication',
          description: 'Security & user management',
        },
      ],
    },
    {
      title: 'Database',
      skills: [
        {
          icon: <Database className="w-6 h-6" />,
          name: 'MySQL',
          description: 'Relational database',
        },
        {
          icon: <Database className="w-6 h-6" />,
          name: 'MongoDB',
          description: 'NoSQL database',
        },
        {
          icon: <Database className="w-6 h-6" />,
          name: 'Supabase',
          description: 'Backend as a Service',
        },
      ],
    },
    {
      title: 'DevOps & Tools',
      skills: [
        {
          icon: <GitBranch className="w-6 h-6" />,
          name: 'Git',
          description: 'Version control',
        },
        {
          icon: <Cpu className="w-6 h-6" />,
          name: 'Docker',
          description: 'Containerization',
        },
        {
          icon: <MonitorSpeaker className="w-6 h-6" />,
          name: 'CI/CD',
          description: 'Automated deployment',
        },
        {
          icon: <Computer className="w-6 h-6" />,
          name: 'Virtual Machines',
          description: 'VMs and containers',
        },
        {
          icon: <Braces className='w-6 h-6'/>,
          name: 'PostMan',
          description: 'API Testing Tool',
        }
      ],
    },
    {
      title: 'Design',
      skills: [
        {
          icon: <Figma className="w-6 h-6" />,
          name: 'Figma',
          description: 'Design & prototyping',
        },

      ],
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass p-6 rounded-xl"
              style={{
                animationDelay: `${categoryIndex * 150}ms`,
              }}
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="skill-card group cursor-pointer p-4 rounded-lg"
                    style={{
                      animationDelay: `${categoryIndex * 150 + skillIndex * 100}ms`,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-primary group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        {skill.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{skill.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;