import NextImage from "next/image"
import Link from "next/link"
import {
  Play,
  Plus,
  Share2,
  ThumbsUp,
  Download,
  ArrowLeft,
  Star,
  Clock,
  Calendar,
  Film,
  ThumbsDown,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for series
const seriesData = [
  {
    id: 201,
    title: "Family House",
    image: "/placeholder.svg?height=1080&width=1920",
    poster: "/placeholder.svg?height=600&width=400",
    type: "series",
    imdbRating: "9.1",
    language: "Arabic",
    classification: "Drama",
    ageRating: "TV-14",
    description:
      "A social drama that follows the stories of different families and how their lives intertwine in contemporary circumstances.",
    longDescription:
      "Family House is a compelling drama series that explores the complex dynamics of several interconnected families living in a wealthy neighborhood. The series delves into themes of love, betrayal, ambition, and redemption as it follows multiple generations navigating the challenges of modern life. When the patriarch of the influential Al-Faisal family suddenly passes away, long-buried secrets begin to surface, threatening to tear apart not only his immediate family but the entire community that has been built around his business empire. As inheritance disputes, hidden relationships, and past mistakes come to light, each character must confront their own moral compass and decide what truly matters in life. With rich character development and intricate storytelling, Family House offers a nuanced portrayal of contemporary Arab family life, addressing social issues while celebrating the enduring power of family bonds despite the most challenging circumstances.",
    creator: "Fatima Al-Qahtani",
    writers: ["Fatima Al-Qahtani", "Ahmed Al-Mansour", "Layla Ibrahim"],
    stars: ["Mohammed Al-Shammari", "Nora Al-Fayez", "Khalid Al-Bader", "Aisha Al-Otaibi"],
    releaseDate: "2023-01-15",
    seasons: [
      {
        number: 1,
        episodes: [
          {
            number: 1,
            title: "Beginnings",
            duration: "45 min",
            image: "/placeholder.svg?height=400&width=600",
            description:
              "The Al-Faisal family gathers for the patriarch's birthday, unaware that their lives are about to change forever.",
          },
          {
            number: 2,
            title: "Revelations",
            duration: "42 min",
            image: "/placeholder.svg?height=400&width=600",
            description: "Secrets begin to surface as the family deals with unexpected news.",
          },
          {
            number: 3,
            title: "Confrontations",
            duration: "47 min",
            image: "/placeholder.svg?height=400&width=600",
            description: "Family members confront each other about past betrayals and hidden truths.",
          },
          {
            number: 4,
            title: "Alliances",
            duration: "44 min",
            image: "/placeholder.svg?height=400&width=600",
            description: "New alliances form as the family business faces a crisis.",
          },
          {
            number: 5,
            title: "Decisions",
            duration: "46 min",
            image: "/placeholder.svg?height=400&width=600",
            description: "Difficult decisions must be made that will affect the future of the entire family.",
          },
          {
            number: 6,
            title: "Consequences",
            duration: "48 min",
            image: "/placeholder.svg?height=400&width=600",
            description: "Family members face the consequences of their actions.",
          },
          {
            number: 7,
            title: "Reconciliation",
            duration: "45 min",
            image: "/placeholder.svg?height=400&width=600",
            description: "Some family members attempt to reconcile while others drift further apart.",
          },
          {
            number: 8,
            title: "New Beginnings",
            duration: "50 min",
            image: "/placeholder.svg?height=400&width=600",
            description: "The season finale brings unexpected changes and sets up new challenges.",
          },
        ],
      },
      {
        number: 2,
        episodes: [
          {
            number: 1,
            title: "Aftermath",
            duration: "46 min",
            image: "/placeholder.svg?height=400&width=600",
            description: "Six months later, the family deals with the aftermath of previous events.",
          },
          {
            number: 2,
            title: "Challenges",
            duration: "44 min",
            image: "/placeholder.svg?height=400&width=600",
            description: "New challenges arise as competitors target the family business.",
          },
          {
            number: 3,
            title: "Alliances Shift",
            duration: "45 min",
            image: "/placeholder.svg?height=400&width=600",
            description: "Previous alliances are tested as new opportunities emerge.",
          },
          {
            number: 4,
            title: "Betrayal",
            duration: "47 min",
            image: "/placeholder.svg?height=400&width=600",
            description: "A shocking betrayal threatens to destroy what's left of the family unity.",
          },
          {
            number: 5,
            title: "Redemption",
            duration: "48 min",
            image: "/placeholder.svg?height=400&width=600",
            description: "One family member seeks redemption for past mistakes.",
          },
          {
            number: 6,
            title: "Crisis",
            duration: "49 min",
            image: "/placeholder.svg?height=400&width=600",
            description: "A major crisis forces the family to work together despite their differences.",
          },
          {
            number: 7,
            title: "Revelations",
            duration: "46 min",
            image: "/placeholder.svg?height=400&width=600",
            description: "More family secrets are revealed with far-reaching implications.",
          },
          {
            number: 8,
            title: "Crossroads",
            duration: "52 min",
            image: "/placeholder.svg?height=400&width=600",
            description: "The season finale leaves the family at a crucial crossroads.",
          },
        ],
      },
    ],
    awards: ["Best Drama Series - Arab Television Awards", "Best Ensemble Cast - Gulf Screen Awards"],
    trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: 202,
    title: "East District",
    image: "/placeholder.svg?height=1080&width=1920",
    poster: "/placeholder.svg?height=600&width=400",
    type: "series",
    imdbRating: "8.9",
    language: "Arabic",
    classification: "Drama",
    ageRating: "TV-14",
    description:
      "A gritty drama following the lives of residents in a working-class neighborhood as they face daily challenges and fight for a better future.",
    longDescription:
      "East District is a powerful drama series that chronicles the interconnected lives of residents in a working-class neighborhood on the eastern outskirts of the city. The series offers an unflinching look at the social and economic challenges faced by the community while highlighting their resilience, dignity, and unwavering hope for a better future. At the center of the story is the Kareem family, whose patriarch works as a taxi driver while his wife runs a small local bakery to make ends meet. Their eldest son, a bright university student, becomes involved in community activism, bringing him into conflict with local authorities and powerful business interests that have plans to redevelop the area. Meanwhile, their daughter, a talented artist, struggles to pursue her passion while facing societal expectations. The series also follows their neighbors—a retired teacher fighting to keep the local school open, a former convict trying to rebuild his life, and a young doctor who returns to serve her community despite having opportunities elsewhere. Through these characters and others, East District explores themes of social inequality, corruption, family bonds, and the power of community solidarity in the face of adversity.",
    creator: "Omar Saeed",
    writers: ["Omar Saeed", "Leila Al-Ghamdi", "Sami Al-Zahrani"],
    stars: ["Ibrahim Al-Yami", "Huda Al-Fahad", "Yousef Al-Qahtani", "Fatima Al-Harbi"],
    releaseDate: "2023-03-20",
    seasons: [
      {
        number: 1,
        episodes: [
          {
            number: 1,
            title: "The Neighborhood",
            duration: "48 min",
            image: "/placeholder.svg?height=400&width=600",
            description:
              "Introduction to East District and its residents as they face news of potential redevelopment.",
          },
          {
            number: 2,
            title: "Resistance",
            duration: "45 min",
            image: "/placeholder.svg?height=400&width=600",
            description: "The community begins to organize against the redevelopment plans.",
          },
          {
            number: 3,
            title: "Divided We Fall",
            duration: "47 min",
            image: "/placeholder.svg?height=400&width=600",
            description: "Tensions rise as some residents consider accepting buyout offers.",
          },
          {
            number: 4,
            title: "The Activist",
            duration: "46 min",
            image: "/placeholder.svg?height=400&width=600",
            description: "Kareem's son escalates his activism, putting him in danger.",
          },
          {
            number: 5,
            title: "Family Matters",
            duration: "44 min",
            image: "/placeholder.svg?height=400&width=600",
            description: "The Kareem family faces internal conflicts about their future.",
          },
          {
            number: 6,
            title: "The Doctor's Dilemma",
            duration: "45 min",
            image: "/placeholder.svg?height=400&width=600",
            description:
              "The young doctor must choose between a prestigious job offer and staying to help her community.",
          },
          {
            number: 7,
            title: "Corruption Exposed",
            duration: "49 min",
            image: "/placeholder.svg?height=400&width=600",
            description: "Evidence of corruption in the redevelopment project comes to light.",
          },
          {
            number: 8,
            title: "United Front",
            duration: "52 min",
            image: "/placeholder.svg?height=400&width=600",
            description: "The community comes together for a decisive stand against the developers.",
          },
          {
            number: 9,
            title: "Consequences",
            duration: "47 min",
            image: "/placeholder.svg?height=400&width=600",
            description: "Characters face the consequences of their actions as tensions reach a breaking point.",
          },
          {
            number: 10,
            title: "New Dawn",
            duration: "55 min",
            image: "/placeholder.svg?height=400&width=600",
            description: "The season finale brings both victories and new challenges for East District.",
          },
        ],
      },
    ],
    awards: ["Best New Series - Television Critics Circle", "Best Screenplay - Drama Series Awards"],
    trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
]

// Mock data for similar series
const similarSeries = [
  {
    id: 203,
    title: "Summer Days",
    image: "/placeholder.svg?height=400&width=600",
    type: "series",
    imdbRating: "8.7",
    language: "Arabic",
    classification: "Comedy",
    ageRating: "TV-PG",
  },
  {
    id: 204,
    title: "The Doctor",
    image: "/placeholder.svg?height=400&width=600",
    type: "series",
    imdbRating: "8.6",
    language: "Arabic",
    classification: "Drama",
    ageRating: "TV-14",
  },
  {
    id: 205,
    title: "The Detective",
    image: "/placeholder.svg?height=400&width=600",
    type: "series",
    imdbRating: "8.5",
    language: "Arabic",
    classification: "Crime",
    ageRating: "TV-MA",
  },
  {
    id: 206,
    title: "The Brothers",
    image: "/placeholder.svg?height=400&width=600",
    type: "series",
    imdbRating: "8.4",
    language: "Arabic",
    classification: "Drama",
    ageRating: "TV-14",
  },
  {
    id: 207,
    title: "The Guardian",
    image: "/placeholder.svg?height=400&width=600",
    type: "series",
    imdbRating: "8.3",
    language: "Arabic",
    classification: "Action",
    ageRating: "TV-14",
  },
  {
    id: 208,
    title: "The Traveler",
    image: "/placeholder.svg?height=400&width=600",
    type: "series",
    imdbRating: "8.2",
    language: "Arabic",
    classification: "Adventure",
    ageRating: "TV-14",
  },
]

export default function SeriesDetailPage({ params }: { params: { id: string } }) {
  // Find the series based on ID
  const seriesId = Number.parseInt(params.id)
  const series = seriesData.find((item) => item.id === seriesId) || seriesData[0]

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-slate-950 text-white pb-16">
      <Link href="/" className="fixed top-4 left-4 z-50 bg-black/50 backdrop-blur-sm p-2 rounded-full">
        <ArrowLeft className="h-6 w-6" />
      </Link>

      <div className="relative h-[70vh] w-full">
        <NextImage src={series.image} alt={series.title} fill priority className="object-cover" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            size="lg"
            className="rounded-full h-20 w-20 bg-white/20 backdrop-blur-md hover:bg-white/30 border-2 border-white transform transition-transform duration-300 hover:scale-110"
          >
            <Play className="h-10 w-10 fill-white" />
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-32 relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4 lg:w-1/5">
            <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-xl">
              <NextImage src={series.poster} alt={series.title} fill className="object-cover" />

              {/* Age Rating Badge */}
              <div className="absolute top-3 left-3 bg-black/70 text-white text-xs font-bold px-1.5 py-0.5 rounded z-30 border border-white/30">
                {series.ageRating}
              </div>

              {/* IMDb rating */}
              <div className="absolute top-3 right-3 flex items-center bg-black/60 backdrop-blur-sm rounded px-1.5 py-0.5 z-30">
                <span className="text-yellow-400 text-xs font-bold mr-1">IMDb</span>
                <span className="text-white text-xs">{series.imdbRating}</span>
              </div>
            </div>

            <div className="mt-4 space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-sm font-semibold mb-3">Series Info</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <Calendar className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-400">First Air Date:</span>
                      <div>{series.releaseDate}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-400">Seasons:</span>
                      <div>{series.seasons.length}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-400">Rating:</span>
                      <div>{series.imdbRating}/10</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Film className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-400">Genre:</span>
                      <div>{series.classification}</div>
                    </div>
                  </div>
                </div>
              </div>

              {series.awards && series.awards.length > 0 && (
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-sm font-semibold mb-3">Awards</h3>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    {series.awards.map((award, index) => (
                      <li key={index} className="text-gray-300">
                        {award}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="md:w-3/4 lg:w-4/5 space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{series.title}</h1>

            <div className="flex flex-wrap gap-3">
              <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                {series.classification}
              </span>
              <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">{series.language}</span>
              <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                {series.seasons.length} {series.seasons.length === 1 ? "Season" : "Seasons"}
              </span>
              <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                {new Date(series.releaseDate).getFullYear()}
              </span>
              <span className="text-xs bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full border border-white/30 font-bold">
                {series.ageRating}
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button className="bg-white hover:bg-white/90 text-black font-medium transform transition-transform duration-300 hover:scale-105">
                <Play className="mr-2 h-4 w-4 fill-black" /> Watch Now
              </Button>
              <Button
                variant="outline"
                className="border-white/30 backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                <Plus className="mr-2 h-4 w-4" /> Add to My List
              </Button>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="border-white/30 backdrop-blur-sm hover:bg-white/20 transition-colors"
                >
                  <ThumbsUp className="mr-2 h-4 w-4" /> Like
                </Button>
                <Button
                  variant="outline"
                  className="border-white/30 backdrop-blur-sm hover:bg-white/20 transition-colors"
                >
                  <ThumbsDown className="mr-2 h-4 w-4" /> Dislike
                </Button>
              </div>
              <Button
                variant="outline"
                className="border-white/30 backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                <Download className="mr-2 h-4 w-4" /> Download
              </Button>
              <Button
                variant="outline"
                className="border-white/30 backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                <Share2 className="mr-2 h-4 w-4" /> Share
              </Button>
            </div>

            <div className="pt-4">
              <h2 className="text-xl font-semibold mb-2">Synopsis</h2>
              <p className="text-gray-300">{series.longDescription}</p>
            </div>

            <div className="pt-4">
              <h2 className="text-xl font-semibold mb-2">Creator</h2>
              <p className="text-gray-300">{series.creator}</p>
            </div>

            <div className="pt-4">
              <h2 className="text-xl font-semibold mb-2">Writers</h2>
              <p className="text-gray-300">{series.writers.join(", ")}</p>
            </div>

            <div className="pt-4">
              <h2 className="text-xl font-semibold mb-2">Cast</h2>
              <div className="flex flex-wrap gap-4">
                {series.stars.map((actor, index) => (
                  <div key={index} className="text-center">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mx-auto">
                      <NextImage
                        src={`/placeholder.svg?height=200&width=200`}
                        alt={actor}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-1 text-xs">{actor}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <h2 className="text-xl font-semibold mb-4">Trailer</h2>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <video src={series.trailerUrl} controls poster={series.image} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-white/20" />

        <div className="space-y-8">
          <h2 className="text-2xl font-bold">Episodes</h2>

          <Tabs defaultValue={`season-${series.seasons[0].number}`} className="w-full">
            <TabsList className="bg-black/50 backdrop-blur-sm border border-white/10 mb-6">
              {series.seasons.map((season) => (
                <TabsTrigger key={season.number} value={`season-${season.number}`}>
                  Season {season.number}
                </TabsTrigger>
              ))}
            </TabsList>

            {series.seasons.map((season) => (
              <TabsContent key={season.number} value={`season-${season.number}`} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {season.episodes.map((episode) => (
                    <div
                      key={episode.number}
                      className="bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-colors group"
                    >
                      <div className="relative aspect-video">
                        <NextImage
                          src={episode.image}
                          alt={`${series.title} S${season.number}E${episode.number}`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                        {/* Episode number badge */}
                        <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded-full">
                          S{season.number} E{episode.number}
                        </div>

                        {/* Duration */}
                        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded px-2 py-0.5">
                          <span className="text-white text-xs">{episode.duration}</span>
                        </div>

                        {/* Play button */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button
                            size="icon"
                            className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 border border-white transform transition-transform duration-300 hover:scale-110"
                          >
                            <Play className="h-6 w-6 fill-white" />
                          </Button>
                        </div>

                        {/* Episode title */}
                        <div className="absolute bottom-3 left-3 right-3">
                          <h3 className="text-lg font-bold">{episode.title}</h3>
                        </div>
                      </div>

                      <div className="p-4">
                        <p className="text-sm text-gray-300">{episode.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <Separator className="my-12 bg-white/20" />

        <div>
          <h2 className="text-2xl font-bold mb-6">Similar Series</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {similarSeries.map((item) => (
              <Link href={`/series/${item.id}`} key={item.id} className="group">
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden group-hover:ring-2 group-hover:ring-white transition-all">
                  <NextImage
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                  {/* Age Rating Badge */}
                  {item.ageRating && (
                    <div className="absolute top-2 left-2 bg-black/70 text-white text-xs font-bold px-1.5 py-0.5 rounded z-30 border border-white/30">
                      {item.ageRating}
                    </div>
                  )}

                  {/* IMDb rating */}
                  <div className="absolute top-2 right-2 flex items-center bg-black/60 backdrop-blur-sm rounded px-1.5 py-0.5 z-30">
                    <span className="text-yellow-400 text-xs font-bold mr-1">IMDb</span>
                    <span className="text-white text-xs">{item.imdbRating}</span>
                  </div>

                  {/* Language and classification */}
                  <div className="absolute bottom-2 left-2 right-2 flex flex-wrap gap-1.5 z-30">
                    <span className="text-[10px] bg-white/20 backdrop-blur-sm px-1.5 py-0.5 rounded-sm">
                      {item.language}
                    </span>
                    <span className="text-[10px] bg-white/20 backdrop-blur-sm px-1.5 py-0.5 rounded-sm">
                      {item.classification}
                    </span>
                  </div>

                  {/* Play button on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-30">
                    <Button
                      size="icon"
                      className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 border border-white transform transition-transform duration-300 hover:scale-110"
                    >
                      <Play className="h-5 w-5 fill-white" />
                    </Button>
                  </div>
                </div>
                <h3 className="mt-2 text-sm font-medium line-clamp-1 text-center">{item.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
