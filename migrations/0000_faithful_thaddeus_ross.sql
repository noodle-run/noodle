CREATE TABLE `noodle_feedback` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`email` text NOT NULL,
	`message` text NOT NULL,
	`timestamp` text DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE `noodle_module` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`userId` text NOT NULL,
	`name` text NOT NULL,
	`code` text NOT NULL,
	`icon` text DEFAULT 'graduation-cap' NOT NULL,
	`color` text DEFAULT 'primary' NOT NULL,
	`credits` integer NOT NULL,
	`createdAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`lastVisited` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE `noodle_notebooks` (
	`id` text,
	`userId` text NOT NULL,
	`title` text DEFAULT 'Untitled',
	`icon` text DEFAULT 'book',
	`content` text DEFAULT '',
	`moduleId` text NOT NULL,
	`createdAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`lastVisited` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`moduleId`) REFERENCES `noodle_module`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `noodle_waitlist` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`reason` text NOT NULL,
	`createdAt` text DEFAULT CURRENT_TIMESTAMP,
	`invitationSentAt` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `noodle_waitlist_email_unique` ON `noodle_waitlist` (`email`);