import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { ContentRow } from "@/components/content-row"
import { FeaturedContent } from "@/components/featured-content"

interface CollectionPageProps {
  params: {
    id: string
  }
}

export function generateMetadata({ params }: CollectionPageProps): Metadata {
  // Get collection name from ID
  const collectionInfo = getCollectionInfo(params.id)

  return {
    title: `${collectionInfo.name} | Stream+`,
    description: collectionInfo.description,
  }
}

function getCollectionInfo(id: string): { name: string; description: string } {
  const collections: Record<string, { name: string; description: string }> = {
    "award-winners": {
      name: "Award Winners",
      description: "The most acclaimed movies and shows of all time",
    },
    "saudi-originals": {
      name: "Saudi Originals",
      description: "Exclusive content produced in Saudi Arabia",
    },
    classics: {
      name: "Classics",
      description: "Timeless movies and shows that defined generations",
    },
  }

  return collections[id] || { name: "Collection Not Found", description: "" }
}

export default function CollectionPage({ params }: CollectionPageProps) {
  const collectionInfo = getCollectionInfo(params.id)

  if (collectionInfo.name === "Collection Not Found") {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white">
        <div className="pt-16">
          {/* Hero Section */}
          <FeaturedContent
            title={collectionInfo.name}
            description={collectionInfo.description}
            imageUrl="/placeholder.svg?height=600&width=1200"
            type="collection"
          />

          <div className="mt-8 space-y-8 pb-16">
            {params.id === "award-winners" && (
              <>
                <ContentRow
                  title="Oscar Winners"
                  items={[
                    {
                      id: "ow1",
                      title: "The Masterpiece",
                      imageUrl: "/placeholder.svg?height=400&width=600",
                      type: "movie",
                    },
                    {
                      id: "ow2",
                      title: "Eternal Glory",
                      imageUrl: "/placeholder.svg?height=400&width=600",
                      type: "movie",
                    },
                    {
                      id: "ow3",
                      title: "The Director's Vision",
                      imageUrl: "/placeholder.svg?height=400&width=600",
                      type: "movie",
                    },
                    {
                      id: "ow4",
                      title: "Cinematic Wonder",
                      imageUrl: "/placeholder.svg?height=400&width=600",
                      type: "movie",
                    },
                    {
                      id: "ow5",
                      title: "The Performance",
                      imageUrl: "/placeholder.svg?height=400&width=600",
                      type: "movie",
                    },
                    {
                      id: "ow6",
                      title: "Golden Statue",
                      imageUrl: "/placeholder.svg?height=400&width=600",
                      type: "movie",
                    },
                  ]}
                />

                <ContentRow
                  title="Emmy Award Winners"
                  items={[
                    {
                      id: "ew1",
                      title: "The Drama",
                      imageUrl: "/placeholder.svg?height=400&width=600",
                      type: "series",
                    },
                    {
                      id: "ew2",
                      title: "Character Study",
                      imageUrl: "/placeholder.svg?height=400&width=600",
                      type: "series",
                    },
                    {
                      id: "ew3",
                      title: "The Ensemble",
                      imageUrl: "/placeholder.svg?height=400&width=600",
                      type: "series",
                    },
                    {
                      id: "ew4",
                      title: "Prestige Television",
                      imageUrl: "/placeholder.svg?height=400&width=600",
                      type: "series",
                    },
                    {
                      id: "ew5",
                      title: "The Limited Series",
                      imageUrl: "/placeholder.svg?height=400&width=600",
                      type: "series",
                    },
                    {
                      id: "ew6",
                      title: "Critical Darling",
                      imageUrl: "/placeholder.svg?height=400&width=600",
                      type: "series",
                    },
                  ]}
                />
              </>
            )}

            {params.id === "saudi-originals" && (
              <>
                <ContentRow
                  title="Saudi Original Movies"
                  items={[
                    {
                      id: "som1",
                      title: "Desert Rose",
                      imageUrl: "/placeholder.svg?height=400&width=600",
                      type: "movie",
                    },
                    {
                      id: "som2",
                      title: "Riyadh Stories",
                      imageUrl: "/placeholder.svg?height=400&width=600",
                      type: "movie",
                    },
                    {
                      id: "som3",
                      title: "The Kingdom",
                      imageUrl: "/placeholder.svg?height=400&width=600",
                      type: "movie",
                    },
                    {
                      id: "som4",
                      title: "Red Sea",
                      imageUrl: "/placeholder.svg?height=400&width=600",
                      type: "movie",
                    },
                    {
                      id: "som5",
                      title: "Arabian Nights",
                      imageUrl: "/placeholder.svg?height=400&width=600",
                      type: "movie",
                    },
                    {
                      id: "som6",
                      title: "The Falcon",
                      imageUrl: "/placeholder.svg?height=400&width=600",
                      type: "movie",
                    },
                  ]}
                />

                <ContentRow
                  title="Saudi Original Series"
                  items={[
                    {
                      id: "sos1",
                      title: "Jeddah Chronicles",
                      imageUrl: "/placeholder.svg?height=400&width=600",
                      type: "series",
                    },
                    {
                      id: "sos2",
                      title: "Modern Kingdom",
                      imageUrl: "/placeholder.svg?height=400&width=600",
                      type: "series",
                    },
                    {
                      id: "sos3",
                      title: "Desert Dynasties",
                      imageUrl: "/placeholder.svg?height=400&width=600",
                      type: "series",
                    },
                    {
                      id: "sos4",
                      title: "Saudi Visions",
                      imageUrl: "/placeholder.svg?height=400&width=600",
                      type: "series",
                    },
                    {
                      id: "sos5",
                      title: "The Oasis",
                      imageUrl: "/placeholder.svg?height=400&width=600",
                      type: "series",
                    },
                    {
                      id: "sos6",
                      title: "Heritage",
                      imageUrl: "/placeholder.svg?height=400&width=600",
                      type: "series",
                    },
                  ]}
                />
              </>
            )}

            {params.id === "classics" && (
              <>
                <ContentRow
                  title="Classic Movies"
                  items={[
                    {
                      id: "cm1",
                      title: "Golden Age",
                      imageUrl: "/placeholder.svg?height=400&width=600",
                      type: "movie",
                    },
                    {
                      id: "cm2",
                      title: "The Masterpiece",
                      imageUrl: "/placeholder.svg?height=400&width=600",
                      type: "movie",
                    },
                    {
                      id: "cm3",
                      title: "Timeless",
                      imageUrl: "/placeholder.svg?height=400&width=600",
                      type: "movie",
                    },
                    {
                      id: "cm4",
                      title: "The Legend",
                      imageUrl: "/placeholder.svg?height=400&width=600",
                      type: "movie",
                    },
                    {
                      id: "cm5",
                      title: "Vintage Cinema",
                      imageUrl: "/placeholder.svg?height=400&width=600",
                      type: "movie",
                    },
                    {
                      id: "cm6",
                      title: "The Icon",
                      imageUrl: "/placeholder.svg?height=400&width=600",
                      type: "movie",
                    },
                  ]}
                />

                <ContentRow
                  title="Classic TV Shows"
                  items={[
                    {
                      id: "ct1",
                      title: "The Original",
                      imageUrl: "/placeholder.svg?height=400&width=600",
                      type: "series",
                    },
                    {
                      id: "ct2",
                      title: "Retro TV",
                      imageUrl: "/placeholder.svg?height=400&width=600",
                      type: "series",
                    },
                    {
                      id: "ct3",
                      title: "The Sitcom",
                      imageUrl: "/placeholder.svg?height=400&width=600",
                      type: "series",
                    },
                    {
                      id: "ct4",
                      title: "Prime Time",
                      imageUrl: "/placeholder.svg?height=400&width=600",
                      type: "series",
                    },
                    {
                      id: "ct5",
                      title: "The Series",
                      imageUrl: "/placeholder.svg?height=400&width=600",
                      type: "series",
                    },
                    {
                      id: "ct6",
                      title: "Television History",
                      imageUrl: "/placeholder.svg?height=400&width=600",
                      type: "series",
                    },
                  ]}
                />
              </>
            )}
          </div>
        </div>
      </main>
    </>
  )
}
