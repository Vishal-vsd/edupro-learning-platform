import { ArrowRight, CheckCircle2, Play, Search, Star } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";

interface HeroProps {
  onSearch: (query: string) => void;
}

export default function Hero({ onSearch }: HeroProps) {
  const [query, setQuery] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch(query.trim());
    document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="hero" id="home">
      <div className="hero-decoration hero-decoration-one" />
      <div className="hero-decoration hero-decoration-two" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> 10,000+ learners are growing with us</div>
          <h1>Unlock your potential with <span>world-class learning.</span></h1>
          <p className="hero-description">
            Learn practical skills from industry experts. Build confidence, advance your career,
            and make your next move with EduPro.
          </p>

          <form className="search-form" onSubmit={handleSubmit} role="search">
            <Search size={20} aria-hidden="true" />
            <label className="sr-only" htmlFor="course-search">Search courses</label>
            <input
              id="course-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="What do you want to learn?"
            />
            <button className="button button-primary" type="submit">Search</button>
          </form>

          <div className="hero-points">
            <span><CheckCircle2 size={17} /> Learn at your own pace</span>
            <span><CheckCircle2 size={17} /> Expert instructors</span>
          </div>
          <div className="hero-social-proof">
            <div className="avatar-stack" aria-hidden="true">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=faces" alt="" />
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces" alt="" />
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=faces" alt="" />
              <span>+2k</span>
            </div>
            <div><strong>Join a growing community</strong><small>Learn alongside motivated people</small></div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrap">
            <img
              className="hero-image"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1100&q=85"
              alt="Students collaborating around a laptop"
            />
            <div className="image-overlay" />
          </div>
          <div className="rating-float">
            <span className="rating-icon"><Star size={20} fill="currentColor" /></span>
            <span><strong>4.9/5</strong><small>Learner rating</small></span>
          </div>
          <div className="learning-float">
            <span className="play-icon"><Play size={17} fill="currentColor" /></span>
            <span><strong>Learn by doing</strong><small>Practical, guided projects</small></span>
            <ArrowRight size={17} />
          </div>
        </div>
      </div>
    </section>
  );
}