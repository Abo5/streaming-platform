import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Play, ThumbsUp, ThumbsDown, Info, Plus, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
  title: "My List | Stream+",
  description: "Your personalized watchlist on Stream+",
}

interface ContentItem {
  id: string
  title: string
  imageUrl: string
  type: string
  year: number
  description: string
  inMyList: boolean
}

export default function MyListPage() {
  // Mock data for my list
  const myListItems: ContentItem[] = [
    {
      id: "ml1",
      title: "Cosmic Odyssey",
      imageUrl: "/placeholder.svg?height=400&width=600",
      type: "movie",
      year: 2024,
      description: "A journey through the cosmos that challenges our understanding of space and time.",
      inMyList: true,
    },
    {
      id: "ml2",
      title: "Desert Mirage",
      imageUrl: "/placeholder.svg?height=400&width=600",
      type: "movie",
      year: 2023,
      description: "A thrilling adventure across the vast deserts of the Middle East.",
      inMyList: true,
    },
    {
      id: "ml3",
      title: "Urban Legends",
      imageUrl: "/placeholder.svg?height=400&width=600",
      type: "series",
      year: 2024,
      description: "Explore the truth behind the most famous urban legends from around the world.",
      inMyList: true,
    },
    {
      id: "ml4",
      title: "Midnight Express",
      imageUrl: "/placeholder.svg?height=400&width=600",
      type: "movie",
      year: 2022,
      description: "A high-speed thriller that takes place on a mysterious overnight train.",
      inMyList: true,
    },
    {
      id: "ml5",
      title: "Crystal Kingdom",
      imageUrl: "/placeholder.svg?height=400&width=600",
      type: "series",
      year: 2023,
      description: "A fantasy epic set in a world where crystals hold magical powers.",
      inMyList: true,
    },
    {
      id: "ml6",
      title: "Neon Nights",
      imageUrl: "/placeholder.svg?height=400&width=600",
      type: "movie",
      year: 2024,
      description: "A neon-soaked crime drama set in the underground world of cyberpunk.",
      inMyList: true,
    },
    {
      id: "ml7",
      title: "Skyline Runners",
      imageUrl: "/placeholder.svg?height=400&width=600",
      type: "series",
      year: 2023,
      description: "Parkour athletes navigate the dangerous world of corporate espionage.",
      inMyList: true,
    },
    {
      id: "ml8",
      title: "Eternal Flame",
      imageUrl: "/placeholder.svg?height=400&width=600",
      type: "movie",
      year: 2022,
      description: "A romance that spans centuries, following two souls that are eternally connected.",
      inMyList: true,
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 pt-24 pb-16">
          <h1 className="text-3xl font-bold mb-6 animate-fade-in">My List</h1>

          {myListItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {myListItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative bg-slate-900/50 rounded-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:z-10 hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Link href={`/${item.type}/${item.id}`} className="block">
                    <div className="relative aspect-video">
                      <Image
                        src={item.imageUrl || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover transition-opacity duration-300 group-hover:opacity-30"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <div className="flex items-center text-sm text-slate-300 mb-2">
                        <span className="mr-2">{item.year}</span>
                        <span className="capitalize">{item.type}</span>
                      </div>
                      <p className="text-sm text-slate-400 line-clamp-2">{item.description}</p>
                    </div>
                  </Link>

                  <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-8 w-8 rounded-full bg-white text-black hover:bg-white/90 transition-all duration-300 hover:scale-110"
                      >
                        <Play className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 rounded-full border-white/20 bg-black/50 backdrop-blur-sm transition-all duration-300 hover:scale-110"
                      >
                        <ThumbsUp className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 rounded-full border-white/20 bg-black/50 backdrop-blur-sm transition-all duration-300 hover:scale-110"
                      >
                        <ThumbsDown className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 rounded-full border-white/20 bg-black/50 backdrop-blur-sm transition-all duration-300 hover:scale-110"
                      >
                        {item.inMyList ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </Button>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 rounded-full border-white/20 bg-black/50 backdrop-blur-sm transition-all duration-300 hover:scale-110"
                      >
                        <Info className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 animate-fade-in">
              <h2 className="text-2xl font-semibold mb-4">Your list is empty</h2>
              <p className="text-slate-400 mb-8">Add movies and shows to your list to watch them later</p>
              <Button asChild className="animate-pulse-slow">
                <Link href="/">Browse content</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
    </>
  )
}
