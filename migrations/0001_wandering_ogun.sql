CREATE TABLE `noodle_subtask` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`notes` text NOT NULL,
	`done` integer DEFAULT false,
	`doneAt` text,
	`task_id` integer NOT NULL,
	`createdAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updatedAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`task_id`) REFERENCES `noodle_task`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `noodle_task` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`notes` text NOT NULL,
	`done` integer DEFAULT false,
	`doneAt` text,
	`dueDate` text NOT NULL,
	`priority` text NOT NULL,
	`tags` text,
	`module_id` integer NOT NULL,
	`createdAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updatedAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`module_id`) REFERENCES `noodle_module`(`id`) ON UPDATE no action ON DELETE no action
);
