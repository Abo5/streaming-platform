import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { FeaturedContent } from "@/components/featured-content"
import { ContentRow } from "@/components/content-row"
import { TopTenRow } from "@/components/top-ten-row"

export const metadata: Metadata = {
  title: "New & Popular | Stream+",
  description: "Discover the newest and most popular content on Stream+",
}

export default function NewAndPopularPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white pb-20">
        <div className="pt-16">
          {/* Hero Section */}
          <FeaturedContent
            title="The Newest Releases"
            description="Check out the latest movies and shows that just dropped on Stream+"
            imageUrl="/placeholder.svg?height=600&width=1200"
            type="movie"
            year={2025}
            rating="PG-13"
            duration="2h 15m"
            genres={["Action", "Adventure", "Sci-Fi"]}
          />

          {/* New Releases */}
          <div className="mt-8 space-y-8 pb-16">
            <ContentRow
              title="New This Week"
              items={[
                {
                  id: "new1",
                  title: "Cosmic Odyssey",
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                },
                {
                  id: "new2",
                  title: "Desert Mirage",
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                },
                {
                  id: "new3",
                  title: "Urban Legends",
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "series",
                },
                {
                  id: "new4",
                  title: "Midnight Express",
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                },
                {
                  id: "new5",
                  title: "Crystal Kingdom",
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "series",
                },
                {
                  id: "new6",
                  title: "Neon Nights",
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                },
              ]}
            />

            {/* Trending Now */}
            <ContentRow
              title="Trending Now"
              items={[
                {
                  id: "trend1",
                  title: "Skyline Runners",
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "series",
                },
                {
                  id: "trend2",
                  title: "Eternal Flame",
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                },
                {
                  id: "trend3",
                  title: "Quantum Break",
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                },
                {
                  id: "trend4",
                  title: "Mystic Falls",
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "series",
                },
                {
                  id: "trend5",
                  title: "Golden Hour",
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                },
                {
                  id: "trend6",
                  title: "Shadow Hunters",
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "series",
                },
              ]}
            />

            {/* Top 10 in Saudi Arabia */}
            <TopTenRow
              title="Top 10 in Saudi Arabia"
              items={[
                {
                  id: "top1",
                  title: "Desert Rose",
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                },
                {
                  id: "top2",
                  title: "Riyadh Nights",
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "series",
                },
                {
                  id: "top3",
                  title: "Red Sea Treasures",
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "documentary",
                },
                {
                  id: "top4",
                  title: "Modern Kingdom",
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "series",
                },
                {
                  id: "top5",
                  title: "Arabian Nights",
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                },
                {
                  id: "top6",
                  title: "Oasis",
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "series",
                },
                {
                  id: "top7",
                  title: "Desert Storm",
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                },
                {
                  id: "top8",
                  title: "Falcon's Flight",
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "series",
                },
                {
                  id: "top9",
                  title: "Sand Castles",
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                },
                {
                  id: "top10",
                  title: "Midnight Sun",
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "series",
                },
              ]}
            />

            {/* Coming Soon */}
            <ContentRow
              title="Coming Next Month"
              items={[
                {
                  id: "soon1",
                  title: "Frozen Tundra",
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                },
                {
                  id: "soon2",
                  title: "Emerald City",
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "series",
                },
                {
                  id: "soon3",
                  title: "Crimson Peak",
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                },
                {
                  id: "soon4",
                  title: "Azure Skies",
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "series",
                },
                {
                  id: "soon5",
                  title: "Velvet Dreams",
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                },
                {
                  id: "soon6",
                  title: "Sapphire Coast",
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "series",
                },
              ]}
            />
          </div>
        </div>
      </main>
    </>
  )
}
