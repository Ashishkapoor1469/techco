"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Star, Download, ExternalLink, Sparkles } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import Image from "next/image"

const frameworks = [
  {
    id: 1,
    name: "React",
    description: "A JavaScript library for building user interfaces",
    category: "Frontend",
    language: "JavaScript",
    stars: "220k",
    downloads: "20M/week",
    tags: ["UI", "Component-based", "Virtual DOM"],
    logo: "/placeholder.svg?height=60&width=60",
    featured: true,
  },
  {
    id: 2,
    name: "Next.js",
    description: "The React Framework for Production",
    category: "Full Stack",
    language: "JavaScript",
    stars: "118k",
    downloads: "5.2M/week",
    tags: ["SSR", "SSG", "API Routes"],
    logo: "/placeholder.svg?height=60&width=60",
    featured: true,
  },
  {
    id: 3,
    name: "Vue.js",
    description: "The Progressive JavaScript Framework",
    category: "Frontend",
    language: "JavaScript",
    stars: "206k",
    downloads: "4.1M/week",
    tags: ["Progressive", "Reactive", "Component-based"],
    logo: "/placeholder.svg?height=60&width=60",
    featured: false,
  },
  {
    id: 4,
    name: "Angular",
    description: "Platform for building mobile and desktop web applications",
    category: "Frontend",
    language: "TypeScript",
    stars: "93k",
    downloads: "3.8M/week",
    tags: ["Enterprise", "TypeScript", "CLI"],
    logo: "/placeholder.svg?height=60&width=60",
    featured: false,
  },
  {
    id: 5,
    name: "Express.js",
    description: "Fast, unopinionated, minimalist web framework for Node.js",
    category: "Backend",
    language: "JavaScript",
    stars: "64k",
    downloads: "25M/week",
    tags: ["Minimal", "Flexible", "Middleware"],
    logo: "/placeholder.svg?height=60&width=60",
    featured: false,
  },
  {
    id: 6,
    name: "Django",
    description: "High-level Python web framework",
    category: "Backend",
    language: "Python",
    stars: "76k",
    downloads: "1.2M/month",
    tags: ["Batteries included", "ORM", "Admin"],
    logo: "/placeholder.svg?height=60&width=60",
    featured: false,
  },
]

export default function FrameworksPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [languageFilter, setLanguageFilter] = useState("all")

  const filteredFrameworks = frameworks.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      framework.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || framework.category === categoryFilter
    const matchesLanguage = languageFilter === "all" || framework.language === languageFilter

    return matchesSearch && matchesCategory && matchesLanguage
  })

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Frameworks
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Discover and explore popular development frameworks
            </p>
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
              placeholder="Search frameworks..."
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
                <SelectItem value="Frontend">Frontend</SelectItem>
                <SelectItem value="Backend">Backend</SelectItem>
                <SelectItem value="Full Stack">Full Stack</SelectItem>
              </SelectContent>
            </Select>

            <Select value={languageFilter} onValueChange={setLanguageFilter}>
              <SelectTrigger className="w-48 bg-white dark:bg-gray-900/50 border-0 shadow-lg">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Languages</SelectItem>
                <SelectItem value="JavaScript">JavaScript</SelectItem>
                <SelectItem value="TypeScript">TypeScript</SelectItem>
                <SelectItem value="Python">Python</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Frameworks Grid */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredFrameworks.map((framework) => (
            <Card
              key={framework.id}
              className={cn(
                "group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white dark:bg-gray-900/50 backdrop-blur-sm relative overflow-hidden",
                framework.featured && "ring-2 ring-blue-500/20 dark:ring-blue-400/20",
              )}
            >
              {framework.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                </div>
              )}

              <CardHeader className="pb-4">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Image src={framework.logo || "/placeholder.svg"} alt={framework.name} className="w-10 h-10" width={40} height={40} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-xl text-gray-900 dark:text-gray-100">{framework.name}</h3>
                      <Badge
                        variant="secondary"
                        className={cn(
                          "font-medium",
                          framework.category === "Frontend" &&
                            "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
                          framework.category === "Backend" &&
                            "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
                          framework.category === "Full Stack" &&
                            "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
                        )}
                      >
                        {framework.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{framework.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {framework.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-6">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded-lg">
                      <Star className="w-4 h-4 mr-1 text-yellow-500" />
                      {framework.stars}
                    </span>
                    <span className="flex items-center bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-lg">
                      <Download className="w-4 h-4 mr-1 text-green-500" />
                      {framework.downloads}
                    </span>
                  </div>
                  <Badge variant="outline" className="bg-gray-50 dark:bg-gray-800">
                    {framework.language}
                  </Badge>
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 shadow-lg"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Docs
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-0 shadow-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <Star className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredFrameworks.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <p className="text-gray-500 text-lg">No frameworks found matching your criteria.</p>
            <p className="text-gray-400 text-sm mt-2">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  )
}
