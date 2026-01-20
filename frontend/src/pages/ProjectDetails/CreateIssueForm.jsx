import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createIssue } from "@/Redux/Issue/Action";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const CreateIssueForm = ({ status }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const form = useForm({
    defaultValues: {
      issueName: "",
      description: "",
    },
  });

  const onSubmit = (data) => {
    data.projectId = id;
    dispatch(
      createIssue({
        title: data.issueName,
        description: data.description,
        projectId: id,
        status,
      }),
    );
    console.log("Create issue data:", data);
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 sm:space-y-5"
        >
          <FormField
            control={form.control}
            name="issueName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Enter an issue..."
                    className="w-full h-11 sm:h-12 px-3 sm:px-4 text-sm sm:text-base border border-gray-700 focus-visible:ring-2"
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
                    placeholder="Enter description..."
                    className="w-full h-11 sm:h-12 px-3 sm:px-4 text-sm sm:text-base border border-gray-700 focus-visible:ring-2"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Close dialog ONLY after successful submit */}
          <DialogClose asChild>
            <Button type="submit" className="w-full">
              Create Issue
            </Button>
          </DialogClose>
        </form>
      </Form>
    </div>
  );
};

export default CreateIssueForm;
