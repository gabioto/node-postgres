CREATE TABLE IF NOT EXISTS  projects(
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <> ''),
    priority integer NOT NULL,
    description text,
    deliverydate date  NOT NULL
);

CREATE TABLE IF NOT EXISTS  tasks(
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <> ''),
    done boolean,
    projectId integer REFERENCES projects(id),
);

INSERT INTO projects(name,priority,description,deliverydate)
VALUES('Make a Web app',1,'Using Java script','2021-02-12');

INSERT INTO projects(name,priority,description,deliverydate)
VALUES('Make an app',1,'Using dark','2021-05-02');

INSERT INTO projects(name,priority,description,deliverydate)
VALUES('Make a desktop app',2,'Using C++','2021-05-14');

-- insert task data
INSERT INTO taks(name,done,projectId)
VALUES('Download Vuejs',false,1);
INSERT INTO taks(name,done,projectId)
VALUES('Download UI web',false,1);
INSERT INTO taks(name,done,projectId)
VALUES('Download Flutter',false,2);
INSERT INTO taks(name,done,projectId)
VALUES('Design Ui',false,2);
