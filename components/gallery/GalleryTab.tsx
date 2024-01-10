import Image from "next/image";
import { Image as ImageType } from "@/types";
import { cn } from "@/lib/utils";
import { Tab } from "@headlessui/react";
interface GalleryTabProps {
  image: ImageType;
}
export default function GalleryTab({ image }: GalleryTabProps) {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => {
        return (
          <div>
            <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
              <Image
                fill
                src={image.url}
                alt=""
                className="object-cover object-center"
              />
            </span>
            <span
              className={cn(
                "aboslute inset-0 ring-2 ring-offset-2 rounded-md",
                selected ? "ring-black" : "ring-transparent"
              )}
            />
          </div>
        );
      }}
    </Tab>
  );
}
