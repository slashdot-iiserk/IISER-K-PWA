import { createURL } from '@/utils/urllib';

export const BASE_URL = 'https://welearn.iiserkol.ac.in';

export const WeLearnURLs = {
  origin: BASE_URL,
  login: createURL(BASE_URL, '/login/token.php', {
    service: 'moodle_mobile_app',
  }),
  server: createURL(BASE_URL, '/webservice/rest/server.php', {
    moodlewsrestformat: 'json',
  }),
};

export const ServerFunctions = {
  SITE_INFO: 'core_webservice_get_site_info',
  ALL_COURSES: 'core_course_get_courses_by_field',
  USER_COURSES: 'core_enrol_get_users_courses',
  COURSE_CONTENTS: 'core_course_get_contents',
  ASSIGNMENTS: 'mod_assign_get_assignments',
  ASSIGNMENT_STATUS: 'mod_assign_get_submission_status',
  URLS: 'mod_url_get_urls_by_courses',
  RESOURCES: 'mod_resource_get_resources_by_courses',
  COURSE_USERS: 'core_enrol_get_enrolled_users',
};
