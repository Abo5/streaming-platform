import NextImage from "next/image"
import Link from "next/link"
import { Play, Plus, Share2, MousePointer, ArrowLeft, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

// Mock data for interactive content
const interactiveContent = [
  {
    id: 2001,
    title: "Choose Your Destiny",
    image: "/placeholder.svg?height=1080&width=1920",
    type: "interactive",
    description:
      "Navigate through a thrilling adventure where your choices determine the outcome. Multiple endings and paths to explore.",
    longDescription:
      "In this groundbreaking interactive experience, you'll embark on a journey where every decision shapes your destiny. Set in a dystopian future where resources are scarce and danger lurks around every corner, you must navigate complex moral choices and strategic decisions to survive. With over 15 different possible endings and dozens of unique story paths, no two experiences will be the same. Your choices will affect relationships with other characters, resource management, and ultimately determine if you'll thrive or merely survive in this harsh new world.",
    duration: "90-120 min",
    ageRating: "PG-13",
    year: "2023",
    director: "Sarah Johnson",
    cast: ["Michael Chen", "Aisha Williams", "Carlos Rodriguez", "Emma Thompson"],
    genres: ["Adventure", "Sci-Fi", "Drama"],
    choices: 37,
    endings: 15,
    averagePlaytime: 105,
  },
  {
    id: 2002,
    title: "Mystery Mansion",
    image: "/placeholder.svg?height=1080&width=1920",
    type: "interactive",
    description:
      "Solve the mystery of the haunted mansion by making critical decisions. Can you uncover the truth before it's too late?",
    longDescription:
      "Welcome to Blackwood Manor, a place with a dark history and even darker secrets. As a paranormal investigator, you've been called to solve the mysterious disappearances that have plagued this mansion for generations. Every room holds clues, every character has motives, and time is running out. Your investigative choices will lead you down different paths of discovery, with some choices opening new areas to explore while others might put you in grave danger. Use your detective skills, interview suspects, examine evidence, and piece together the supernatural mystery before you become the mansion's next victim.",
    duration: "60-90 min",
    ageRating: "TV-14",
    year: "2023",
    director: "James Wilson",
    cast: ["Olivia Parker", "Robert Jackson", "Sophia Lee", "Daniel Brown"],
    genres: ["Mystery", "Horror", "Thriller"],
    choices: 42,
    endings: 8,
    averagePlaytime: 75,
  },
  {
    id: 2003,
    title: "Space Explorer",
    image: "/placeholder.svg?height=1080&width=1920",
    type: "interactive",
    description:
      "Command a spaceship on a mission to save humanity. Every decision affects your crew and mission success.",
    longDescription:
      "Humanity's last hope rests on your shoulders as the captain of the starship Horizon. Earth is no longer habitable, and your mission is to find a new home among the stars. Navigate through dangerous asteroid fields, encounter alien civilizations, manage limited resources, and keep your diverse crew working together despite mounting tensions. As captain, you'll face technical challenges, diplomatic situations, and personal conflicts that will test your leadership. The fate of your crew and possibly all of humanity depends on the choices you make. Will you prioritize exploration, diplomacy, or survival? The universe is vast, beautiful, and deadly - your decisions will determine what discoveries you make and whether your mission ends in triumph or tragedy.",
    duration: "120-150 min",
    ageRating: "PG-13",
    year: "2023",
    director: "Elena Kowalski",
    cast: ["David Mitchell", "Zoe Carter", "Ahmed Hassan", "Lin Wei"],
    genres: ["Sci-Fi", "Adventure", "Drama"],
    choices: 53,
    endings: 12,
    averagePlaytime: 135,
  },
]

export default function InteractivePage({ params }: { params: { id: string } }) {
  // Find the content based on ID
  const contentId = Number.parseInt(params.id)
  const content = interactiveContent.find((item) => item.id === contentId) || interactiveContent[0]

  // Find similar content (excluding current one)
  const similarContent = interactiveContent
    .filter((item) => item.id !== contentId)
    .map((item) => ({
      id: item.id,
      title: item.title,
      image: "/placeholder.svg?height=400&width=600",
      type: "interactive" as const,
      description: item.description,
      duration: item.duration,
      ageRating: item.ageRating,
    }))

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-slate-950 text-white pb-16">
      <Link href="/" className="fixed top-4 left-4 z-50 bg-black/50 backdrop-blur-sm p-2 rounded-full">
        <ArrowLeft className="h-6 w-6" />
      </Link>

      <div className="relative h-[70vh] w-full">
        <NextImage src={content.image} alt={content.title} fill priority className="object-cover" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        {/* Interactive Badge */}
        <div className="absolute top-6 right-6 bg-purple-500 text-white text-sm font-bold px-4 py-2 rounded-full z-30 flex items-center gap-2 shadow-lg">
          <MousePointer className="h-4 w-4" />
          <span>INTERACTIVE EXPERIENCE</span>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            size="lg"
            className="rounded-full h-20 w-20 bg-purple-500/80 hover:bg-purple-500 backdrop-blur-md border-2 border-white"
          >
            <Play className="h-10 w-10 fill-white" />
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-32 relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4 lg:w-1/5">
            <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-xl">
              <NextImage
                src="/placeholder.svg?height=600&width=400"
                alt={content.title}
                fill
                className="object-cover"
              />

              {/* Interactive Badge */}
              <div className="absolute top-3 right-3 bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full z-30 flex items-center gap-1 shadow-lg">
                <MousePointer className="h-3 w-3" />
                <span>INTERACTIVE</span>
              </div>

              {/* Age Rating */}
              <div className="absolute top-3 left-3 bg-black/70 text-white text-xs font-bold px-1.5 py-0.5 rounded z-30 border border-white/30">
                {content.ageRating}
              </div>
            </div>
          </div>

          <div className="md:w-3/4 lg:w-4/5 space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{content.title}</h1>

            <div className="flex flex-wrap gap-3">
              {content.genres.map((genre, index) => (
                <span key={index} className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                  {genre}
                </span>
              ))}
              <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">{content.year}</span>
              <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">{content.duration}</span>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button className="bg-purple-500 hover:bg-purple-600 text-white">
                <Play className="mr-2 h-4 w-4 fill-white" /> Start Experience
              </Button>
              <Button variant="outline" className="border-white/30 backdrop-blur-sm hover:bg-white/20">
                <Plus className="mr-2 h-4 w-4" /> Add to My List
              </Button>
              <Button variant="outline" className="border-white/30 backdrop-blur-sm hover:bg-white/20">
                <Info className="mr-2 h-4 w-4" /> How to Play
              </Button>
              <Button variant="outline" className="border-white/30 backdrop-blur-sm hover:bg-white/20">
                <Share2 className="mr-2 h-4 w-4" /> Share
              </Button>
            </div>

            <div className="pt-4">
              <h2 className="text-xl font-semibold mb-2">Overview</h2>
              <p className="text-gray-300">{content.longDescription}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-400">{content.choices}</div>
                <div className="text-sm text-gray-300">Decision Points</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-400">{content.endings}</div>
                <div className="text-sm text-gray-300">Possible Endings</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-400">{content.averagePlaytime} min</div>
                <div className="text-sm text-gray-300">Average Playtime</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-400">12%</div>
                <div className="text-sm text-gray-300">Completion Rate</div>
              </div>
            </div>

            <div className="pt-4">
              <h2 className="text-xl font-semibold mb-2">Director</h2>
              <p className="text-gray-300">{content.director}</p>
            </div>

            <div className="pt-4">
              <h2 className="text-xl font-semibold mb-2">Cast</h2>
              <div className="flex flex-wrap gap-4">
                {content.cast.map((actor, index) => (
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
          </div>
        </div>

        <Separator className="my-12 bg-white/20" />

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-xl p-6 border border-purple-500/30">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-purple-400">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Watch & Choose</h3>
                <p className="text-sm text-gray-300">
                  Watch the story unfold and make choices at key decision points that will affect the outcome.
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-purple-500/30">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-purple-400">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Explore Paths</h3>
                <p className="text-sm text-gray-300">
                  Each choice leads to different scenes and story developments. Explore multiple paths to see all
                  content.
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-purple-500/30">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-purple-400">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Discover Endings</h3>
                <p className="text-sm text-gray-300">
                  Reach different endings based on your choices. Replay to discover all possible outcomes and secrets.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Your Progress</h2>
            <div className="bg-white/5 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold">Story Completion</h3>
                  <p className="text-sm text-gray-400">You've discovered 2 of {content.endings} endings</p>
                </div>
                <div className="text-xl font-bold text-purple-400">13%</div>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2 mb-6">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: "13%" }}></div>
              </div>

              <h3 className="font-semibold mb-3">Discovered Paths</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-purple-500/20 border border-purple-500/50 rounded-lg p-3 text-center">
                  <div className="text-sm font-medium">The Hero's Path</div>
                  <div className="text-xs text-gray-400">Completed</div>
                </div>
                <div className="bg-purple-500/20 border border-purple-500/50 rounded-lg p-3 text-center">
                  <div className="text-sm font-medium">The Dark Route</div>
                  <div className="text-xs text-gray-400">In Progress</div>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-lg p-3 text-center opacity-50">
                  <div className="text-sm font-medium">???</div>
                  <div className="text-xs text-gray-400">Undiscovered</div>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-lg p-3 text-center opacity-50">
                  <div className="text-sm font-medium">???</div>
                  <div className="text-xs text-gray-400">Undiscovered</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-white/20" />

        <h2 className="text-2xl font-bold mb-6">More Interactive Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {similarContent.map((item) => (
            <Link href={`/interactive/${item.id}`} key={item.id}>
              <div className="bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-colors group">
                <div className="relative aspect-video">
                  <NextImage src={item.image} alt={item.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                  {/* Interactive Badge */}
                  <div className="absolute top-3 right-3 bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full z-30">
                    INTERACTIVE
                  </div>

                  {/* Age Rating */}
                  <div className="absolute top-3 left-3 bg-black/70 text-white text-xs font-bold px-1.5 py-0.5 rounded z-30 border border-white/30">
                    {item.ageRating}
                  </div>

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="icon"
                      className="h-12 w-12 rounded-full bg-purple-500/80 hover:bg-purple-500 backdrop-blur-md border border-white"
                    >
                      <Play className="h-6 w-6 fill-white" />
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-300 line-clamp-2 mb-2">{item.description}</p>
                  <div className="flex items-center text-xs text-gray-400">
                    <span>{item.duration}</span>
                    <span className="mx-2">•</span>
                    <span>Multiple Endings</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
