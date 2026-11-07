import { Clock3, Signal, Star } from "lucide-react";
import type { Course } from "../data/courses";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="course-card">
      <a className="course-image-link" href="#contact" aria-label={`View ${course.title}`}>
        <img className="course-image" src={course.image} alt="" loading="lazy" />
        <span className="course-category">{course.category}</span>
      </a>
      <div className="course-content">
        <div className="course-meta">
          <span><Clock3 size={15} /> {course.duration}</span>
          <span><Signal size={15} /> {course.level}</span>
        </div>
        <h3><a href="#contact">{course.title}</a></h3>
        <p className="course-description">{course.description}</p>
        <div className="instructor">
          <img src={course.instructorImage} alt="" loading="lazy" />
          <span>{course.instructor}</span>
        </div>
        <div className="course-bottom">
          <span className="course-rating"><Star size={15} fill="currentColor" /> <strong>{course.rating}</strong> <span>({course.reviews})</span></span>
          <strong className="course-price">{course.price}</strong>
        </div>
      </div>
    </article>
  );
}