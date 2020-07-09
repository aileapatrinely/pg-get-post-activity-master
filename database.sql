CREATE TABLE "books" (
"id" SERIAL PRIMARY KEY,
"title" VARCHAR(250),
"author" VARCHAR(100),
"published" DATE);

INSERT INTO "books"("title", "author", "published")
VALUES('Life of Spud', 'Potato', '4/8/1991');

CREATE TABLE "magazines" (
"id" SERIAL PRIMARY KEY,
"title" VARCHAR(250),
"issue_number" VARCHAR(5),
"pages" VARCHAR(5));

INSERT INTO "magazines"("title", "issue_number", "pages")
VALUES('Hot Potatoes', '375', '39');