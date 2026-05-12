"use server";

import { revalidatePath } from "next/cache";
import coursesRepository from "../../courses.repository";

export async function deleteCourse(id: string) {
  await coursesRepository.deleteCourse({ id });

  revalidatePath("/courses");
}
