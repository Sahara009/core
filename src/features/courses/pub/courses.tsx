import coursesRepository from "../courses.repository";
import { CourseItem } from "../ui/course-item";

export const Courses = async () => {
  const courses = await coursesRepository.getCourses();

  return (
    <div>
      <h1>Courses Page</h1>
      {courses.map((course) => (
        <div key={course.id}>
          <CourseItem course={course} />
        </div>
      ))}
    </div>
  );
};
