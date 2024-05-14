USE weddingplanner;

CREATE TABLE notes (
    id int not null,
    title varchar(255),
    content varchar(255)
);

INSERT INTO notes VALUES('0', 'Note 1', 'Walk Dog at 3:30pm');