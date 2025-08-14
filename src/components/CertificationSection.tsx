import { Award, Calendar, ExternalLink, Shield } from 'lucide-react';

const CertificationSection = () => {
  const certifications = [
    {
      title: 'Cisco Introduction to Cybersecurity',
      issuer: 'Cisco',
      date: '2025',
      level: 'Professional',
      description: 'Introduction to cybersecurity principles and practices',
      badge: 'cisco',
      verified: true,
    },
    {
      title: 'Cisco Junior Cybersecurity Analyst Career Path',
      issuer: 'Cisco',
      date: 'Aug 2025',
      level: 'Professional',
      description: 'Foundational skills for cybersecurity analysts including network security, threat detection, and incident response',
      badge: 'cisco',
      verified: true,
    },
    {
      title: 'Microsoft Virtual Internship Completion Certificate - AI',
      issuer: 'Microsoft',
      date: 'May 2025',
      level: 'Professional',
      description: 'Developed skills in AI and machine learning through hands-on projects',
      badge: 'k8s',
      verified: true,
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Professional':
        return 'text-yellow-500 bg-yellow-500/20';
      case 'Associate':
        return 'text-blue-500 bg-blue-500/20';
      default:
        return 'text-primary bg-primary/20';
    }
  };

  return (
    <section id="certifications" className="section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Certifications & Credentials
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Validated expertise through industry-recognized certifications and continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="glass p-6 rounded-xl transition-all duration-300 hover:scale-105 group cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Header with Badge and Verification */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center gap-2">
                  {cert.verified && (
                    <div className="flex items-center gap-1 text-green-500">
                      <Shield className="w-4 h-4" />
                      <span className="text-xs font-medium">Verified</span>
                    </div>
                  )}
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>

              {/* Certification Title */}
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>

              {/* Issuer and Level */}
              <div className="flex items-center justify-between mb-3">
                <p className="text-muted-foreground font-medium">{cert.issuer}</p>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getLevelColor(cert.level)}`}>
                  {cert.level}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {cert.description}
              </p>

              {/* Date */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {cert.date}
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;