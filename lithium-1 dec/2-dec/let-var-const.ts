import axios from "axios";
type Course = {
  name: string;
};

const getCourses = () => {
  return axios
    .get<Course[]>("http://43.205.48.174:3001/api/courses")
    .then((response) => response.data);
};

getCourses().then((courses) => {
  console.log(courses);
});
