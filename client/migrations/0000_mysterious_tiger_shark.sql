CREATE TABLE IF NOT EXISTS "users" (
	"id" text PRIMARY KEY NOT NULL,
	"username" text,
	"email" text NOT NULL,
	"password" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
