import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import image from "/public/svg/logo/arduino.svg"
import Image from "next/image";

export default function SkillCard() {
    return (
       <Item
        variant="outline"
        className="group w-full flex-nowrap justify-center gap-0 overflow-hidden px-3 py-3 transition-all duration-300 hover:shadow-sm sm:px-4 sm:py-4 sm:group-hover:justify-start sm:group-hover:gap-4"
       >
        <ItemMedia className="size-12 sm:size-14 md:size-16 lg:size-14 xl:size-16">
            <Image
              src={image}
              alt="Arduino"
              className="size-full object-contain"
              width={64}
              height={64}
            />
        </ItemMedia>
        <ItemContent className="max-w-0 opacity-0 transition-all duration-300 sm:group-hover:max-w-[14rem] sm:group-hover:opacity-100">
            <ItemTitle className="whitespace-nowrap text-base sm:text-lg md:text-base lg:text-lg">Arduino</ItemTitle>
        </ItemContent>
       </Item>
    )
}