import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const HomePage = () => {
  return (
    <div className="p-10 gap-10 flex flex-col">
      <div>
        <Button variant="elevated">I am a button</Button>
      </div>
      <div>
        <Input placeholder="I am an input" />
      </div>
      <div>
        <Progress value={50} />
      </div>
      <div>
        <Textarea placeholder="I am a text area" />
      </div>
      <div>
        <Checkbox />
      </div>
    </div>
  );
};

export default HomePage;
