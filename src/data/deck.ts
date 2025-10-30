// src/data/deck.ts

export type Card = {
    title: string;
    tagline: string;
    file: string;
  };
  
  export type Suit = {
    name: string;
    slug: string;
    cards: Card[];
  };
  
  export type Deck = Suit[];
  
  export const deck: Deck = [
    {
      name: "Methods of Delusion",
      slug: "methods-of-delusion",
      cards: [
        { title: "The Jinxed Post-it", tagline: "Lost stickiness and significance at the same time.", file: "the-sticky-note.mp4" },
        { title: "The Cluster of Power", tagline: "The theme title is catchy but no one knows what it means.", file: "the-cluster-of-power.mp4" },
        { title: "The Insights Slide", tagline: "It’s 12pt font and 85% confusion.", file: "the-insights-slide.mp4" },
        { title: "The Journey Map", tagline: "Only one person understands how to read it. They quit.", file: "the-journey-map.mp4" },
        { title: "The Infinite Mirror Board", tagline: "You accidentally deleted a whole section. No one noticed.", file: "the-mirror-board.mp4" },
        { title: "The Dot Vote", tagline: "The most voted idea was a pun. It always is.", file: "the-dot-vote.mp4" },
        { title: "The Persona Pile", tagline: "“Sarah wants simplicity” but so does “Eco Greg,” “Budget Brenda,” and “Cool Dad Dave.”", file: "the-persona-pile.mp4" },
        { title: "The Recording No One Watched", tagline: "“Great to have for reference!”", file: "the-unused-research.mp4" },
        { title: "The Synthesis Spiral", tagline: "“We had this idea back in 2017…”", file: "the-synthesis-spiral.mp4" },
        { title: "The Feedback Loop", tagline: "Everyone agrees, no one is aligned.", file: "the-feedback-loop.mp4" },
        { title: "The Red Dot", tagline: "“Just a small tweak!” The change collapsed your layout and your soul.", file: "the-red-dot.mp4" },

      ],
    },
    {
      name: "Beings of Complication",
      slug: "beings-of-complication",
      cards: [
        { title: "The Dot Connector", tagline: "Made a connection so loose it created a whole new problem.", file: "the-dot-connector.mp4" },
        { title: "The Reluctant Optimist", tagline: "They know the project’s on fire but took the team out for a drink.", file: "the-reluctant-optimist.mp4" },
        { title: "The Embedded Client", tagline: "They’re the reason no one knows what week it is.", file: "the-embedded-client.mp4" },
        { title: "The Infinite Synthesizer", tagline: "Hasn’t stopped talking since the immersion phase.", file: "the-infinite-synthesizer.mp4" },
        { title: "The Slide Whisperer", tagline: "Once spaced a headline for 45 minutes.", file: "the-slide-whisperer.mp4" },
        { title: "The Wandering Strategist", tagline: "Drops frameworks like breadcrumbs. You haven’t seen them since the kickoff call.", file: "the-wandering-strategist.mp4" },
        { title: "The Scope Shifter", tagline: "The sacrificial prototype is now a service blueprint with 3 levels of zoom.", file: "the-scope-shifter.mp4" },
        { title: "The Shady Notetaker", tagline: "Writes what you meant, not what you said.", file: "the-miro-medium.mov" },
        { title: "The Insight Conductor", tagline: "Found something no one wanted to know. It became a new (unpaid) brief.", file: "the-insight-conductor.mp4" },
        { title: "The Shadow Stakeholder", tagline: "“This is great, but…” Already forwarding the deck to their boss.", file: "the-shadow-stakeholder.mp4" },
        { title: "The Client Cowpoke", tagline: "Undoes with a sigh. They’re the reason the team needs therapy.", file: "the-sacred-cowpoke.mov" },
      ],
    },
    {
      name: "Sacred Saviors",
      slug: "sacred-saviors",
      cards: [
        { title: "The Vibe Summoner", tagline: "Saves the final with a playlist and a pulse check.", file: "the-vibe-summoner.mov" },
        { title: "The Photo of the Whiteboard", tagline: "You said “We’ll transcribe it later.” It’s the final deliverable.", file: "the-photo-of-the-whiteboard.mp4" },
        { title: "The Whisper from the Next Project", tagline: "“Hey, can I borrow you real quick?” You’re 100% on a better project now.", file: "the-slidedancer.mov" },
        { title: "The Human Prototype", tagline: "Breaks beautifully. Makes clients cry. Might be you.", file: "the-design-gremlin.mov" },
        { title: "The Lorekeeper of Lunch", tagline: "Knows which snacks fuel synthesis.", file: "the-lorekeeper-of-lunch.mov" },
        { title: "The Fairy Gothmother", tagline: "🧚 WILDCARD ALERT!!! YOU UNLOCKED IMMEDIATE COMFORT IN THE FORM OF A PERSONALIZED PROPHECY 🧚", file: "the-fairy-gothmother.mov" },
        { title: "The Cosmic Facilitator", tagline: "Always asks “But what are we not saying?” Scoped a next phase during midpoint.", file: "the-cosmic-facilitator.mov" },
        { title: "The Mystery Insight", tagline: "“What if the real need is…?”", file: "the-mystery-insight.mp4" },
      ],
    },
  ];