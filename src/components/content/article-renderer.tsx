
import type { GlossaryPage, GlossarySection, ContentItem, RelatedTopic } from "@/data/glossary";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { DeepDiveTool } from "./deep-dive-tool";
import { Button } from "@/components/ui/button";
import { ArrowRight, Link as LinkIcon } from "lucide-react"; // Added LinkIcon

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
            width={item.src.includes('600x400') ? 600 : item.src.includes('500x350') ? 500 : item.src.includes('600x350') ? 600 : item.src.includes('400x400') ? 400 : item.src.includes('450x450') ? 450 : item.src.includes('700x300') ? 700 : item.src.includes('700x450') ? 700 : item.src.includes('650x450') ? 650 : item.src.includes('600x500') ? 600 : item.src.includes('550x550') ? 550 : item.src.includes('750x350') ? 750 : item.src.includes('500x500') ? 500 : item.src.includes('650x400') ? 650 : item.src.includes('550x380') ? 550 : item.src.includes('400x500') ? 400 : item.src.includes('500x400') ? 500 : item.src.includes('650x420') ? 650 : 600}
            height={item.src.includes('600x400') ? 400 : item.src.includes('500x350') ? 350 : item.src.includes('600x350') ? 350 : item.src.includes('400x400') ? 400 : item.src.includes('450x450') ? 450 : item.src.includes('700x300') ? 300 : item.src.includes('700x450') ? 450 : item.src.includes('650x450') ? 450 : item.src.includes('600x500') ? 500 : item.src.includes('550x550') ? 550 : item.src.includes('750x350') ? 350 : item.src.includes('500x500') ? 500 : item.src.includes('650x400') ? 400 : item.src.includes('550x380') ? 380 : item.src.includes('400x500') ? 500 : item.src.includes('500x400') ? 400 : item.src.includes('650x420') ? 420 : 400}
            className="mx-auto rounded-lg shadow-lg object-cover"
            data-ai-hint={item.dataAiHint}
            priority={item.src.includes('700x450') || item.src.includes('650x450')} // Prioritize larger header-like images
          />
          {item.alt && <p className="text-sm text-muted-foreground mt-2">{item.alt}</p>}
        </div>
      );
    case "list":
      const ListTag = item.ordered ? 'ol' : 'ul';
      return (
        <ListTag className={`mb-4 ml-6 ${item.ordered ? 'list-decimal' : 'list-disc'} text-lg space-y-2 animate-fadeIn`} style={style}>
          {item.items.map((text, index) => <li key={index} className="leading-relaxed">{text}</li>)}
        </ListTag>
      );
    case "quote":
      return (
        <blockquote className="my-6 p-4 border-l-4 border-primary bg-muted/70 italic text-lg animate-fadeIn rounded-r-md shadow" style={style}>
          <p className="mb-2">{item.text}</p>
          {item.source && <footer className="text-sm text-muted-foreground">— {item.source}</footer>}
        </blockquote>
      );
    default:
      return null;
  }
}

function RelatedTopicsDisplay({ topics }: { topics: RelatedTopic[] }) {
  if (!topics || topics.length === 0) {
    return null;
  }
  animationDelay = 0; // Reset for this new section
  return (
    <section className="mt-12 pt-8 border-t animate-fadeIn" style={{ animationDelay: getAnimationDelay() }}>
      <h3 className="font-headline text-3xl font-semibold mb-6 text-primary">Related Topics</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => {
          const IconComponent = topic.icon || LinkIcon;
          return (
            <Card key={topic.slug} className="hover:shadow-xl transition-shadow duration-300 animate-fadeIn bg-card/70" style={{ animationDelay: getAnimationDelay() }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <IconComponent className="h-6 w-6 text-accent" />
                  {topic.title}
                </CardTitle>
                <CardDescription>{topic.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={`/${topic.slug}`} passHref legacyBehavior>
                  <Button variant="outline" className="w-full group">
                    Explore Topic
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}


export function ArticleRenderer({ page }: ArticleRendererProps) {
  animationDelay = 0; // Reset animation delay for each article render
  return (
    <article className="max-w-4xl mx-auto p-4 md:p-8">
      <header className="mb-8 animate-fadeIn" style={{ animationDelay: getAnimationDelay() }}>
        <h1 className="font-headline text-5xl font-bold text-primary mb-3">{page.title}</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">{page.introduction}</p>
      </header>
      <Separator className="my-8" />
      
      {page.sections.map((section) => {
        const sectionStyle = { animationDelay: getAnimationDelay() };
        return (
          <section key={section.id} id={section.id} className="mb-12 scroll-mt-20">
            {section.subtitle && (
              <h2 className="font-headline text-3xl font-semibold mb-6 border-b-2 border-primary/30 pb-3 animate-fadeIn" style={sectionStyle}>
                {section.subtitle}
              </h2>
            )}
            {section.content.map((item, index) => (
              <ContentItemDisplay key={`${section.id}-${index}`} item={item} pageTitle={page.title} />
            ))}
            {section.deepDiveContext && (
              <div className="my-8 animate-fadeIn" style={{ animationDelay: getAnimationDelay() }}>
                <DeepDiveTool
                  textToAnalyze={section.deepDiveContext}
                  currentSectionTitle={`${page.title} - ${section.subtitle || 'Main Discussion'}`}
                />
              </div>
            )}
            <Separator className="my-10 last-of-type:hidden" />
          </section>
        );
      })}

      {page.relatedTopics && page.relatedTopics.length > 0 && (
        <RelatedTopicsDisplay topics={page.relatedTopics} />
      )}
    </article>
  );
}
