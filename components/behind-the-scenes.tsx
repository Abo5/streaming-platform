"use client"

import { useRef } from "react"
import Link from "next/link"
import NextImage from "next/image"
import { ChevronRight, Film, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BehindTheScenesItem {
  id: number
  title: string
  image: string
  relatedTo: string
  duration: string
  type: "documentary" | "interview" | "making-of"
}

interface BehindTheScenesProps {
  title: string
  viewMoreLink: string
  items: BehindTheScenesItem[]
}

export function BehindTheScenes({ title, viewMoreLink, items }: BehindTheScenesProps) {
  const rowRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative group">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Film className="h-6 w-6 text-teal-400" />
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
          {items.map((item) => (
            <div key={item.id} className="relative flex-shrink-0 group/item">
              <Link href={`/extras/${item.id}`}>
                <div className="relative w-[280px] rounded-lg overflow-hidden group-hover/item:ring-2 group-hover/item:ring-teal-400 transition-all">
                  <div className="aspect-video relative">
                    <NextImage
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover/item:scale-110"
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
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-opacity z-30">
                      <Button
                        size="icon"
                        className="h-12 w-12 rounded-full bg-teal-500/80 hover:bg-teal-500 backdrop-blur-md border border-white"
                      >
                        <Play className="h-6 w-6 fill-white" />
                      </Button>
                    </div>
                  </div>

                  <div className="p-3 bg-gradient-to-b from-black/80 to-black">
                    <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-300">From: {item.relatedTo}</p>
                  </div>

                  {/* Animated dots on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 flex justify-center gap-1 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 pb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-[pulse_1.5s_infinite_0.0s]"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-[pulse_1.5s_infinite_0.2s]"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-[pulse_1.5s_infinite_0.4s]"></div>
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
