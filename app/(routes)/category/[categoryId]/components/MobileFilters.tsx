"use client";
import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";
import { Color, Size } from "@/types";
import { Dialog } from "@headlessui/react";
import { PlusIcon, XIcon } from "lucide-react";
import { useState } from "react";
import Filter from "./Filter";

interface MobileFiltersProps {
  colors: Color[];
  sizes: Size[];
}

export default function MobileFilters({
  colors,
  sizes,
}: MobileFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  function onOpen() {
    setIsOpen(true);
  }
  function onClose() {
    setIsOpen(false);
  }
  return (
    <>
      <Button
        onClick={onOpen}
        className="flex items-center gap-x-2 bg-black text-white lg:hidden"
      >
        Filters <PlusIcon size={20} />
      </Button>
      <Dialog
        open={isOpen}
        onClose={onClose}
        as="div"
        className={"relative z-40 lg:hidden"}
      >
        {/* Background */}
        <div className="fixed inset-0 bg-opacity-25 bg-black" />
        {/* Dialog Position */}
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col  overflow-y-auto bg-white shadow-xl py-4 pb-6">
            {/* Close button */}
            <div className="flex items-center justify-end px-4">
              <IconButton
                icon={<XIcon size={15} />}
                onClick={onClose}
              />
            </div>

            {/* Render the filters */}

            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter
                valueKey="colorId"
                name="Colors"
                data={colors}
              />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
