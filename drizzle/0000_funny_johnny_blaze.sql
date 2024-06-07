CREATE TABLE IF NOT EXISTS "early_access" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"reason" text NOT NULL,
	"approved" boolean DEFAULT false,
	"created_at" timestamp (3) DEFAULT now(),
	"invitation_sent_at" timestamp (3),
	CONSTRAINT "early_access_email_unique" UNIQUE("email")
);
