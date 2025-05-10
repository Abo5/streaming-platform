import { Navbar } from "@/components/navbar"
import { FeaturedContent } from "@/components/featured-content"
import { ContentRow } from "@/components/content-row"
import { TopTenRow } from "@/components/top-ten-row"
import { ContinueWatching } from "@/components/continue-watching"
import { FeaturedOriginals } from "@/components/featured-originals"
import { PreviewsForYou } from "@/components/previews-for-you"
import { CategoryShowcase } from "@/components/category-showcase"
import { AwardsShowcase } from "@/components/awards-showcase"
import { InteractiveShowcase } from "@/components/interactive-showcase"
import { BehindTheScenes } from "@/components/behind-the-scenes"
import { SubscriberRecommendations } from "@/components/subscriber-recommendations"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        <FeaturedContent />

        <div className="px-4 md:px-8 pb-16 space-y-12">
          {/* Continue Watching Section */}
          <ContinueWatching
            items={[
              {
                id: 301,
                title: "Journey to the Future",
                image: "/placeholder.svg?height=400&width=600",
                type: "movie",
                progress: 45,
                remainingTime: "1 hour 10 minutes",
                ageRating: "PG-13",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              },
              {
                id: 302,
                title: "Life Chronicles",
                image: "/placeholder.svg?height=400&width=600",
                type: "series",
                progress: 75,
                season: "2",
                episode: "5",
                remainingTime: "25 minutes",
                ageRating: "TV-14",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
              },
              {
                id: 303,
                title: "Black Falcon",
                image: "/placeholder.svg?height=400&width=600",
                type: "movie",
                progress: 30,
                remainingTime: "1 hour 25 minutes",
                ageRating: "R",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
              },
              {
                id: 304,
                title: "The Road",
                image: "/placeholder.svg?height=400&width=600",
                type: "series",
                progress: 90,
                season: "1",
                episode: "8",
                remainingTime: "10 minutes",
                ageRating: "TV-MA",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
              },
              {
                id: 305,
                title: "Unknown Future",
                image: "/placeholder.svg?height=400&width=600",
                type: "movie",
                progress: 60,
                remainingTime: "45 minutes",
                ageRating: "PG-13",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
              },
            ]}
          />

          {/* Award-Winning Content */}
          <AwardsShowcase
            title="Award-Winning Content"
            viewMoreLink="/awards"
            items={[
              {
                id: 1001,
                title: "The Masterpiece",
                image: "/placeholder.svg?height=600&width=400",
                type: "movie",
                award: "Best Picture",
                year: "2023",
                rating: "9.2",
                ageRating: "PG-13",
              },
              {
                id: 1002,
                title: "Eternal Emotions",
                image: "/placeholder.svg?height=600&width=400",
                type: "movie",
                award: "Best Director",
                year: "2023",
                rating: "8.9",
                ageRating: "R",
              },
              {
                id: 1003,
                title: "The Performance",
                image: "/placeholder.svg?height=600&width=400",
                type: "movie",
                award: "Best Actor",
                year: "2023",
                rating: "9.0",
                ageRating: "PG-13",
              },
              {
                id: 1004,
                title: "Dramatic Heights",
                image: "/placeholder.svg?height=600&width=400",
                type: "series",
                award: "Best Drama Series",
                year: "2023",
                rating: "9.3",
                ageRating: "TV-MA",
              },
              {
                id: 1005,
                title: "Laugh Out Loud",
                image: "/placeholder.svg?height=600&width=400",
                type: "series",
                award: "Best Comedy Series",
                year: "2023",
                rating: "8.7",
                ageRating: "TV-14",
              },
              {
                id: 1006,
                title: "Visual Wonder",
                image: "/placeholder.svg?height=600&width=400",
                type: "movie",
                award: "Best Visual Effects",
                year: "2023",
                rating: "8.8",
                ageRating: "PG-13",
              },
            ]}
          />

          {/* Previews For You Section */}
          <PreviewsForYou
            items={[
              {
                id: 401,
                title: "Journey to the Future",
                image: "/placeholder.svg?height=1080&width=1920",
                type: "movie",
                description:
                  "In a futuristic world filled with advanced technology, our hero finds himself facing unexpected challenges that threaten the fate of humanity. A journey filled with excitement, suspense, and adventure.",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                year: "2023",
                duration: "120 min",
                classification: "Sci-Fi",
                ageRating: "PG-13",
              },
              {
                id: 402,
                title: "Black Falcon",
                image: "/placeholder.svg?height=1080&width=1920",
                type: "movie",
                description:
                  "The story of a special forces officer facing an international conspiracy that threatens national security. Chases and action around the world.",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
                year: "2023",
                duration: "110 min",
                classification: "Action",
                ageRating: "R",
              },
              {
                id: 403,
                title: "Life Chronicles",
                image: "/placeholder.svg?height=1080&width=1920",
                type: "series",
                description:
                  "A social drama that follows the stories of different families and how their lives intertwine in contemporary circumstances.",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                year: "2023",
                duration: "Season 2",
                classification: "Drama",
                ageRating: "TV-14",
              },
            ]}
          />

          {/* Interactive Content */}
          <InteractiveShowcase
            title="Interactive Experiences"
            viewMoreLink="/interactive"
            items={[
              {
                id: 2001,
                title: "Choose Your Destiny",
                image: "/placeholder.svg?height=600&width=1000",
                type: "interactive",
                description:
                  "Navigate through a thrilling adventure where your choices determine the outcome. Multiple endings and paths to explore.",
                duration: "90-120 min",
                ageRating: "PG-13",
              },
              {
                id: 2002,
                title: "Mystery Mansion",
                image: "/placeholder.svg?height=600&width=1000",
                type: "interactive",
                description:
                  "Solve the mystery of the haunted mansion by making critical decisions. Can you uncover the truth before it's too late?",
                duration: "60-90 min",
                ageRating: "TV-14",
              },
              {
                id: 2003,
                title: "Space Explorer",
                image: "/placeholder.svg?height=600&width=1000",
                type: "interactive",
                description:
                  "Command a spaceship on a mission to save humanity. Every decision affects your crew and mission success.",
                duration: "120-150 min",
                ageRating: "PG-13",
              },
            ]}
          />

          {/* Featured Originals Section */}
          <FeaturedOriginals
            items={[
              {
                id: 501,
                title: "Gulf Hawks",
                image: "/placeholder.svg?height=400&width=600",
                type: "series",
                description:
                  "An exclusive action series about an elite team on secret missions to protect Gulf security.",
                isNew: true,
                ageRating: "TV-MA",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
              },
              {
                id: 502,
                title: "The Final Journey",
                image: "/placeholder.svg?height=400&width=600",
                type: "movie",
                description:
                  "An exclusive adventure film about an exploratory journey that turns into a struggle for survival.",
                ageRating: "PG-13",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
              },
              {
                id: 503,
                title: "Family House",
                image: "/placeholder.svg?height=400&width=600",
                type: "series",
                description:
                  "An exclusive family drama that deals with conflicts and relationships within a wealthy family.",
                isNew: true,
                ageRating: "TV-14",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
              },
              {
                id: 504,
                title: "The Detective",
                image: "/placeholder.svg?height=400&width=600",
                type: "series",
                description:
                  "An exclusive crime series following mysterious cases solved by a brilliant detective in unconventional ways.",
                ageRating: "TV-MA",
                previewVideo:
                  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
              },
            ]}
          />

          {/* Behind The Scenes */}
          <BehindTheScenes
            title="Behind The Scenes"
            viewMoreLink="/extras/behind-the-scenes"
            items={[
              {
                id: 3001,
                title: "Making of Black Falcon",
                image: "/placeholder.svg?height=400&width=600",
                relatedTo: "Black Falcon",
                duration: "25 min",
                type: "making-of",
              },
              {
                id: 3002,
                title: "Interview with the Director",
                image: "/placeholder.svg?height=400&width=600",
                relatedTo: "The Final Journey",
                duration: "15 min",
                type: "interview",
              },
              {
                id: 3003,
                title: "The Visual Effects of Journey to the Future",
                image: "/placeholder.svg?height=400&width=600",
                relatedTo: "Journey to the Future",
                duration: "30 min",
                type: "documentary",
              },
              {
                id: 3004,
                title: "Cast Roundtable",
                image: "/placeholder.svg?height=400&width=600",
                relatedTo: "Family House",
                duration: "40 min",
                type: "interview",
              },
              {
                id: 3005,
                title: "Filming in Extreme Locations",
                image: "/placeholder.svg?height=400&width=600",
                relatedTo: "The Last Knight",
                duration: "35 min",
                type: "documentary",
              },
            ]}
          />

          {/* Top 10 in Saudi Arabia */}
          <TopTenRow
            title="Top 10 in Saudi Arabia"
            viewMoreLink="/trending"
            items={[
              {
                id: 101,
                title: "Black Falcon",
                image: "/placeholder.svg?height=400&width=600",
                type: "movie",
                imdbRating: "8.7",
                language: "Arabic",
                classification: "Action",
                ageRating: "R",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              },
              {
                id: 102,
                title: "Desert Road",
                image: "/placeholder.svg?height=400&width=600",
                type: "movie",
                imdbRating: "8.5",
                language: "Arabic",
                classification: "Drama",
                ageRating: "PG-13",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
              },
              {
                id: 103,
                title: "The Last Knight",
                image: "/placeholder.svg?height=400&width=600",
                type: "movie",
                imdbRating: "8.3",
                language: "Arabic",
                classification: "Adventure",
                ageRating: "PG-13",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
              },
              {
                id: 104,
                title: "Night in Riyadh",
                image: "/placeholder.svg?height=400&width=600",
                type: "movie",
                imdbRating: "8.2",
                language: "Arabic",
                classification: "Comedy",
                ageRating: "PG",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
              },
              {
                id: 105,
                title: "Gulf Hawks",
                image: "/placeholder.svg?height=400&width=600",
                type: "movie",
                imdbRating: "8.1",
                language: "Arabic",
                classification: "Action",
                ageRating: "R",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
              },
              {
                id: 106,
                title: "The Final Journey",
                image: "/placeholder.svg?height=400&width=600",
                type: "movie",
                imdbRating: "8.0",
                language: "English",
                classification: "Thriller",
                ageRating: "PG-13",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
              },
              {
                id: 107,
                title: "Unknown Future",
                image: "/placeholder.svg?height=400&width=600",
                type: "movie",
                imdbRating: "7.9",
                language: "English",
                classification: "Sci-Fi",
                ageRating: "PG-13",
                previewVideo:
                  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
              },
              {
                id: 108,
                title: "Eternal Love",
                image: "/placeholder.svg?height=400&width=600",
                type: "movie",
                imdbRating: "7.8",
                language: "Arabic",
                classification: "Romance",
                ageRating: "PG",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
              },
              {
                id: 109,
                title: "The Last Battle",
                image: "/placeholder.svg?height=400&width=600",
                type: "movie",
                imdbRating: "7.7",
                language: "English",
                classification: "War",
                ageRating: "R",
                previewVideo:
                  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
              },
              {
                id: 110,
                title: "Lost Dream",
                image: "/placeholder.svg?height=400&width=600",
                type: "movie",
                imdbRating: "7.6",
                language: "Arabic",
                classification: "Drama",
                ageRating: "PG-13",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
              },
            ]}
          />

          {/* Subscriber Recommendations */}
          <SubscriberRecommendations
            title="Subscriber Recommendations in Saudi Arabia"
            viewMoreLink="/recommendations"
            items={[
              {
                id: 1201,
                title: "The Journey",
                image: "/placeholder.svg?height=400&width=600",
                type: "movie",
                imdbRating: "8.3",
                language: "Arabic",
                classification: "Adventure",
                ageRating: "PG-13",
                recommendedBy: "Ahmed",
                recommendationCount: 1243,
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              },
              {
                id: 1202,
                title: "The Dream",
                image: "/placeholder.svg?height=400&width=600",
                type: "movie",
                imdbRating: "7.5",
                language: "English",
                classification: "Drama",
                ageRating: "PG-13",
                recommendedBy: "Fatima",
                recommendationCount: 987,
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
              },
              {
                id: 1203,
                title: "The Future",
                image: "/placeholder.svg?height=400&width=600",
                type: "movie",
                imdbRating: "8.7",
                language: "English",
                classification: "Sci-Fi",
                ageRating: "PG-13",
                recommendedBy: "Mohammed",
                recommendationCount: 856,
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
              },
              {
                id: 1204,
                title: "The Past",
                image: "/placeholder.svg?height=400&width=600",
                type: "movie",
                imdbRating: "7.9",
                language: "Arabic",
                classification: "Historical",
                ageRating: "PG-13",
                recommendedBy: "Layla",
                recommendationCount: 743,
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
              },
              {
                id: 1205,
                title: "The Present",
                image: "/placeholder.svg?height=400&width=600",
                type: "movie",
                imdbRating: "8.1",
                language: "Arabic",
                classification: "Drama",
                ageRating: "PG-13",
                recommendedBy: "Khalid",
                recommendationCount: 621,
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
              },
              {
                id: 1206,
                title: "Hope",
                image: "/placeholder.svg?height=400&width=600",
                type: "movie",
                imdbRating: "7.7",
                language: "English",
                classification: "Inspirational",
                ageRating: "PG",
                recommendedBy: "Nora",
                recommendationCount: 512,
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
              },
            ]}
          />

          {/* Category Sections */}
          <CategoryShowcase
            title="Comedy"
            viewMoreLink="/category/comedy"
            items={[
              {
                id: 601,
                title: "Night in Riyadh",
                image: "/placeholder.svg?height=400&width=600",
                type: "movie",
                imdbRating: "8.2",
                language: "Arabic",
                classification: "Comedy",
                ageRating: "PG",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              },
              {
                id: 602,
                title: "The Fun Family",
                image: "/placeholder.svg?height=400&width=600",
                type: "movie",
                imdbRating: "7.9",
                language: "Arabic",
                classification: "Comedy",
                ageRating: "PG",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
              },
              {
                id: 603,
                title: "Funny Trip",
                image: "/placeholder.svg?height=400&width=600",
                type: "movie",
                imdbRating: "7.8",
                language: "Arabic",
                classification: "Comedy",
                ageRating: "PG",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
              },
              {
                id: 604,
                title: "Happy Day",
                image: "/placeholder.svg?height=400&width=600",
                type: "movie",
                imdbRating: "7.7",
                language: "Arabic",
                classification: "Comedy",
                ageRating: "PG",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
              },
              {
                id: 605,
                title: "Comic Adventure",
                image: "/placeholder.svg?height=400&width=600",
                type: "movie",
                imdbRating: "7.6",
                language: "Arabic",
                classification: "Comedy",
                ageRating: "PG",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
              },
              {
                id: 606,
                title: "Laughter for All",
                image: "/placeholder.svg?height=400&width=600",
                type: "movie",
                imdbRating: "7.5",
                language: "Arabic",
                classification: "Comedy",
                ageRating: "PG",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
              },
            ]}
          />

          <CategoryShowcase
            title="Drama"
            viewMoreLink="/category/drama"
            items={[
              {
                id: 701,
                title: "Family House",
                image: "/placeholder.svg?height=400&width=600",
                type: "series",
                imdbRating: "9.1",
                language: "Arabic",
                classification: "Drama",
                ageRating: "TV-14",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              },
              {
                id: 702,
                title: "East District",
                image: "/placeholder.svg?height=400&width=600",
                type: "series",
                imdbRating: "8.9",
                language: "Arabic",
                classification: "Drama",
                ageRating: "TV-14",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
              },
              {
                id: 703,
                title: "The Doctor",
                image: "/placeholder.svg?height=400&width=600",
                type: "series",
                imdbRating: "8.6",
                language: "Arabic",
                classification: "Drama",
                ageRating: "TV-14",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
              },
              {
                id: 704,
                title: "The Brothers",
                image: "/placeholder.svg?height=400&width=600",
                type: "series",
                imdbRating: "8.4",
                language: "Arabic",
                classification: "Drama",
                ageRating: "TV-14",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
              },
              {
                id: 705,
                title: "The Teacher",
                image: "/placeholder.svg?height=400&width=600",
                type: "series",
                imdbRating: "8.1",
                language: "Arabic",
                classification: "Drama",
                ageRating: "TV-14",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
              },
              {
                id: 706,
                title: "Lost Dream",
                image: "/placeholder.svg?height=400&width=600",
                type: "movie",
                imdbRating: "7.6",
                language: "Arabic",
                classification: "Drama",
                ageRating: "PG-13",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
              },
            ]}
          />

          <CategoryShowcase
            title="Action"
            viewMoreLink="/category/action"
            items={[
              {
                id: 801,
                title: "Black Falcon",
                image: "/placeholder.svg?height=400&width=600",
                type: "movie",
                imdbRating: "8.7",
                language: "Arabic",
                classification: "Action",
                ageRating: "R",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              },
              {
                id: 802,
                title: "The Battle",
                image: "/placeholder.svg?height=400&width=600",
                type: "movie",
                imdbRating: "8.3",
                language: "Arabic",
                classification: "Action",
                ageRating: "R",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
              },
              {
                id: 803,
                title: "Revenge",
                image: "/placeholder.svg?height=400&width=600",
                type: "movie",
                imdbRating: "8.1",
                language: "Arabic",
                classification: "Action",
                ageRating: "R",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
              },
              {
                id: 804,
                title: "The Mission",
                image: "/placeholder.svg?height=400&width=600",
                type: "movie",
                imdbRating: "8.4",
                language: "English",
                classification: "Action",
                ageRating: "R",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
              },
              {
                id: 805,
                title: "The Escape",
                image: "/placeholder.svg?height=400&width=600",
                type: "movie",
                imdbRating: "7.8",
                language: "Arabic",
                classification: "Action",
                ageRating: "PG-13",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
              },
              {
                id: 806,
                title: "Confrontation",
                image: "/placeholder.svg?height=400&width=600",
                type: "movie",
                imdbRating: "8.2",
                language: "English",
                classification: "Action",
                ageRating: "R",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
              },
            ]}
          />

          <CategoryShowcase
            title="Sci-Fi"
            viewMoreLink="/category/scifi"
            items={[
              {
                id: 901,
                title: "Journey to the Future",
                image: "/placeholder.svg?height=400&width=600",
                type: "movie",
                imdbRating: "8.7",
                language: "English",
                classification: "Sci-Fi",
                ageRating: "PG-13",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              },
              {
                id: 902,
                title: "Unknown Future",
                image: "/placeholder.svg?height=400&width=600",
                type: "movie",
                imdbRating: "7.9",
                language: "English",
                classification: "Sci-Fi",
                ageRating: "PG-13",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
              },
              {
                id: 903,
                title: "The Horizon",
                image: "/placeholder.svg?height=400&width=600",
                type: "series",
                imdbRating: "8.2",
                language: "English",
                classification: "Sci-Fi",
                ageRating: "TV-14",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
              },
              {
                id: 904,
                title: "The Stars",
                image: "/placeholder.svg?height=400&width=600",
                type: "series",
                imdbRating: "7.8",
                language: "English",
                classification: "Sci-Fi",
                ageRating: "TV-14",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
              },
              {
                id: 905,
                title: "Lost Time",
                image: "/placeholder.svg?height=400&width=600",
                type: "movie",
                imdbRating: "8.0",
                language: "English",
                classification: "Sci-Fi",
                ageRating: "PG-13",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
              },
              {
                id: 906,
                title: "Distant Planet",
                image: "/placeholder.svg?height=400&width=600",
                type: "movie",
                imdbRating: "8.3",
                language: "English",
                classification: "Sci-Fi",
                ageRating: "PG-13",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
              },
            ]}
          />

          <ContentRow
            title="Popular Series"
            viewMoreLink="/series"
            items={[
              {
                id: 1,
                title: "Life Chronicles",
                image: "/placeholder.svg?height=400&width=600",
                type: "series",
                imdbRating: "8.5",
                language: "Arabic",
                classification: "Drama",
                ageRating: "TV-14",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              },
              {
                id: 2,
                title: "The Road",
                image: "/placeholder.svg?height=400&width=600",
                type: "series",
                imdbRating: "7.9",
                language: "Arabic",
                classification: "Thriller",
                ageRating: "TV-MA",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
              },
              {
                id: 3,
                title: "The Horizon",
                image: "/placeholder.svg?height=400&width=600",
                type: "series",
                imdbRating: "8.2",
                language: "English",
                classification: "Sci-Fi",
                ageRating: "TV-14",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
              },
              {
                id: 4,
                title: "Eternal Love",
                image: "/placeholder.svg?height=400&width=600",
                type: "series",
                imdbRating: "7.6",
                language: "Arabic",
                classification: "Romance",
                ageRating: "TV-14",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
              },
              {
                id: 5,
                title: "The Desert",
                image: "/placeholder.svg?height=400&width=600",
                type: "series",
                imdbRating: "8.0",
                language: "Arabic",
                classification: "Adventure",
                ageRating: "TV-14",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
              },
              {
                id: 6,
                title: "The Stars",
                image: "/placeholder.svg?height=400&width=600",
                type: "series",
                imdbRating: "7.8",
                language: "English",
                classification: "Sci-Fi",
                ageRating: "TV-14",
                previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
              },
            ]}
          />

          <ContentRow
            title="Live"
            viewMoreLink="/live"
            items={[
              {
                id: 13,
                title: "Football Match",
                image: "/placeholder.svg?height=400&width=600",
                type: "live",
                isLive: true,
                ageRating: "TV-G",
              },
              {
                id: 14,
                title: "Music Concert",
                image: "/placeholder.svg?height=400&width=600",
                type: "live",
                isLive: true,
                ageRating: "TV-PG",
              },
              {
                id: 15,
                title: "Talk Show",
                image: "/placeholder.svg?height=400&width=600",
                type: "live",
                isLive: true,
                ageRating: "TV-14",
              },
              {
                id: 16,
                title: "Tech Conference",
                image: "/placeholder.svg?height=400&width=600",
                type: "live",
                isLive: false,
                ageRating: "TV-G",
              },
              {
                id: 17,
                title: "Fashion Show",
                image: "/placeholder.svg?height=400&width=600",
                type: "live",
                isLive: false,
                ageRating: "TV-PG",
              },
              {
                id: 18,
                title: "Film Festival",
                image: "/placeholder.svg?height=400&width=600",
                type: "live",
                isLive: false,
                ageRating: "TV-14",
              },
            ]}
          />
        </div>
      </main>
    </div>
  )
}
