"use client";

import { Button } from "@/shared/ui/button";
import { ICourse } from "../model/types";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { useTransition } from "react";

type CourseProps = {
  course: ICourse;
  onDelete: () => Promise<void>;
};

export const CourseItem = ({ course, onDelete }: CourseProps) => {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(async () => {
      await onDelete();
    });
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title: {course.name}</CardTitle>
        <CardDescription>
          Card Description: {course.description}
        </CardDescription>
        <CardAction>Card Action</CardAction>
      </CardHeader>

      <CardFooter>
        <Button disabled={isPending} onClick={handleDelete}>
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};
