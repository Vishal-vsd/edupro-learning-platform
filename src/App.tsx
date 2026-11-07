import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, Code2, Palette, BriefcaseBusiness, Database, Megaphone } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CoursesSection from "./components/CoursesSection";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import { courses } from "./data/courses";

const partners = ["Google", "Microsoft", "Amazon", "Spotify", "Airbnb"];

const categories = [
  { name: "Design & UX", count: "32 courses", icon: Palette, color: "lavender" },
  { name: "Development", count: "48 courses", icon: Code2, color: "blue" },
  { name: "Business", count: "26 courses", icon: BriefcaseBusiness, color: "peach" },
  { name: "Data Science", count: "38 courses", icon: Database, color: "mint" },
  { name: "Marketing", count: "21 courses", icon: Megaphone, color: "pink" },
];

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = useMemo(() => {
    const normalizedQuery = searchQuery.toLowerCase();
    if (!normalizedQuery) return courses;
    return courses.filter((course) =>
      [course.title, course.category, course.description, course.instructor]
        .some((value) => value.toLowerCase().includes(normalizedQuery)),
    );
  }, [searchQuery]);

  return (
    <>
      <Header />
      <main>
        <Hero onSearch={setSearchQuery} />

        <section className="partners-section" aria-label="Partner companies">
          <div className="container">
            <p>LEARNING THAT FITS THE FUTURE OF WORK</p>
            <div className="partner-logos">
              {partners.map((partner) => <span key={partner}>{partner}</span>)}
            </div>
          </div>
        </section>

        <section className="section categories-section">
          <div className="container">
            <div className="section-heading section-heading-row">
              <div>
                <span className="section-kicker">FIND YOUR DIRECTION</span>
                <h2>Explore top <span>categories</span></h2>
                <p>Start with a subject you love. Discover where it can take you.</p>
              </div>
              <a className="text-link" href="#courses">Browse learning paths <ArrowRight size={17} /></a>
            </div>
            <div className="category-grid">
              {categories.map(({ name, count, icon: Icon, color }) => (
                <a className="category-card" href="#courses" key={name}>
                  <span className={`category-icon ${color}`}><Icon size={25} /></span>
                  <span className="category-copy"><strong>{name}</strong><small>{count}</small></span>
                  <ArrowRight className="category-arrow" size={18} />
                </a>
              ))}
            </div>
          </div>
        </section>

        <CoursesSection
          courses={filteredCourses}
          searchQuery={searchQuery}
          onClearSearch={() => setSearchQuery("")}
        />

        <Benefits />

        <section className="cta-section">
          <div className="cta-orb cta-orb-one" />
          <div className="cta-orb cta-orb-two" />
          <div className="container cta-content">
            <span className="cta-kicker"><CheckCircle2 size={16} /> YOUR NEXT CHAPTER STARTS HERE</span>
            <h2>Ready to invest in <span>your future?</span></h2>
            <p>Take the first step. Find a course, learn something valuable, and keep moving forward.</p>
            <div className="cta-actions">
              <a className="button button-white" href="#courses">Get started for free <ArrowRight size={17} /></a>
              <a className="button button-outline-light" href="#courses">Browse courses</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;