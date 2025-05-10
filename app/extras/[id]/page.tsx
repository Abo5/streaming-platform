import NextImage from "next/image"
import Link from "next/link"
import { Film, Play, Share2, ArrowLeft, Calendar, Clock, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

// Mock data for behind the scenes content
const behindTheScenesContent = [
  {
    id: 3001,
    title: "Making of Black Falcon",
    image: "/placeholder.svg?height=1080&width=1920",
    thumbnail: "/placeholder.svg?height=400&width=600",
    relatedTo: "Black Falcon",
    relatedId: 101,
    duration: "25 min",
    type: "making-of",
    description:
      "Go behind the scenes of the action-packed thriller Black Falcon and discover how the spectacular stunts were performed and special effects created.",
    longDescription:
      "This exclusive behind-the-scenes documentary takes you into the heart of the production of Black Falcon, one of the most ambitious action films of the year. Follow director Ahmed Hassan and his team as they tackle the challenges of creating spectacular stunts, explosive set pieces, and seamless visual effects. Featuring interviews with the cast and crew, this documentary reveals the meticulous planning and execution that went into the film's most memorable sequences. From the high-speed car chases through city streets to the climactic helicopter battle, you'll see how movie magic is made through a combination of practical effects, stunt work, and cutting-edge CGI. The documentary also explores the physical training the actors underwent to perform their own stunts whenever possible, adding authenticity to the film's action sequences.",
    director: "Ahmed Hassan",
    featuring: ["Michael Chen", "Aisha Williams", "Stunt Team"],
    releaseDate: "2023-05-15",
    chapters: [
      { title: "Introduction", timestamp: "00:00" },
      { title: "Pre-production", timestamp: "03:15" },
      { title: "Stunt Coordination", timestamp: "07:42" },
      { title: "Special Effects", timestamp: "12:30" },
      { title: "Cast Training", timestamp: "16:55" },
      { title: "Post-production", timestamp: "20:10" },
    ],
  },
  {
    id: 3002,
    title: "Interview with the Director",
    image: "/placeholder.svg?height=1080&width=1920",
    thumbnail: "/placeholder.svg?height=400&width=600",
    relatedTo: "The Final Journey",
    relatedId: 502,
    duration: "15 min",
    type: "interview",
    description:
      "An exclusive interview with acclaimed director James Wilson discussing his vision for The Final Journey and the challenges of filming in remote locations.",
    longDescription:
      "In this intimate and revealing interview, acclaimed director James Wilson sits down to discuss his creative process and the unique challenges he faced while making The Final Journey. Wilson shares insights into his artistic vision for the film, explaining how he wanted to create a story that balanced thrilling adventure with profound emotional depth. He discusses the casting process and how he worked with the actors to bring authenticity to their performances. A significant portion of the interview focuses on the logistical challenges of filming in remote and often inhospitable locations, from dense rainforests to arid deserts. Wilson explains how these real environments were essential to creating the film's sense of isolation and survival. The director also touches on the film's themes of human resilience and our connection to nature, and how these ideas informed every aspect of the production.",
    director: "Sarah Johnson",
    featuring: ["James Wilson"],
    releaseDate: "2023-06-22",
    chapters: [
      { title: "Introduction", timestamp: "00:00" },
      { title: "Creative Vision", timestamp: "01:30" },
      { title: "Casting Process", timestamp: "04:15" },
      { title: "Location Challenges", timestamp: "07:00" },
      { title: "Working with Actors", timestamp: "10:45" },
      { title: "Themes and Message", timestamp: "13:20" },
    ],
  },
  {
    id: 3003,
    title: "The Visual Effects of Journey to the Future",
    image: "/placeholder.svg?height=1080&width=1920",
    thumbnail: "/placeholder.svg?height=400&width=600",
    relatedTo: "Journey to the Future",
    relatedId: 401,
    duration: "30 min",
    type: "documentary",
    description:
      "A detailed look at the groundbreaking visual effects that brought the futuristic world of Journey to the Future to life.",
    longDescription:
      "This comprehensive documentary explores the cutting-edge visual effects that created the stunning futuristic world seen in Journey to the Future. The film's VFX supervisor takes viewers through the entire process, from early concept art and pre-visualization to the final compositing of complex shots. The documentary showcases the work of hundreds of talented artists who spent over two years creating everything from holographic interfaces and futuristic cityscapes to advanced robotics and space travel sequences. Particular attention is given to the film's most challenging sequence - a zero-gravity space walk that combined practical effects, wire work, and digital enhancements to create a seamless illusion of weightlessness. The documentary also examines how the production team balanced practical and digital effects to maintain a sense of realism despite the fantastical setting. Through behind-the-scenes footage and detailed breakdowns of key sequences, viewers gain an appreciation for the artistry and technical innovation that went into creating one of the year's most visually spectacular films.",
    director: "David Chen",
    featuring: ["VFX Team", "Production Designer", "Concept Artists"],
    releaseDate: "2023-04-10",
    chapters: [
      { title: "Introduction", timestamp: "00:00" },
      { title: "Concept and Design", timestamp: "03:20" },
      { title: "Pre-visualization", timestamp: "08:45" },
      { title: "On-Set VFX Work", timestamp: "12:30" },
      { title: "Digital Environments", timestamp: "17:15" },
      { title: "Character Effects", timestamp: "22:40" },
      { title: "Final Compositing", timestamp: "26:10" },
    ],
  },
]

// Mock data for related content
const relatedContent = [
  {
    id: 3004,
    title: "Cast Roundtable",
    image: "/placeholder.svg?height=400&width=600",
    relatedTo: "Family House",
    duration: "40 min",
    type: "interview",
  },
  {
    id: 3005,
    title: "Filming in Extreme Locations",
    image: "/placeholder.svg?height=400&width=600",
    relatedTo: "The Last Knight",
    duration: "35 min",
    type: "documentary",
  },
  {
    id: 3006,
    title: "Creating the Music",
    image: "/placeholder.svg?height=400&width=600",
    relatedTo: "Eternal Love",
    duration: "20 min",
    type: "documentary",
  },
]

export default function ExtraDetailPage({ params }: { params: { id: string } }) {
  // Find the content based on ID
  const contentId = Number.parseInt(params.id)
  const content = behindTheScenesContent.find((item) => item.id === contentId) || behindTheScenesContent[0]

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-slate-950 text-white pb-16">
      <Link
        href="/extras/behind-the-scenes"
        className="fixed top-4 left-4 z-50 bg-black/50 backdrop-blur-sm p-2 rounded-full"
      >
        <ArrowLeft className="h-6 w-6" />
      </Link>

      <div className="relative h-[70vh] w-full">
        <NextImage src={content.image} alt={content.title} fill priority className="object-cover" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        {/* Type Badge */}
        <div className="absolute top-6 right-6 bg-teal-500 text-white text-sm font-bold px-4 py-2 rounded-full z-30 flex items-center gap-2 shadow-lg uppercase">
          <Film className="h-4 w-4" />
          <span>{content.type}</span>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            size="lg"
            className="rounded-full h-20 w-20 bg-teal-500/80 hover:bg-teal-500 backdrop-blur-md border-2 border-white"
          >
            <Play className="h-10 w-10 fill-white" />
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-32 relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4 lg:w-1/5">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
              <NextImage src={content.thumbnail} alt={content.title} fill className="object-cover" />

              {/* Type Badge */}
              <div className="absolute top-3 right-3 bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded-full z-30 uppercase">
                {content.type}
              </div>

              {/* Duration */}
              <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm rounded px-2 py-0.5 z-30">
                <span className="text-white text-xs">{content.duration}</span>
              </div>
            </div>

            <div className="mt-4 space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-sm font-semibold mb-3">Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <Calendar className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-400">Release Date:</span>
                      <div>{new Date(content.releaseDate).toLocaleDateString()}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-400">Duration:</span>
                      <div>{content.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <User className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-400">Director:</span>
                      <div>{content.director}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Film className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-400">Related To:</span>
                      <div>
                        <Link
                          href={`/${content.relatedTo.includes("Series") ? "series" : "movie"}/${content.relatedId}`}
                          className="text-teal-400 hover:underline"
                        >
                          {content.relatedTo}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-sm font-semibold mb-3">Chapters</h3>
                <div className="space-y-2 text-sm">
                  {content.chapters.map((chapter, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between hover:bg-white/10 p-1 rounded cursor-pointer"
                    >
                      <span>{chapter.title}</span>
                      <span className="text-gray-400">{chapter.timestamp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-3/4 lg:w-4/5 space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{content.title}</h1>

            <div className="flex flex-wrap gap-3">
              <Button className="bg-teal-500 hover:bg-teal-600 text-white">
                <Play className="mr-2 h-4 w-4 fill-white" /> Watch Now
              </Button>
              <Button variant="outline" className="border-white/30 backdrop-blur-sm hover:bg-white/20">
                <Share2 className="mr-2 h-4 w-4" /> Share
              </Button>
            </div>

            <div className="pt-4">
              <h2 className="text-xl font-semibold mb-2">Overview</h2>
              <p className="text-gray-300">{content.longDescription}</p>
            </div>

            <div className="pt-4">
              <h2 className="text-xl font-semibold mb-2">Featuring</h2>
              <div className="flex flex-wrap gap-4">
                {content.featuring.map((person, index) => (
                  <div key={index} className="text-center">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mx-auto">
                      <NextImage
                        src={`/placeholder.svg?height=200&width=200`}
                        alt={person}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-1 text-xs">{person}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <h2 className="text-xl font-semibold mb-2">Screenshots</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((screenshot) => (
                  <div key={screenshot} className="relative aspect-video rounded-lg overflow-hidden">
                    <NextImage
                      src={`/placeholder.svg?height=400&width=600`}
                      alt={`Screenshot ${screenshot}`}
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

        <div>
          <h2 className="text-2xl font-bold mb-6">More Behind The Scenes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedContent.map((item) => (
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
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
