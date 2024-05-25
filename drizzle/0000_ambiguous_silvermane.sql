CREATE TABLE IF NOT EXISTS "early_access" (
	"id" uuid DEFAULT gen_random_uuid(),
	"name" text NOT NULL,
	"email" text NOT NULL,
	"reason" text NOT NULL,
	"approved" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now(),
	"invitation_sent_at" timestamp
);
