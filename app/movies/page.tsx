import Link from "next/link"
import NextImage from "next/image"
import { Navbar } from "@/components/navbar"
import { ContentRow } from "@/components/content-row"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MoviesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-24 px-4 md:px-8 pb-16 space-y-10">
        <h1 className="text-3xl font-bold tracking-wide">Movies</h1>

        <Tabs defaultValue="all">
          <TabsList className="bg-black/50 backdrop-blur-sm border border-white/10">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="action">Action</TabsTrigger>
            <TabsTrigger value="drama">Drama</TabsTrigger>
            <TabsTrigger value="comedy">Comedy</TabsTrigger>
            <TabsTrigger value="scifi">Sci-Fi</TabsTrigger>
            <TabsTrigger value="horror">Horror</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="pt-6">
            <ContentRow
              title="Latest Movies"
              viewMoreLink="/movies/latest"
              items={[
                {
                  id: 7,
                  title: "The Journey",
                  image: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                  imdbRating: "8.3",
                  language: "Arabic",
                  classification: "Adventure",
                  ageRating: "PG-13",
                },
                {
                  id: 8,
                  title: "The Dream",
                  image: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                  imdbRating: "7.5",
                  language: "English",
                  classification: "Drama",
                  ageRating: "PG-13",
                },
                {
                  id: 9,
                  title: "The Future",
                  image: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                  imdbRating: "8.7",
                  language: "English",
                  classification: "Sci-Fi",
                  ageRating: "PG-13",
                },
                {
                  id: 10,
                  title: "The Past",
                  image: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                  imdbRating: "7.9",
                  language: "Arabic",
                  classification: "Historical",
                  ageRating: "PG-13",
                },
                {
                  id: 11,
                  title: "The Present",
                  image: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                  imdbRating: "8.1",
                  language: "Arabic",
                  classification: "Drama",
                  ageRating: "PG-13",
                },
                {
                  id: 12,
                  title: "Hope",
                  image: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                  imdbRating: "7.7",
                  language: "English",
                  classification: "Inspirational",
                  ageRating: "PG",
                },
              ]}
            />

            <ContentRow
              title="Most Watched"
              viewMoreLink="/movies/trending"
              items={[
                {
                  id: 13,
                  title: "Survival",
                  image: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                  imdbRating: "8.4",
                  language: "Arabic",
                  classification: "Thriller",
                  ageRating: "R",
                },
                {
                  id: 14,
                  title: "The Desert",
                  image: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                  imdbRating: "7.8",
                  language: "Arabic",
                  classification: "Adventure",
                  ageRating: "PG-13",
                },
                {
                  id: 15,
                  title: "The Mountain",
                  image: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                  imdbRating: "8.0",
                  language: "English",
                  classification: "Adventure",
                  ageRating: "PG-13",
                },
                {
                  id: 16,
                  title: "The Sea",
                  image: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                  imdbRating: "8.2",
                  language: "English",
                  classification: "Adventure",
                  ageRating: "PG-13",
                },
                {
                  id: 17,
                  title: "The Sky",
                  image: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                  imdbRating: "7.9",
                  language: "Arabic",
                  classification: "Sci-Fi",
                  ageRating: "PG-13",
                },
                {
                  id: 18,
                  title: "The Earth",
                  image: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                  imdbRating: "8.1",
                  language: "English",
                  classification: "Documentary",
                  ageRating: "G",
                },
              ]}
            />

            <div className="pt-12">
              <h2 className="text-xl font-semibold mb-6 tracking-wide">Most Watched in Saudi Arabia</h2>
              <div className="relative">
                <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-8">
                  {[
                    {
                      id: 101,
                      title: "Black Falcon",
                      image: "/placeholder.svg?height=400&width=600",
                      imdbRating: "8.7",
                      language: "Arabic",
                      classification: "Action",
                      ageRating: "R",
                    },
                    {
                      id: 102,
                      title: "Desert Road",
                      image: "/placeholder.svg?height=400&width=600",
                      imdbRating: "8.5",
                      language: "Arabic",
                      classification: "Drama",
                      ageRating: "PG-13",
                    },
                    {
                      id: 103,
                      title: "The Last Knight",
                      image: "/placeholder.svg?height=400&width=600",
                      imdbRating: "8.3",
                      language: "Arabic",
                      classification: "Adventure",
                      ageRating: "PG-13",
                    },
                    {
                      id: 104,
                      title: "Night in Riyadh",
                      image: "/placeholder.svg?height=400&width=600",
                      imdbRating: "8.2",
                      language: "Arabic",
                      classification: "Comedy",
                      ageRating: "PG",
                    },
                    {
                      id: 105,
                      title: "Gulf Hawks",
                      image: "/placeholder.svg?height=400&width=600",
                      imdbRating: "8.1",
                      language: "Arabic",
                      classification: "Action",
                      ageRating: "R",
                    },
                    {
                      id: 106,
                      title: "The Final Journey",
                      image: "/placeholder.svg?height=400&width=600",
                      imdbRating: "8.0",
                      language: "English",
                      classification: "Thriller",
                      ageRating: "PG-13",
                    },
                    {
                      id: 107,
                      title: "Unknown Future",
                      image: "/placeholder.svg?height=400&width=600",
                      imdbRating: "7.9",
                      language: "English",
                      classification: "Sci-Fi",
                      ageRating: "PG-13",
                    },
                    {
                      id: 108,
                      title: "Eternal Love",
                      image: "/placeholder.svg?height=400&width=600",
                      imdbRating: "7.8",
                      language: "Arabic",
                      classification: "Romance",
                      ageRating: "PG",
                    },
                    {
                      id: 109,
                      title: "The Last Battle",
                      image: "/placeholder.svg?height=400&width=600",
                      imdbRating: "7.7",
                      language: "English",
                      classification: "War",
                      ageRating: "R",
                    },
                    {
                      id: 110,
                      title: "Lost Dream",
                      image: "/placeholder.svg?height=400&width=600",
                      imdbRating: "7.6",
                      language: "Arabic",
                      classification: "Drama",
                      ageRating: "PG-13",
                    },
                  ].map((movie, index) => (
                    <div key={movie.id} className="relative flex-shrink-0 group">
                      <Link href={`/movies/${movie.id}`}>
                        <div className="relative h-[240px] w-[160px] md:h-[270px] md:w-[180px] rounded-lg overflow-hidden group-hover:ring-2 group-hover:ring-white transition-all">
                          <NextImage
                            src={movie.image || "/placeholder.svg"}
                            alt={movie.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                          {/* Top 10 Number */}
                          <div className="absolute -left-4 -bottom-6 text-[80px] font-bold text-white opacity-60 select-none">
                            {index + 1}
                          </div>

                          {/* Age Rating Badge */}
                          {movie.ageRating && (
                            <div className="absolute top-2 left-2 bg-black/70 text-white text-xs font-bold px-1.5 py-0.5 rounded z-30 border border-white/30">
                              {movie.ageRating}
                            </div>
                          )}

                          {/* IMDb rating */}
                          <div className="absolute top-2 right-2 flex items-center bg-black/60 backdrop-blur-sm rounded px-1.5 py-0.5">
                            <span className="text-yellow-400 text-xs font-bold mr-1">IMDb</span>
                            <span className="text-white text-xs">{movie.imdbRating}</span>
                          </div>

                          {/* Language and classification */}
                          <div className="absolute bottom-2 left-2 right-2 flex flex-wrap gap-1.5">
                            <span className="text-[10px] bg-white/20 backdrop-blur-sm px-1.5 py-0.5 rounded-sm">
                              {movie.language}
                            </span>
                            <span className="text-[10px] bg-white/20 backdrop-blur-sm px-1.5 py-0.5 rounded-sm">
                              {movie.classification}
                            </span>
                          </div>
                        </div>
                      </Link>

                      <h3 className="mt-2 text-sm font-medium line-clamp-1 text-center relative z-10">{movie.title}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <ContentRow
              title="Classic Movies"
              viewMoreLink="/movies/classics"
              items={[
                {
                  id: 19,
                  title: "Love",
                  image: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                  imdbRating: "8.5",
                  language: "Arabic",
                  classification: "Romance",
                  ageRating: "PG",
                },
                {
                  id: 20,
                  title: "War",
                  image: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                  imdbRating: "8.6",
                  language: "English",
                  classification: "War",
                  ageRating: "R",
                },
                {
                  id: 21,
                  title: "Peace",
                  image: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                  imdbRating: "7.9",
                  language: "Arabic",
                  classification: "Drama",
                  ageRating: "PG",
                },
                {
                  id: 22,
                  title: "Freedom",
                  image: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                  imdbRating: "8.7",
                  language: "English",
                  classification: "Historical",
                  ageRating: "PG-13",
                },
                {
                  id: 23,
                  title: "Justice",
                  image: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                  imdbRating: "8.2",
                  language: "Arabic",
                  classification: "Drama",
                  ageRating: "PG-13",
                },
                {
                  id: 24,
                  title: "Truth",
                  image: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                  imdbRating: "8.0",
                  language: "English",
                  classification: "Mystery",
                  ageRating: "PG-13",
                },
              ]}
            />
          </TabsContent>

          <TabsContent value="action" className="pt-6">
            <ContentRow
              title="Action Movies"
              viewMoreLink="/movies/action"
              items={[
                {
                  id: 25,
                  title: "The Battle",
                  image: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                  imdbRating: "8.3",
                  language: "Arabic",
                  classification: "Action",
                  ageRating: "R",
                },
                {
                  id: 26,
                  title: "The Chase",
                  image: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                  imdbRating: "7.9",
                  language: "English",
                  classification: "Action",
                  ageRating: "PG-13",
                },
                {
                  id: 27,
                  title: "Revenge",
                  image: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                  imdbRating: "8.1",
                  language: "Arabic",
                  classification: "Action",
                  ageRating: "R",
                },
                {
                  id: 28,
                  title: "The Mission",
                  image: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                  imdbRating: "8.4",
                  language: "English",
                  classification: "Action",
                  ageRating: "PG-13",
                },
                {
                  id: 29,
                  title: "The Escape",
                  image: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                  imdbRating: "7.8",
                  language: "Arabic",
                  classification: "Action",
                  ageRating: "PG-13",
                },
                {
                  id: 30,
                  title: "Confrontation",
                  image: "/placeholder.svg?height=400&width=600",
                  type: "movie",
                  imdbRating: "8.2",
                  language: "English",
                  classification: "Action",
                  ageRating: "R",
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
