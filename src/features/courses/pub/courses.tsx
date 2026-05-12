import coursesRepository from "../courses.repository";
import { IDeleteCourse } from "../model/types";
import { CourseItem } from "../ui/course-item";

export const courses = async () => {
  const courses = await coursesRepository.getCourses();

  const handledelete = (id: IDeleteCourse) => {
    "use server";
  };
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <CourseItem course={course} />
        </div>
      ))}
    </div>
  );
};
