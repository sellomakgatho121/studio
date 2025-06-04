import { glossaryData, DefaultPageSlug } from "@/data/glossary";
import { ArticleRenderer } from "@/components/content/article-renderer";
import { AppHeader } from "@/components/layout/app-header";
import { ScrollArea } from "@/components/ui/scroll-area";

export const metadata = {
  title: `Lightbody Lexica | ${glossaryData[DefaultPageSlug]?.title || 'Lightbody'}`,
};

export default function LightbodyPage() {
  const pageData = glossaryData[DefaultPageSlug];

  if (!pageData) {
    return <div className="p-8 text-center">Content not found.</div>;
  }

  return (
    <div className="flex flex-col h-screen">
      <AppHeader title={pageData.title} />
      <ScrollArea className="flex-1">
        <ArticleRenderer page={pageData} />
      </ScrollArea>
    </div>
  );
}
