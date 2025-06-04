"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getDeepDiveRecommendations, type DeepDiveRecommendationsOutput } from "@/ai/flows/deep-dive-recommendations";
import { Loader2, Wand2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";

interface DeepDiveToolProps {
  textToAnalyze: string;
  currentSectionTitle: string;
}

export function DeepDiveTool({ textToAnalyze, currentSectionTitle }: DeepDiveToolProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<DeepDiveRecommendationsOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleDeepDive = async () => {
    setIsLoading(true);
    setError(null);
    setRecommendations(null);
    try {
      const result = await getDeepDiveRecommendations({
        text: textToAnalyze,
        currentSection: currentSectionTitle,
      });
      if (result && result.recommendations) {
        setRecommendations(result);
        if (result.recommendations.length === 0) {
          toast({
            title: "No Specific Recommendations",
            description: "The AI couldn't find specific deep dive topics for this section at the moment.",
          });
        }
      } else {
        throw new Error("No recommendations returned from AI.");
      }
    } catch (err) {
      console.error("Deep Dive AI error:", err);
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred.";
      setError(`Failed to get recommendations: ${errorMessage}`);
      toast({
        variant: "destructive",
        title: "Deep Dive Error",
        description: `Could not fetch recommendations. ${errorMessage}`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="bg-secondary/50 shadow-lg border-accent/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-accent-foreground/80">
          <Wand2 className="h-6 w-6 text-accent" />
          AI Deep Dive
        </CardTitle>
        <CardDescription>
          Explore related concepts and vocabulary from the glossary for a richer understanding.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {recommendations && recommendations.recommendations.length > 0 && (
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-accent-foreground">Suggested Topics:</h4>
            {recommendations.recommendations.map((rec, index) => (
              <Card key={index} className="bg-background/70">
                <CardHeader>
                  <CardTitle className="text-md text-primary">{rec.sectionTitle}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2 italic">&quot;{rec.sectionContent}...&quot;</p>
                  <p className="text-sm"><strong className="text-accent-foreground">Reason:</strong> {rec.reason}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        {recommendations && recommendations.recommendations.length === 0 && !error && (
           <p className="text-muted-foreground">No specific recommendations found for this section.</p>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={handleDeepDive} disabled={isLoading} variant="default" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/80 w-full">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              <Wand2 className="mr-2 h-4 w-4" />
              Reveal Deeper Insights
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
