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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <ProjectCard
              title="CryptoSprunks (Music game)"
              description="CryptoSprunks is a musical playground where you can create your own unique compositions by selecting animated characters. Each character plays a different musical instrument, and when combined, they create harmonious melodies!"
              image={cryptoSprunksImage}
              websiteUrl="https://satoshville.xyz/cryptunki/"
              videoUrl="https://youtu.be/zhzX9DQRK3Q?si=plbcdJFV9_28HfSH"
            />

            <ProjectCard
              title="Domain Fractionalization App (Doma Protocol)"
              description="Doma Fraction Tracker is a beautiful, professional-grade dashboard for tracking domain fractionalization on the Doma Protocol. Built with React, featuring real-time blockchain integration and a sleek financial dashboard UI."
              websiteUrl="https://satoshville.xyz/dorahacks/domapool/"
              videoUrl="https://youtu.be/EH_-bNxRC8U?si=8gp4xPaNOJF_bWjz"
            />

            <ProjectCard
              title="DomainFluent.ai: Instantly Generate Marketing Copy for Your Web3 Domains with AI"
              description="Tired of staring at a blank page, trying to write a compelling description for your domain? DomainFluent.ai solves that. It's a simple yet powerful tool that uses the Google Gemini AI to instantly generate professional marketing copy, SEO meta tags, and catchy headlines for any domain name."
              image={domaflImage}
              websiteUrl="https://satoshville.xyz/dorahacks/doma/"
              videoUrl="https://youtu.be/bG6r-vkHrAs?si=pzB_-1L9T8smfHfT"
            />

            <ProjectCard
              title="MedJournal: Blockchain-Secured Medical Records with AI Analysis"
              description="Decentralized application (dApp) that finally solves the problem of medical record tampering and gives patients complete control over their health data. This isn't just a wellness journal. It's a system for verified medical documentation that everyone needs, especially if you've ever struggled with the chaos of traditional healthcare systems."
              image={medjImage}
              websiteUrl="https://satoshville.xyz/dorahacks/medjournal/"
              videoUrl="https://youtu.be/8k-5gzQRsU4?si=WI0ZsxWZ2MdzQzGz"
            />

            <ProjectCard
              title="MedDecode. Doctor to English Translator"
              description="MedDecode is an innovative web application that transforms complex medical documents into easily understandable explanations using artificial intelligence. The platform serves as a bridge between medical professionals and patients by converting technical medical reports, lab results, and diagnostic documents into plain language that anyone can comprehend. Democratize Medical Information: Make medical documents accessible to patients regardless of their medical knowledge background. Improve Patient Understanding: Help patients better comprehend their health conditions, treatment plans, and medical test results. Reduce Healthcare Communication Gaps: Bridge the knowledge gap between medical professionals and patients. Enhance Health Literacy: Empower patients with clear, understandable health information. Support Informed Decision Making: Enable patients to make better healthcare decisions with proper understanding"
              image={meddecImage}
              websiteUrl="https://satoshville.xyz/dorahacks/meddecode/"
              videoUrl="https://youtu.be/PYeiRtXGXto?si=geizgISG68txOTrs"
            />

            <ProjectCard
              title="KALE Price Tracker Presentation"
              description="KALE Price Tracker is a Python-based application that fetches real-time KALE token prices using the Stellar Testnet Horizon API, integrated with the Reflector oracle. It leverages the official KALE issuing key to query trades. The project features console output, price logging to a file, and a visual price trend graph using matplotlib. For reliable demos, it includes fallbacks to CSV and hard-coded data when Testnet trades are unavailable. This is a minimal viable product (MVP) designed for the Stellar Hacks: KALE x Reflector hackathon, extensible for DeFi applications."
              image={kaleImage}
              websiteUrl="https://github.com/DDDimatestx/kale-price-tracker"
              videoUrl="https://youtu.be/i4poc8LneAo?si=Yx6hM7ydkZgTtlsD"
            />

            <ProjectCard
              title="Sonic Tip Jar - One-Click Crypto Tipping on Sonic Blockchain"
              description="A decentralized, one-click tipping platform built to drive adoption and utility on the Sonic blockchain. This project demonstrates the practical utility of the Sonic blockchain for micro-transactions and creator monetization. By leveraging Sonic's high speed and low fees, we've built a seamless Web3 experience that empowers creators and introduces new users to the ecosystem."
              image={tipJarHero}
              websiteUrl="https://sonic-tip-easy-production.up.railway.app/"
              videoUrl="https://youtu.be/Hxxqsha1JDw?si=eAZX0MfOgHzhnD7j"
            />

            <ProjectCard
              title="ZetaChain X Google Cloud AI Buildathon"
              description="SocialFi Content Shield is an AI-powered moderation tool for decentralized social platforms. It automatically detects toxic content (hate speech, scams) using Google Gemini AI and enforces cross-chain penalties via ZetaChain's omnichain contracts (e.g., slashing reputation tokens on Ethereum for violations on Bitcoin). Unlike centralized solutions, it operates transparently on-chain while preserving user privacy."
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
          <div className="flex items-center justify-center gap-2">
            <Mail className="text-primary" />
            <a 
              href="mailto:satoshville@gmail.com" 
              className="text-primary hover:text-primary-glow smooth-transition"
            >
              satoshville@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;