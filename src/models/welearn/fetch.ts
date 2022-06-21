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
  modules: any[];
  summary: string;
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
    const sections = data.map((section) =>
      pick(section, ['id', 'name', 'modules', 'summary']),
    );
    sections.forEach((section) => {
      section.modules = section.modules.map((module: any) => {
        const filtered = pick(module, [
          'id',
          'instance',
          'name',
          'modname',
          'modicon',
          'url',
          'description',
          'isCompact',
        ]);
        switch (module.modname) {
          case 'url':
            filtered.url = module.contents[0].fileurl;
            filtered.isCompact = true;
            break;
          case 'resource':
            filtered.url = `${module.contents[0].fileurl.replace(
              /forcedownload=1/,
              '',
            )}token=${WeLearnClient.token}`;
            filtered.isCompact = true;
            break;
          case 'label':
            filtered.isCompact = true;
            break;
          default:
            filtered.isCompact = false;
            break;
        }
        // filtered.url;
        return filtered;
      });
    });
    // console.dir(data);
    return sections as CourseResponse;
  },
  assignments: async (courseid: number) => {
    const data = await WeLearnClient.getData(SF.ASSIGNMENTS, {
      'courseids[0]': courseid,
    });
    const result: Assignment[] = data.courses[0].assignments;
    return result;
  },
  submission: async (assignid: number) => {
    const data = await WeLearnClient.getData(SF.ASSIGNMENT_STATUS, {
      assignid,
    });
    return data as SubmissionData;
  },
};
