"use client";

import { Button } from "@/shared/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/shared/ui/field";
import { Input } from "@/shared/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createCourse } from "../api/actions/create-course";
import { ICreateCourse } from "../model/types";
import { useTransition } from "react";

export const CourseCreateForm = () => {
  const [isPending, startTransition] = useTransition();
  const formSchema = z.object({
    name: z
      .string()
      .min(5, "Bug name must be at least 5 characters.")
      .max(35, "Bug name must be at most 35 characters."),
    description: z
      .string()
      .min(20, "Description must be at least 20 characters.")
      .max(300, "Description must be at most 300 characters."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onSubmit = async (course: ICreateCourse) => {
    startTransition(async () => {
      const res = await createCourse(course);
      console.log(res);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldSet className="w-full max-w-xs">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Name</FieldLabel>

              <Input
                id="name"
                type="text"
                placeholder="Name "
                {...register("name", {
                  required: "Name is required",
                })}
              />
              {errors.name && (
                <p className="text-red-600">{errors.name.message as string}</p>
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="description">Decsription</FieldLabel>

              <Input
                id="description"
                type="text"
                placeholder="Wrire the description"
                {...register("description", {
                  required: "Description is required",
                })}
              />
              {errors.description && (
                <p className="text-red-600">
                  {errors.description.message as string}
                </p>
              )}
            </Field>

            <Button disabled={isPending}>Create</Button>
          </FieldGroup>
        </FieldSet>
      </form>
    </>
  );
};
