import { GetExperienceHandler } from './get-experience.handler';
import { GetExperiencesHandler } from './get-experiences.handler';
import { GetExperiencesWithLocationHandler } from './get-experiences-with-location.handler';
import { GetLocationWithTimeslotsHandler } from './get-location-with-timeslots.handler';
import { GetLocationsHandler } from './get-locations.handler';

export const QueryHandlers = [
  GetExperienceHandler,
  GetExperiencesHandler,
  GetExperiencesWithLocationHandler,
  GetLocationsHandler,
  GetLocationWithTimeslotsHandler,
];
