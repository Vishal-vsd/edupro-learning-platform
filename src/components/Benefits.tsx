import { Award, Laptop, Users } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Learn from experts",
    description: "Get practical insights from experienced professionals who know what it takes to succeed.",
  },
  {
    icon: Award,
    title: "Showcase your skills",
    description: "Build practical projects and earn certificates to highlight your learning journey.",
  },
  {
    icon: Laptop,
    title: "Learn on your schedule",
    description: "Access your learning materials across desktop, tablet and mobile, whenever it suits you.",
  },
];

export default function Benefits() {
  return (
    <section className="section benefits-section" id="why-us">
      <div className="container">
        <div className="section-heading centered-heading">
          <span className="section-kicker">THE EDUPRO DIFFERENCE</span>
          <h2>Learning that moves <span>you forward</span></h2>
          <p>Everything you need to turn curiosity into skills and skills into progress.</p>
        </div>
        <div className="benefit-grid">
          {benefits.map(({ icon: Icon, title, description }, index) => (
            <article className="benefit-card" key={title}>
              <div className="benefit-icon"><Icon size={28} /></div>
              <span className="benefit-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}