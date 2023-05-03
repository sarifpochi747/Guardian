const db = require('../databases');
function Profiles(id,title,descrip) {
  this.id = id;
  this.title = title;
  this.descrip = descrip;
}

Profiles.fetchAll = function() {
  return db.execute('SELECT * FROM profiles');
};

module.exports = Profiles;
