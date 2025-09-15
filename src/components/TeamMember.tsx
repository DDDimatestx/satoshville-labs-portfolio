import { ExternalLink } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  linkedinUrl: string;
}

export const TeamMember = ({ name, role, image, linkedinUrl }: TeamMemberProps) => {
  return (
    <div className="flex items-center gap-4 p-6 card-gradient border border-border rounded-lg smooth-transition hover:scale-105 hover:glow-effect">
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-20 h-20 rounded-full object-cover border-2 border-primary"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-foreground">{name}</h3>
        <p className="text-muted-foreground">{role}</p>
      </div>
      <a 
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg smooth-transition hover:bg-primary/90"
      >
        <ExternalLink size={16} />
        LinkedIn
      </a>
    </div>
  );
};