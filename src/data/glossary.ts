
import type { LucideIcon } from 'lucide-react';
import { Shield, Sparkles, Zap, BookOpen, Brain, Atom, HandHeart, Sun, Moon, Aperture, Gem, Activity, Waves, Droplets, Eye } from 'lucide-react';

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
          { type: 'paragraph', text: "Activation of the Lightbody is a key aspect of the ascension process, allowing for increased spiritual awareness, enhanced intuition, and the integration of higher frequencies of light. It represents the full energetic potential of a human being." },
          { type: 'list', items: ["A luminous energy field", "Composed of interlocking geometric shapes", "Responds to thought, emotion, and frequency", "Facilitates interdimensional travel and communication"] },
        ],
        deepDiveContext: "The Lightbody, or Merkaba, is a complex energetic structure. Understanding its geometric properties, connection to consciousness, and its role as a vehicle for spiritual evolution is fundamental."
      },
      {
        id: 'lightbody-activation',
        subtitle: 'Lightbody Activation',
        content: [
          { type: 'paragraph', text: "Lightbody activation can occur spontaneously or through dedicated spiritual practices such as meditation, energy work, and conscious breathwork. It involves clearing energetic blockages, raising one's vibrational frequency, and integrating higher aspects of self." },
          { type: 'list', items: ["Meditation and Visualization (e.g., Merkaba meditation)", "Sound Healing (Tuning Forks, Crystal Bowls, Chanting)", "Sacred Geometry Contemplation and Use", "Working with Ascended Masters and Spirit Guides", "Yoga and Tai Chi", "High-vibrational diet and lifestyle"] },
          { type: 'image', src: 'https://placehold.co/500x350.png', alt: 'Person meditating with light aura', dataAiHint: 'meditation aura' },
          { type: 'quote', text: "As you activate your Lightbody, you become a beacon of light, anchoring higher frequencies onto the planet and assisting in collective awakening.", source: "Ancient Wisdom Texts" }
        ],
        deepDiveContext: "The process of Lightbody activation involves various techniques, stages, and potential experiences. Exploring these methods can provide practical steps for spiritual growth and frequency attunement."
      },
      {
        id: 'dna-activation',
        subtitle: 'DNA Activation and Lightbody',
        content: [
          { type: 'paragraph', text: "The activation of dormant strands of DNA is intrinsically linked to the development and potentiation of the Lightbody. As our DNA activates, our capacity to hold, process, and transmit light increases, further expanding and strengthening the Lightbody." },
          { type: 'paragraph', text: "This process is often associated with reclaiming spiritual gifts, psychic abilities, and higher states of consciousness that have been latent within humanity. It is seen as a return to our original divine blueprint." },
          { type: 'image', src: 'https://placehold.co/600x350.png', alt: 'Stylized DNA strand with light effects', dataAiHint: 'dna light' },
        ],
        deepDiveContext: "The connection between DNA activation and the Lightbody is crucial for understanding spiritual evolution. Understanding how genetic potential unfolds in conjunction with spiritual awakening offers a deeper perspective on human potential."
      },
      {
        id: 'benefits-of-lightbody',
        subtitle: 'Benefits of an Activated Lightbody',
        content: [
          { type: 'paragraph', text: "Activating and maintaining a strong Lightbody can lead to numerous benefits on physical, emotional, mental, and spiritual levels." },
          { type: 'list', items: [
            "Enhanced intuition and psychic abilities",
            "Greater emotional balance and resilience",
            "Increased physical vitality and well-being",
            "Deeper connection to Source/Higher Self",
            "Ability to manifest desires more effectively",
            "Protection from negative energies",
            "Accelerated spiritual growth and ascension"
          ]},
          { type: 'quote', text: "The Lightbody is your personal chariot of ascension, your key to navigating the higher realms.", source: "Modern Mystic Teachings" }
        ],
        deepDiveContext: "The tangible and intangible benefits of developing one's Lightbody are extensive, impacting all areas of life and spiritual practice."
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
    introduction: 'Delve into the intricate mechanics of the Merkaba, the geometric light-vehicle of consciousness, its structure, activation, and use.',
    sections: [
      {
        id: 'merkaba-structure',
        subtitle: 'Structure of the Merkaba',
        content: [
          { type: 'paragraph', text: "The Merkaba is typically visualized as two counter-rotating tetrahedrons of light, one pointing upwards (representing masculine, solar energy) and one downwards (representing feminine, earth energy), interlocked to form a star tetrahedron. This geometry creates a powerful, self-contained energy field." },
          { type: 'image', src: 'https://placehold.co/600x400.png', alt: 'Merkaba Geometry - Star Tetrahedron', dataAiHint: 'star tetrahedron' },
          { type: 'paragraph', text: "The term 'Merkaba' itself is an ancient Egyptian word: Mer (Light), Ka (Spirit), Ba (Body). It refers to the spirit/body surrounded by counter-rotating fields of light, which acts as a vehicle to transport spirit/body from one dimension to another." }
        ],
        deepDiveContext: "The specific geometry of the Merkaba, including the star tetrahedron and its energetic properties, is key to its function as a spiritual vehicle."
      },
      {
        id: 'activating-merkaba',
        subtitle: 'Activating Your Merkaba',
        content: [
          { type: 'paragraph', text: "Merkaba activation is often achieved through specific meditative practices that involve precise breathwork, visualizations, and mudras (hand positions). These practices aim to balance the polarities within and spin the Merkaba fields at specific ratios." },
          { type: 'list', items: [
              "17-Breath Merkaba Meditation (Drunvalo Melchizedek method)",
              "Spherical breathing techniques",
              "Visualization of the tetrahedrons and their rotation",
              "Focusing on unconditional love as a catalyst"
            ], ordered: true
          },
          { type: 'image', src: 'https://placehold.co/500x350.png', alt: 'Visualisation of Merkaba meditation', dataAiHint: 'meditation merkaba' },
          { type: 'quote', text: "The Merkaba is not just a structure; it's a living, conscious field that responds to your intent and love.", source: "Contemporary Merkaba Teacher" }
        ],
        deepDiveContext: "Techniques for Merkaba activation vary, but common elements include breath, visualization, and heart-centered intention. Understanding these methods is crucial for practical application."
      },
      {
        id: 'uses-of-merkaba',
        subtitle: 'Uses and Applications',
        content: [
          { type: 'paragraph', text: "An activated Merkaba field has numerous applications beyond interdimensional travel:" },
          { type: 'list', items: [
            "Enhanced protection from discordant energies",
            "Healing for self and others",
            "Manifestation and co-creation",
            "Accessing higher states of consciousness and wisdom",
            "Balancing chakras and energy systems",
            "Connecting with spiritual guides and higher dimensional beings"
          ]},
          { type: 'paragraph', text: "Regular practice strengthens the Merkaba field, making it a powerful tool for personal and spiritual development." }
        ],
        deepDiveContext: "The practical applications of an activated Merkaba field are diverse, ranging from personal healing and protection to advanced spiritual practices."
      }
    ],
    relatedTopics: [
      { title: 'The Lightbody', slug: 'lightbody', category: 'Core Concepts', icon: Sun },
      { title: 'Sacred Geometry', slug: 'sacred-geometry', category: 'Related Fields', icon: Atom },
    ]
  },
  'ascension-process': {
    slug: 'ascension-process',
    title: 'The Ascension Process',
    introduction: 'An overview of the spiritual ascension journey, its stages, common experiences, symptoms, and integration.',
    sections: [
      {
        id: 'what-is-ascension',
        subtitle: 'Understanding Ascension',
        content: [
          { type: 'paragraph', text: "Ascension is a multi-stage process of raising one's consciousness and vibrational frequency, leading to spiritual enlightenment and the embodiment of the higher self or soul. It's an evolutionary journey of remembering and integrating our divine nature." },
          { type: 'image', src: 'https://placehold.co/600x400.png', alt: 'Silhouette ascending towards light', dataAiHint: 'spiritual ascent' },
          { type: 'paragraph', text: "This process involves releasing old patterns, beliefs, and emotional baggage that no longer serve our highest good, allowing us to align more fully with our true essence." }
        ],
        deepDiveContext: "Ascension is a profound spiritual evolution involving frequency shifts, consciousness expansion, and embodiment of divine self. Its core principles guide the journey."
      },
      {
        id: 'stages-of-ascension',
        subtitle: 'Stages of Ascension',
        content: [
          { type: 'paragraph', text: "While the ascension journey is unique for each individual, common stages or phases are often described:" },
          { type: 'list', items: [
              "Awakening: Initial spiritual insights, questioning reality, seeking deeper meaning.",
              "Purification & Clearing: Confronting and releasing karma, old traumas, limiting beliefs, and negative emotions.",
              "Integration: Anchoring higher frequencies, embodying new awareness, aligning thoughts, words, and actions.",
              "Service: Sharing unique gifts and wisdom, contributing to collective evolution.",
              "Embodiment: Living as the Higher Self, fully integrated and expressing divine potential."
            ], ordered: true
          },
          { type: 'quote', text: "Each stage of ascension prepares you for a greater capacity to hold and radiate light.", source: "Ascended Master Teachings" }
        ],
        deepDiveContext: "The stages of ascension outline a progressive journey of spiritual unfolding, from initial awakening to full embodiment of the Higher Self."
      },
      {
        id: 'ascension-symptoms',
        subtitle: 'Common Ascension Symptoms',
        content: [
          { type: 'paragraph', text: "As the body and energy systems adjust to higher frequencies, various physical, emotional, and mental symptoms may arise. These are often temporary and part of the recalibration process." },
          { type: 'list', items: [
            "Physical: Headaches, fatigue, body aches, sleep pattern changes, ringing in ears, digestive issues, heart palpitations.",
            "Emotional: Heightened sensitivity, mood swings, anxiety, sudden waves of emotion, feeling disconnected.",
            "Mental: Brain fog, memory issues, vivid dreams, insights, changes in interests and priorities."
          ]},
          { type: 'image', src: 'https://placehold.co/500x350.png', alt: 'Person experiencing energy shifts', dataAiHint: 'energy shift symptoms' },
          { type: 'paragraph', text: "It's important to listen to your body, rest, hydrate, and seek support if needed. These symptoms are often signs of profound transformation." }
        ],
        deepDiveContext: "Ascension symptoms are common as the physical and energetic bodies adapt to higher vibrational frequencies. Understanding these can ease the process."
      },
      {
        id: 'navigating-ascension',
        subtitle: 'Navigating the Journey',
        content: [
          { type: 'paragraph', text: "Navigating the ascension process with grace involves self-care, spiritual practice, and support." },
          { type: 'list', items: [
            "Grounding practices (nature, meditation)",
            "Mindfulness and presence",
            "Healthy diet and hydration",
            "Energy clearing techniques",
            "Connecting with like-minded community",
            "Patience and self-compassion"
          ]},
        ],
        deepDiveContext: "Practical strategies and mindset shifts can help individuals navigate the challenges and embrace the transformative potential of the ascension process."
      }
    ],
    relatedTopics: [
      { title: 'The Lightbody', slug: 'lightbody', category: 'Core Concepts', icon: Sun },
      { title: 'Consciousness Studies', slug: 'consciousness-studies', category: 'Related Fields', icon: Brain },
    ]
  },
  'sacred-geometry': {
    slug: 'sacred-geometry',
    title: 'Sacred Geometry',
    introduction: 'Explore the fundamental patterns of creation, the mathematical and symbolic language of the universe, and their significance in spiritual understanding and energy work.',
    sections: [
      {
        id: 'what-is-sacred-geometry',
        subtitle: 'The Essence of Sacred Geometry',
        content: [
          { type: 'paragraph', text: "Sacred Geometry involves universal patterns used in the design of everything in our reality, most often seen in sacred architecture and sacred art. The belief behind Sacred Geometry is that geometry and mathematical ratios, harmonics and proportion are also found in music, light, cosmology." },
          { type: 'paragraph', text: "It is a visual language that communicates complex information, energy, and consciousness. These geometric forms are considered the building blocks of the universe and represent the underlying order and interconnectedness of all things." },
          { type: 'image', src: 'https://placehold.co/600x400.png', alt: 'Various sacred geometry symbols collage', dataAiHint: 'geometric patterns symbols' },
        ],
        deepDiveContext: "Sacred Geometry is the blueprint of creation, revealing the interconnectedness of all existence through mathematical and symbolic patterns."
      },
      {
        id: 'flower-of-life',
        subtitle: 'The Flower of Life',
        content: [
          { type: 'paragraph', text: "The Flower of Life is one of the most powerful and widely recognized sacred geometric symbols. It is composed of multiple evenly-spaced, overlapping circles arranged to form a flower-like pattern with six-fold symmetry like a hexagon. It is said to contain the patterns of creation as they emerged from the Great Void." },
          { type: 'image', src: 'https://placehold.co/400x400.png', alt: 'Flower of Life symbol', dataAiHint: 'flower life pattern' },
          { type: 'paragraph', text: "Within the Flower of Life, other symbols like the Seed of Life, Fruit of Life, and Metatron's Cube can be found, each holding profound meaning." }
        ],
        deepDiveContext: "The Flower of Life is a foundational symbol in sacred geometry, believed to contain all other geometric forms and representing the unity of creation."
      },
      {
        id: 'metatrons-cube',
        subtitle: "Metatron's Cube",
        content: [
          { type: 'paragraph', text: "Metatron's Cube is derived from the Fruit of Life pattern within the Flower of Life. It is composed of 13 circles, with lines extending from the center of every circle to the center of all other twelve circles. It contains all five Platonic Solids, which are the building blocks of all matter." },
          { type: 'image', src: 'https://placehold.co/450x450.png', alt: "Metatron's Cube symbol", dataAiHint: 'metatron cube' },
          { type: 'paragraph', text: "This symbol is often used for balancing energy fields, meditation, and connecting with Archangel Metatron. It is considered a powerful tool for spiritual protection and clearing." }
        ],
        deepDiveContext: "Metatron's Cube, containing the Platonic Solids, is a potent symbol for understanding the fundamental structures of the universe and for energy work."
      },
      {
        id: 'platonic-solids',
        subtitle: 'The Platonic Solids',
        content: [
          { type: 'paragraph', text: "The five Platonic Solids (Tetrahedron, Cube, Octahedron, Dodecahedron, Icosahedron) are geometric forms that are unique in that all their faces are congruent regular polygons, and the same number of faces meet at each vertex. They are considered the building blocks of organic life and the universe." },
          { type: 'list', items: [
            "Tetrahedron (Fire, Solar Plexus Chakra)",
            "Cube (Earth, Root Chakra)",
            "Octahedron (Air, Heart Chakra)",
            "Icosahedron (Water, Sacral Chakra)",
            "Dodecahedron (Spirit/Ether, Third Eye/Crown Chakras)"
          ]},
          { type: 'image', src: 'https://placehold.co/700x300.png', alt: 'The five Platonic Solids', dataAiHint: 'platonic solids shapes' },
        ],
        deepDiveContext: "The Platonic Solids are fundamental geometric shapes representing the elements and aspects of creation, often used in healing and meditation."
      },
      {
        id: 'applications-sacred-geometry',
        subtitle: 'Applications in Spiritual Practice',
        content: [
          { type: 'paragraph', text: "Sacred geometry is not just theoretical; it has many practical applications in spiritual development:" },
          { type: 'list', items: [
            "Meditation and Visualization: Focusing on symbols can induce altered states of consciousness.",
            "Energy Healing: Used to balance chakras, clear auras, and create healing grids.",
            "Creating Sacred Space: Geometric forms can enhance the energy of a room or environment.",
            "Art and Design: Incorporating these patterns can imbue creations with specific energies."
          ]},
        ],
        deepDiveContext: "The practical applications of sacred geometry in spiritual practices range from meditation aids to energy healing tools and creating energetically harmonious spaces."
      }
    ],
    relatedTopics: [
      { title: 'Merkaba Mechanics', slug: 'merkaba-mechanics', category: 'Core Concepts', icon: Sparkles },
      { title: 'The Lightbody', slug: 'lightbody', category: 'Core Concepts', icon: Sun },
    ]
  },
  'consciousness-studies': {
    slug: 'consciousness-studies',
    title: 'Consciousness Studies',
    introduction: 'An exploration into the nature of consciousness from various perspectives, including spiritual traditions, philosophy, psychology, and emerging scientific theories.',
    sections: [
      {
        id: 'defining-consciousness',
        subtitle: 'Defining Consciousness',
        content: [
          { type: 'paragraph', text: "Consciousness is the state or quality of awareness, or, of being aware of an external object or something within oneself. It has been defined diversely as: sentience, awareness, subjectivity, the ability to experience or to feel, wakefulness, having a sense of selfhood, and the executive control system of the mind." },
          { type: 'image', src: 'https://placehold.co/600x400.png', alt: 'Abstract representation of awareness or mind', dataAiHint: 'abstract mind awareness' },
          { type: 'quote', text: "The mystery of consciousness is the last frontier of science and philosophy.", source: "Modern Thinker" }
        ],
        deepDiveContext: "Defining consciousness is complex, encompassing awareness, subjectivity, and selfhood. Various disciplines offer different perspectives on this fundamental aspect of existence."
      },
      {
        id: 'levels-of-consciousness',
        subtitle: 'Levels and States of Consciousness',
        content: [
          { type: 'paragraph', text: "Many spiritual and psychological models propose different levels or states of consciousness, ranging from ordinary waking consciousness to mystical experiences and non-dual awareness." },
          { type: 'list', items: [
            "Subconscious: The part of the mind of which one is not fully aware but which influences one's actions and feelings.",
            "Waking Consciousness: Our everyday awareness of self and environment.",
            "Altered States: Achieved through meditation, dreaming, psychedelics, or peak experiences.",
            "Higher Consciousness/Superconsciousness: Transcendent states of unity, cosmic awareness, and connection to divine intelligence."
          ]},
          { type: 'image', src: 'https://placehold.co/550x380.png', alt: 'Ladder or spiral representing levels of consciousness', dataAiHint: 'consciousness levels spiral' },
        ],
        deepDiveContext: "Consciousness is not monolithic; it exists in various states and levels, from the subconscious to superconscious states of expanded awareness."
      },
      {
        id: 'nonlocal-consciousness',
        subtitle: 'Non-Local Consciousness and Quantum Connections',
        content: [
          { type: 'paragraph', text: "Some theories, particularly drawing from quantum physics and psi research, propose that consciousness is non-local – not confined to the brain or physical body. This suggests interconnectedness and abilities like telepathy, precognition, and remote viewing." },
          { type: 'paragraph', text: "Concepts like entanglement and the observer effect in quantum mechanics are often cited as parallels or potential explanations for non-local consciousness phenomena, though these connections are subjects of ongoing debate and research." },
        ],
        deepDiveContext: "The concept of non-local consciousness challenges conventional views, suggesting that awareness can transcend physical limitations, potentially explained by quantum principles."
      },
      {
        id: 'spiritual-perspectives',
        subtitle: 'Spiritual Perspectives on Consciousness',
        content: [
          { type: 'paragraph', text: "Most spiritual traditions view consciousness as primary and fundamental, with the physical world arising from it. Concepts include:" },
          { type: 'list', items: [
            "Universal Consciousness: An underlying field of awareness from which all individual consciousness arises.",
            "The Self/Atman: The true, eternal Self, which is pure consciousness.",
            "Enlightenment/Liberation: The realization of one's true nature as pure consciousness, free from illusion."
          ]},
        ],
        deepDiveContext: "Spiritual traditions often posit consciousness as the fundamental reality, with individual awareness being a manifestation of a universal or divine consciousness."
      }
    ],
    relatedTopics: [
      { title: 'The Ascension Process', slug: 'ascension-process', category: 'Core Concepts', icon: Zap },
      { title: 'Energy Healing', slug: 'energy-healing', category: 'Practices', icon: HandHeart },
    ]
  },
  'energy-healing': {
    slug: 'energy-healing',
    title: 'Energy Healing',
    introduction: 'Learn about different modalities of energy healing, the principles behind them, and their role in physical, emotional, mental, and spiritual well-being.',
    sections: [
      {
        id: 'what-is-energy-healing',
        subtitle: 'Principles of Energy Healing',
        content: [
          { type: 'paragraph', text: "Energy healing is a holistic practice that activates the body's subtle energy systems to remove blocks. By breaking through these energetic blocks, the body's inherent ability to heal itself is stimulated. It is based on the principle that all matter is energy and that imbalances or blockages in the body's energy field can lead to illness." },
          { type: 'image', src: 'https://placehold.co/600x400.png', alt: 'Hands channeling healing energy', dataAiHint: 'healing hands energy' },
          { type: 'paragraph', text: "Key concepts include the human energy field (aura), chakras (energy centers), and meridians (energy pathways)." }
        ],
        deepDiveContext: "Energy healing operates on the principle that imbalances in the body's subtle energy systems can affect well-being. Understanding auras, chakras, and meridians is foundational."
      },
      {
        id: 'reiki',
        subtitle: 'Reiki',
        content: [
          { type: 'paragraph', text: "Reiki is a Japanese technique for stress reduction and relaxation that also promotes healing. It is administered by 'laying on hands' or by distance healing and is based on the idea that an unseen 'life force energy' (Ki or Chi) flows through us and is what causes us to be alive." },
          { type: 'list', items: [
            "Practitioner channels universal life force energy.",
            "Can be hands-on or hands-off.",
            "Promotes balance and harmony on all levels.",
            "Often involves specific hand positions corresponding to chakras."
          ]},
          { type: 'image', src: 'https://placehold.co/500x350.png', alt: 'Reiki practitioner working on a client', dataAiHint: 'reiki session' },
        ],
        deepDiveContext: "Reiki is a popular energy healing modality involving the channeling of universal life force energy to promote balance and well-being."
      },
      {
        id: 'chakra-balancing',
        subtitle: 'Chakra Balancing',
        content: [
          { type: 'paragraph', text: "Chakras are energy centers within the human body that regulate various aspects of our physical, emotional, and spiritual health. Chakra balancing aims to clear blockages and restore harmonious flow of energy through these centers." },
          { type: 'list', items: [
            "Seven main chakras: Root, Sacral, Solar Plexus, Heart, Throat, Third Eye, Crown.",
            "Techniques include meditation, visualization, sound therapy (specific frequencies), crystal healing, and aromatherapy.",
            "Balanced chakras contribute to overall vitality and well-being."
          ]},
          { type: 'image', src: 'https://placehold.co/400x500.png', alt: 'Diagram of the seven chakras', dataAiHint: 'chakra system diagram' },
        ],
        deepDiveContext: "Chakra balancing is crucial for maintaining energetic health, as these centers govern different aspects of our being. Various techniques can be used to clear and align them."
      },
      {
        id: 'other-modalities',
        subtitle: 'Other Healing Modalities',
        content: [
          { type: 'paragraph', text: "Many other forms of energy healing exist, each with unique approaches:" },
          { type: 'list', items: [
            "Pranic Healing: Utilizes prana (life energy) to cleanse and energize the body.",
            "Crystal Healing: Uses the vibrational properties of crystals to balance energy fields.",
            "Sound Healing: Employs frequencies from instruments (tuning forks, singing bowls) or voice to shift energy.",
            "Quantum Touch: A light-touch therapy that focuses intention and breath.",
            "Emotional Freedom Technique (EFT)/Tapping: Combines acupressure with psychological affirmations."
          ]},
        ],
        deepDiveContext: "Beyond Reiki and chakra balancing, a diverse array of energy healing modalities offer unique methods for promoting health and spiritual growth."
      }
    ],
    relatedTopics: [
      { title: 'Consciousness Studies', slug: 'consciousness-studies', category: 'Related Fields', icon: Brain },
      { title: 'The Lightbody', slug: 'lightbody', category: 'Core Concepts', icon: Sun },
    ]
  }
};

export const GlobalNavLinks: RelatedTopic[] = [
  { title: 'The Lightbody', slug: 'lightbody', category: 'Main Articles', icon: Sun },
  { title: 'Merkaba Mechanics', slug: 'merkaba-mechanics', category: 'Core Concepts', icon: Sparkles },
  { title: 'Ascension Process', slug: 'ascension-process', category: 'Core Concepts', icon: Zap },
  { title: 'Sacred Geometry', slug: 'sacred-geometry', category: 'Related Fields', icon: Atom },
  { title: 'Consciousness Studies', slug: 'consciousness-studies', category: 'Related Fields', icon: Brain },
  { title: 'Energy Healing', slug: 'energy-healing', category: 'Practices', icon: HandHeart },
];

export const DefaultPageSlug = 'lightbody';

    