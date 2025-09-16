import { Mail } from 'lucide-react';
import { TeamMember } from '@/components/TeamMember';
import { ProjectCard } from '@/components/ProjectCard';

// Import all images
import slabsLogo from '@/assets/slabs_logo.png';
import dmitryPhoto from '@/assets/danchenko_dmitry.png';
import slavaPhoto from '@/assets/semerenko_slava.png';
import sashaPhoto from '@/assets/semerenko_sasha.png';
import olenaPhoto from '@/assets/danchenko_olena.png';
import cryptoSprunksImage from '@/assets/crsprunks.jpeg';
import domaflImage from '@/assets/domafl.png';
import medjImage from '@/assets/medj.png';
import meddecImage from '@/assets/meddec.png';
import kaleImage from '@/assets/kale.png';
import tipJarHero from '@/assets/tip-jar-hero.jpg';
import testingSafePost from '@/assets/testing_safe_post.png';
import domafracImage from '@/assets/domafrac.jpeg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <img src={slabsLogo} alt="Satoshville Labs Logo" className="h-24 w-auto" />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Satoshville Labs
          </h1>
          <h2 className="text-2xl text-muted-foreground mb-8">
            Blockchain Development & Innovation
          </h2>
          <p className="text-lg leading-relaxed text-foreground max-w-3xl mx-auto mb-8">
            Satoshville Labs is a passionate team of developers and crypto enthusiasts dedicated to building 
            the next generation of Web3 applications. We collaborate with major blockchain ecosystems, 
            including industry leaders like Soneium and Somnia, to deliver diverse and innovative solutions 
            that accelerate the adoption of blockchain technology.
          </p>
          <p className="text-lg leading-relaxed text-foreground max-w-3xl mx-auto mb-8">
            From AI-powered analytics tools to immersive gaming experiences, our projects are designed to 
            bridge the gap between complex technology and real-world utility.
          </p>
          <p className="text-lg leading-relaxed text-foreground max-w-3xl mx-auto mb-12">
            We are currently developing a groundbreaking new platform and are seeking strategic investors 
            to join us on this journey. We also invite you to explore CryptoSprunks—our flagship 
            music-based game recognized as a premier advertising vehicle for crypto projects, NFTs, 
            and blockchain applications.
          </p>
          <div className="flex items-center justify-center gap-2 text-lg">
            <Mail className="text-primary" />
            <span className="text-muted-foreground">Interested in partnering or investing? Reach out to us at:</span>
            <a 
              href="mailto:satoshville@gmail.com" 
              className="text-primary hover:text-primary-glow smooth-transition font-medium"
            >
              satoshville@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 accent-gradient">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Team</h2>
          <div className="grid gap-6">
            <TeamMember
              name="Dmitry Danchenko"
              role="Founder, Developer"
              image={dmitryPhoto}
              linkedinUrl="https://www.linkedin.com/in/dmitry-danchenko-3a7439381/"
            />
            <TeamMember
              name="Vyacheslav Semerenko"
              role="Co-Founder, Marketing"
              image={slavaPhoto}
              linkedinUrl="https://www.linkedin.com/in/viacheslav-semerenko-b5a7701b8/"
            />
            <TeamMember
              name="Oleksandra Semerenko"
              role="Content Maker, Editor"
              image={sashaPhoto}
              linkedinUrl="https://www.linkedin.com/in/oleksandra-semerenko-671876370/"
            />
            <TeamMember
              name="Olena Danchenko"
              role="Content Marketing, PR Manager, CEO"
              image={olenaPhoto}
              linkedinUrl="https://www.linkedin.com/in/olena-danchenko-2b206127a/"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Portfolio</h2>
          <div className="space-y-8">
            
            <ProjectCard
              title="CryptoSprunks (Music game)"
              description="CryptoSprunks is a musical playground where you can create your own unique compositions by selecting animated characters. Each character plays a different musical instrument, and when combined, they create harmonious melodies!"
              image={cryptoSprunksImage}
              websiteUrl="https://satoshville.xyz/cryptunki/"
              videoUrl="https://youtu.be/zhzX9DQRK3Q?si=plbcdJFV9_28HfSH"
            />

            <ProjectCard
              title="Domain Fractionalization App (Doma Protocol)"
              description="Doma Fraction Tracker is a professional dashboard for tracking domain fractionalization on the Doma Protocol. Built with React, featuring real-time blockchain integration and sleek financial dashboard UI."
              image={domafracImage}
              websiteUrl="https://satoshville.xyz/dorahacks/domapool/"
              videoUrl="https://youtu.be/EH_-bNxRC8U?si=8gp4xPaNOJF_bWjz"
            />

            <ProjectCard
              title="DomainFluent.ai: Marketing Copy Generator for Web3 Domains"
              description="AI-powered tool using Google Gemini to generate professional marketing copy, SEO meta tags, and catchy headlines for domain names. Simple yet powerful solution for compelling domain descriptions."
              image={domaflImage}
              websiteUrl="https://satoshville.xyz/dorahacks/doma/"
              videoUrl="https://youtu.be/bG6r-vkHrAs?si=pzB_-1L9T8smfHfT"
            />

            <ProjectCard
              title="MedJournal: Blockchain-Secured Medical Records with AI"
              description="Decentralized application solving medical record tampering while giving patients complete control over health data. A verified medical documentation system for modern healthcare challenges."
              image={medjImage}
              websiteUrl="https://satoshville.xyz/dorahacks/medjournal/"
              videoUrl="https://youtu.be/8k-5gzQRsU4?si=WI0ZsxWZ2MdzQzGz"
            />

            <ProjectCard
              title="MedDecode: Medical Document AI Translator"
              description="AI-powered web application transforming complex medical documents into plain language. Bridges communication gaps between medical professionals and patients, democratizing medical information for better healthcare decisions."
              image={meddecImage}
              websiteUrl="https://satoshville.xyz/dorahacks/meddecode/"
              videoUrl="https://youtu.be/PYeiRtXGXto?si=geizgISG68txOTrs"
            />

            <ProjectCard
              title="KALE Price Tracker for Stellar Blockchain"
              description="Python-based application fetching real-time KALE token prices via Stellar Testnet Horizon API with Reflector oracle integration. Features price logging, trend visualization, and robust fallback systems for reliable DeFi demonstrations."
              image={kaleImage}
              websiteUrl="https://github.com/DDDimatestx/kale-price-tracker"
              videoUrl="https://youtu.be/i4poc8LneAo?si=Yx6hM7ydkZgTtlsD"
            />

            <ProjectCard
              title="Sonic Tip Jar: One-Click Crypto Tipping Platform"
              description="Decentralized tipping platform driving Sonic blockchain adoption. Demonstrates practical utility for micro-transactions and creator monetization through high-speed, low-fee Web3 experience."
              image={tipJarHero}
              websiteUrl="https://sonic-tip-easy-production.up.railway.app/"
              videoUrl="https://youtu.be/Hxxqsha1JDw?si=eAZX0MfOgHzhnD7j"
            />

            <ProjectCard
              title="SocialFi Content Shield: AI-Powered Content Moderation"
              description="AI-powered moderation tool for decentralized platforms detecting toxic content via Google Gemini AI. Enforces cross-chain penalties through ZetaChain's omnichain contracts while maintaining transparency and user privacy."
              image={testingSafePost}
              websiteUrl="https://socialfi-content-shield-production.up.railway.app/"
              videoUrl="https://youtu.be/rc7KHR7YA3g?si=haT0iRgMSEWM-OW-"
            />

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <img src={slabsLogo} alt="Satoshville Labs Logo" className="h-16 w-auto" />
          </div>
          <p className="text-muted-foreground mb-4">
            Building the future of Web3, one innovation at a time.
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-center gap-2">
              <Mail className="text-primary" />
              <a 
                href="mailto:satoshville@gmail.com" 
                className="text-primary hover:text-primary-glow smooth-transition"
              >
                satoshville@gmail.com
              </a>
            </div>
            <div className="text-muted-foreground">
              Visit our portal: 
              <a 
                href="https://satoshville.xyz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-glow smooth-transition ml-2"
              >
                satoshville.xyz
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;