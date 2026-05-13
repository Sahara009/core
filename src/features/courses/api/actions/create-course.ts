"use server";

import { revalidatePath } from "next/cache";
import coursesRepository from "../../courses.repository";
import { ICreateCourse } from "../../model/types";

export async function createCourse(course: ICreateCourse) {
  await coursesRepository.createCourse(course);

  revalidatePath("/courses");
}
