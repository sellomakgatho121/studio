// src/ai/flows/deep-dive-recommendations.ts
'use server';

/**
 * @fileOverview Provides AI-powered recommendations for deeper understanding of concepts within the Lightbody Lexica.
 *
 * - getDeepDiveRecommendations - A function that suggests relevant sections from the glossary based on a given text.
 * - DeepDiveRecommendationsInput - The input type for the getDeepDiveRecommendations function.
 * - DeepDiveRecommendationsOutput - The return type for the getDeepDiveRecommendations function, containing an array of recommendations.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DeepDiveRecommendationsInputSchema = z.object({
  text: z.string().describe('The text from which to generate deep dive recommendations.'),
  currentSection: z.string().describe('The current section of the glossary the user is reading.'),
});
export type DeepDiveRecommendationsInput = z.infer<typeof DeepDiveRecommendationsInputSchema>;

const DeepDiveRecommendationsOutputSchema = z.object({
  recommendations: z
    .array(
      z.object({
        sectionTitle: z.string().describe('The title of the recommended section.'),
        sectionContent: z.string().describe('A snippet of the recommended section content.'),
        reason: z.string().describe('The reason why this section is recommended.'),
      })
    )
    .describe('An array of recommended sections for deeper understanding.'),
});
export type DeepDiveRecommendationsOutput = z.infer<typeof DeepDiveRecommendationsOutputSchema>;

export async function getDeepDiveRecommendations(
  input: DeepDiveRecommendationsInput
): Promise<DeepDiveRecommendationsOutput> {
  return deepDiveRecommendationsFlow(input);
}

const deepDivePrompt = ai.definePrompt({
  name: 'deepDivePrompt',
  input: {schema: DeepDiveRecommendationsInputSchema},
  output: {schema: DeepDiveRecommendationsOutputSchema},
  prompt: `You are an AI assistant that provides deep dive recommendations for a glossary.

  Given the following text from the glossary:
  {{text}}

  And the current section the user is reading:
  {{currentSection}}

  Recommend other sections from the glossary that would help the user better understand the concepts and vocabulary in the given text.
  Each recommendation should include the section title, a snippet of the section content, and a brief explanation of why it is relevant to the given text. Return the recommendations in JSON format.
`,
});

const deepDiveRecommendationsFlow = ai.defineFlow(
  {
    name: 'deepDiveRecommendationsFlow',
    inputSchema: DeepDiveRecommendationsInputSchema,
    outputSchema: DeepDiveRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await deepDivePrompt(input);
    return output!;
  }
);
