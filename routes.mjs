import db from './models/index.mjs';
import initBugsController from './controllers/bugs.mjs';

// import your controllers here

export default function bindRoutes(app) {
  // initialize the controller functions here
  // pass in the db for all callbacks
  const BugController = initBugsController(db);
  // define your route matchers here using app
  app.get('/create', (request, response) => {
    response.render('main');
  });

  app.post('/create', BugController.addBugToDb);
}
