CREATE TABLE IF NOT EXISTS "modules" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" text NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"code" text NOT NULL,
	"icon" text DEFAULT 'default' NOT NULL,
	"color" text DEFAULT 'default' NOT NULL,
	"archived" boolean DEFAULT false NOT NULL,
	"credits" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"modified_at" timestamp DEFAULT now() NOT NULL,
	"last_visited" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "modules_id_unique" UNIQUE("id")
);
