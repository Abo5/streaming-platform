import NextImage from "next/image"
import Link from "next/link"
import { Play, Plus, Share2, ThumbsUp, Download, ArrowLeft, Star, Clock, Calendar, Film } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

// Mock data for movies
const moviesData = [
  {
    id: 101,
    title: "Black Falcon",
    image: "/placeholder.svg?height=1080&width=1920",
    poster: "/placeholder.svg?height=600&width=400",
    type: "movie",
    imdbRating: "8.7",
    language: "Arabic",
    classification: "Action",
    ageRating: "R",
    previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    description:
      "The story of a special forces officer facing an international conspiracy that threatens national security. Chases and action around the world.",
    longDescription:
      "Black Falcon follows the story of Commander Khalid Al-Fahd, an elite special forces officer who uncovers a global conspiracy that threatens his country's security and stability. When a routine mission goes wrong, Khalid finds himself framed for a crime he didn't commit and hunted by the very organization he once served. On the run and with few allies he can trust, Khalid must navigate a web of international espionage, corrupt officials, and deadly mercenaries to clear his name and stop the conspiracy before it's too late. From the bustling streets of Riyadh to remote desert outposts and international capitals, Khalid's journey is a high-stakes game of survival where every decision could be his last. As he digs deeper into the conspiracy, he discovers shocking truths about people he once considered friends and must confront painful elements of his past that he thought were long buried.",
    director: "Ahmed Hassan",
    writers: ["Fatima Al-Qahtani", "Mohammed Al-Shammari"],
    stars: ["Fahd Al-Otaibi", "Layla Ibrahim", "Omar Saeed", "Sarah Al-Najjar"],
    releaseDate: "2023-06-15",
    duration: "128 min",
    budget: "$45 million",
    boxOffice: "$132 million",
    awards: ["Best Action Film - Arab Film Festival", "Best Actor - Gulf Cinema Awards"],
    trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: 102,
    title: "Desert Road",
    image: "/placeholder.svg?height=1080&width=1920",
    poster: "/placeholder.svg?height=600&width=400",
    type: "movie",
    imdbRating: "8.5",
    language: "Arabic",
    classification: "Drama",
    ageRating: "PG-13",
    previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    description:
      "A moving drama about a family's journey across the desert in search of a new beginning after losing everything in their hometown.",
    longDescription:
      "Desert Road is a powerful and emotional drama that follows the Al-Harbi family as they embark on a perilous journey across the vast Arabian desert in search of a new home and a fresh start. After losing their farm to drought and their savings to economic hardship, Ibrahim Al-Harbi makes the difficult decision to leave the only home his family has ever known. Along with his wife Nora, teenage son Sami, and young daughter Leila, they set out in their aging truck with what few possessions they could salvage. What begins as a straightforward journey soon becomes a test of endurance and family bonds as they face mechanical failures, harsh weather conditions, and encounters with both dangerous strangers and unexpected allies. Through their journey, each family member must confront their own fears, dreams, and the meaning of home. As tensions rise and resources dwindle, the family's relationships are tested to their limits, revealing both fractures and strengths they never knew existed.",
    director: "Khalid Al-Mansour",
    writers: ["Khalid Al-Mansour", "Amal Al-Otaibi"],
    stars: ["Ibrahim Al-Yami", "Nora Al-Fayez", "Sami Al-Zahrani", "Leila Al-Ghamdi"],
    releaseDate: "2023-03-10",
    duration: "135 min",
    budget: "$18 million",
    boxOffice: "$67 million",
    awards: ["Best Drama - Middle East Film Festival", "Best Screenplay - International Desert Film Festival"],
    trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    id: 401,
    title: "Journey to the Future",
    image: "/placeholder.svg?height=1080&width=1920",
    poster: "/placeholder.svg?height=600&width=400",
    type: "movie",
    imdbRating: "8.7",
    language: "English",
    classification: "Sci-Fi",
    ageRating: "PG-13",
    previewVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    description:
      "In a futuristic world filled with advanced technology, our hero finds himself facing unexpected challenges that threaten the fate of humanity.",
    longDescription:
      "Journey to the Future is set in the year 2150, where humanity has developed remarkable technologies that have transformed society. Dr. Elias Chen, a brilliant but reclusive quantum physicist, accidentally discovers a way to see glimpses of possible futures while working on a revolutionary energy project. When his discovery reveals an impending global catastrophe that threatens to end civilization, he must emerge from his isolated life and convince a skeptical world of the danger. Joined by Maya Santos, a government security officer assigned to monitor his work, Elias embarks on a race against time to prevent the disaster. As they work together, they uncover a conspiracy involving powerful corporations and corrupt officials who are willing to sacrifice humanity's future for their own gain. The journey takes them from gleaming futuristic cities to the ruins of abandoned technological hubs, forcing them to confront not only external threats but also their own beliefs about humanity's relationship with technology and the ethical implications of controlling the future.",
    director: "David Chen",
    writers: ["Sarah Johnson", "Michael Zhang"],
    stars: ["James Wilson", "Maya Santos", "Dr. Elias Chen", "Director Katherine Lee"],
    releaseDate: "2023-07-22",
    duration: "142 min",
    budget: "$120 million",
    boxOffice: "$345 million",
    awards: ["Best Visual Effects - Academy Awards", "Best Science Fiction Film - Global Sci-Fi Awards"],
    trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
]

// Mock data for similar movies
const similarMovies = [
  {
    id: 103,
    title: "The Last Knight",
    image: "/placeholder.svg?height=400&width=600",
    type: "movie",
    imdbRating: "8.3",
    language: "Arabic",
    classification: "Adventure",
    ageRating: "PG-13",
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
  },
]

export default function MoviePage({ params }: { params: { id: string } }) {
  // Find the movie based on ID
  const movieId = Number.parseInt(params.id)
  const movie = moviesData.find((item) => item.id === movieId) || moviesData[0]

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-slate-950 text-white pb-16">
      <Link href="/" className="fixed top-4 left-4 z-50 bg-black/50 backdrop-blur-sm p-2 rounded-full">
        <ArrowLeft className="h-6 w-6" />
      </Link>

      <div className="relative h-[70vh] w-full">
        <NextImage src={movie.image} alt={movie.title} fill priority className="object-cover" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            size="lg"
            className="rounded-full h-20 w-20 bg-white/20 backdrop-blur-md hover:bg-white/30 border-2 border-white"
          >
            <Play className="h-10 w-10 fill-white" />
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-32 relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4 lg:w-1/5">
            <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-xl">
              <NextImage src={movie.poster} alt={movie.title} fill className="object-cover" />

              {/* Age Rating Badge */}
              <div className="absolute top-3 left-3 bg-black/70 text-white text-xs font-bold px-1.5 py-0.5 rounded z-30 border border-white/30">
                {movie.ageRating}
              </div>

              {/* IMDb rating */}
              <div className="absolute top-3 right-3 flex items-center bg-black/60 backdrop-blur-sm rounded px-1.5 py-0.5 z-30">
                <span className="text-yellow-400 text-xs font-bold mr-1">IMDb</span>
                <span className="text-white text-xs">{movie.imdbRating}</span>
              </div>
            </div>

            <div className="mt-4 space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-sm font-semibold mb-3">Movie Info</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <Calendar className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-400">Release Date:</span>
                      <div>{movie.releaseDate}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-400">Runtime:</span>
                      <div>{movie.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-400">Rating:</span>
                      <div>{movie.imdbRating}/10</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Film className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-400">Genre:</span>
                      <div>{movie.classification}</div>
                    </div>
                  </div>
                </div>
              </div>

              {movie.awards && movie.awards.length > 0 && (
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-sm font-semibold mb-3">Awards</h3>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    {movie.awards.map((award, index) => (
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{movie.title}</h1>

            <div className="flex flex-wrap gap-3">
              <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                {movie.classification}
              </span>
              <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">{movie.language}</span>
              <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">{movie.duration}</span>
              <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                {new Date(movie.releaseDate).getFullYear()}
              </span>
              <span className="text-xs bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full border border-white/30 font-bold">
                {movie.ageRating}
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button className="bg-white hover:bg-white/90 text-black font-medium">
                <Play className="mr-2 h-4 w-4 fill-black" /> Watch Now
              </Button>
              <Button variant="outline" className="border-white/30 backdrop-blur-sm hover:bg-white/20">
                <Plus className="mr-2 h-4 w-4" /> Add to My List
              </Button>
              <Button variant="outline" className="border-white/30 backdrop-blur-sm hover:bg-white/20">
                <ThumbsUp className="mr-2 h-4 w-4" /> Rate
              </Button>
              <Button variant="outline" className="border-white/30 backdrop-blur-sm hover:bg-white/20">
                <Download className="mr-2 h-4 w-4" /> Download
              </Button>
              <Button variant="outline" className="border-white/30 backdrop-blur-sm hover:bg-white/20">
                <Share2 className="mr-2 h-4 w-4" /> Share
              </Button>
            </div>

            <div className="pt-4">
              <h2 className="text-xl font-semibold mb-2">Synopsis</h2>
              <p className="text-gray-300">{movie.longDescription}</p>
            </div>

            <div className="pt-4">
              <h2 className="text-xl font-semibold mb-2">Director</h2>
              <p className="text-gray-300">{movie.director}</p>
            </div>

            <div className="pt-4">
              <h2 className="text-xl font-semibold mb-2">Writers</h2>
              <p className="text-gray-300">{movie.writers.join(", ")}</p>
            </div>

            <div className="pt-4">
              <h2 className="text-xl font-semibold mb-2">Cast</h2>
              <div className="flex flex-wrap gap-4">
                {movie.stars.map((actor, index) => (
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
                <video src={movie.trailerUrl} controls poster={movie.image} className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="pt-8">
              <h2 className="text-xl font-semibold mb-4">Photos</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((photo) => (
                  <div key={photo} className="relative aspect-video rounded-lg overflow-hidden">
                    <NextImage
                      src={`/placeholder.svg?height=400&width=600`}
                      alt={`Photo ${photo}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-white/20" />

        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Behind The Scenes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  id: 3001,
                  title: "Making of " + movie.title,
                  image: "/placeholder.svg?height=400&width=600",
                  duration: "25 min",
                  type: "making-of",
                },
                {
                  id: 3002,
                  title: "Interview with " + movie.director,
                  image: "/placeholder.svg?height=400&width=600",
                  duration: "15 min",
                  type: "interview",
                },
                {
                  id: 3003,
                  title: "The Visual Effects",
                  image: "/placeholder.svg?height=400&width=600",
                  duration: "20 min",
                  type: "documentary",
                },
              ].map((item, index) => (
                <Link href={`/extras/${item.id}`} key={index} className="group">
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

                    <div className="absolute bottom-0 left-0 right-0 p-4 z-30">
                      <h3 className="text-base font-bold text-white">{item.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Similar Movies</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {similarMovies.map((item) => (
                <Link href={`/movie/${item.id}`} key={item.id} className="group">
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
                        className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 border border-white"
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
    </div>
  )
}
