"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  SkipBack,
  SkipForward,
  Settings,
  ArrowLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

export default function PlayerPage({ params }: { params: { id: string } }) {
  // This component uses the native video element, not the Next.js Image component
  // so no changes are needed here for the Image conflict
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(100)
  const [showControls, setShowControls] = useState(true)
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // In a real app, you would fetch content data based on the ID
  const contentId = params.id

  useEffect(() => {
    const video = videoRef.current

    if (!video) return

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime)
    }

    const handleLoadedMetadata = () => {
      setDuration(video.duration)
    }

    const handleEnded = () => {
      setIsPlaying(false)
    }

    video.addEventListener("timeupdate", handleTimeUpdate)
    video.addEventListener("loadedmetadata", handleLoadedMetadata)
    video.addEventListener("ended", handleEnded)

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate)
      video.removeEventListener("loadedmetadata", handleLoadedMetadata)
      video.removeEventListener("ended", handleEnded)
    }
  }, [])

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [])

  const togglePlay = () => {
    const video = videoRef.current

    if (!video) return

    if (isPlaying) {
      video.pause()
    } else {
      video.play()
    }

    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    const video = videoRef.current

    if (!video) return

    video.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const toggleFullscreen = () => {
    const playerContainer = document.getElementById("player-container")

    if (!playerContainer) return

    if (!document.fullscreenElement) {
      playerContainer.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`)
      })
    } else {
      document.exitFullscreen()
    }
  }

  const handleVolumeChange = (value: number[]) => {
    const video = videoRef.current

    if (!video) return

    const newVolume = value[0]
    video.volume = newVolume / 100
    setVolume(newVolume)
    setIsMuted(newVolume === 0)
  }

  const handleSeek = (value: number[]) => {
    const video = videoRef.current

    if (!video) return

    video.currentTime = (value[0] / 100) * duration
  }

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = Math.floor(seconds % 60)

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
    }

    return `${minutes}:${secs.toString().padStart(2, "0")}`
  }

  const handleMouseMove = () => {
    setShowControls(true)

    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current)
    }

    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false)
      }
    }, 3000)
  }

  return (
    <div id="player-container" className="relative w-full h-screen bg-black" onMouseMove={handleMouseMove}>
      <video
        ref={videoRef}
        className="w-full h-full"
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        onClick={togglePlay}
      />

      {showControls && (
        <>
          <Link href="/" className="absolute top-4 left-4 z-50 bg-black/50 backdrop-blur-sm p-2 rounded-full">
            <ArrowLeft className="h-6 w-6 text-white" />
          </Link>

          <div className="absolute top-0 left-0 right-0 p-4">
            <h1 className="text-white text-xl font-semibold">الرحلة إلى المستقبل</h1>
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 space-y-4">
            <Slider
              value={[currentTime ? (currentTime / duration) * 100 : 0]}
              onValueChange={handleSeek}
              className="w-full [&>span:first-child]:h-1 [&>span:first-child]:bg-white/30 [&_[role=slider]]:bg-purple-500 [&_[role=slider]]:w-3 [&_[role=slider]]:h-3 [&_[role=slider]]:border-0 [&>span:first-child_span]:bg-purple-500 [&_[role=slider]:focus-visible]:ring-0 [&_[role=slider]:focus-visible]:ring-offset-0 [&_[role=slider]:focus-visible]:scale-105 [&_[role=slider]:focus-visible]:transition-transform"
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button size="icon" variant="ghost" className="text-white hover:bg-white/10" onClick={togglePlay}>
                  {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 fill-white" />}
                </Button>

                <Button size="icon" variant="ghost" className="text-white hover:bg-white/10">
                  <SkipBack className="h-5 w-5" />
                </Button>

                <Button size="icon" variant="ghost" className="text-white hover:bg-white/10">
                  <SkipForward className="h-5 w-5" />
                </Button>

                <div className="flex items-center gap-2 ml-2">
                  <Button size="icon" variant="ghost" className="text-white hover:bg-white/10" onClick={toggleMute}>
                    {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                  </Button>

                  <div className="w-24 hidden md:block">
                    <Slider
                      value={[isMuted ? 0 : volume]}
                      onValueChange={handleVolumeChange}
                      className="[&>span:first-child]:h-1 [&>span:first-child]:bg-white/30 [&_[role=slider]]:bg-white [&_[role=slider]]:w-3 [&_[role=slider]]:h-3 [&_[role=slider]]:border-0 [&>span:first-child_span]:bg-white [&_[role=slider]:focus-visible]:ring-0 [&_[role=slider]:focus-visible]:ring-offset-0"
                    />
                  </div>
                </div>

                <div className="text-white text-sm ml-2">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button size="icon" variant="ghost" className="text-white hover:bg-white/10">
                  <Settings className="h-5 w-5" />
                </Button>

                <Button size="icon" variant="ghost" className="text-white hover:bg-white/10" onClick={toggleFullscreen}>
                  {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
