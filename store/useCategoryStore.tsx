import { create } from "zustand";
interface Article {
  category: string;
  title: string;
  description: string;
}
interface CategoryStore {
  categories: string[];
  articles: Article[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  getArticlesByCategory: (selectedCategory: string) => Article[];
}
const useCategoryStore = create<CategoryStore>((set) => ({
  categories: [
    "Technology",
    "Science",
    "Sports",
    "Health",
    "Entertainment",
    "Business",
    "Politics",
  ],
  articles: articles,
  selectedCategory: "Technology",
  setSelectedCategory: (category: string) =>
    set((state) => ({
      selectedCategory: category,
    })),
  getArticlesByCategory: (selectedCategory: string) =>
    articles.filter(
      (article: Article) => article.category === selectedCategory
    ),
}));
export default useCategoryStore;

const articles = [
  {
    category: "Technology",
    title: "Next-Gen Smartphone Unveiled",
    description:
      "A leading tech company reveals its latest smartphone model, boasting cutting-edge features and enhanced performance.",
  },
  {
    category: "Science",
    title: "Mars Rover Discovers Ancient Water Deposits",
    description:
      "NASA's Mars rover makes a groundbreaking discovery, finding evidence of ancient water deposits on the Martian surface.",
  },
  {
    category: "Sports",
    title: "Underdog Team Wins Championship",
    description:
      "In a stunning upset, an underdog team emerges victorious in the championship game, defying all odds.",
  },
  {
    category: "Health",
    title: "Breakthrough in Cancer Immunotherapy",
    description:
      "Researchers achieve a significant breakthrough in cancer immunotherapy, offering new hope for patients battling the disease.",
  },
  {
    category: "Entertainment",
    title: "Netflix Announces Blockbuster Series",
    description:
      "Streaming giant Netflix announces a new blockbuster series, generating widespread anticipation and excitement among viewers.",
  },
  {
    category: "Sports",
    title: "Global Market Reaches All-Time High",
    description:
      "The global market hits an all-time high, fueled by strong economic indicators and positive investor sentiment.",
  },
  {
    category: "Politics",
    title: "Diplomatic Summit Averts Potential Crisis",
    description:
      "World leaders convene for a diplomatic summit, successfully averting a potential crisis through dialogue and cooperation.",
  },
  {
    category: "Technology",
    title: "New AI Release",
    description:
      "A groundbreaking AI system has been released, promising to revolutionize various industries with its advanced capabilities.",
  },
  {
    category: "Science",
    title: "Breakthrough in Quantum Computing",
    description:
      "Scientists achieve a major breakthrough in quantum computing, bringing us closer to practical applications of this revolutionary technology.",
  },
  {
    category: "Sports",
    title: "Record-Breaking Performance at the Olympics",
    description:
      "An athlete sets a new world record at the Olympics, showcasing exceptional skill and determination in their sport.",
  },
  {
    category: "Health",
    title: "Breakthrough Treatment for Alzheimer's Disease",
    description:
      "Researchers announce a promising breakthrough in the treatment of Alzheimer's disease, offering hope to millions affected by this debilitating condition.",
  },
  {
    category: "Entertainment",
    title: "Highly Anticipated Film Release",
    description:
      "A highly anticipated film hits theaters, captivating audiences with its gripping storyline and stellar performances.",
  },
  {
    category: "Business",
    title: "Tech Giant's Record Profits",
    description:
      "A leading tech company reports record-breaking profits, underscoring its dominance in the market and driving investor confidence.",
  },
  {
    category: "Politics",
    title: "Landmark Legislation Passed",
    description:
      "Lawmakers approve landmark legislation aimed at addressing pressing societal issues, marking a significant step forward in governance.",
  },
];
