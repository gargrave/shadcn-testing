import React from "react";
import { Heading } from "./components/typography";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./components/ui/";

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

function Shad() {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <div>
      <Heading tag="h1">ShadCN</Heading>

      <Heading tag="h2">Button</Heading>
      <div className="flex flex-wrap place-content-center gap-1 mb-4">
        <Button variant={"default"}>Primary</Button>
        <Button variant={"secondary"}>Secondary</Button>
        <Button variant={"success"}>Success</Button>
        <Button variant={"destructive"}>Destructive</Button>
        <Button variant={"ghost"}>Ghost</Button>
        <Button variant={"link"}>Link</Button>
        <Button variant={"outline"}>Outline</Button>
      </div>

      <Heading tag="h2">Popover</Heading>
      <div className="flex place-content-center mb-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open popover</Button>
          </PopoverTrigger>

          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Dimensions</h4>
                <p className="text-sm text-muted-foreground">
                  Set the dimensions for the layer.
                </p>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <Heading tag="h2">Dialog</Heading>
      <div className="flex place-content-center mb-4">
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">Gimme a Dialog</Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>

            <DialogFooter>
              <Button
                isLoading={isLoading}
                onClick={() => {
                  setIsLoading(true);
                  wait().then(() => {
                    setDialogOpen(false);
                    setIsLoading(false);
                  });
                }}
                type="submit"
              >
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Heading tag="h2">Select</Heading>
      <div className="flex place-content-center mb-4">
        <Select
          onValueChange={(value) => {
            console.log(`Selected: ${value}`);
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default Shad;
