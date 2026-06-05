import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import dashBrandingImage from '../assets/Projects/Dash Logo Design and branding.jpg';
import ddDashboardImage from '../assets/Projects/DD Dashboard.jpg';

const CATEGORIES = [
  'All',
  'Branding',
  'UI&UX',
  '3D Design',
  'Motion Graphics',
  'Product Visualization',
  'Product Design and Development'
];

export const ProjectsGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    { 
      id: 1, 
      title: 'DD Dashboard', 
      category: 'UI&UX', 
      colSpan: 'lg:col-span-8', 
      rowSpan: 'lg:row-span-2',
      image: ddDashboardImage
    },
    { id: 2, title: 'Supercharger Hub UX', category: 'Product Design and Development', colSpan: 'lg:col-span-4', rowSpan: 'lg:row-span-1' },
    { id: 3, title: 'Telemetry Dashboard', category: 'Motion Graphics', colSpan: 'lg:col-span-4', rowSpan: 'lg:row-span-1' },
    { 
      id: 4, 
      title: 'Dash Dynamic Logo Design and Branding', 
      category: 'Branding', 
      colSpan: 'lg:col-span-8', 
      rowSpan: 'lg:row-span-1',
      image: dashBrandingImage
    },
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-16 gap-8">
          <h2 className="text-3xl font-display font-bold text-foreground flex items-center gap-4 shrink-0">
            <span className="w-12 h-[2px] bg-accent" />
            03 // CASE STUDIES
          </h2>
          
          <div className="flex flex-wrap gap-2 justify-start xl:justify-end">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-foreground text-background shadow-md'
                    : 'bg-muted/50 hover:bg-muted text-foreground/70 hover:text-foreground border border-border'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-[240px]">
          {filteredProjects.map((project) => (
            <Link 
              key={project.id} 
              to={`/case-study/${project.id}`}
              className={`group relative overflow-hidden bg-card border border-border rounded-sm p-8 flex flex-col justify-end transition-all duration-500 hover:border-accent hover:shadow-glow ${project.colSpan} ${project.rowSpan}`}
            >
              {/* Solid subtle background instead of dark gradients */}
              <div className="absolute inset-0 bg-muted/10 group-hover:bg-accent/5 transition-colors duration-500 z-10" />
              
              {/* Image or Image Placeholder */}
              <div className="absolute inset-x-8 top-8 bottom-32 bg-muted/20 border border-border/30 group-hover:scale-[1.02] transition-transform duration-700 ease-out overflow-hidden flex items-center justify-center rounded-sm">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-top filter brightness-[0.8] group-hover:brightness-100 transition-all duration-500"
                  />
                ) : (
                  <div className="text-muted-foreground/50 font-display tracking-widest text-xs uppercase">[ {project.title} ]</div>
                )}
              </div>

              <div className="relative z-20 w-full flex justify-between items-end">
                <div>
                  <p className="text-accent font-display tracking-widest text-xs mb-2 uppercase">{project.category}</p>
                  <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-accent transition-colors">{project.title}</h3>
                </div>
                <div className="bg-foreground text-background p-3 rounded-full group-hover:bg-accent transition-colors flex shrink-0 ml-4">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
