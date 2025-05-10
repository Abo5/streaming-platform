"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import NextImage from "next/image"
import { ChevronRight, Play, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

interface RecommendationItem {
  id: number
  title: string
  image: string
  type: "movie" | "series"
  imdbRating: string
  language: string
  classification: string
  ageRating?: string
  previewVideo?: string
  recommendedBy: string
  recommendationCount: number
}

interface SubscriberRecommendationsProps {
  title: string
  viewMoreLink: string
  items: RecommendationItem[]
}

export function SubscriberRecommendations({ title, viewMoreLink, items }: SubscriberRecommendationsProps) {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const rowRef = useRef<HTMLDivElement>(null)
  const videoTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (hoveredItem !== null) {
      // Clear any existing timeout
      if (videoTimeoutRef.current) {
        clearTimeout(videoTimeoutRef.current)
      }

      // Set a new timeout to start video after 2 seconds
      videoTimeoutRef.current = setTimeout(() => {
        setIsVideoPlaying(true)
      }, 2000)
    } else {
      setIsVideoPlaying(false)
      if (videoTimeoutRef.current) {
        clearTimeout(videoTimeoutRef.current)
      }
    }

    return () => {
      if (videoTimeoutRef.current) {
        clearTimeout(videoTimeoutRef.current)
      }
    }
  }, [hoveredItem])

  return (
    <div className="relative group">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-purple-400" />
          <h2 className="text-xl font-bold tracking-wide">{title}</h2>
        </div>
        <Link href={viewMoreLink} className="text-sm text-white hover:text-gray-300 flex items-center">
          View All <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>

      <div className="relative">
        <div
          ref={rowRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-8 pt-1 px-1 -mx-1"
          style={{ scrollbarWidth: "none" }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 group/item"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link href={`/${item.type}/${item.id}`}>
                <div className="relative h-[240px] w-[160px] md:h-[270px] md:w-[180px] rounded-lg overflow-hidden group-hover/item:ring-2 group-hover/item:ring-purple-400 transition-all">
                  {hoveredItem === item.id && isVideoPlaying && item.previewVideo ? (
                    <video
                      src={item.previewVideo}
                      autoPlay
                      muted
                      loop
                      className="absolute inset-0 w-full h-full object-cover z-10"
                    />
                  ) : (
                    <NextImage
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover/item:scale-110"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-20" />

                  {/* Recommendation Badge */}
                  <div className="absolute top-2 right-2 bg-purple-500/80 text-white text-xs px-2 py-1 rounded-full z-30 flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>{item.recommendationCount}</span>
                  </div>

                  {/* Age Rating Badge */}
                  {item.ageRating && (
                    <div className="absolute top-2 left-2 bg-black/70 text-white text-xs font-bold px-1.5 py-0.5 rounded z-30 border border-white/30">
                      {item.ageRating}
                    </div>
                  )}

                  {/* IMDb rating */}
                  <div className="absolute top-10 right-2 flex items-center bg-black/60 backdrop-blur-sm rounded px-1.5 py-0.5 z-30">
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

                  {/* Play button on hover with animation */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-opacity z-30">
                    <Button
                      size="icon"
                      className="h-12 w-12 rounded-full bg-purple-500/80 hover:bg-purple-500 backdrop-blur-md border border-white transform transition-transform duration-300 hover:scale-110"
                    >
                      <Play className="h-6 w-6 fill-white" />
                    </Button>
                  </div>
                </div>
              </Link>

              <div className="mt-2 space-y-1">
                <h3 className="text-sm font-medium line-clamp-1 text-center">{item.title}</h3>
                <p className="text-xs text-gray-400 text-center">Recommended by {item.recommendedBy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
