import Link from "next/link"
import NextImage from "next/image"
import { Navbar } from "@/components/navbar"
import { ContentRow } from "@/components/content-row"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SeriesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-24 px-4 md:px-8 pb-16 space-y-10">
        <h1 className="text-3xl font-bold tracking-wide">TV Series</h1>

        <Tabs defaultValue="all">
          <TabsList className="bg-black/50 backdrop-blur-sm border border-white/10">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="drama">Drama</TabsTrigger>
            <TabsTrigger value="comedy">Comedy</TabsTrigger>
            <TabsTrigger value="scifi">Sci-Fi</TabsTrigger>
            <TabsTrigger value="crime">Crime</TabsTrigger>
            <TabsTrigger value="fantasy">Fantasy</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="pt-6">
            <ContentRow
              title="Latest Series"
              viewMoreLink="/series/latest"
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
                },
              ]}
            />

            <ContentRow
              title="Trending Now"
              viewMoreLink="/series/trending"
              items={[
                {
                  id: 7,
                  title: "Secrets",
                  image: "/placeholder.svg?height=400&width=600",
                  type: "series",
                  imdbRating: "8.7",
                  language: "Arabic",
                  classification: "Mystery",
                  ageRating: "TV-MA",
                },
                {
                  id: 8,
                  title: "The Future",
                  image: "/placeholder.svg?height=400&width=600",
                  type: "series",
                  imdbRating: "8.3",
                  language: "English",
                  classification: "Sci-Fi",
                  ageRating: "TV-14",
                },
                {
                  id: 9,
                  title: "The Past",
                  image: "/placeholder.svg?height=400&width=600",
                  type: "series",
                  imdbRating: "7.9",
                  language: "Arabic",
                  classification: "Historical",
                  ageRating: "TV-14",
                },
                {
                  id: 10,
                  title: "The Present",
                  image: "/placeholder.svg?height=400&width=600",
                  type: "series",
                  imdbRating: "8.1",
                  language: "Arabic",
                  classification: "Drama",
                  ageRating: "TV-14",
                },
                {
                  id: 11,
                  title: "Hope",
                  image: "/placeholder.svg?height=400&width=600",
                  type: "series",
                  imdbRating: "7.7",
                  language: "English",
                  classification: "Inspirational",
                  ageRating: "TV-PG",
                },
                {
                  id: 12,
                  title: "The Dream",
                  image: "/placeholder.svg?height=400&width=600",
                  type: "series",
                  imdbRating: "8.0",
                  language: "Arabic",
                  classification: "Fantasy",
                  ageRating: "TV-14",
                },
              ]}
            />

            <div className="pt-12">
              <h2 className="text-xl font-semibold mb-6 tracking-wide">Most Watched in Saudi Arabia</h2>
              <div className="relative">
                <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-8">
                  {[
                    {
                      id: 201,
                      title: "Family House",
                      image: "/placeholder.svg?height=400&width=600",
                      imdbRating: "9.1",
                      language: "Arabic",
                      classification: "Drama",
                      ageRating: "TV-14",
                    },
                    {
                      id: 202,
                      title: "East District",
                      image: "/placeholder.svg?height=400&width=600",
                      imdbRating: "8.9",
                      language: "Arabic",
                      classification: "Drama",
                      ageRating: "TV-14",
                    },
                    {
                      id: 203,
                      title: "Summer Days",
                      image: "/placeholder.svg?height=400&width=600",
                      imdbRating: "8.7",
                      language: "Arabic",
                      classification: "Comedy",
                      ageRating: "TV-PG",
                    },
                    {
                      id: 204,
                      title: "The Doctor",
                      image: "/placeholder.svg?height=400&width=600",
                      imdbRating: "8.6",
                      language: "Arabic",
                      classification: "Drama",
                      ageRating: "TV-14",
                    },
                    {
                      id: 205,
                      title: "The Detective",
                      image: "/placeholder.svg?height=400&width=600",
                      imdbRating: "8.5",
                      language: "Arabic",
                      classification: "Crime",
                      ageRating: "TV-MA",
                    },
                    {
                      id: 206,
                      title: "The Brothers",
                      image: "/placeholder.svg?height=400&width=600",
                      imdbRating: "8.4",
                      language: "Arabic",
                      classification: "Drama",
                      ageRating: "TV-14",
                    },
                    {
                      id: 207,
                      title: "The Guardian",
                      image: "/placeholder.svg?height=400&width=600",
                      imdbRating: "8.3",
                      language: "Arabic",
                      classification: "Action",
                      ageRating: "TV-14",
                    },
                    {
                      id: 208,
                      title: "The Traveler",
                      image: "/placeholder.svg?height=400&width=600",
                      imdbRating: "8.2",
                      language: "Arabic",
                      classification: "Adventure",
                      ageRating: "TV-14",
                    },
                    {
                      id: 209,
                      title: "The Teacher",
                      image: "/placeholder.svg?height=400&width=600",
                      imdbRating: "8.1",
                      language: "Arabic",
                      classification: "Drama",
                      ageRating: "TV-14",
                    },
                    {
                      id: 210,
                      title: "The Knights",
                      image: "/placeholder.svg?height=400&width=600",
                      imdbRating: "8.0",
                      language: "Arabic",
                      classification: "Historical",
                      ageRating: "TV-14",
                    },
                  ].map((series, index) => (
                    <div key={series.id} className="relative flex-shrink-0 group">
                      <Link href={`/series/${series.id}`}>
                        <div className="relative h-[240px] w-[160px] md:h-[270px] md:w-[180px] rounded-lg overflow-hidden group-hover:ring-2 group-hover:ring-white transition-all">
                          <NextImage
                            src={series.image || "/placeholder.svg"}
                            alt={series.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                          {/* Top 10 Number */}
                          <div className="absolute -left-4 -bottom-6 text-[80px] font-bold text-white opacity-60 select-none">
                            {index + 1}
                          </div>

                          {/* Age Rating Badge */}
                          {series.ageRating && (
                            <div className="absolute top-2 left-2 bg-black/70 text-white text-xs font-bold px-1.5 py-0.5 rounded z-30 border border-white/30">
                              {series.ageRating}
                            </div>
                          )}

                          {/* IMDb rating */}
                          <div className="absolute top-2 right-2 flex items-center bg-black/60 backdrop-blur-sm rounded px-1.5 py-0.5">
                            <span className="text-yellow-400 text-xs font-bold mr-1">IMDb</span>
                            <span className="text-white text-xs">{series.imdbRating}</span>
                          </div>

                          {/* Language and classification */}
                          <div className="absolute bottom-2 left-2 right-2 flex flex-wrap gap-1.5">
                            <span className="text-[10px] bg-white/20 backdrop-blur-sm px-1.5 py-0.5 rounded-sm">
                              {series.language}
                            </span>
                            <span className="text-[10px] bg-white/20 backdrop-blur-sm px-1.5 py-0.5 rounded-sm">
                              {series.classification}
                            </span>
                          </div>
                        </div>
                      </Link>

                      <h3 className="mt-2 text-sm font-medium line-clamp-1 text-center relative z-10">
                        {series.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <ContentRow
              title="Classic Series"
              viewMoreLink="/series/classics"
              items={[
                {
                  id: 13,
                  title: "The Family",
                  image: "/placeholder.svg?height=400&width=600",
                  type: "series",
                  imdbRating: "8.8",
                  language: "Arabic",
                  classification: "Drama",
                  ageRating: "TV-PG",
                },
                {
                  id: 14,
                  title: "The City",
                  image: "/placeholder.svg?height=400&width=600",
                  type: "series",
                  imdbRating: "8.4",
                  language: "Arabic",
                  classification: "Drama",
                  ageRating: "TV-14",
                },
                {
                  id: 15,
                  title: "The Village",
                  image: "/placeholder.svg?height=400&width=600",
                  type: "series",
                  imdbRating: "8.6",
                  language: "Arabic",
                  classification: "Drama",
                  ageRating: "TV-PG",
                },
                {
                  id: 16,
                  title: "Friendship",
                  image: "/placeholder.svg?height=400&width=600",
                  type: "series",
                  imdbRating: "8.2",
                  language: "Arabic",
                  classification: "Drama",
                  ageRating: "TV-PG",
                },
                {
                  id: 17,
                  title: "Love",
                  image: "/placeholder.svg?height=400&width=600",
                  type: "series",
                  imdbRating: "8.5",
                  language: "Arabic",
                  classification: "Romance",
                  ageRating: "TV-14",
                },
                {
                  id: 18,
                  title: "War",
                  image: "/placeholder.svg?height=400&width=600",
                  type: "series",
                  imdbRating: "8.7",
                  language: "Arabic",
                  classification: "War",
                  ageRating: "TV-MA",
                },
              ]}
            />
          </TabsContent>

          {/* Other tabs content would be similar */}
        </Tabs>
      </main>
    </div>
  )
}
