"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import NextImage from "next/image"
import { ChevronRight, MousePointer, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

interface InteractiveItem {
  id: number
  title: string
  image: string
  type: "movie" | "series" | "interactive"
  description: string
  duration: string
  ageRating?: string
}

interface InteractiveShowcaseProps {
  title: string
  viewMoreLink: string
  items: InteractiveItem[]
}

export function InteractiveShowcase({ title, viewMoreLink, items }: InteractiveShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const rowRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative group">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <MousePointer className="h-6 w-6 text-purple-400" />
          <h2 className="text-xl font-bold tracking-wide">{title}</h2>
        </div>
        <Link href={viewMoreLink} className="text-sm text-white hover:text-gray-300 flex items-center">
          View All <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>

      <div className="relative">
        <div
          ref={rowRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-8 pt-1 px-1 -mx-1"
          style={{ scrollbarWidth: "none" }}
        >
          {items.map((item, index) => (
            <div key={item.id} className="relative flex-shrink-0 group/item" onMouseEnter={() => setActiveIndex(index)}>
              <Link href={`/${item.type}/${item.id}`}>
                <div className="relative w-[350px] rounded-lg overflow-hidden group-hover/item:ring-2 group-hover/item:ring-purple-400 transition-all">
                  <div className="aspect-video relative">
                    <NextImage
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover/item:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                    {/* Interactive Badge */}
                    <div className="absolute top-3 right-3 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full z-30 flex items-center gap-1 shadow-lg">
                      <MousePointer className="h-3 w-3" />
                      <span>INTERACTIVE</span>
                    </div>

                    {/* Age Rating Badge */}
                    {item.ageRating && (
                      <div className="absolute top-3 left-3 bg-black/70 text-white text-xs font-bold px-1.5 py-0.5 rounded z-30 border border-white/30">
                        {item.ageRating}
                      </div>
                    )}

                    {/* Duration */}
                    <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm rounded px-2 py-0.5 z-30">
                      <span className="text-white text-xs">{item.duration}</span>
                    </div>

                    {/* Play button on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-opacity z-30">
                      <Button
                        size="icon"
                        className="h-14 w-14 rounded-full bg-purple-500/80 hover:bg-purple-500 backdrop-blur-md border-2 border-white"
                      >
                        <Play className="h-7 w-7 fill-white" />
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-b from-black/80 to-black">
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-300 line-clamp-2">{item.description}</p>
                  </div>

                  {/* Animated border on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-[shimmer_2s_infinite]"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-[shimmer_2s_infinite]"></div>
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent animate-[shimmer_2s_infinite]"></div>
                    <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent animate-[shimmer_2s_infinite]"></div>
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
