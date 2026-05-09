export interface ICourse {
  id: string;
  name: string;
  description: string;
}

export type IDeleteCourse = {
  id: string;
};
export type ICreateCourse = {
  name: string;
  description: string;
};
