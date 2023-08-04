DO $$ BEGIN
 CREATE TYPE "WaitingListReason" AS ENUM('BOTH', 'PROJECT', 'STUDENT');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "WaitingList" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"reason" "WaitingListReason" NOT NULL,
	"approved" boolean DEFAULT false NOT NULL,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Feedback" (
	"id" text PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"message" text NOT NULL,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "WaitingList_email_key" ON "WaitingList" ("email");