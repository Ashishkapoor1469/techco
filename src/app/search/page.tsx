"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Users, Code, Package, Star, Download, ExternalLink } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const searchResults = {
  people: [
    {
      id: 1,
      name: "Sarah Chen",
      username: "@sarahchen",
      bio: "Frontend Developer at Google. React & Vue enthusiast.",
      avatar: "/placeholder.svg?height=40&width=40",
      followers: "12.5k",
      following: "892",
      verified: true,
    },
    {
      id: 2,
      name: "Alex Rodriguez",
      username: "@alexdev",
      bio: "Full Stack Engineer. Building the future with Next.js.",
      avatar: "/placeholder.svg?height=40&width=40",
      followers: "8.2k",
      following: "1.2k",
      verified: false,
    },
    {
      id: 3,
      name: "Emily Johnson",
      username: "@emilyj",
      bio: "Backend Developer. Python & Node.js specialist.",
      avatar: "/placeholder.svg?height=40&width=40",
      followers: "5.8k",
      following: "654",
      verified: true,
    },
  ],
  frameworks: [
    {
      id: 1,
      name: "React",
      description: "A JavaScript library for building user interfaces",
      category: "Frontend",
      stars: "220k",
      downloads: "20M/week",
    },
    {
      id: 2,
      name: "Vue.js",
      description: "The Progressive JavaScript Framework",
      category: "Frontend",
      stars: "206k",
      downloads: "4.1M/week",
    },
    {
      id: 3,
      name: "Angular",
      description: "Platform for building mobile and desktop web applications",
      category: "Frontend",
      stars: "93k",
      downloads: "3.8M/week",
    },
  ],
  packages: [
    {
      id: 1,
      name: "lodash",
      description: "A modern JavaScript utility library",
      category: "Utilities",
      stars: "58k",
      downloads: "45M/week",
    },
    {
      id: 2,
      name: "axios",
      description: "Promise based HTTP client",
      category: "HTTP",
      stars: "104k",
      downloads: "28M/week",
    },
    {
      id: 3,
      name: "moment",
      description: "Parse, validate, manipulate, and display dates",
      category: "Date/Time",
      stars: "47k",
      downloads: "12M/week",
    },
  ],
}

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("people")

  const filterResults = (items: any[]) => {
    if (!searchTerm) return items
    return items.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.bio && item.bio.toLowerCase().includes(searchTerm.toLowerCase())),
    )
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Search
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">Discover people, frameworks, and packages</p>
          </div>
          <ThemeToggle />
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4">
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-6 h-6" />
          <Input
            placeholder="Search for people, frameworks, or packages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 h-14 text-lg shadow-lg border-0 bg-white dark:bg-gray-900/50"
          />
        </div>

        {/* Search Results Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-white dark:bg-gray-900 shadow-lg border-0 p-1">
            <TabsTrigger
              value="people"
              className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white rounded-lg flex items-center justify-center gap-2 py-2 font-medium transition-all duration-200"
            >
              <Users className="w-4 h-4" />
              People
            </TabsTrigger>
            <TabsTrigger
              value="frameworks"
              className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white rounded-lg flex items-center justify-center gap-2 py-2 font-medium transition-all duration-200"
            >
              <Code className="w-4 h-4" />
              Frameworks
            </TabsTrigger>
            <TabsTrigger
              value="packages"
              className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white rounded-lg flex items-center justify-center gap-2 py-2 font-medium transition-all duration-200"
            >
              <Package className="w-4 h-4" />
              Packages
            </TabsTrigger>
          </TabsList>

          <TabsContent value="people" className="space-y-4 mt-6">
            {filterResults(searchResults.people).map((person) => (
              <Card
                key={person.id}
                className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-gray-900/50"
              >
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-12 h-12 ring-2 ring-gray-100 dark:ring-gray-800">
                      <AvatarImage src={person.avatar || "/placeholder.svg"} alt={person.name} />
                      <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-semibold">
                        {person.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">{person.name}</h3>
                        {person.verified && <Badge className="bg-blue-500 text-white text-xs">Verified</Badge>}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{person.username}</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{person.bio}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                          <span>{person.followers} followers</span>
                          <span>{person.following} following</span>
                        </div>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg"
                        >
                          Follow
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="frameworks" className="space-y-4 mt-6">
            {filterResults(searchResults.frameworks).map((framework) => (
              <Card
                key={framework.id}
                className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-gray-900/50"
              >
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">{framework.name}</h3>
                        <Badge className="bg-blue-500/10 text-blue-700 border-blue-200 dark:bg-blue-500/20 dark:text-blue-300 dark:border-blue-800">
                          {framework.category}
                        </Badge>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">{framework.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded-lg">
                          <Star className="w-4 h-4 mr-1 text-yellow-500" />
                          {framework.stars}
                        </span>
                        <span className="flex items-center bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-lg">
                          <Download className="w-4 h-4 mr-1 text-green-500" />
                          {framework.downloads}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      <Button variant="outline" size="sm" className="border-0 shadow-lg bg-white dark:bg-gray-800">
                        <Star className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="packages" className="space-y-4 mt-6">
            {filterResults(searchResults.packages).map((pkg) => (
              <Card
                key={pkg.id}
                className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-gray-900/50"
              >
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">{pkg.name}</h3>
                        <Badge className="bg-green-500/10 text-green-700 border-green-200 dark:bg-green-500/20 dark:text-green-300 dark:border-green-800">
                          {pkg.category}
                        </Badge>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">{pkg.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded-lg">
                          <Star className="w-4 h-4 mr-1 text-yellow-500" />
                          {pkg.stars}
                        </span>
                        <span className="flex items-center bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-lg">
                          <Download className="w-4 h-4 mr-1 text-green-500" />
                          {pkg.downloads}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white shadow-lg"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        NPM
                      </Button>
                      <Button variant="outline" size="sm" className="border-0 shadow-lg bg-white dark:bg-gray-800">
                        <Star className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        {/* No Results */}
        {searchTerm && (
          <>
            {activeTab === "people" && filterResults(searchResults.people).length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-gray-400" />
                </div>
                <p className="text-gray-500 text-lg">No people found matching `{searchTerm}`</p>
                <p className="text-gray-400 text-sm mt-2">Try adjusting your search terms</p>
              </div>
            )}
            {activeTab === "frameworks" && filterResults(searchResults.frameworks).length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-12 h-12 text-gray-400" />
                </div>
                <p className="text-gray-500 text-lg">No frameworks found matching `{searchTerm}`</p>
                <p className="text-gray-400 text-sm mt-2">Try adjusting your search terms</p>
              </div>
            )}
            {activeTab === "packages" && filterResults(searchResults.packages).length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-12 h-12 text-gray-400" />
                </div>
                <p className="text-gray-500 text-lg">No packages found matching `{searchTerm}`</p>
                <p className="text-gray-400 text-sm mt-2">Try adjusting your search terms</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
