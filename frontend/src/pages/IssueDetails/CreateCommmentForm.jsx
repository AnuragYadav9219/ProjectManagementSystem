import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createComment } from "@/Redux/Comment/Action";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const CreateCommmentForm = ({ issueId }) => {
  const dispatch = useDispatch();

  const form = useForm({
    defaultValues: {
      content: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(createComment({ content: data.content, issueId }));
    form.reset({
      content: "",
    });
    
    console.log("Invite user data:", data);
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
            name="content"
            render={({ field }) => (
              <FormItem>
                <div className="flex gap-2">
                  <div>
                    <Avatar>
                      <AvatarFallback>R</AvatarFallback>
                    </Avatar>
                  </div>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Add comment here..."
                      className="w-[20rem] "
                    />
                  </FormControl>

                  <Button type="submit" className="cursor-pointer">
                    Save
                  </Button>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default CreateCommmentForm;
