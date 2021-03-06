'use strict';

module.exports = function(app){
  // var config    = app.get('config');
  // if (app.get('env') === 'development') require('./env/development')(app);
  if (app.get('env') === 'development') require('./config/env/development')(app);

  if (app.get('env') === 'production') require('./config/env/production')(app);

  if (app.get('env') === 'test') require('./config/env/test')(app);
};