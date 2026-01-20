import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  MagnifyingGlassIcon,
  MixerHorizontalIcon,
} from "@radix-ui/react-icons";
import { useDispatch, useSelector } from "react-redux";
import ProjectCard from "../Project/ProjectCard";
import { fetchProjects, searchProjects } from "@/Redux/Project/Action";

export const tags = [
  "all",
  "react",
  "nextjs",
  "spring boot",
  "mysql",
  "mongodb",
  "python",
  "flask",
  "django",
];

const ProjectList = () => {
  const dispatch = useDispatch();
  const { projects, searchedProjects, loading } = useSelector(
    (store) => store.project
  );

  const [category, setCategory] = useState("all");
  const [tag, setTag] = useState("all");
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    dispatch(
      fetchProjects({
        category: category === "all" ? null : category,
        tag: tag === "all" ? null : tag,
      })
    );
  }, [category, tag, dispatch]);

  const handleCategoryChange = (value) => {
    setCategory(value);
  };

  const handleTagChange = (value) => {
    setTag(value);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setKeyword(value);

    if (value.trim()) {
      dispatch(searchProjects(value));
    }
  };

  const projectsToRender =
    keyword.trim().length > 0 ? searchedProjects : projects;

  return (
    <div className="relative px-5 lg:px-0 lg:flex gap-5 justify-center py-5">
      
      <section className="filter-section">
        <Card className="p-5 sticky top-10">
          <div className="flex justify-between lg:w-[20rem]">
            <p className="text-xl font-semibold">Filters</p>
            <Button variant="ghost" size="icon">
              <MixerHorizontalIcon />
            </Button>
          </div>

          <CardContent className="mt-5">
            <ScrollArea className="space-y-7 h-[70vh]">
              
              <div>
                <h1 className="pb-3 text-gray-400 border-b">Category</h1>
                <RadioGroup
                  className="space-y-3 pt-5"
                  value={category}
                  onValueChange={handleCategoryChange}
                >
                  {["all", "FullStack", "Frontend", "Backend"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <RadioGroupItem value={item} id={item} />
                      <Label htmlFor={item}>{item}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="pt-9">
                <h1 className="pb-3 text-gray-400 border-b">Tags</h1>
                <RadioGroup
                  className="space-y-3 pt-5"
                  value={tag}
                  onValueChange={handleTagChange}
                >
                  {tags.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <RadioGroupItem value={item} id={item} />
                      <Label htmlFor={item}>{item}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

            </ScrollArea>
          </CardContent>
        </Card>
      </section>

      <section className="projectListSection w-full lg:w-3xl">
        <div className="flex gap-2 items-center pb-5">
          <div className="relative w-full">
            <Input
              placeholder="Search Project"
              onChange={handleSearchChange}
              className="pl-9"
            />
            <MagnifyingGlassIcon className="absolute top-3 left-3 text-gray-400" />
          </div>
        </div>

        <div className="space-y-5 min-h-[74vh]">
          {loading && <p className="text-center">Loading...</p>}

          {!loading && projectsToRender.length === 0 && (
            <p className="text-center text-gray-400">
              No projects found
            </p>
          )}

          {projectsToRender.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectList;
