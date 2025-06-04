"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { GlobalNavLinks, RelatedTopic } from "@/data/glossary";
import { CustomIcon } from "@/components/icons/custom-icon";
import { BookHeart, Github } from "lucide-react";

interface CategorizedLinks {
  [category: string]: RelatedTopic[];
}

export function AppSidebar() {
  const pathname = usePathname();

  const categorizedLinks = GlobalNavLinks.reduce((acc, link) => {
    const category = link.category || "Other";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(link);
    return acc;
  }, {} as CategorizedLinks);

  return (
    <Sidebar collapsible="icon" variant="sidebar" side="left" defaultOpen={true}>
      <SidebarHeader className="p-4">
        <Link href="/" className="flex items-center gap-2 group-data-[collapsible=icon]:justify-center">
          <BookHeart className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
          <span className="text-xl font-headline font-semibold group-data-[collapsible=icon]:hidden">
            Lightbody Lexica
          </span>
        </Link>
      </SidebarHeader>
      <SidebarSeparator />
      <ScrollArea className="flex-1">
        <SidebarContent>
          <SidebarMenu>
            {Object.entries(categorizedLinks).map(([category, links]) => (
              <SidebarGroup key={category}>
                <SidebarGroupLabel className="group-data-[collapsible=icon]:hidden">{category}</SidebarGroupLabel>
                {links.map((link) => (
                  <SidebarMenuItem key={link.slug}>
                    <Link href={`/${link.slug}`} passHref legacyBehavior>
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === `/${link.slug}`}
                        tooltip={{ children: link.title, side: "right", align: "center" }}
                        className="group/menu-button"
                      >
                        <a>
                          {link.icon && <CustomIcon IconComponent={link.icon} isActive={pathname === `/${link.slug}`} />}
                          <span className="group-data-[collapsible=icon]:hidden">{link.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                ))}
              </SidebarGroup>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </ScrollArea>
      <SidebarSeparator />
      <SidebarFooter className="p-4 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:items-center">
         <SidebarMenuButton
            asChild
            tooltip={{ children: "View Source on GitHub", side: "right", align: "center"}}
          >
            <a href="https://github.com/FirebaseExtended/genkit-nextjs-shadcn-ταιwind-starter" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <CustomIcon IconComponent={Github} />
              <span className="group-data-[collapsible=icon]:hidden text-xs">View Source</span>
            </a>
          </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
}
