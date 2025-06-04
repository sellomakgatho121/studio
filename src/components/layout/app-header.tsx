import { SidebarTrigger } from "@/components/ui/sidebar";
import { BookHeart } from "lucide-react";

export function AppHeader({ title }: { title?: string }) {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 md:px-6">
      <SidebarTrigger className="md:hidden" />
      <div className="flex items-center gap-2">
        <BookHeart className="h-7 w-7 text-primary" />
        <h1 className="text-2xl font-headline font-semibold text-foreground">
          Lightbody Lexica
        </h1>
      </div>
      {title && (
        <>
          <span className="mx-2 text-2xl text-muted-foreground">/</span>
          <h2 className="text-xl font-headline text-muted-foreground">{title}</h2>
        </>
      )}
    </header>
  );
}
