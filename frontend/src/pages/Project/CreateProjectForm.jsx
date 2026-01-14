import React from "react";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { tags } from "../ProjectList/ProjectList";
import { Cross1Icon } from "@radix-ui/react-icons";

const CreateProjectForm = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      category: "",
      tags: [],
    },
  });

  const onSubmit = (data) => {
    console.log("Create project data:", data);
  };

  const handleTagsChange = (newValue) => {
    const currentTags = form.getValues("tags");
    const updatedTags = currentTags.includes(newValue)
      ? currentTags.filter((tag) => tag !== newValue)
      : [...currentTags, newValue];
    form.setValue("tags", updatedTags);
  };

  return (
    <div className="w-full max-w-lg mx-auto px-1 sm:px-0">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 sm:space-y-5"
        >
          {/* Project Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Project Name..."
                    className="w-full h-11 mt-1 sm:h-12 px-3 sm:px-4 text-sm sm:text-base border border-gray-700 focus-visible:ring-2"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Project Description..."
                    className="w-full h-11 mt-1 sm:h-12 px-3 sm:px-4 text-sm sm:text-base border border-gray-700 focus-visible:ring-2"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    defaultValue="FullStack"
                    value={field.value}
                    onValueChange={(value) => {
                      field.onChange(value);
                    }}
                    // className="w-full h-11 mt-1 sm:h-12 px-3 sm:px-4 text-sm sm:text-base border border-gray-700 focus-visible:ring-2"
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fullstack">FullStack</SelectItem>
                      <SelectItem value="frontend">Frontend</SelectItem>
                      <SelectItem value="backend">Backend</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    onValueChange={(value) => {
                      handleTagsChange(value);
                    }}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Tags" />
                    </SelectTrigger>
                    <SelectContent>
                      {tags.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>

                {/* Selected tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {field.value.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-700 bg-background text-sm"
                    >
                      <span>{item}</span>

                      {/* Remove button */}
                      <button
                        type="button"
                        onClick={() => handleTagsChange(item)}
                        className="text-gray-400 hover:text-red-500 transition"
                      >
                        <Cross1Icon className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* <DialogClose asChild>
            {false ? (
              <div>
                <p>
                  You can create only 3 project with free plan, please upgrade your plan
                </p>
              </div>
            ) : (
              <Button onSubmit={() => onClick(onSubmit)} className="cursor-pointer">Create Project</Button>
            )}
          </DialogClose> */}

          <DialogClose asChild>
            <Button type="submit" className="cursor-pointer w-full">
              Create Project
            </Button>
          </DialogClose>
        </form>
      </Form>
    </div>
  );
};

export default CreateProjectForm;
