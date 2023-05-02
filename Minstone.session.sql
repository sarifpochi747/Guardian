-- @block
CREATE TABLE Profiles(
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  descrip TEXT
);

-- @block
INSERT INTO Profiles (title,descrip)
VALUES (
  'FIRST PUBLIC',
  'HI, WORLD'
);

-- @block
SELECT * FROM profiles

