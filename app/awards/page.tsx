import { Navbar } from "@/components/navbar"
import NextImage from "next/image"
import Link from "next/link"
import { Trophy, Star, ChevronRight, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for award-winning content
const awardWinningContent = [
  {
    id: 1001,
    title: "The Masterpiece",
    image: "/placeholder.svg?height=600&width=400",
    type: "movie",
    award: "Best Picture",
    year: "2023",
    rating: "9.2",
    ageRating: "PG-13",
    festival: "International Film Awards",
    director: "Christopher Anderson",
    category: "drama",
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
    festival: "Global Cinema Festival",
    director: "Maria Rodriguez",
    category: "drama",
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
    festival: "Screen Excellence Awards",
    director: "David Chen",
    category: "drama",
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
    festival: "Television Critics Choice",
    director: "Sarah Johnson",
    category: "drama",
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
    festival: "Comedy Awards",
    director: "Michael Brown",
    category: "comedy",
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
    festival: "Technical Excellence Awards",
    director: "James Wilson",
    category: "scifi",
  },
  {
    id: 1007,
    title: "Desert Storm",
    image: "/placeholder.svg?height=600&width=400",
    type: "movie",
    award: "Best Cinematography",
    year: "2023",
    rating: "9.1",
    ageRating: "R",
    festival: "Cinematography Awards",
    director: "Ahmed Hassan",
    category: "action",
  },
  {
    id: 1008,
    title: "Whispers in the Dark",
    image: "/placeholder.svg?height=600&width=400",
    type: "movie",
    award: "Best Original Screenplay",
    year: "2023",
    rating: "8.9",
    ageRating: "R",
    festival: "Writers Guild Awards",
    director: "Emma Thompson",
    category: "thriller",
  },
  {
    id: 1009,
    title: "Family Ties",
    image: "/placeholder.svg?height=600&width=400",
    type: "series",
    award: "Best Ensemble Cast",
    year: "2022",
    rating: "9.0",
    ageRating: "TV-14",
    festival: "Actors Guild Awards",
    director: "Robert Davis",
    category: "drama",
  },
  {
    id: 1010,
    title: "Cosmic Journey",
    image: "/placeholder.svg?height=600&width=400",
    type: "movie",
    award: "Best Original Score",
    year: "2022",
    rating: "8.8",
    ageRating: "PG-13",
    festival: "Music in Film Awards",
    director: "Sophia Lee",
    category: "scifi",
  },
  {
    id: 1011,
    title: "The Last Stand",
    image: "/placeholder.svg?height=600&width=400",
    type: "movie",
    award: "Best Action Film",
    year: "2022",
    rating: "8.6",
    ageRating: "R",
    festival: "Action Film Festival",
    director: "Carlos Martinez",
    category: "action",
  },
  {
    id: 1012,
    title: "Heartstrings",
    image: "/placeholder.svg?height=600&width=400",
    type: "movie",
    award: "Best Romance Film",
    year: "2022",
    rating: "8.5",
    ageRating: "PG-13",
    festival: "Romance in Cinema Awards",
    director: "Olivia Parker",
    category: "romance",
  },
]

export default function AwardsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-slate-950 text-white">
      <Navbar />

      <main className="pt-24 px-4 md:px-8 pb-16">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Trophy className="h-8 w-8 text-yellow-400" />
            <h1 className="text-3xl font-bold tracking-wide">Award-Winning Content</h1>
          </div>
          <Button variant="outline" className="border-white/30 gap-2">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
        </div>

        <div className="relative mb-12 rounded-xl overflow-hidden">
          <div className="aspect-[21/9] relative">
            <NextImage
              src="/placeholder.svg?height=1080&width=1920"
              alt="Awards Banner"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <div className="bg-yellow-500 text-black text-sm font-bold px-4 py-2 rounded-full mb-4 flex items-center gap-2">
                <Trophy className="h-4 w-4" />
                <span>AWARD SEASON HIGHLIGHTS</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Celebrating Excellence in Cinema</h2>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mb-6">
                Discover the most acclaimed films and series that have been recognized for their outstanding
                achievements in storytelling, direction, acting, and technical excellence.
              </p>
              <Button className="bg-white text-black hover:bg-white/90">Explore All Award Winners</Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="bg-black/50 backdrop-blur-sm border border-white/10 mb-6">
            <TabsTrigger value="all">All Awards</TabsTrigger>
            <TabsTrigger value="2023">2023</TabsTrigger>
            <TabsTrigger value="2022">2022</TabsTrigger>
            <TabsTrigger value="movies">Movies</TabsTrigger>
            <TabsTrigger value="series">Series</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {awardWinningContent.map((item) => (
                <Link href={`/${item.type}/${item.id}`} key={item.id} className="group">
                  <div className="relative h-[300px] w-full rounded-lg overflow-hidden group-hover:ring-2 group-hover:ring-yellow-400 transition-all">
                    <NextImage
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                    {/* Award Badge */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full z-30 flex items-center gap-1 shadow-lg">
                      <Trophy className="h-3 w-3" />
                      <span>{item.award}</span>
                    </div>

                    {/* Age Rating Badge */}
                    {item.ageRating && (
                      <div className="absolute top-12 left-2 bg-black/70 text-white text-xs font-bold px-1.5 py-0.5 rounded z-30 border border-white/30">
                        {item.ageRating}
                      </div>
                    )}

                    {/* Year */}
                    <div className="absolute top-12 right-2 bg-black/60 backdrop-blur-sm rounded px-2 py-0.5 z-30">
                      <span className="text-white text-xs">{item.year}</span>
                    </div>

                    {/* Rating */}
                    <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 z-30">
                      <Star className="h-4 w-4 text-yellow-400 mr-1 fill-yellow-400" />
                      <span className="text-white text-sm font-bold">{item.rating}</span>
                    </div>

                    {/* Title at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-center z-30">
                      <h3 className="text-base font-bold text-white">{item.title}</h3>
                    </div>

                    {/* Shine effect on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent z-20 transition-opacity duration-700 -translate-x-full group-hover:translate-x-full"
                      style={{ transitionProperty: "opacity, transform", transitionDuration: "0.7s" }}
                    />
                  </div>

                  <div className="mt-2 text-center">
                    <p className="text-xs text-gray-400">{item.festival}</p>
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>

          {/* Other tab contents would be similar but filtered */}
        </Tabs>

        <div className="space-y-8">
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Major Film Festivals</h2>
              <Link href="/festivals" className="text-sm text-white hover:text-gray-300 flex items-center">
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  name: "Cannes Film Festival",
                  location: "Cannes, France",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  name: "Venice Film Festival",
                  location: "Venice, Italy",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  name: "Berlin International Film Festival",
                  location: "Berlin, Germany",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  name: "Toronto International Film Festival",
                  location: "Toronto, Canada",
                  image: "/placeholder.svg?height=400&width=600",
                },
              ].map((festival, index) => (
                <Link href={`/festivals/${index}`} key={index} className="group">
                  <div className="relative aspect-video rounded-lg overflow-hidden group-hover:ring-2 group-hover:ring-yellow-400 transition-all">
                    <NextImage
                      src={festival.image}
                      alt={festival.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-lg font-bold">{festival.name}</h3>
                      <p className="text-sm text-gray-300">{festival.location}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Award Categories</h2>
              <Link href="/categories" className="text-sm text-white hover:text-gray-300 flex items-center">
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                "Best Picture",
                "Best Director",
                "Best Actor",
                "Best Actress",
                "Best Supporting Actor",
                "Best Supporting Actress",
                "Best Original Screenplay",
                "Best Adapted Screenplay",
                "Best Cinematography",
                "Best Visual Effects",
                "Best Original Score",
                "Best Film Editing",
              ].map((category, index) => (
                <Link href={`/awards/category/${index}`} key={index}>
                  <div className="bg-white/5 hover:bg-white/10 border border-white/20 hover:border-yellow-400/50 rounded-lg p-4 text-center transition-colors">
                    <Trophy className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                    <h3 className="text-sm font-medium">{category}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
