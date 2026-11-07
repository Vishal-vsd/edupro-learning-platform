export interface Course {
  id: number;
  category: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  instructor: string;
  rating: string;
  reviews: string;
  price: string;
  image: string;
  instructorImage: string;
}

export const courses: Course[] = [
  {
    id: 1,
    category: "Design",
    title: "Complete Web & Mobile UI/UX Design Masterclass",
    description: "Design beautiful interfaces for web and mobile with Figma and modern design principles.",
    duration: "12 weeks",
    level: "Beginner",
    instructor: "Sarah Jenkins",
    rating: "4.9",
    reviews: "2.4k",
    price: "$89.99",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=900&q=85",
    instructorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
  },
  {
    id: 2,
    category: "Development",
    title: "Modern React with TypeScript & Tailwind CSS",
    description: "Build scalable, accessible and responsive web applications with a modern frontend workflow.",
    duration: "8 weeks",
    level: "Intermediate",
    instructor: "David Chen",
    rating: "4.8",
    reviews: "1.8k",
    price: "$94.99",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=900&q=85",
    instructorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
  },
  {
    id: 3,
    category: "Marketing",
    title: "The Complete Digital Marketing Bootcamp",
    description: "Learn SEO, social media, paid campaigns and analytics to grow a business online.",
    duration: "6 weeks",
    level: "All levels",
    instructor: "Emma Watson",
    rating: "4.7",
    reviews: "3.1k",
    price: "$74.99",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=900&q=85",
    instructorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
  },
  {
    id: 4,
    category: "Data Science",
    title: "Machine Learning & AI for Data Scientists",
    description: "Explore practical machine learning, neural networks and real-world AI applications.",
    duration: "16 weeks",
    level: "Advanced",
    instructor: "Dr. Alan Turing",
    rating: "5.0",
    reviews: "950",
    price: "$119.99",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=900&q=85",
    instructorImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
  },
];