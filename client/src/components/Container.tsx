export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="sm:p-8 px-4 py-8 w-full bg-zinc-900 min-h-[calc(100vh-73px)]">{children}</div>
  );
}
