"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import NextImage from "next/image"
import { Play, Plus, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PreviewItem {
  id: number
  title: string
  image: string
  type: "movie" | "series"
  description: string
  match?: number // Made optional
  year: string
  ageRating: string
  duration: string
  previewVideo?: string
}

interface PreviewsForYouProps {
  title: string
  items: PreviewItem[]
}

export function PreviewsForYou({ title, items }: PreviewsForYouProps) {
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

      // Set a new timeout to start video after 1 second
      videoTimeoutRef.current = setTimeout(() => {
        setIsVideoPlaying(true)
      }, 1000)
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
      <h2 className="text-xl font-bold tracking-wide mb-4">{title}</h2>

      <div className="relative">
        <div
          ref={rowRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-8 pt-1 px-1 -mx-1"
          style={{ scrollbarWidth: "none" }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-[300px] md:w-[350px] group/item"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link href={`/${item.type}/${item.id}`}>
                <div className="relative aspect-video rounded-lg overflow-hidden">
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

                  {/* Removed the Match percentage text */}

                  {/* Age rating */}
                  <div className="absolute top-2 right-2 bg-black/70 text-white text-xs font-bold px-1.5 py-0.5 rounded z-30 border border-white/30">
                    {item.ageRating}
                  </div>

                  {/* Play button on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-opacity z-30">
                    <Button
                      size="icon"
                      className="h-14 w-14 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 border border-white"
                    >
                      <Play className="h-7 w-7 fill-white" />
                    </Button>
                  </div>
                </div>
              </Link>

              <div className="mt-2 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-medium line-clamp-1">{item.title}</h3>
                  <div className="flex items-center gap-2">
                    <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                      <ThumbsUp className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span>{item.year}</span>
                  <span>•</span>
                  <span>{item.duration}</span>
                </div>
                <p className="text-sm text-gray-300 line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
