import { glossaryData, GlobalNavLinks } from "@/data/glossary";
import { ArticleRenderer } from "@/components/content/article-renderer";
import { AppHeader } from "@/components/layout/app-header";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return GlobalNavLinks.map((link) => ({
    slug: link.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const pageData = glossaryData[params.slug];
  if (!pageData) {
    return {
      title: 'Page Not Found | Lightbody Lexica',
    };
  }
  return {
    title: `${pageData.title} | Lightbody Lexica`,
    description: pageData.introduction,
  };
}


export default function GlossaryContentPage({ params }: PageProps) {
  const { slug } = params;
  const pageData = glossaryData[slug];

  if (!pageData) {
    notFound();
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
