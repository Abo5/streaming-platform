import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { ContentRow } from "@/components/content-row"
import { FeaturedContent } from "@/components/featured-content"

interface CategoryPageProps {
  params: {
    id: string
  }
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  // Get category name from ID
  const categoryName = getCategoryName(params.id)

  return {
    title: `${categoryName} | Stream+`,
    description: `Browse all ${categoryName.toLowerCase()} content on Stream+`,
  }
}

function getCategoryName(id: string): string {
  const categories: Record<string, string> = {
    action: "Action",
    comedy: "Comedy",
    drama: "Drama",
    horror: "Horror",
    "sci-fi": "Sci-Fi",
    fantasy: "Fantasy",
    romance: "Romance",
    thriller: "Thriller",
    animation: "Animation",
    documentary: "Documentary",
    crime: "Crime",
    mystery: "Mystery",
    adventure: "Adventure",
    family: "Family",
    history: "History",
    war: "War",
    music: "Music",
    western: "Western",
  }

  return categories[id] || "Category Not Found"
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryName = getCategoryName(params.id)

  if (categoryName === "Category Not Found") {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white">
        <div className="pt-16">
          {/* Hero Section */}
          <FeaturedContent
            title={`${categoryName} Movies & Shows`}
            description={`Explore the best ${categoryName.toLowerCase()} content on Stream+`}
            imageUrl="/placeholder.svg?height=600&width=1200"
            type="category"
          />

          <div className="mt-8 space-y-8 pb-16">
            <ContentRow
              title={`Popular ${categoryName} Movies`}
              items={[
                {
                  id: "m1",
                  title: `${categoryName} Masterpiece`,
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                },
                {
                  id: "m2",
                  title: `The ${categoryName} Chronicles`,
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                },
                {
                  id: "m3",
                  title: `Ultimate ${categoryName}`,
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                },
                {
                  id: "m4",
                  title: `${categoryName} Heroes`,
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                },
                {
                  id: "m5",
                  title: `${categoryName} Legacy`,
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                },
                {
                  id: "m6",
                  title: `${categoryName} Unleashed`,
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                },
              ]}
            />

            <ContentRow
              title={`${categoryName} TV Series`}
              items={[
                {
                  id: "s1",
                  title: `${categoryName} Squad`,
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "series",
                },
                {
                  id: "s2",
                  title: `${categoryName} Tales`,
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "series",
                },
                {
                  id: "s3",
                  title: `${categoryName} Nights`,
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "series",
                },
                {
                  id: "s4",
                  title: `${categoryName} Academy`,
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "series",
                },
                {
                  id: "s5",
                  title: `${categoryName} Legends`,
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "series",
                },
                {
                  id: "s6",
                  title: `${categoryName} Dynasty`,
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "series",
                },
              ]}
            />

            <ContentRow
              title={`New ${categoryName} Releases`}
              items={[
                {
                  id: "n1",
                  title: `${categoryName} Revolution`,
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                },
                {
                  id: "n2",
                  title: `${categoryName} Horizon`,
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "series",
                },
                {
                  id: "n3",
                  title: `${categoryName} Odyssey`,
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                },
                {
                  id: "n4",
                  title: `${categoryName} Frontiers`,
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "series",
                },
                {
                  id: "n5",
                  title: `${categoryName} Destiny`,
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                },
                {
                  id: "n6",
                  title: `${categoryName} Saga`,
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "series",
                },
              ]}
            />

            <ContentRow
              title={`Award-Winning ${categoryName}`}
              items={[
                {
                  id: "a1",
                  title: `The ${categoryName} Award`,
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                },
                {
                  id: "a2",
                  title: `${categoryName} Masterclass`,
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "series",
                },
                {
                  id: "a3",
                  title: `${categoryName} Excellence`,
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                },
                {
                  id: "a4",
                  title: `${categoryName} Triumph`,
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "series",
                },
                {
                  id: "a5",
                  title: `${categoryName} Glory`,
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                },
                {
                  id: "a6",
                  title: `${categoryName} Prestige`,
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
