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

// Goals
function AddGoals(id,Title,Descrip,Images) {
  this.id = id;
  this.Title = Title;
  this.Descrip = Descrip;
  this.Images = Images;
}

AddGoals.fetchAll = function() {
  return db.execute('SELECT * FROM goals');
};

AddGoals.create = function(id,Title,Descript,Images) {
  if(Images == undefined){
    Images = null;
  }
  return db.execute(
    'INSERT INTO goals (id,Title,Descript,Images) VALUES (?,?, ?, ?)',
    [id,Title,Descript,Images]
  );
};

AddGoals.update = function(id,Title,Descript,Images) {
    return db.execute(
      'UPDATE goals SET Title=?, Descript= ?, Images= ? where id = ?',
      [Title,Descript,Images, id]
    );
};

//Our standard
function AddStandard(id,Title,Descrip,Images) {
  this.id = id;
  this.Title = Title;
  this.Descrip = Descrip;
  this.Images = Images;
}

AddStandard.fetchAll = function() {
  return db.execute('SELECT * FROM our_standard');
};

AddStandard.create = function(id,Title,Descript,Images) {
  if(Images == undefined){
    Images = null;
  }
  return db.execute(
    'INSERT INTO our_standard (id,Title,Descript,Images) VALUES (?,?, ?, ?)',
    [id,Title,Descript,Images]
  );
};

AddStandard.update = function(id,Title,Descript,Images) {
    return db.execute(
      'UPDATE our_standard SET Title=?, Descript= ?, Images= ? where id = ?',
      [Title,Descript,Images, id]
    );
};

module.exports = {AddProfiles, AddGoals, AddStandard};
