import { Button } from "@/components/ui/button";
import { projectsBento } from "@/data/projects_bento";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

type ProjectFooterProps = {
  projectIndex: number;
};

export default function ProjectFooter({ projectIndex }: ProjectFooterProps) {
  return (
    <footer className="flex flex-col items-start justify-between border-t border-neutral-300 px-8 py-8 text-xs sm:flex-row sm:items-center">
      <div className="mb-4 sm:mb-0">Copyright © 2024 - Reynard Hansel</div>
      <div className="flex gap-4" id="next-prev">
        <Button
          variant="outline"
          className="hover:bg-porto_purple hover:text-broken_white"
          size="sm"
          disabled={projectIndex <= 0}
          asChild={projectIndex > 0}
        >
          {projectIndex > 0 ? (
            <Link href={`/project/${projectIndex}`}>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous
            </Link>
          ) : (
            <>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous
            </>
          )}
        </Button>
        <Button
          variant="outline"
          className="hover:bg-porto_purple hover:text-broken_white"
          size="sm"
          disabled={projectIndex >= projectsBento.length - 1}
          asChild={projectIndex < projectsBento.length - 1}
        >
          {projectIndex < projectsBento.length - 1 ? (
            <Link href={`/project/${projectIndex + 2}`}>
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          ) : (
            <>
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </footer>
  );
}
