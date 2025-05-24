"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Star, Download, ExternalLink, Package, Sparkles, TrendingUp } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const packages = [
  {
    id: 1,
    name: "lodash",
    description: "A modern JavaScript utility library delivering modularity, performance & extras",
    category: "Utilities",
    language: "JavaScript",
    stars: "58k",
    downloads: "45M/week",
    version: "4.17.21",
    tags: ["Utilities", "Functional", "Performance"],
    logo: "/placeholder.svg?height=60&width=60",
    featured: true,
    trending: true,
    weeklyGrowth: "+12%",
  },
  {
    id: 2,
    name: "axios",
    description: "Promise based HTTP client for the browser and node.js",
    category: "HTTP",
    language: "JavaScript",
    stars: "104k",
    downloads: "28M/week",
    version: "1.6.2",
    tags: ["HTTP", "Promise", "Browser"],
    logo: "/placeholder.svg?height=60&width=60",
    featured: true,
    trending: false,
    weeklyGrowth: "+8%",
  },
  {
    id: 3,
    name: "moment",
    description: "Parse, validate, manipulate, and display dates in javascript",
    category: "Date/Time",
    language: "JavaScript",
    stars: "47k",
    downloads: "12M/week",
    version: "2.29.4",
    tags: ["Date", "Time", "Parsing"],
    logo: "/placeholder.svg?height=60&width=60",
    featured: false,
    trending: false,
    weeklyGrowth: "-2%",
  },
  {
    id: 4,
    name: "express",
    description: "Fast, unopinionated, minimalist web framework for node",
    category: "Framework",
    language: "JavaScript",
    stars: "64k",
    downloads: "25M/week",
    version: "4.18.2",
    tags: ["Web", "Server", "Middleware"],
    logo: "/placeholder.svg?height=60&width=60",
    featured: true,
    trending: true,
    weeklyGrowth: "+15%",
  },
  {
    id: 5,
    name: "react-router",
    description: "Declarative routing for React",
    category: "Routing",
    language: "JavaScript",
    stars: "52k",
    downloads: "8.5M/week",
    version: "6.8.1",
    tags: ["React", "Routing", "SPA"],
    logo: "/placeholder.svg?height=60&width=60",
    featured: false,
    trending: true,
    weeklyGrowth: "+6%",
  },
  {
    id: 6,
    name: "styled-components",
    description: "CSS for the <Component> Age. Style components your way with speed, strong typing, and flexibility",
    category: "Styling",
    language: "JavaScript",
    stars: "40k",
    downloads: "4.2M/week",
    version: "5.3.6",
    tags: ["CSS-in-JS", "Styling", "React"],
    logo: "/placeholder.svg?height=60&width=60",
    featured: false,
    trending: false,
    weeklyGrowth: "+3%",
  },
]

const categoryColors = {
  Utilities: "bg-blue-500/10 text-blue-700 border-blue-200 dark:bg-blue-500/20 dark:text-blue-300 dark:border-blue-800",
  HTTP: "bg-green-500/10 text-green-700 border-green-200 dark:bg-green-500/20 dark:text-green-300 dark:border-green-800",
  "Date/Time":
    "bg-purple-500/10 text-purple-700 border-purple-200 dark:bg-purple-500/20 dark:text-purple-300 dark:border-purple-800",
  Framework:
    "bg-orange-500/10 text-orange-700 border-orange-200 dark:bg-orange-500/20 dark:text-orange-300 dark:border-orange-800",
  Routing: "bg-red-500/10 text-red-700 border-red-200 dark:bg-red-500/20 dark:text-red-300 dark:border-red-800",
  Styling: "bg-pink-500/10 text-pink-700 border-pink-200 dark:bg-pink-500/20 dark:text-pink-300 dark:border-pink-800",
}

