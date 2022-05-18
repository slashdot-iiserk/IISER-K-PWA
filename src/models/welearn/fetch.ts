import pick from 'lodash.pick';
import { WeLearnClient } from './client';
import { ServerFunctions as SF } from './constants';

// todo: add the source of these types
interface InfoResponse {
  username: string;
  firstname: string;
  lastname: string;
  fullname: string;
  userid: number;
  userpictureurl: string;
}
interface CoursesResponse {
  shortname: string;
  id: number;
  fullname: string;
  category?: number;
}
interface CourseSection {
  id: number;
  name: string;
  modules: CourseModule[];
}
type CourseResponse = CourseSection[];

export const WeLearnFetch = {
  info: async () => {
    const data = await WeLearnClient.getData(SF.SITE_INFO);
    const result: InfoResponse = pick(data, [
      'username',
      'firstname',
      'lastname',
      'fullname',
      'userid',
      'userpictureurl',
    ]);
    return result;
  },
  courses: async (userid: number) => {
    const data: any[] = await WeLearnClient.getData(SF.USER_COURSES, {
      userid,
    });
    const result: CoursesResponse[] = data.map((course) =>
      pick(course, ['shortname', 'id', 'fullname', 'category']),
    );
    return result;
  },
  course: async (courseid: number) => {
    const data: any[] = await WeLearnClient.getData(SF.COURSE_CONTENTS, {
      courseid,
    });
    const result: CourseResponse = data.map((section) =>
      pick(section, ['id', 'name', 'modules']),
    );
    console.dir(result);
    return result;
  },
};
