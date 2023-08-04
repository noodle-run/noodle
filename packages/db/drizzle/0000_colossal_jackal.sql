DO $$ BEGIN
 CREATE TYPE "WaitingListReason" AS ENUM('STUDENT', 'PROJECT', 'BOTH');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Feedback" (
	"id" text PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" text NOT NULL,
	"message" text NOT NULL,
	"createdAt" timestamp(3) DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "WaitingList" (
	"id" text PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"reason" "WaitingListReason" NOT NULL,
	"approved" boolean DEFAULT false NOT NULL,
	"createdAt" timestamp(3) DEFAULT now() NOT NULL,
	CONSTRAINT "WaitingList_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "WaitingList_email_key" ON "WaitingList" ("email");