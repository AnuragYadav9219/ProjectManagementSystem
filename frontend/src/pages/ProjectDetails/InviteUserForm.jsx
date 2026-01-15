import React from "react";
import { useForm } from "react-hook-form";

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

const InviteUserForm = () => {
  const form = useForm({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Invite user data:", data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 sm:space-y-5"
      >
        <FormField
          control={form.control}
          name="email"
          rules={{
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Enter a valid email address",
            },
          }}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="Enter user email..."
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
            Invite User
          </Button>
        </DialogClose>
      </form>
    </Form>
  );
};

export default InviteUserForm;
