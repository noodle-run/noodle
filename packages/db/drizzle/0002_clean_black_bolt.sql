CREATE TABLE IF NOT EXISTS "Module" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"userId" varchar(255) NOT NULL,
	"name" varchar(255) NOT NULL,
	"code" varchar(255) NOT NULL,
	"icon" varchar(255) NOT NULL,
	"credits" integer NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	"lastVisited" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "Module_userId_index" ON "Module" ("userId");