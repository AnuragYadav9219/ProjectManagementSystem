import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useEffect } from "react";
import IssueCard from "./IssueCard";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import CreateIssueForm from "./CreateIssueForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchIssues } from "@/Redux/Issue/Action";
import { useParams } from "react-router-dom";

const IssueList = ({ title, status }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const issue = useSelector((store) => store.issue);

  useEffect(() => {
    dispatch(fetchIssues(id));
  }, [id]);

  return (
    <div>
      <Dialog>
        <Card className="w-full md:w-75 lg:w-77.5">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent className="px-2">
            <div className="space-y-2">
              {issue.issues
                .filter((issue) => issue.status == status)
                .map((item) => (
                  <IssueCard key={item.id} item={item} projectId={id} />
                ))}
            </div>
          </CardContent>

          <CardFooter>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className=" cursor-pointer border flex items-center gap-2"
              >
                <PlusIcon />
                Create Issue
              </Button>
            </DialogTrigger>
          </CardFooter>
        </Card>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Issue</DialogTitle>
            <DialogDescription>
              Fill in the details below to create a new issue for this project.
            </DialogDescription>
          </DialogHeader>

          <CreateIssueForm status={status} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default IssueList;
