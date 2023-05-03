const db = require('../databases');

function AddProfiles(id,Title,Descrip,Images) {
  this.id = id;
  this.Title = Title;
  this.Descrip = Descrip;
  this.Images = Images;
}

AddProfiles.fetchAll = function() {
  return db.execute('SELECT * FROM addpro');
};

AddProfiles.create = function(Title,Descript,Images) {
  if(Images == undefined){
    Images = null;
  }
  return db.execute(
    'INSERT INTO addpro (Title,Descript,Images) VALUES (?, ?, ?)',
    [Title,Descript,Images]
  );
};


module.exports = {AddProfiles};
