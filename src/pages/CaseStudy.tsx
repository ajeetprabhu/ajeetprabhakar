import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import dashLogoPdf from '../assets/Dash Logo.pdf';
import dashBrandingImage from '../assets/Projects/Dash Logo Design and branding.jpg';

const CaseStudy = () => {
  const { id } = useParams();

  const projectsData: Record<string, any> = {
    '4': {
      title: 'Dash Dynamic Logo Design and Branding',
      subtitle: 'Dynamic Identity System',
      description: 'A comprehensive branding project for Dash, exploring dynamic logo systems and visual identity. The logo is designed to be versatile, scalable, and responsive.',
      role: 'Brand Designer',
      timeline: '4 Weeks',
      tools: ['Illustrator', 'Photoshop'],
      pdfUrl: dashLogoPdf,
      imageUrl: dashBrandingImage,
    },
    default: {
      title: 'Project ' + id,
      subtitle: 'Next-Gen EV Interface Design',
      description: 'A deep dive into the user experience of a futuristic electric vehicle dashboard. Focusing on human-centric interaction models and seamless integration of telemetry data.',
      role: 'Lead UI/UX Designer',
      timeline: '12 Weeks',
      tools: ['Figma', 'Protopie', 'Blender'],
    }
  };

  const project = id && projectsData[id] ? projectsData[id] : projectsData.default;

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-6">
        <Link to="/" className="inline-flex items-center text-accent hover:text-foreground transition-colors font-display uppercase tracking-widest text-sm mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-8">{project.subtitle}</p>
            
            {project.imageUrl && (
              <div className="w-full rounded-lg overflow-hidden border border-border mb-12 bg-card shadow-lg">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            )}

            {project.pdfUrl ? (
              <div className="w-full aspect-[4/3] bg-card border border-border rounded-lg overflow-hidden mb-12 shadow-lg">
                <iframe 
                  src={project.pdfUrl} 
                  title="Project PDF"
                  className="w-full h-full border-0"
                />
              </div>
            ) : (!project.imageUrl && (
              <div className="aspect-[16/9] bg-card border border-border rounded-lg flex items-center justify-center mb-12 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-hero opacity-10 group-hover:opacity-20 transition-opacity" />
                <div className="p-8 text-center text-muted-foreground font-display tracking-widest">
                  [ VISUALIZATION RENDER PLACEHOLDER ]
                </div>
              </div>
            ))}

            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-display text-foreground mb-4 mt-8">Overview</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {project.description}
              </p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 h-fit sticky top-32">
            <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-2 text-foreground">
              <div className="w-2 h-2 bg-accent rounded-sm shadow-glow" />
              Project Specs
            </h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Role</p>
                <p className="font-medium text-foreground">{project.role}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Timeline</p>
                <p className="font-medium text-foreground">{project.timeline}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map(tool => (
                    <span key={tool} className="px-3 py-1 bg-muted border border-border rounded-sm text-xs font-display tracking-wider text-foreground">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