export default function PackagesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [sortBy, setSortBy] = useState("downloads")

  const filteredPackages = packages
    .filter((pkg) => {
      const matchesSearch =
        pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pkg.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = categoryFilter === "all" || pkg.category === categoryFilter

      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      if (sortBy === "downloads") {
        return Number.parseInt(b.downloads.replace(/[^\d]/g, "")) - Number.parseInt(a.downloads.replace(/[^\d]/g, ""))
      } else if (sortBy === "stars") {
        return Number.parseInt(b.stars.replace(/[^\d]/g, "")) - Number.parseInt(a.stars.replace(/[^\d]/g, ""))
      }
      return a.name.localeCompare(b.name)
    })

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Packages
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">Explore popular npm packages and libraries</p>
          </div>
          <ThemeToggle />
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        {/* Search and Filters */}
        <div className="space-y-4 mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search packages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-12 text-lg bg-white dark:bg-gray-900/50 border-0 shadow-lg"
            />
          </div>

          <div className="flex gap-3 flex-wrap">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-48 bg-white dark:bg-gray-900/50 border-0 shadow-lg">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Utilities">Utilities</SelectItem>
                <SelectItem value="HTTP">HTTP</SelectItem>
                <SelectItem value="Date/Time">Date/Time</SelectItem>
                <SelectItem value="Framework">Framework</SelectItem>
                <SelectItem value="Routing">Routing</SelectItem>
                <SelectItem value="Styling">Styling</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48 bg-white dark:bg-gray-900/50 border-0 shadow-lg">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="downloads">Downloads</SelectItem>
                <SelectItem value="stars">Stars</SelectItem>
                <SelectItem value="name">Name</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredPackages.map((pkg) => (
            <Card
              key={pkg.id}
              className={cn(
                "group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white dark:bg-gray-900/50 backdrop-blur-sm relative overflow-hidden hover:-translate-y-1",
                pkg.featured && "ring-2 ring-green-500/20 dark:ring-green-400/20",
              )}
            >
              {/* Featured Badge */}
              {pkg.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-gradient-to-r from-green-500 to-blue-600 text-white border-0 shadow-lg">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                </div>
              )}

              {/* Trending Badge */}
              {pkg.trending && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 shadow-lg">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Trending
                  </Badge>
                </div>
              )}

              <CardHeader className="pb-4">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Package className="w-8 h-8 text-gray-600 dark:text-gray-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="min-w-0 flex-1">
                        <h3 className="font-bold text-xl text-gray-900 dark:text-gray-100 truncate">{pkg.name}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">v{pkg.version}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2">
                      {pkg.description}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Category Badge */}
                <div className="flex justify-center">
                  <Badge className={cn("font-medium px-3 py-1", categoryColors[pkg.category])}>{pkg.category}</Badge>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {pkg.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border-gray-200 dark:border-gray-700"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center justify-center bg-yellow-50 dark:bg-yellow-900/20 px-3 py-2 rounded-xl">
                    <Star className="w-4 h-4 mr-2 text-yellow-500" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{pkg.stars}</span>
                  </div>
                  <div className="flex items-center justify-center bg-green-50 dark:bg-green-900/20 px-3 py-2 rounded-xl">
                    <Download className="w-4 h-4 mr-2 text-green-500" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{pkg.downloads}</span>
                  </div>
                </div>

                {/* Growth Indicator */}
                <div className="flex items-center justify-center">
                  <div
                    className={cn(
                      "px-3 py-1 rounded-full text-xs font-medium",
                      pkg.weeklyGrowth.startsWith("+")
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                        : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
                    )}
                  >
                    {pkg.weeklyGrowth} this week
                  </div>
                </div>

                {/* Language Badge */}
                <div className="flex justify-center">
                  <Badge variant="outline" className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                    {pkg.language}
                  </Badge>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View on NPM
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-0 shadow-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:shadow-xl transition-all duration-300"
                  >
                    <Star className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredPackages.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-12 h-12 text-gray-400" />
            </div>
            <p className="text-gray-500 text-lg">No packages found matching your criteria.</p>
            <p className="text-gray-400 text-sm mt-2">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  )
}
