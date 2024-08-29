import Link from "next/link";
import React, { ReactNode } from "react";

function isValidUrl(url: string) {
  return url.startsWith("http://") || url.startsWith("https://");
}

type ProjectDetailsProps = {
  techstack: string;
  newLearned: string;
  github: string;
  website?: string;
  additional?: ReactNode;
};

export default function ProjectDetails({
  techstack,
  newLearned,
  github,
  website,
  additional,
}: ProjectDetailsProps) {
  return (
    <div className="mt-6 hidden flex-col pl-4 lg:flex">
      <div className="flex items-center gap-3 tracking-widest">
        <p className="text-lg font-medium">Techstack:</p>
        <p className="text-gray-500">{techstack}</p>
      </div>
      <div className="flex items-center gap-3 tracking-widest">
        <p className="text-lg font-medium">New:</p>
        <p className="text-gray-500">{newLearned}</p>
      </div>
      <div className="flex items-center gap-3 tracking-widest">
        <p className="whitespace-nowrap text-lg font-medium">GitHub Repo:</p>
        {isValidUrl(github) ? (
          <Link
            className="overflow-hidden text-ellipsis whitespace-nowrap tracking-wider underline"
            href={`${github}`}
          >
            {github}
          </Link>
        ) : (
          <p className="overflow-hidden text-ellipsis whitespace-nowrap tracking-wider">
            {github}
          </p>
        )}
      </div>
      {website && (
        <div className="flex items-center gap-3 tracking-widest">
          <p className="whitespace-nowrap text-lg font-medium">Website:</p>
          <Link
            className="overflow-hidden text-ellipsis whitespace-nowrap tracking-wider underline"
            href={`${website}`}
          >
            {website}
          </Link>
        </div>
      )}
      <div className="flex items-center gap-3 tracking-widest">
        {additional}
      </div>
    </div>
  );
}
