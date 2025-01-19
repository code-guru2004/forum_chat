import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaBugSlash } from "react-icons/fa6";
import { AiFillNotification } from "react-icons/ai";

export function Version() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-transparent text-white">Version</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex gap-2 items-center mb-1">
            <AiFillNotification className="text-2xl text-blue-600" /> What's New
          </DialogTitle>
          <p className="text-sm text-slate-500 mb-2">
            Version: <span>1.0.1</span>
          </p>
          <DialogDescription className="flex items-center justify-center gap-1">
            <MdOutlineDesignServices className="text-2xl text-red-400" /> Minor
            Design Changes.
          </DialogDescription>
          <DialogDescription className="flex items-center justify-center gap-1">
            <FaBugSlash className="text-2xl text-green-500" />
            Minor Bug Fixed
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
