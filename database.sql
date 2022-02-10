CREATE TABLE "koalas" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (250) NOT NULL,
	"age" INTEGER,
	"gender" VARCHAR (100) NOT NULL,
    "readyForTransferIn" BOOLEAN DEFAULT FALSE,
    "notes" VARCHAR (100) NOT NULL
);

INSERT INTO "koalas"
    ("name", "age", "gender", "readyForTransferIn", "notes");
VALUES
    ('Scotty', 4, 'M', 'true', 'Born in Guatemala'),
    ('Jean', 5, 'F', 'true', 'Allergic to lots of lava'),
    ('Ororo', 7, 'F', 'false', 'Loces listening to Paula (Abdul)'),
    ('Logan', 15, 'M', 'false', 'Love the sauna'),
    ('Charlie', 9, 'M', 'true', 'Favorite band is Nirvana'),
    ('Betsy', 4, 'F', 'true', 'Has a pet iguana');