import { render, screen } from "@testing-library/react";
import { CourseItem } from "./course-item";
import userEvent from "@testing-library/user-event";
import { deleteCourse } from "../api/actions/delete-course";

jest.mock("../api/actions/delete-course", () => ({
  deleteCourse: jest.fn(),
}));

describe("Тест course item", () => {
  it("should call delete callback", async () => {
    render(
      <CourseItem
        course={{ id: "3", name: "React course!", description: "Dwsc desc" }}
      />,
    );

    await userEvent.click(screen.getByText("Delete"));
    expect(deleteCourse).toHaveBeenCalled();
  });
});
