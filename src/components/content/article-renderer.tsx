
import type { GlossaryPage, GlossarySection, ContentItem, RelatedTopic } from "@/data/glossary";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { DeepDiveTool } from "./deep-dive-tool";
import { Button } from "@/components/ui/button";
import { ArrowRight, Link as LinkIcon, Compass } from "lucide-react";

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
            width={item.src.includes('600x400') || item.src.includes('650x400') || item.src.includes('600x350') ? 600 : item.src.includes('500x350') ? 500 : item.src.includes('400x400') || item.src.includes('450x450') || item.src.includes('400x500') ? 400 : item.src.includes('700x300') || item.src.includes('700x450') ? 700 : item.src.includes('650x450') || item.src.includes('650x420')? 650 : item.src.includes('600x500') ? 600 : item.src.includes('550x550') || item.src.includes('550x380') || item.src.includes('550x400') ? 550 : item.src.includes('750x350') ? 750 : item.src.includes('500x500') || item.src.includes('500x400') ? 500 : 600}
            height={item.src.includes('600x400') || item.src.includes('650x400') || item.src.includes('500x400') ? 400 : item.src.includes('500x350') || item.src.includes('600x350') || item.src.includes('750x350') ? 350 : item.src.includes('400x400') || item.src.includes('450x450') ? 450 : item.src.includes('700x300') ? 300 : item.src.includes('700x450') || item.src.includes('650x450') ? 450 : item.src.includes('600x500') || item.src.includes('400x500') ? 500 : item.src.includes('550x550') ? 550 : item.src.includes('550x380') ? 380 : item.src.includes('650x420') ? 420 : item.src.includes('500x500') ? 500 : 400}
            className="mx-auto rounded-lg shadow-lg object-cover"
            data-ai-hint={item.dataAiHint}
            priority={item.src.includes('700x450') || item.src.includes('650x450')} // Prioritize larger header-like images
          />
          {item.alt && <p className="text-sm text-muted-foreground mt-2 italic">{item.alt}</p>}
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
  const animationBaseDelay = getAnimationDelay(); // Get a base delay for the section itself

  // Group topics by category
  const categorizedTopics: Record<string, RelatedTopic[]> = topics.reduce((acc, topic) => {
    const category = topic.category || "Further Exploration";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(topic);
    return acc;
  }, {});

  return (
    <section className="mt-12 pt-8 border-t animate-fadeIn" style={{ animationDelay: animationBaseDelay }}>
      <div className="flex items-center mb-8">
        <Compass className="h-10 w-10 text-primary mr-3" />
        <h3 className="font-headline text-4xl font-semibold text-primary">Explore Related Concepts</h3>
      </div>
      
      {Object.entries(categorizedTopics).map(([category, categoryTopics], categoryIndex) => (
        <div key={category} className="mb-8 last:mb-0">
          <h4 className="font-headline text-2xl font-medium mb-4 text-secondary-foreground border-b-2 border-secondary pb-2">{category}</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryTopics.map((topic, topicIndex) => {
              const IconComponent = topic.icon || LinkIcon;
              const itemDelay = `${100 + categoryIndex * 50 + topicIndex * 50}ms`; // Staggered animation for items
              return (
                <Card 
                  key={topic.slug} 
                  className="hover:shadow-xl transition-shadow duration-300 ease-in-out animate-fadeIn bg-card/80 hover:bg-card group border border-border hover:border-primary/50" 
                  style={{ animationDelay: itemDelay }}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-1">
                      <IconComponent className="h-7 w-7 text-accent group-hover:text-primary transition-colors" />
                      <CardTitle className="text-xl text-primary-foreground group-hover:text-primary transition-colors">{topic.title}</CardTitle>
                    </div>
                    {topic.category && <CardDescription className="text-xs uppercase tracking-wider">{topic.category}</CardDescription>}
                  </CardHeader>
                  <CardFooter>
                    <Link href={`/${topic.slug}`} passHref legacyBehavior>
                      <Button variant="outline" className="w-full group/button bg-secondary/20 hover:bg-accent hover:text-accent-foreground border-secondary/30 hover:border-accent">
                        Delve Deeper
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}


export function ArticleRenderer({ page }: ArticleRendererProps) {
  animationDelay = 0; // Reset animation delay for each article render
  return (
    <article className="max-w-5xl mx-auto p-4 md:p-8 lg:p-12">
      <header className="mb-10"> {/* Removed animate-fadeIn from here, will be on h1 */}
        <h1 className="font-headline text-5xl md:text-6xl font-bold text-primary mb-4 leading-tight animate-titleFluidEntry animate-timedTitleGlow hover:[text-shadow:0_0_8px_hsl(var(--accent)/0.7),_0_0_12px_hsl(var(--accent)/0.5),_0_0_16px_hsl(var(--accent)/0.3)] transition-[text-shadow] duration-300 ease-out">
          {page.title}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fadeIn" style={{animationDelay: '0.3s'}}>{/* Added slight delay to intro paragraph */}</p>
      </header>
      <Separator className="my-10" />
      
      {page.sections.map((section, sectionIndex) => {
        const sectionStyle = { animationDelay: getAnimationDelay() };
        return (
          <section key={section.id} id={section.id} className="mb-12 scroll-mt-24">
            {section.subtitle && (
              <h2 className="font-headline text-3xl md:text-4xl font-semibold mb-8 border-b-2 border-primary/40 pb-4 animate-fadeIn" style={sectionStyle}>
                {section.subtitle}
              </h2>
            )}
            {section.content.map((item, index) => (
              <ContentItemDisplay key={`${section.id}-${index}`} item={item} pageTitle={page.title} />
            ))}
            {section.deepDiveContext && (
              <div className="my-10 animate-fadeIn" style={{ animationDelay: getAnimationDelay() }}>
                <DeepDiveTool
                  textToAnalyze={section.deepDiveContext}
                  currentSectionTitle={`${page.title} - ${section.subtitle || 'Main Discussion'}`}
                />
              </div>
            )}
            {sectionIndex < page.sections.length -1 && <Separator className="my-12 last-of-type:hidden" />}
          </section>
        );
      })}

      {page.relatedTopics && page.relatedTopics.length > 0 && (
        <>
          <Separator className="my-12" />
          <RelatedTopicsDisplay topics={page.relatedTopics} />
        </>
      )}
    </article>
  );
}
