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

AddProfiles.create = function(id,Title,Descript,Images) {
  if(Images == undefined){
    Images = null;
  }
  return db.execute(
    'INSERT INTO addpro (id,Title,Descript,Images) VALUES (?,?, ?, ?)',
    [id,Title,Descript,Images]
  );
};

AddProfiles.update = function(id,Title,Descript,Images) {
    return db.execute(
      'UPDATE addpro SET Title=?, Descript= ?, Images= ? where id = ?',
      [Title,Descript,Images, id]
    );
};


module.exports = {AddProfiles};
