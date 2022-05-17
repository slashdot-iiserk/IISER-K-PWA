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
      userid: userid,
    });
    const result: CoursesResponse[] = data.map((course) =>
      pick(course, ['shortname', 'id', 'fullname', 'category']),
    );
    return result;
  },
};
