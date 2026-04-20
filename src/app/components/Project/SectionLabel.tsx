export default function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="h-8 w-2 rounded-full bg-porto_purple" />
      <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-500">
        {children}
      </h2>
    </div>
  );
}
