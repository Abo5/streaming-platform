"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import NextImage from "next/image"
import { Play, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SearchResult {
  id: number
  title: string
  type: "movie" | "series" | "live"
  image: string
  year: string
  classification: string
  ageRating?: string
}

interface SearchResultsProps {
  query: string
  onClose: () => void
}

// Mock search results data
const mockResults: SearchResult[] = [
  {
    id: 101,
    title: "Black Falcon",
    type: "movie",
    image: "/placeholder.svg?height=400&width=600",
    year: "2023",
    classification: "Action",
    ageRating: "R",
  },
  {
    id: 102,
    title: "Desert Road",
    type: "movie",
    image: "/placeholder.svg?height=400&width=600",
    year: "2023",
    classification: "Drama",
    ageRating: "PG-13",
  },
  {
    id: 201,
    title: "Family House",
    type: "series",
    image: "/placeholder.svg?height=400&width=600",
    year: "2023",
    classification: "Drama",
    ageRating: "TV-14",
  },
  {
    id: 401,
    title: "Journey to the Future",
    type: "movie",
    image: "/placeholder.svg?height=400&width=600",
    year: "2023",
    classification: "Sci-Fi",
    ageRating: "PG-13",
  },
  {
    id: 202,
    title: "East District",
    type: "series",
    image: "/placeholder.svg?height=400&width=600",
    year: "2023",
    classification: "Drama",
    ageRating: "TV-14",
  },
]

export function SearchResults({ query, onClose }: SearchResultsProps) {
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate search API call
    setLoading(true)
    const timer = setTimeout(() => {
      // Filter mock results based on query
      const filteredResults = mockResults.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))
      setResults(filteredResults)
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [query])

  if (loading) {
    return (
      <div className="p-4 text-center">
        <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-purple-500 border-r-transparent"></div>
        <p className="mt-2 text-sm text-gray-400">Searching...</p>
      </div>
    )
  }

  if (results.length === 0) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-400">No results found for "{query}"</p>
        <p className="text-sm text-gray-500 mt-1">Try different keywords or check spelling</p>
      </div>
    )
  }

  return (
    <div className="max-h-[70vh] overflow-y-auto">
      <div className="sticky top-0 flex items-center justify-between p-3 bg-slate-900 border-b border-slate-800">
        <h3 className="font-medium">Search Results</h3>
        <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0">
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="p-2">
        {results.map((result) => (
          <Link
            href={`/${result.type}/${result.id}`}
            key={`${result.type}-${result.id}`}
            onClick={onClose}
            className="flex items-center gap-3 p-2 hover:bg-slate-800 rounded-md transition-colors group"
          >
            <div className="relative h-16 w-28 flex-shrink-0 rounded overflow-hidden">
              <NextImage src={result.image} alt={result.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <Play className="h-6 w-6 fill-white" />
              </div>
            </div>
            <div className="flex-grow min-w-0">
              <h4 className="font-medium truncate">{result.title}</h4>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span>{result.year}</span>
                <span>•</span>
                <span>{result.type === "movie" ? "Movie" : result.type === "series" ? "Series" : "Live"}</span>
                <span>•</span>
                <span>{result.classification}</span>
              </div>
              {result.ageRating && (
                <span className="inline-block mt-1 text-xs bg-slate-700 px-1.5 py-0.5 rounded">{result.ageRating}</span>
              )}
            </div>
          </Link>
        ))}
      </div>

      <div className="p-3 text-center border-t border-slate-800">
        <Button variant="link" className="text-purple-400 hover:text-purple-300" onClick={onClose}>
          View all results
        </Button>
      </div>
    </div>
  )
}
