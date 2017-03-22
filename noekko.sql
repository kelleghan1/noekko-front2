


DROP TABLE articles;

CREATE TABLE articles(
  article_id serial PRIMARY KEY,
  title VARCHAR(50),
  description VARCHAR(50),
  author VARCHAR (50),
  url VARCHAR(100),
  image VARCHAR(100),
  published DATE,
  source VARCHAR(50),
  x_score INTEGER
);

INSERT INTO articles VALUES ( 123, 'The Title 1', 'This is the description', 'The Author', 'https://google.com', 'http://placehold.it/350x150', '2017-02-08 02:40:12', 'the-huffington-post', 25 );
INSERT INTO articles VALUES ( 111, 'The Title 2', 'This is the description', 'The Author', 'https://google.com', 'http://placehold.it/350x150', '2017-02-08 02:40:12', 'the-huffington-post', 75 );
INSERT INTO articles VALUES ( 222, 'The Title 3', 'This is the description', 'The Author', 'https://google.com', 'http://placehold.it/350x150', '2017-02-08 02:40:12', 'the-huffington-post', 50 );
INSERT INTO articles VALUES ( 221, 'The Title 4', 'This is the description', 'The Author', 'https://google.com', 'http://placehold.it/350x150', '2017-02-08 02:40:12', 'the-huffington-post', 50 );
INSERT INTO articles VALUES ( 223, 'The Title 5', 'This is the description', 'The Author', 'https://google.com', 'http://placehold.it/200x300', '2017-02-08 02:40:12', 'the-huffington-post', 50 );
INSERT INTO articles VALUES ( 333, 'The Title 6', 'This is the description', 'The Author', 'https://google.com', 'http://placehold.it/200x300', '2017-02-08 02:40:12', 'the-huffington-post', 50 );
INSERT INTO articles VALUES ( 331, 'The Title 7', 'This is the description', 'The Author', 'https://google.com', 'http://placehold.it/200x300', '2017-02-08 02:40:12', 'the-huffington-post', 50 );
INSERT INTO articles VALUES ( 444, 'The Title 1', 'This is the description', 'The Author', 'https://google.com', 'http://placehold.it/200x300', '2017-02-08 02:40:12', 'the-huffington-post', 25 );
INSERT INTO articles VALUES ( 441, 'The Title 2', 'This is the description', 'The Author', 'https://google.com', 'http://placehold.it/200x300', '2017-02-08 02:40:12', 'the-huffington-post', 75 );
INSERT INTO articles VALUES ( 334, 'The Title 3', 'This is the description', 'The Author', 'https://google.com', 'http://placehold.it/350x150', '2017-02-08 02:40:12', 'the-huffington-post', 50 );
INSERT INTO articles VALUES ( 442, 'The Title 4', 'This is the description', 'The Author', 'https://google.com', 'http://placehold.it/350x150', '2017-02-08 02:40:12', 'the-huffington-post', 50 );
INSERT INTO articles VALUES ( 445, 'The Title 5', 'This is the description', 'The Author', 'https://google.com', 'http://placehold.it/350x150', '2017-02-08 02:40:12', 'the-huffington-post', 50 );
INSERT INTO articles VALUES ( 455, 'The Title 6', 'This is the description', 'The Author', 'https://google.com', 'http://placehold.it/350x150', '2017-02-08 02:40:12', 'the-huffington-post', 50 );
INSERT INTO articles VALUES ( 552, 'The Title 7', 'This is the description', 'The Author', 'https://google.com', 'http://placehold.it/350x150', '2017-02-08 02:40:12', 'the-huffington-post', 50 );
