"use client";

import { Icon, iconNames, type IconNames } from "@/components/icon";
import { ResizablePanel } from "@/components/resizable-panel";
import { ScrollArea } from "@/components/scroll-area";
import { useZodForm } from "@/hooks/useZodForm";
import { trpc } from "@/trpc/client";
import { cn } from "@/utils/cn";
import {
  Button,
  Divider,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Skeleton,
} from "@nextui-org/react";
import { TRPCClientError } from "@trpc/client";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronRightIcon, PlusIcon, SearchIcon } from "lucide-react";
import NextLink from "next/link";
import {
  Suspense,
  useState,
  type Dispatch,
  type FC,
  type SetStateAction,
} from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Controller, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { IconsGrid } from "./icons-grid";

const colorBoxStyles = cva([], {
  variants: {
    color: {
      primary: "bg-primary",
      default: "bg-default",
      red: "bg-red-500",
      orange: "bg-orange-500",
      amber: "bg-amber-500",
      yellow: "bg-yellow-500",
      lime: "bg-lime-500",
      green: "bg-green-500",
      emerald: "bg-emerald-500",
      teal: "bg-teal-500",
      cyan: "bg-cyan-500",
      sky: "bg-sky-500",
      blue: "bg-blue-500",
      indigo: "bg-indigo-500",
      violet: "bg-violet-500",
      purple: "bg-purple-500",
      fuchsia: "bg-fuchsia-500",
      pink: "bg-pink-500",
      rose: "bg-rose-500",
    },
  },
});

const colors = [
  "primary",
  "default",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
] as const;

const ModulesList = () => {
  const [modules] = trpc.module.get.all.useSuspenseQuery();

  if (modules?.length === 0) {
    return (
      <p className="pl-4 text-sm text-default-300">
        Create modules to organize your course study material.
      </p>
    );
  }

  return (
    <ul>
      {modules
        ?.slice()
        .sort((a, b) => Date.parse(b.lastVisited) - Date.parse(a.lastVisited))
        .map((module) => {
          return (
            <li key={module.id}>
              <Button
                as={NextLink}
                href={`/app/modules/${module.id}`}
                startContent={
                  <Icon
                    name={module.icon as IconNames}
                    strokeWidth={1.5}
                    size={20}
                  />
                }
                className="w-full justify-start text-default-500 hover:text-default-900"
                variant="light"
                size="md"
              >
                {module.name}
              </Button>
            </li>
          );
        })}
    </ul>
  );
};

const ModuleIconPicker: FC<{
  setStep: Dispatch<SetStateAction<number>>;
  setIcon: Dispatch<SetStateAction<IconNames>>;
}> = ({ setStep, setIcon }) => {
  const [value, setValue] = useState<string>("");

  return (
    <>
      <div className="flex flex-col gap-1">
        <div className="text-medium font-bold">Select an icon</div>
        <div className="max-w-[40ch] text-small text-default-600">
          You can select an icon for your module to make it easier to identify.
        </div>
        <Divider className="mt-2" />
      </div>
      <Input
        size="md"
        variant="bordered"
        startContent={<SearchIcon size={16} />}
        placeholder="Search for an icon"
        value={value}
        onValueChange={setValue}
      />
      <IconsGrid
        icons={iconNames.filter((name) =>
          name.toLowerCase().includes(value?.toLowerCase() ?? ""),
        )}
        setIcon={setIcon}
        setStep={setStep}
      />
    </>
  );
};

const createModuleSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Module name must be at least 3 characters long." }),
  code: z.string().min(3, { message: "Minimum 3 characters." }),
  credits: z.string().nonempty(),
  color: z.string().nonempty(),
  icon: z.string().nonempty(),
});

