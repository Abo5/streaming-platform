"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import NextImage from "next/image"
import { Play, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface ContinueWatchingItem {
  id: number
  title: string
  image: string
  type: "movie" | "series"
  progress: number
  episode?: string
  season?: string
  remainingTime: string
  previewVideo?: string
}

interface ContinueWatchingProps {
  title: string
  items: ContinueWatchingItem[]
}

export function ContinueWatching({ title, items }: ContinueWatchingProps) {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [watchingItems, setWatchingItems] = useState(items)
  const rowRef = useRef<HTMLDivElement>(null)
  const videoTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (hoveredItem !== null) {
      // Clear any existing timeout
      if (videoTimeoutRef.current) {
        clearTimeout(videoTimeoutRef.current)
      }

      // Set a new timeout to start video after 1.5 seconds
      videoTimeoutRef.current = setTimeout(() => {
        setIsVideoPlaying(true)
      }, 1500)
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

  const removeItem = (id: number, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setWatchingItems(watchingItems.filter((item) => item.id !== id))
  }

  return (
    <div className="relative group">
      <h2 className="text-xl font-bold tracking-wide mb-4">{title}</h2>

      <div className="relative">
        <div
          ref={rowRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 pt-1 px-1 -mx-1"
          style={{ scrollbarWidth: "none" }}
        >
          {watchingItems.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-[240px] md:w-[280px] group/item"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link href={`/${item.type}/${item.id}`}>
                <div className="relative aspect-video rounded-md overflow-hidden">
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

                  {/* Episode info */}
                  {item.episode && item.season && (
                    <div className="absolute top-2 left-2 text-xs text-white z-30">
                      S{item.season} E{item.episode}
                    </div>
                  )}

                  {/* Remaining time */}
                  <div className="absolute top-2 right-2 text-xs text-white bg-black/60 backdrop-blur-sm rounded px-1.5 py-0.5 z-30">
                    {item.remainingTime} left
                  </div>

                  {/* Progress bar */}
                  <div className="absolute bottom-0 left-0 right-0 z-30">
                    <Progress
                      value={item.progress}
                      className="h-1 rounded-none bg-white/30"
                      indicatorClassName="bg-red-600"
                    />
                  </div>

                  {/* Play button on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-opacity z-30">
                    <Button
                      size="icon"
                      className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 border border-white"
                    >
                      <Play className="h-6 w-6 fill-white" />
                    </Button>
                  </div>
                </div>
              </Link>

              <div className="flex items-center justify-between mt-2">
                <h3 className="text-sm font-medium line-clamp-1">{item.title}</h3>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-6 w-6 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity"
                  onClick={(e) => removeItem(item.id, e)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
