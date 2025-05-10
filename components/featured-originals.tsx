"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import NextImage from "next/image"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

interface OriginalItem {
  id: number
  title: string
  image: string
  logo?: string
  type: "movie" | "series"
  description: string
  previewVideo?: string
}

interface FeaturedOriginalsProps {
  title: string
  items: OriginalItem[]
}

export function FeaturedOriginals({ title, items }: FeaturedOriginalsProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const rowRef = useRef<HTMLDivElement>(null)

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
    <div className="relative">
      <h2 className="text-xl font-bold tracking-wide mb-6">{title}</h2>

      <div className="relative">
        <div
          ref={rowRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-8 pt-1 px-1 -mx-1"
          style={{ scrollbarWidth: "none" }}
        >
          {items.map((item, index) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-[300px] md:w-[400px] group/item"
              onMouseEnter={() => {
                setActiveIndex(index)
                setHoveredItem(item.id)
              }}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link href={`/${item.type}/${item.id}`}>
                <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
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

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20" />

                  {/* Original badge */}
                  <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-sm z-30">
                    ORIGINAL
                  </div>

                  {/* Logo or title */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-30">
                    {item.logo ? (
                      <div className="w-[70%] h-12 relative mb-2">
                        <NextImage src={item.logo} alt={item.title} fill className="object-contain object-left" />
                      </div>
                    ) : (
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    )}
                    <p className="text-sm text-gray-300 line-clamp-2">{item.description}</p>
                  </div>

                  {/* Play button on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-opacity z-30">
                    <Button
                      size="icon"
                      className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 border border-white"
                    >
                      <Play className="h-8 w-8 fill-white" />
                    </Button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
