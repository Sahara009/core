import { prisma } from "@/shared/lib/prisma";
import { Button } from "@/shared/ui/button";

export default async function Home() {
  const courses = await prisma.course.findMany();
  console.log(courses);
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      hello next
      <Button variant="outline">Button</Button>
    </div>
  );
}
