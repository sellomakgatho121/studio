import type { LucideIcon } from 'lucide-react';
import { Shield, Sparkles, Zap, BookOpen, Brain, Atom, HandHeart, Sun, Moon } from 'lucide-react';

export interface GlossaryPage {
  slug: string;
  title: string;
  introduction: string;
  sections: GlossarySection[];
  relatedTopics?: RelatedTopic[];
}

export interface GlossarySection {
  id: string;
  subtitle?: string;
  content: ContentItem[];
  deepDiveContext?: string; // Text snippet to send to AI for this section
}

export type ContentItem =
  | { type: 'paragraph'; text: string }
  | { type: 'image'; src: string; alt: string; dataAiHint?: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'quote'; text: string; source?: string };

export interface RelatedTopic {
  title: string;
  slug: string;
  category: string;
  icon?: LucideIcon;
}

export const glossaryData: Record<string, GlossaryPage> = {
  lightbody: {
    slug: 'lightbody',
    title: 'The Lightbody',
    introduction: 'An exploration of the human Lightbody, its structure, activation, and significance in spiritual ascension. This central article serves as your gateway to understanding higher dimensional anatomy.',
    sections: [
      {
        id: 'what-is-lightbody',
        subtitle: 'What is the Lightbody?',
        content: [
          { type: 'paragraph', text: "The Lightbody, also known as the Merkaba, is a grid of light and sacred geometry that surrounds our physical body and connects us to higher dimensional realities. It is the vehicle through which our consciousness can travel and experience realms beyond the physical." },
          { type: 'image', src: 'https://placehold.co/600x400.png', alt: 'Abstract representation of Lightbody', dataAiHint: 'sacred geometry energy' },
          { type: 'paragraph', text: "Activation of the Lightbody is a key aspect of the ascension process, allowing for increased spiritual awareness, enhanced intuition, and the integration of higher frequencies of light." },
        ],
        deepDiveContext: "The Lightbody, or Merkaba, is a complex energetic structure. Understanding its geometric properties and connection to consciousness is fundamental."
      },
      {
        id: 'lightbody-activation',
        subtitle: 'Lightbody Activation',
        content: [
          { type: 'paragraph', text: "Lightbody activation can occur spontaneously or through dedicated spiritual practices such as meditation, energy work, and conscious breathwork. It involves clearing energetic blockages and raising one's vibrational frequency." },
          { type: 'list', items: ["Meditation and Visualization", "Sound Healing (Tuning Forks, Crystal Bowls)", "Sacred Geometry Contemplation", "Working with Ascended Masters and Guides"] },
          { type: 'quote', text: "As you activate your Lightbody, you become a beacon of light, anchoring higher frequencies onto the planet.", source: "Ancient Wisdom Texts" }
        ],
        deepDiveContext: "The process of Lightbody activation involves various techniques and stages. Exploring these methods can provide practical steps for spiritual growth."
      },
      {
        id: 'dna-activation',
        subtitle: 'DNA Activation and Lightbody',
        content: [
          { type: 'paragraph', text: "The activation of dormant strands of DNA is intrinsically linked to the development of the Lightbody. As our DNA activates, our capacity to hold and process light increases, further expanding the Lightbody." },
          { type: 'paragraph', text: "This process is often associated with reclaiming spiritual gifts and abilities that have been latent within humanity." },
        ],
        deepDiveContext: "The connection between DNA and the Lightbody is crucial. Understanding how genetic potential unfolds with spiritual awakening offers a deeper perspective."
      }
    ],
    relatedTopics: [
      { title: 'Merkaba Mechanics', slug: 'merkaba-mechanics', category: 'Core Concepts', icon: Sparkles },
      { title: 'Ascension Process', slug: 'ascension-process', category: 'Core Concepts', icon: Zap },
      { title: 'Sacred Geometry', slug: 'sacred-geometry', category: 'Related Fields', icon: Atom },
    ]
  },
  'merkaba-mechanics': {
    slug: 'merkaba-mechanics',
    title: 'Merkaba Mechanics',
    introduction: 'Delve into the intricate mechanics of the Merkaba, the geometric light-vehicle of consciousness.',
    sections: [
      {
        id: 'merkaba-structure',
        subtitle: 'Structure of the Merkaba',
        content: [
          { type: 'paragraph', text: "The Merkaba is typically visualized as two counter-rotating tetrahedrons of light, one pointing upwards (male) and one downwards (female), interlocked. This geometry creates a powerful energy field." },
          { type: 'image', src: 'https://placehold.co/600x300.png', alt: 'Merkaba Geometry', dataAiHint: 'tetrahedron star' },
        ]
      }
    ],
  },
  'ascension-process': {
    slug: 'ascension-process',
    title: 'The Ascension Process',
    introduction: 'An overview of the spiritual ascension journey, its stages, and common experiences.',
    sections: [
      {
        id: 'stages-of-ascension',
        subtitle: 'Stages of Ascension',
        content: [
          { type: 'paragraph', text: "Ascension is a multi-stage process of raising one's consciousness and frequency, leading to spiritual enlightenment and embodiment of the higher self." },
          { type: 'list', items: ["Awakening", "Purification", "Integration", "Service", "Embodiment"], ordered: true },
        ]
      }
    ],
  },
  'sacred-geometry': {
    slug: 'sacred-geometry',
    title: 'Sacred Geometry',
    introduction: 'Explore the fundamental patterns of creation and their significance in spiritual understanding.',
    sections: [
      {
        id: 'flower-of-life',
        subtitle: 'The Flower of Life',
        content: [
          { type: 'paragraph', text: "The Flower of Life is one of the most powerful sacred geometric symbols, containing the patterns of creation as they emerged from the Great Void." },
          { type: 'image', src: 'https://placehold.co/400x400.png', alt: 'Flower of Life', dataAiHint: 'geometric pattern' },
        ]
      }
    ],
  },
  'consciousness-studies': {
    slug: 'consciousness-studies',
    title: 'Consciousness Studies',
    introduction: 'An exploration into the nature of consciousness from various perspectives, including spiritual and scientific.',
    sections: [
      {
        id: 'defining-consciousness',
        subtitle: 'Defining Consciousness',
        content: [
          { type: 'paragraph', text: "Consciousness is the state or quality of awareness, or, of being aware of an external object or something within oneself. It has been defined as: sentience, awareness, subjectivity, the ability to experience or to feel, wakefulness, having a sense of selfhood, and the executive control system of the mind." },
        ],
      },
    ],
  },
  'energy-healing': {
    slug: 'energy-healing',
    title: 'Energy Healing',
    introduction: 'Learn about different modalities of energy healing and their role in spiritual well-being.',
    sections: [
      {
        id: 'reiki',
        subtitle: 'Reiki',
        content: [
          { type: 'paragraph', text: "Reiki is a Japanese technique for stress reduction and relaxation that also promotes healing. It is administered by 'laying on hands' and is based on the idea that an unseen 'life force energy' flows through us and is what causes us to be alive." },
        ],
      },
    ],
  }
};

export const GlobalNavLinks: RelatedTopic[] = [
  { title: 'Lightbody', slug: 'lightbody', category: 'Main Articles', icon: Sun },
  { title: 'Merkaba Mechanics', slug: 'merkaba-mechanics', category: 'Core Concepts', icon: Sparkles },
  { title: 'Ascension Process', slug: 'ascension-process', category: 'Core Concepts', icon: Zap },
  { title: 'Sacred Geometry', slug: 'sacred-geometry', category: 'Related Fields', icon: Atom },
  { title: 'Consciousness Studies', slug: 'consciousness-studies', category: 'Related Fields', icon: Brain },
  { title: 'Energy Healing', slug: 'energy-healing', category: 'Practices', icon: HandHeart },
];

export const DefaultPageSlug = 'lightbody';
