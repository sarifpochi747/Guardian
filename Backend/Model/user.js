const db = require('../databases');

function AddProfiles(id,title,descript,img1,img2,img3,img4,img5,img6,img7) {
  this.id = id;
  this.title = title;
  this.descript = descript;
  this.img1 = img1;
  this.img2 = img2;
  this.img3 = img3;
  this.img4 = img4;
  this.img5 = img5;
  this.img6 = img6;
  this.img7 = img7;
}

AddProfiles.fetchAll = function() {
  return db.execute('SELECT * FROM profiles');
};

AddProfiles.create = function(id,title,descript,img1,img2,img3,img4,img5,img6,img7) {
  return db.execute(
    'INSERT INTO profiles (id,title,descript,img1,img2,img3,img4,img5,img6,img7) VALUES (?,?, ?, ?,?,?,?,?,?,?)',
    [id,title,descript,img1,img2,img3,img4,img5,img6,img7]
  );
};

AddProfiles.update = function(id,title,descript,img1,img2,img3,img4,img5,img6,img7) {
    return db.execute(
      'UPDATE profiles SET title=?, descript= ?, img1= ?,img2= ?,img3= ?,img4= ?,img5= ?,img6= ?,img7= ? where id = ?',
      [title,descript,img1,img2,img3,img4,img5,img6,img7, id]
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
