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
function AddGoals(id,title,descript,img,sub_title1,sub_descript1,sub_title2,sub_descript2,sub_title3,sub_descript3,sub_title4,sub_descript4,sub_title5,sub_descript5,sub_title6,sub_descript6) {
  this.id = id;
  this.title = title;
  this.descript = descript;
  this.img = img;
  this.sub_title1= sub_title1;
  this.sub_descript1 = sub_descript1;
  this.sub_title2= sub_title2;
  this.sub_descript2 = sub_descript2;
  this.sub_title3= sub_title3;
  this.sub_descript3 = sub_descript3;
  this.sub_title4= sub_title4;
  this.sub_descript4 = sub_descript4;
  this.sub_title5= sub_title5;
  this.sub_descript5 = sub_descript5;
  this.sub_title6= sub_title6;
  this.sub_descript6 = sub_descript6;
}

AddGoals.fetchAll = function() {
  return db.execute('SELECT * FROM organization');
};

AddGoals.create = function(id,title,img,descript,sub_title1,sub_descript1,sub_title2,sub_descript2,sub_title3,sub_descript3,sub_title4,sub_descript4,sub_title5,sub_descript5,sub_title6,sub_descript6) {
  return db.execute(
    'INSERT INTO organization (id,title,img,descript,sub_title1,sub_descript1,sub_title2,sub_descript2,sub_title3,sub_descript3,sub_title4,sub_descript4,sub_title5,sub_descript5,sub_title6,sub_descript6) VALUES (?,?, ?, ?,?,?, ?, ?,?,?, ?, ?,?,?, ?, ?)',
    [id,title,img,descript,sub_title1,sub_descript1,sub_title2,sub_descript2,sub_title3,sub_descript3,sub_title4,sub_descript4,sub_title5,sub_descript5,sub_title6,sub_descript6]
  );
};

AddGoals.update = function(id,title,img,descript,sub_title1,sub_descript1,sub_title2,sub_descript2,sub_title3,sub_descript3,sub_title4,sub_descript4,sub_title5,sub_descript5,sub_title6,sub_descript6) {
    return db.execute(
      'UPDATE organization SET title=?, img= ?, descript= ?,sub_title1= ?,sub_descript1= ?,sub_title2= ?,sub_descript2= ?,sub_title3= ?,sub_descript3= ?,sub_title4= ?,sub_descript4= ?,sub_title5= ?,sub_descript5= ?,sub_title6= ?,sub_descript6= ? where id = ?',
      [title,img,descript,sub_title1,sub_descript1,sub_title2,sub_descript2,sub_title3,sub_descript3,sub_title4,sub_descript4,sub_title5,sub_descript5,sub_title6,sub_descript6,id]
    );
};

//Our standard
function AddStandard(id,title,descript,sub_title1,sub_descript1,img1,sub_title2,sub_descript2,img2,sub_title3,sub_descript3,img3,sub_title4,sub_descript4,img4) {
  this.id = id;
  this.title = title;
  this.descript = descript;
  this.sub_title1 = sub_title1;
  this.sub_descript1 = sub_descript1;
  this.img1 = img1;
  this.sub_title2 = sub_title2;
  this.sub_descript2 = sub_descript2;
  this.img2 = img2;
  this.sub_title3 = sub_title3;
  this.sub_descript3 = sub_descript3;
  this.img3 = img3;
  this.sub_title4 = sub_title4;
  this.sub_descript4 = sub_descript4;
  this.img4 = img4;

}

AddStandard.fetchAll = function() {
  return db.execute('SELECT * FROM standards');
};

AddStandard.create = function(id,title,descript,sub_title1,sub_descript1,img1,sub_title2,sub_descript2,img2,sub_title3,sub_descript3,img3,sub_title4,sub_descript4,img4) {
  return db.execute(
    'INSERT INTO standards (id,title,descript,sub_title1,sub_descript1,img1,sub_title2,sub_descript2,img2,sub_title3,sub_descript3,img3,sub_title4,sub_descript4,img4) VALUES (?,?, ?, ?,?,?,?, ?, ?,?,?,?, ?, ?,?)',
    [id,title,descript,sub_title1,sub_descript1,img1,sub_title2,sub_descript2,img2,sub_title3,sub_descript3,img3,sub_title4,sub_descript4,img4]
  );
};

AddStandard.update = function(id,title,descript,sub_title1,sub_descript1,img1,sub_title2,sub_descript2,img2,sub_title3,sub_descript3,img3,sub_title4,sub_descript4,img4) {
    return db.execute(
      'UPDATE standards SET title=?,descript=?,sub_title1=?,sub_descript1=?,img1=?,sub_title2=?,sub_descript2=?,img2=?,sub_title3=?,sub_descript3=?,img3=?,sub_title4=?,sub_descript4=?,img4=? where id = ?',
      [title,descript,sub_title1,sub_descript1,img1,sub_title2,sub_descript2,img2,sub_title3,sub_descript3,img3,sub_title4,sub_descript4,img4,id]
    );
};

module.exports = {AddProfiles, AddGoals, AddStandard};
