import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import dashLogoPdf from '../assets/Dash Logo.pdf';
import dashBrandingImage from '../assets/Projects/Dash Logo Design and branding.jpg';
import ddDashboardImage from '../assets/Projects/DD Dashboard.jpg';
import cluixVideo from '../assets/Projects/3D animation/cluix_video.mp4';
import droneChargingVideo from '../assets/Projects/3D animation/Drone Charging at PGCIL.mp4';
import dashWirelessVideo from '../assets/Projects/3D animation/Dash Dynamic Wireless Charging system.mp4';
import twoWheelerVideo from '../assets/Projects/3D animation/2 wheeler Charging Setup.mp4';
import fourWheelerVideo from '../assets/Projects/3D animation/4 wheeler  wireless setup animation.mkv';

const CaseStudy = () => {
  const { id } = useParams();

  const projectsData: Record<string, any> = {
    '1': {
      title: 'DD Dashboard',
      subtitle: 'Business Intelligence & Data Visualization',
      description: 'A comprehensive user interface and user experience design for a dynamic dashboard system, showcasing advanced data visualizations, interactive widgets, and modern dark mode styling.',
      role: 'Lead UI/UX Designer',
      timeline: '6 Weeks',
      tools: ['Figma', 'Photoshop', 'Illustrator'],
      imageUrl: ddDashboardImage,
    },
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
    '5': {
      title: 'Cluix Product Animation',
      subtitle: '3D Product Visualization & Animation',
      description: 'A detailed 3D product animation detailing Cluix, showcasing product aesthetics, function, and design highlights with smooth motion graphics.',
      role: '3D Animator',
      timeline: '2 Weeks',
      tools: ['Blender', 'After Effects'],
      videoUrl: cluixVideo,
    },
    '6': {
      title: 'Drone Charging at PGCIL',
      subtitle: '3D Industrial Animation & Visualization',
      description: 'An advanced 3D visualization illustrating drone automatic docking and charging systems at a PGCIL substation facility.',
      role: '3D Animator & Visualizer',
      timeline: '3 Weeks',
      tools: ['Blender', 'Premiere Pro'],
      videoUrl: droneChargingVideo,
    },
    '7': {
      title: 'Dash Dynamic Wireless Charging',
      subtitle: '3D Concept Animation',
      description: 'An animated showcase showing the conceptual architecture of a dynamic wireless charging grid for modern electric vehicles.',
      role: '3D Motion Designer',
      timeline: '3 Weeks',
      tools: ['Blender', 'After Effects'],
      videoUrl: dashWirelessVideo,
    },
    '8': {
      title: '2-Wheeler Charging Setup',
      subtitle: '3D Mechanical & Assembly Animation',
      description: 'A functional 3D animation showing the step-by-step mechanical setup and assembly of a next-generation 2-wheeler charging station.',
      role: '3D Animator',
      timeline: '2 Weeks',
      tools: ['Blender', 'SolidWorks'],
      videoUrl: twoWheelerVideo,
    },
    '9': {
      title: '4-Wheeler Wireless Setup Animation',
      subtitle: '3D Automotive & Technical Visualization',
      description: 'A high-fidelity technical animation of the installation and operational flow for a 4-wheeler wireless charging setup.',
      role: 'Lead 3D Artist',
      timeline: '4 Weeks',
      tools: ['Blender', 'Premiere Pro'],
      videoUrl: fourWheelerVideo,
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
            
            {project.videoUrl && (
              <div className="w-full aspect-[16/9] bg-card border border-border rounded-lg overflow-hidden mb-12 shadow-lg relative flex flex-col justify-end">
                <video 
                  src={project.videoUrl} 
                  controls 
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                >
                  Your browser does not support the video tag.
                </video>
                {project.videoUrl.endsWith('.mkv') && (
                  <div className="absolute top-4 left-4 right-4 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 p-3 rounded text-xs flex justify-between items-center backdrop-blur-md z-20">
                    <span>Note: This video is in MKV format, which might not play natively in some browsers.</span>
                    <a href={project.videoUrl} download className="underline font-bold hover:text-white ml-4 shrink-0">Download Video</a>
                  </div>
                )}
              </div>
            )}

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
            ) : (!project.imageUrl && !project.videoUrl && (
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
