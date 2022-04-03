/* eslint-disable  import/no-extraneous-dependencies */
import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching';

cleanupOutdatedCaches();

precacheAndRoute(self.__WB_MANIFEST);
