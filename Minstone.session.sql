-- @block
CREATE TABLE Addpro (
  id INT NOT NULL,
  Title TEXT NOT NULL,
  Descript TEXT NOT NULL,
  Images LONGTEXT NULL,
  PRIMARY KEY (id)
);
-- @block
CREATE TABLE goals (
  id INT NOT NULL,
  Title TEXT NOT NULL,
  Descript TEXT NOT NULL,
  Images LONGTEXT NULL,
  PRIMARY KEY (id)
);

-- @block
CREATE TABLE our_standard (
  id INT NOT NULL,
  Title TEXT NOT NULL,
  Descript TEXT NOT NULL,
  Images LONGTEXT NULL,
  PRIMARY KEY (id)
);

-- @block
CREATE TABLE Profiles(
  id INT NOT NULL,
  title TEXT NOT NULL,
  descript TEXT NOT NULL,
  img1 LONGTEXT NULL,
  img2 LONGTEXT NULL,
  img3 LONGTEXT NULL,
  img4 LONGTEXT NULL,
  img5 LONGTEXT NULL,
  img6 LONGTEXT NULL,
  img7 LONGTEXT NULL,
  PRIMARY KEY (id)
);

-- @block
CREATE TABLE Standards(
  id INT NOT NULL,
  title TEXT NOT NULL,
  descript TEXT NOT NULL,
  sub_title1 TEXT NOT NULL,
  sub_descript1 TEXT NOT NULL,
  img1 LONGTEXT NULL,
  sub_title2 TEXT NOT NULL,
  sub_descript2 TEXT NOT NULL,
  img2 LONGTEXT NULL,
  sub_title3 TEXT NOT NULL,
  sub_descript3 TEXT NOT NULL,
  img3 LONGTEXT NULL,
  sub_title4 TEXT NOT NULL,
  sub_descript4 TEXT NOT NULL,
  img4 LONGTEXT NULL,
  PRIMARY KEY (id)
);

-- @block
CREATE TABLE Organization(
  id INT NOT NULL,
  title TEXT NOT NULL,
  img LONGTEXT NULL,
  descript TEXT NOT NULL,
  sub_title1 TEXT NOT NULL,
  sub_descript1 TEXT NOT NULL,
  sub_title2 TEXT NOT NULL,
  sub_descript2 TEXT NOT NULL,
  sub_title3 TEXT NOT NULL,
  sub_descript3 TEXT NOT NULL,
  sub_title4 TEXT NOT NULL,
  sub_descript4 TEXT NOT NULL,
  sub_title5 TEXT NOT NULL,
  sub_descript5 TEXT NOT NULL,
  sub_title6 TEXT NOT NULL,
  sub_descript6 TEXT NOT NULL,
  PRIMARY KEY (id)
);

-- @block
CREATE TABLE users (
  id INT NOT NULL auto_increment,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

-- @block
CREATE TABLE videos (
  video LONGTEXT NULL
);
