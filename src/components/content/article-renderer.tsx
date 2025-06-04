import type { GlossaryPage, GlossarySection, ContentItem } from "@/data/glossary";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { DeepDiveTool } from "./deep-dive-tool";

interface ArticleRendererProps {
  page: GlossaryPage;
}

let animationDelay = 0;
const getAnimationDelay = () => {
  animationDelay += 100;
  if (animationDelay > 500) animationDelay = 100; // Reset to loop delays
  return `${animationDelay}ms`;
}

function ContentItemDisplay({ item, pageTitle }: { item: ContentItem, pageTitle: string }) {
  const style = { animationDelay: getAnimationDelay() };
  switch (item.type) {
    case "paragraph":
      return <p className="mb-4 text-lg leading-relaxed animate-fadeIn" style={style}>{item.text}</p>;
    case "image":
      return (
        <div className="my-6 text-center animate-fadeIn" style={style}>
          <Image
            src={item.src}
            alt={item.alt}
            width={600}
            height={400}
            className="mx-auto rounded-lg shadow-lg object-cover"
            data-ai-hint={item.dataAiHint}
          />
          <p className="text-sm text-muted-foreground mt-2">{item.alt}</p>
        </div>
      );
    case "list":
      const ListTag = item.ordered ? 'ol' : 'ul';
      return (
        <ListTag className={`mb-4 ml-6 ${item.ordered ? 'list-decimal' : 'list-disc'} text-lg space-y-1 animate-fadeIn`} style={style}>
          {item.items.map((text, index) => <li key={index}>{text}</li>)}
        </ListTag>
      );
    case "quote":
      return (
        <blockquote className="my-6 p-4 border-l-4 border-primary bg-muted italic text-lg animate-fadeIn" style={style}>
          <p className="mb-2">{item.text}</p>
          {item.source && <footer className="text-sm text-muted-foreground">— {item.source}</footer>}
        </blockquote>
      );
    default:
      return null;
  }
}

export function ArticleRenderer({ page }: ArticleRendererProps) {
  animationDelay = 0; // Reset animation delay for each article render
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <header className="mb-8 animate-fadeIn" style={{ animationDelay: getAnimationDelay() }}>
        <h1 className="font-headline text-5xl font-bold text-primary mb-2">{page.title}</h1>
        <p className="text-xl text-muted-foreground">{page.introduction}</p>
      </header>
      <Separator className="my-8" />
      
      {page.sections.map((section) => {
        const sectionStyle = { animationDelay: getAnimationDelay() };
        return (
          <section key={section.id} id={section.id} className="mb-12 scroll-mt-20">
            {section.subtitle && (
              <h2 className="font-headline text-3xl font-semibold mb-4 border-b border-primary/50 pb-2 animate-fadeIn" style={sectionStyle}>
                {section.subtitle}
              </h2>
            )}
            {section.content.map((item, index) => (
              <ContentItemDisplay key={`${section.id}-${index}`} item={item} pageTitle={page.title} />
            ))}
            {section.deepDiveContext && (
              <div className="my-6 animate-fadeIn" style={{ animationDelay: getAnimationDelay() }}>
                <DeepDiveTool
                  textToAnalyze={section.deepDiveContext}
                  currentSectionTitle={`${page.title} - ${section.subtitle || 'Introduction'}`}
                />
              </div>
            )}
            <Separator className="my-8 last-of-type:hidden" />
          </section>
        );
      })}
    </div>
  );
}
