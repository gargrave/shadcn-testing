import { Heading } from "./components/typography";
import { Button } from "./components/ui/";

function Shad() {
  return (
    <div>
      <Heading tag="h1">ShadCN</Heading>

      <Heading tag="h2">Button</Heading>
      <div className="flex place-content-center gap-1">
        <Button variant={"default"}>Primary</Button>
        <Button variant={"secondary"}>Secondary</Button>
        <Button variant={"destructive"}>Destructive</Button>
        <Button variant={"ghost"}>Ghost</Button>
        <Button variant={"link"}>Link</Button>
        <Button variant={"outline"}>Outline</Button>
      </div>
    </div>
  );
}

export default Shad;