const CreateModulePopover = () => {
  const [step, setStep] = useState(0);
  const [icon, setIcon] = useState<IconNames>("GraduationCap");
  const [color, setColor] =
    useState<NonNullable<VariantProps<typeof colorBoxStyles>["color"]>>(
      "primary",
    );

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useZodForm({
    schema: createModuleSchema,
    defaultValues: {
      code: "",
      name: "",
      credits: "",
      color,
      icon,
    },
  });

  const [popoverOpen, setPopoverOpen] = useState(false);

  const utils = trpc.useUtils();

  const { mutateAsync } = trpc.module.post.create.useMutation({
    onSuccess: async () => {
      await utils.module.get.all.invalidate();
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof createModuleSchema>> = async (
    data,
  ) => {
    try {
      await mutateAsync({
        ...data,
        color: color,
        icon: icon,
        credits: Number(data.credits),
      });
      reset();
      setIcon("GraduationCap");
      setColor("primary");
      toast.success("Module created successfully!");
      setPopoverOpen(false);
    } catch (error) {
      if (error instanceof TRPCClientError) {
        toast.error(error.message);
      }
    }
  };

  return (
    <Popover
      isOpen={popoverOpen}
      onOpenChange={() => {
        setPopoverOpen((prev) => !prev);
        setStep(0);
      }}
      placement="right"
    >
      <PopoverTrigger>
        <Button
          isIconOnly
          variant="light"
          size="sm"
          className="text-default-400 hover:text-default-900"
        >
          <PlusIcon size={16} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex w-[328px] flex-col border border-default-200 p-5 dark:border-default-100">
        <ResizablePanel>
          <form
            className="flex w-full flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            {step === 0 && (
              <>
                <div className="flex flex-col gap-1">
                  <div className="text-medium font-bold">
                    Create a new module
                  </div>
                  <div className="max-w-[40ch] text-small text-default-600">
                    A module is like a hub for a subject&apos;s study material
                    such as notes, flashcards...etc
                  </div>
                  <Divider className="mt-2" />
                </div>
                <Controller
                  control={control}
                  name="name"
                  render={({ field }) => (
                    <Input
                      {...field}
                      label="Name"
                      placeholder="Artificial Intelligence"
                      size="md"
                      radius="md"
                      variant="bordered"
                      labelPlacement="outside"
                      isRequired
                      isInvalid={!!errors.name}
                      errorMessage={errors.name?.message}
                    />
                  )}
                />

                <div className="flex gap-3">
                  <Controller
                    control={control}
                    name="code"
                    render={({ field }) => (
                      <Input
                        {...field}
                        label="Code"
                        placeholder="AI001"
                        size="md"
                        variant="bordered"
                        radius="md"
                        isRequired
                        labelPlacement="outside"
                        isInvalid={!!errors.code}
                        errorMessage={errors.code?.message}
                      />
                    )}
                  />

                  <Controller
                    control={control}
                    name="credits"
                    render={({ field }) => (
                      <Input
                        {...field}
                        label="Credits"
                        type="number"
                        placeholder="15"
                        size="md"
                        variant="bordered"
                        isRequired
                        radius="md"
                        labelPlacement="outside"
                        isInvalid={!!errors.credits}
                        errorMessage={errors.credits?.message}
                      />
                    )}
                  />
                </div>

                <Button
                  endContent={
                    <div className="flex items-center gap-4">
                      <Icon name={icon} strokeWidth={1.5} size={20} />
                      <ChevronRightIcon
                        className="text-default-500"
                        size={16}
                      />
                    </div>
                  }
                  size="md"
                  radius="md"
                  className="justify-between px-3"
                  variant="bordered"
                  onPress={() => setStep(1)}
                >
                  <span className="text-default-500">Icon</span>
                </Button>
                <Button
                  endContent={
                    <div className="flex items-center gap-4">
                      <div
                        className={cn(
                          "h-5 w-5 rounded-small bg-primary-500",
                          colorBoxStyles({ color }),
                        )}
                      />
                      <ChevronRightIcon
                        className="text-default-500"
                        size={16}
                      />
                    </div>
                  }
                  size="md"
                  radius="md"
                  className="justify-between px-3"
                  variant="bordered"
                  onPress={() => setStep(2)}
                >
                  <span className="text-default-500">Color</span>
                </Button>

                <Button type="submit" color="primary" className="font-semibold">
                  Create module
                </Button>
              </>
            )}

            {step === 1 && (
              <ModuleIconPicker setIcon={setIcon} setStep={setStep} />
            )}

            {step === 2 && (
              <>
                <div className="flex flex-col gap-1">
                  <div className="text-medium font-bold">Select a color</div>
                  <div className="max-w-[40ch] text-small text-default-600">
                    You can select a color for your module to be able to easily
                    identify it.
                  </div>
                  <Divider className="mt-2" />
                  <div className="mt-4 grid grid-cols-7">
                    {colors.map((c) => (
                      <div
                        key={c}
                        className="flex items-center justify-center pb-2"
                      >
                        <Button
                          isIconOnly
                          variant="light"
                          size="sm"
                          radius="md"
                          className="transition-transform hover:scale-110"
                          onClick={() => {
                            setStep(0);
                            setColor(c);
                          }}
                        >
                          <div
                            className={cn(
                              colorBoxStyles({ color: c }),
                              "h-full w-full",
                            )}
                          />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </form>
        </ResizablePanel>
      </PopoverContent>
    </Popover>
  );
};

const ModuleLinkSkeleton = () => {
  return <Skeleton className="h-[40px] w-full rounded-md" />;
};

export function SideMenuModules() {
  return (
    <section className="flex flex-1 flex-col overflow-hidden">
      <div className="flex items-center justify-between px-4 pb-2">
        <h3 className="text-sm text-default-400">Modules</h3>

        <CreateModulePopover />
      </div>
      <ScrollArea className="mr-3 flex min-h-min overflow-auto pr-3">
        <ErrorBoundary fallback={<p>Something wrong happened...</p>}>
          <Suspense fallback={<ModuleLinkSkeleton />}>
            <ModulesList />
          </Suspense>
        </ErrorBoundary>
      </ScrollArea>
    </section>
  );
}
