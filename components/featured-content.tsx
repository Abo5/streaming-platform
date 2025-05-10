"use client"

import { useState } from "react"
import NextImage from "next/image"
import { Play, Info, Plus, VolumeX, Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FeaturedContentProps {
  id?: number
  title?: string
  description?: string
  image?: string
  logo?: string
  type?: "movie" | "series"
  year?: string
  ageRating?: string
  duration?: string
  genres?: string[]
}

export function FeaturedContent({
  id = 1,
  title = "Journey to the Future",
  description = "In a futuristic world filled with advanced technology, our hero finds himself facing unexpected challenges that threaten the fate of humanity. A journey filled with excitement, suspense, and adventure.",
  image = "/placeholder.svg?height=1080&width=1920",
  logo,
  type = "movie",
  year = "2023",
  ageRating = "PG-13",
  duration = "2h 15m",
  genres = ["Sci-Fi", "Adventure", "Thriller"],
}: FeaturedContentProps) {
  const [isMuted, setIsMuted] = useState(true)

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Background Image/Video */}
      <div className="absolute inset-0">
        <NextImage src={image} alt={title || "Featured Content"} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-8 md:px-16 max-w-3xl">
        {logo ? (
          <NextImage
            src={logo}
            alt={title || "Featured Content"}
            width={400}
            height={200}
            className="mb-6 max-w-[300px] object-contain"
          />
        ) : (
          <h1 className="text-5xl font-bold mb-4">{title}</h1>
        )}

        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm font-medium text-gray-300">{year}</span>
          <span className="px-1.5 py-0.5 text-xs font-bold border border-gray-300 text-gray-300">{ageRating}</span>
          <span className="text-sm font-medium text-gray-300">{duration}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {genres &&
            genres.map((genre) => (
              <span key={genre} className="px-2.5 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium">
                {genre}
              </span>
            ))}
        </div>

        <p className="text-base text-gray-200 mb-8 line-clamp-3">{description}</p>

        <div className="flex items-center gap-4">
          <Button
            size="lg"
            className="bg-white hover:bg-white/90 text-black font-medium flex items-center gap-2 px-6 transition-transform hover:scale-105"
          >
            <Play className="h-5 w-5 fill-black" /> Play
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/30 bg-black/30 backdrop-blur-sm hover:bg-black/50 flex items-center gap-2 px-6"
          >
            <Info className="h-5 w-5" /> More Info
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="border-white/30 bg-black/30 backdrop-blur-sm hover:bg-black/50 rounded-full h-11 w-11"
          >
            <Plus className="h-5 w-5" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="border-white/30 bg-black/30 backdrop-blur-sm hover:bg-black/50 rounded-full h-11 w-11"
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </div>
  )
}
