import { ArrowRight, BookOpen } from "lucide-react";
import CourseCard from "./CourseCard";
import type { Course } from "../data/courses";

interface CoursesSectionProps {
  courses: Course[];
  searchQuery: string;
  onClearSearch: () => void;
}

export default function CoursesSection({ courses, searchQuery, onClearSearch }: CoursesSectionProps) {
  return (
    <section className="section courses-section" id="courses">
      <div className="container">
        <div className="section-heading section-heading-row">
          <div>
            <span className="section-kicker">LEARN SOMETHING NEW</span>
            <h2>Explore our <span>popular courses</span></h2>
            <p>Expert-led learning paths designed to help you reach your goals.</p>
          </div>
          <a className="text-link" href="#contact">View all courses <ArrowRight size={17} /></a>
        </div>

        {searchQuery && (
          <div className="search-feedback">
            <span>Showing results for <strong>“{searchQuery}”</strong></span>
            <button type="button" onClick={onClearSearch}>Clear search</button>
          </div>
        )}

        {courses.length > 0 ? (
          <div className="course-grid">
            {courses.map((course) => <CourseCard key={course.id} course={course} />)}
          </div>
        ) : (
          <div className="empty-state">
            <BookOpen size={34} />
            <h3>No courses found</h3>
            <p>Try a different keyword or browse all of our courses.</p>
            <button className="button button-primary" type="button" onClick={onClearSearch}>Show all courses</button>
          </div>
        )}
      </div>
    </section>
  );
}