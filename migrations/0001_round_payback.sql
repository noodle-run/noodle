CREATE TABLE `noodle_todo` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`moduleId` integer NOT NULL,
	`name` text NOT NULL,
	`note` text,
	`createdAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`dueAt` text NOT NULL,
	`priority` text NOT NULL,
	`checked` integer DEFAULT false NOT NULL
);
