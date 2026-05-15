import { Courses } from "@/features/courses/pub/courses";
import { CourseCreateForm } from "@/features/courses/pub/create-course-form";

export default async function Home() {
  return (
    <div className="container mx-auto px-4 mt-6">
      <CourseCreateForm />
      <Courses />
    </div>
  );
}
