import { Navbar } from "@/components/navbar"
import NextImage from "next/image"
import Link from "next/link"
import { Film, Play, Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for behind the scenes content
const behindTheScenesContent = [
  {
    id: 3001,
    title: "Making of Black Falcon",
    image: "/placeholder.svg?height=400&width=600",
    relatedTo: "Black Falcon",
    duration: "25 min",
    type: "making-of",
    description:
      "Go behind the scenes of the action-packed thriller Black Falcon and discover how the spectacular stunts were performed and special effects created.",
    director: "Ahmed Hassan",
    featuring: ["Michael Chen", "Aisha Williams", "Stunt Team"],
    releaseDate: "2023-05-15",
  },
  {
    id: 3002,
    title: "Interview with the Director",
    image: "/placeholder.svg?height=400&width=600",
    relatedTo: "The Final Journey",
    duration: "15 min",
    type: "interview",
    description:
      "An exclusive interview with acclaimed director James Wilson discussing his vision for The Final Journey and the challenges of filming in remote locations.",
    director: "Sarah Johnson",
    featuring: ["James Wilson"],
    releaseDate: "2023-06-22",
  },
  {
    id: 3003,
    title: "The Visual Effects of Journey to the Future",
    image: "/placeholder.svg?height=400&width=600",
    relatedTo: "Journey to the Future",
    duration: "30 min",
    type: "documentary",
    description:
      "A detailed look at the groundbreaking visual effects that brought the futuristic world of Journey to the Future to life.",
    director: "David Chen",
    featuring: ["VFX Team", "Production Designer", "Concept Artists"],
    releaseDate: "2023-04-10",
  },
  {
    id: 3004,
    title: "Cast Roundtable",
    image: "/placeholder.svg?height=400&width=600",
    relatedTo: "Family House",
    duration: "40 min",
    type: "interview",
    description:
      "The cast of the hit drama series Family House gather to discuss their characters, on-set experiences, and the impact of the show on their careers.",
    director: "Maria Rodriguez",
    featuring: ["Main Cast of Family House"],
    releaseDate: "2023-07-05",
  },
  {
    id: 3005,
    title: "Filming in Extreme Locations",
    image: "/placeholder.svg?height=400&width=600",
    relatedTo: "The Last Knight",
    duration: "35 min",
    type: "documentary",
    description:
      "Follow the production team of The Last Knight as they tackle the challenges of filming in some of the world's most remote and extreme environments.",
    director: "Robert Jackson",
    featuring: ["Production Team", "Location Scouts", "Cast Members"],
    releaseDate: "2023-03-18",
  },
  {
    id: 3006,
    title: "Creating the Music",
    image: "/placeholder.svg?height=400&width=600",
    relatedTo: "Eternal Love",
    duration: "20 min",
    type: "documentary",
    description:
      "An intimate look at the composition and recording of the emotional score for the romantic drama Eternal Love.",
    director: "Sophia Lee",
    featuring: ["Composer", "Orchestra", "Music Supervisor"],
    releaseDate: "2023-02-14",
  },
  {
    id: 3007,
    title: "Costume Design Showcase",
    image: "/placeholder.svg?height=400&width=600",
    relatedTo: "The Desert",
    duration: "22 min",
    type: "documentary",
    description: "Explore the intricate costume designs that helped bring the historical world of The Desert to life.",
    director: "Emma Thompson",
    featuring: ["Costume Designer", "Wardrobe Team", "Cast Members"],
    releaseDate: "2023-08-30",
  },
  {
    id: 3008,
    title: "Director's Commentary",
    image: "/placeholder.svg?height=400&width=600",
    relatedTo: "Night in Riyadh",
    duration: "95 min",
    type: "commentary",
    description:
      "Director's full-length commentary for the comedy hit Night in Riyadh, offering insights into the making of each scene.",
    director: "Carlos Martinez",
    featuring: ["Director"],
    releaseDate: "2023-09-12",
  },
  {
    id: 3009,
    title: "Special Effects Workshop",
    image: "/placeholder.svg?height=400&width=600",
    relatedTo: "The Battle",
    duration: "28 min",
    type: "documentary",
    description:
      "A detailed workshop showing how the practical special effects for the war drama The Battle were created and executed.",
    director: "Daniel Brown",
    featuring: ["Special Effects Team", "Pyrotechnics Experts"],
    releaseDate: "2023-01-25",
  },
  {
    id: 3010,
    title: "Set Design Featurette",
    image: "/placeholder.svg?height=400&width=600",
    relatedTo: "The Stars",
    duration: "18 min",
    type: "documentary",
    description:
      "Take a tour of the incredible sets built for the sci-fi series The Stars and learn about the design philosophy behind them.",
    director: "Olivia Parker",
    featuring: ["Production Designer", "Art Department", "Set Decorators"],
    releaseDate: "2023-10-05",
  },
  {
    id: 3011,
    title: "Bloopers and Outtakes",
    image: "/placeholder.svg?height=400&width=600",
    relatedTo: "Laugh Out Loud",
    duration: "15 min",
    type: "blooper-reel",
    description: "Hilarious bloopers and outtakes from the filming of the comedy series Laugh Out Loud.",
    director: "Michael Brown",
    featuring: ["Full Cast"],
    releaseDate: "2023-11-20",
  },
  {
    id: 3012,
    title: "Choreographing the Action",
    image: "/placeholder.svg?height=400&width=600",
    relatedTo: "Revenge",
    duration: "32 min",
    type: "documentary",
    description:
      "An in-depth look at how the complex fight sequences in the action thriller Revenge were choreographed and filmed.",
    director: "Lin Wei",
    featuring: ["Fight Choreographer", "Stunt Coordinator", "Lead Actors"],
    releaseDate: "2023-12-03",
  },
]

export default function BehindTheScenesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-slate-950 text-white">
      <Navbar />

      <main className="pt-24 px-4 md:px-8 pb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <Film className="h-8 w-8 text-teal-400" />
            <h1 className="text-3xl font-bold tracking-wide">Behind The Scenes</h1>
          </div>

          <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search extras..."
                className="pl-9 bg-white/5 border-white/20 text-white placeholder:text-gray-400 w-full"
              />
            </div>
            <Button variant="outline" className="border-white/30 gap-2">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </Button>
          </div>
        </div>

        <div className="relative mb-12 rounded-xl overflow-hidden">
          <div className="aspect-[21/9] relative">
            <NextImage
              src="/placeholder.svg?height=1080&width=1920"
              alt="Behind The Scenes Banner"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <div className="bg-teal-500 text-white text-sm font-bold px-4 py-2 rounded-full mb-4 flex items-center gap-2">
                <Film className="h-4 w-4" />
                <span>EXCLUSIVE CONTENT</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Discover How Your Favorite Stories Were Made</h2>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mb-6">
                Go behind the camera with exclusive documentaries, interviews, and featurettes that reveal the secrets
                behind your favorite films and series.
              </p>
              <Button className="bg-teal-500 hover:bg-teal-600 text-white">Explore All Content</Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="bg-black/50 backdrop-blur-sm border border-white/10 mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="making-of">Making Of</TabsTrigger>
            <TabsTrigger value="interviews">Interviews</TabsTrigger>
            <TabsTrigger value="documentaries">Documentaries</TabsTrigger>
            <TabsTrigger value="commentaries">Commentaries</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {behindTheScenesContent.map((item) => (
                <Link href={`/extras/${item.id}`} key={item.id} className="group">
                  <div className="relative aspect-video rounded-lg overflow-hidden group-hover:ring-2 group-hover:ring-teal-400 transition-all">
                    <NextImage
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                    {/* Type Badge */}
                    <div className="absolute top-3 right-3 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full z-30 uppercase">
                      {item.type}
                    </div>

                    {/* Duration */}
                    <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm rounded px-2 py-0.5 z-30">
                      <span className="text-white text-xs">{item.duration}</span>
                    </div>

                    {/* Play button on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-30">
                      <Button
                        size="icon"
                        className="h-12 w-12 rounded-full bg-teal-500/80 hover:bg-teal-500 backdrop-blur-md border border-white"
                      >
                        <Play className="h-6 w-6 fill-white" />
                      </Button>
                    </div>

                    {/* Title and related content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-30">
                      <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-xs text-gray-300">From: {item.relatedTo}</p>
                    </div>
                  </div>

                  <div className="mt-2">
                    <p className="text-xs text-gray-400">Released: {new Date(item.releaseDate).toLocaleDateString()}</p>
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>

          {/* Other tab contents would be similar but filtered */}
        </Tabs>

        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Featured Productions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "The Making of Black Falcon",
                  image: "/placeholder.svg?height=600&width=1000",
                  description:
                    "A comprehensive look at the production of the action blockbuster Black Falcon, from concept to screen.",
                  items: 5,
                },
                {
                  title: "Family House: Behind the Drama",
                  image: "/placeholder.svg?height=600&width=1000",
                  description: "Explore the world of the hit drama series with cast interviews, set tours, and more.",
                  items: 8,
                },
                {
                  title: "Journey to the Future: From Script to Screen",
                  image: "/placeholder.svg?height=600&width=1000",
                  description:
                    "Follow the three-year journey of creating the sci-fi epic that captivated audiences worldwide.",
                  items: 6,
                },
              ].map((collection, index) => (
                <Link href={`/extras/collections/${index}`} key={index} className="group">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden group-hover:ring-2 group-hover:ring-teal-400 transition-all">
                    <NextImage
                      src={collection.image}
                      alt={collection.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <div className="bg-teal-500/20 text-teal-300 text-xs font-medium px-2 py-1 rounded-full mb-3 self-start">
                        {collection.items} items
                      </div>
                      <h3 className="text-xl font-bold mb-2">{collection.title}</h3>
                      <p className="text-sm text-gray-300">{collection.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Meet the Filmmakers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                "James Wilson",
                "Sarah Johnson",
                "Ahmed Hassan",
                "Maria Rodriguez",
                "David Chen",
                "Sophia Lee",
                "Robert Jackson",
                "Emma Thompson",
                "Carlos Martinez",
                "Olivia Parker",
                "Michael Brown",
                "Lin Wei",
              ].map((director, index) => (
                <Link href={`/filmmakers/${index}`} key={index}>
                  <div className="text-center group">
                    <div className="relative w-full aspect-square rounded-full overflow-hidden mb-3 group-hover:ring-2 group-hover:ring-teal-400 transition-all">
                      <NextImage
                        src={`/placeholder.svg?height=200&width=200`}
                        alt={director}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-sm font-medium">{director}</h3>
                    <p className="text-xs text-gray-400">Director</p>
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
