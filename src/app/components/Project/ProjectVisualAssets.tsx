import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoLockClosedSharp } from "react-icons/io5";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projectsBento } from "@/data/projects_bento";

type ProjectVisualAssetsProps = {
  project: (typeof projectsBento)[number];
};

export default function ProjectVisualAssets({
  project,
}: ProjectVisualAssetsProps) {
  return (
    <motion.div className="border-b border-neutral-300 p-8 lg:p-12">
      <SectionLabel>Visual Assets</SectionLabel>

      {project.images && project.images.length > 0 ? (
        <AssetCarousel images={project.images} />
      ) : (
        <ProprietaryPlaceholder />
      )}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="h-8 w-2 rounded-full bg-porto_purple" />
      <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-500">
        {children}
      </h2>
    </div>
  );
}

function AssetCarousel({ images }: { images: string[] }) {
  return (
    <Carousel opts={{ align: "start" }} className="w-full">
      <CarouselContent>
        {Array.from({
          length: Math.ceil(images.length / 4),
        }).map((_, slideIndex) => {
          const slideImages = images.slice(slideIndex * 4, slideIndex * 4 + 4);
          return (
            <CarouselItem key={slideIndex}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {slideImages.map((imgSrc, imgIndex) => (
                  <ImageWithLoading
                    key={imgIndex}
                    src={imgSrc}
                    alt={`Asset ${slideIndex * 4 + imgIndex + 1}`}
                    idx={slideIndex * 4 + imgIndex + 1}
                  />
                ))}
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>

      {images.length > 4 && (
        <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 justify-center gap-4">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      )}
    </Carousel>
  );
}

function ImageWithLoading({
  src,
  alt,
  idx,
}: {
  src: string;
  alt: string;
  idx: number;
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-neutral-300 bg-neutral-100">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center text-sm text-neutral-500">
          loading image {idx}
        </div>
      )}
      <Image
        src={src}
        fill
        className="object-cover transition-transform duration-500 hover:scale-105"
        alt={alt}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}

function ProprietaryPlaceholder() {
  return (
    <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg border border-neutral-300 bg-neutral-100">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="relative flex items-center gap-3 text-neutral-400">
        <IoLockClosedSharp className="text-xl" />
        <span className="text-lg font-medium uppercase tracking-widest">
          Proprietary Work
        </span>
      </div>
    </div>
  );
}
