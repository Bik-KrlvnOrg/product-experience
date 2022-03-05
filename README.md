## Product Experience

Senior Backend Challenge
The famous experience shop Joe Swisser offers a great range of activities including Parachuting, Flight Simulation,
Cooking Classes, Alpaca walks, etc. in different cities within Germany. You can browse experiences by category,
eventually select the desired product and buy a voucher for it. At a later point, you can use the given voucher, to book
an appointment and enjoy the experience!
Our Product Owner presented us with a new feature request: to offer customers with an additional option when buying
a voucher, to be able to select appointments slots directly from the product detail page.

Some experiences can take place in multiple locations; therefore, each location is to have its own time slots.
Different experiences have different durations some can last 1h others 30minutes.
For each time slot there is a maximum number of places that can be booked, which varies between experiences.

Additionally, our content managers want to have the flexibility to assign different prices to different time slots for each
experience location. For example, Alpaca Walks in Munich on Mondays at 13:00 would cost 10EUR but on Saturdays at
11:00 in Hamburg could cost 20EUR.
We need an API with endpoint(s) that the frontend would use to present the available time slots and prices in a specific
timeframe for the selected experience. Remember experiences can have multiple locations or not.

Technical Constraints: Please use JavaScript, TypeScript or PHP. If you want to use a framework, we recommend NestJS
(JS/TS) or Symfony (PHP)

Extra Points if you introduce DDD concepts and detail on everything around the application apart the solution itself.
Feel free to take some assumptions.

When completed, please send back to HR your solution as a zip file.
Good luck!


Experiences(Activities eg. Parachuting, Flight Simulation, Cooking Classes, Alpaca Walks)
Experiences are categorized 

Experiences as priced products sold as vouchers
Vouchers can be used to book appointments at a later point

New Feature Request:
Select appointment slots directly from product detail

Some experiences can take place in multiple locations
Each location has its own time slots

Different Experiences can have different durations (1h, 30 minutes etc)
For each time slot there’s a maximum number of places that can be booked(Varies between experiences)

Different prices to different time slots for each experience location.

We need an API with endpoint(s) that the frontend would use to present the available time slots and prices in a specific
timeframe for the selected experience. Remember experiences can have multiple locations or not.



