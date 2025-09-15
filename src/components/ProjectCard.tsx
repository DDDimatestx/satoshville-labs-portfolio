import { ExternalLink, Youtube } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  websiteUrl?: string;
  videoUrl?: string;
}

export const ProjectCard = ({ title, description, image, websiteUrl, videoUrl }: ProjectCardProps) => {
  return (
    <div className="card-gradient border border-border rounded-lg overflow-hidden card-shadow smooth-transition hover:scale-105 flex flex-col md:flex-row">
      {image && (
        <div className="md:w-80 md:flex-shrink-0 aspect-video md:aspect-square overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
      )}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-4">{description}</p>
        </div>
        <div className="flex gap-3 mt-auto">
          {websiteUrl && (
            <a 
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg smooth-transition hover:bg-primary/90"
            >
              <ExternalLink size={16} />
              Visit
            </a>
          )}
          {videoUrl && (
            <a 
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg smooth-transition hover:bg-secondary/90"
            >
              <Youtube size={16} />
              Watch
            </a>
          )}
        </div>
      </div>
    </div>
  );
};