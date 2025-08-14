import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Bug Bounty Hunter',
      company: 'BugCrowd & HackerOne',
      location: 'Remote',
      period: '2022 - Present',
      description: 'Engaged in bug bounty programs for various organizations, identifying and reporting security vulnerabilities. Focused on web application security, API testing, and vulnerability research.',
      achievements: [
        'Identified critical vulnerabilities in major web applications',
        'Collaborated with development teams to remediate security issues',
        'Contributed to open-source security tools and frameworks',
      ],
    },
    {
      title: 'AI Virtual Internship',
      company: 'Microsoft',
      location: 'Remote',
      period: 'April 2025- May 2025',
      description: 'Developed Deep Learning based Heart Attack Risk Prediction Model using TensorFlow and Keras. ',
      achievements: [
        'Implemented data preprocessing and augmentation techniques',
        'Achieved 95% accuracy on validation dataset',
      ],
    },
  ];

  return (
    <section id="experience" className="section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey through various roles and challenges in web development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="timeline-item group"
                style={{
                  animationDelay: `${index * 200}ms`,
                }}
              >
                <div className="glass p-6 rounded-xl ml-6 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-foreground font-semibold">
                        <ExternalLink className="w-4 h-4" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-primary">Key Achievements:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;