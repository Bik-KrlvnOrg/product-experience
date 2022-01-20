import { GetExperienceHandler } from './get-experience.handler';
import { GetExperiencesHandler } from './get-experiences.handler';
import { GetExperiencesWithLocationHandler } from './get-experiences-with-location.handler';
import { GetLocationWithTimeslotsHandler } from './get-location-with-timeslots.handler';
import { GetLocationsHandler } from './get-locations.handler';
import { GetTimeslotHandler } from './get-timeslot.handler';
import { GetLocationHandler } from './get-location.handler';

export const QueryHandlers = [
  GetExperienceHandler,
  GetExperiencesHandler,
  GetExperiencesWithLocationHandler,
  GetLocationsHandler,
  GetLocationWithTimeslotsHandler,
  GetTimeslotHandler,
  GetLocationHandler,
];
