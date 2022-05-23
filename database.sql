
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

--Create a new database called `prime_app`

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "discs" (
"id" SERIAL PRIMARY KEY,
"manufacturer" VARCHAR (50) NOT NULL,
"mold" VARCHAR (50) NOT NULL,
"sleepy_scale" VARCHAR (50) NOT NULL,
"price" DECIMAL (10,2) NOT NULL,
"inserted_at" TIMESTAMP NOT NULL DEFAULT now(),
"updated_at" TIMESTAMP NOT NULL DEFAULT now(),
"img_path" VARCHAR (5000) NOT NULL,
"sold" BOOLEAN DEFAULT FALSE,
"seller_id" INT REFERENCES "user"
);

INSERT INTO "discs" (
"manufacturer","mold","sleepy_scale","price","img_path","seller_id"
)
VALUES('Innova', 'Savant', 10, 11.92, 'savant.img.url', 1 )