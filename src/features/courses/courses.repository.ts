import { prisma } from "@/shared/lib/prisma";
import { cache } from "react";
import { ICourse, ICreateCourse, IDeleteCourse } from "./model/types";

const coursesRepository = {
  getCourses: cache(async (): Promise<ICourse[]> => {
    return prisma.course.findMany();
  }),

  createCourse: cache(async (formData: ICreateCourse): Promise<ICourse> => {
    const { name, description } = formData;

    return prisma.course.create({
      data: {
        name: name,
        description: description,
      },
    });
  }),

  deleteCourse: cache(async (id: IDeleteCourse) => {
    return prisma.course.delete({
      where: {
        id: id.id,
      },
    });
  }),
};

export default coursesRepository;
