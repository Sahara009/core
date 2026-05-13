// import { deleteCourse } from "../api/actions/delete-course";
import coursesRepository from "../courses.repository";
import { CourseItem } from "../ui/course-item";

export const Courses = async () => {
  const courses = await coursesRepository.getCourses();

  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <CourseItem
            course={course}
            // onDelete={() => deleteCourse(course.id)

            // }
          />
        </div>
      ))}
    </div>
  );
};
