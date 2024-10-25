import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, GraduationCap, Users, Video, ArrowRight } from "lucide-react"
import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"

const LEARNING_SOLUTIONS = [
  {
    icon: Users,
    title: "One-to-One Coaching",
    description: "Personalized guidance to enhance your skills and career prospects.",
    color: "#0D98B9",
  },
  {
    icon: Video,
    title: "E-Learning Modules",
    description: "Flexible, self-paced online courses to fit your schedule.",
    color: "#06B6B6",
  },
  {
    icon: GraduationCap,
    title: "College Programs",
    description: "Comprehensive training programs for engineering colleges and business schools.",
    color: "#3A6EA5",
  },
]

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F4F4F4]">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-center items-center">
          <Image
            src="/images/high-quality-logo.png" // Replace with your actual high-quality logo path
            alt="Pragmatix Learning Logo"
            width={200}
            height={50}
            className="h-12 w-auto"
            priority
          />
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#264B78] to-[#0D98B9] text-white py-24">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Let's get cracking (interviews)!
              </h1>
              <p className="text-xl mb-8">
                We will help you get your dream job.
              </p>
              <Link href="/get-started" passHref legacyBehavior>
                <Button as="a" className="bg-[#F0C808] text-[#264B78] hover:bg-[#E85F5C] hover:text-white transition-colors text-lg px-8 py-3">
                  Shall we get started?
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/hero-image.jpg" // Replace with your actual hero image path
                alt="Students learning"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-image.jpg" // Replace with your actual hero image path
                alt="Students learning"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl object-cover"
              />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-semibold mb-4 text-[#264B78]">Learn. Transform. Achieve.</h2>
              <p className="text-lg text-[#333333] mb-4">
                At Pragmatix Learning, we believe in a hands-on, practical approach to learning. Our video introduces you to our unique methodology that has helped thousands of students achieve their career goals.
              </p>
              <p className="text-lg text-[#333333]">
                Watch to discover how we can help you transform your skills and boost your employability in today's competitive job market.
              </p>
            </div>
          </div>
        </section>

        {/* Learning Solutions Section */}
        <section className="py-24 bg-[#F4F4F4]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-16 text-[#264B78]">
              The learning programs that we offer.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {LEARNING_SOLUTIONS.map((item, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <item.icon className="w-12 h-12 mb-4" style={{ color: item.color }} />
                    <h3 className="text-xl font-semibold mb-2 text-[#264B78]">{item.title}</h3>
                    <p className="text-[#333333] mb-4">{item.description}</p>
                    <a
                      href="#"
                      className="text-[#0D98B9] hover:text-[#264B78] transition-colors inline-flex items-center"
                    >
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0D98B9] text-white py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold mb-8">
              Get a headstart to your career with Pragmatix Learning
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Join our community of learners and achieve your professional goals with our
              industry-leading programs and expert guidance.
            </p>
            <Link href="/get-started" passHref>
              <Button className="bg-[#F0C808] text-[#264B78] hover:bg-[#E85F5C] hover:text-white transition-colors text-lg px-8 py-3">
                Get started today!
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#264B78] text-white py-8">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <Image
            src="/images/high-quality-logo.png" // Replace with your actual high-quality logo path
            alt="Pragmatix Learning Logo"
            width={150}
            height={40}
            className="h-8 w-auto mb-4"
          />
          <p className="text-sm mb-2">3 lakh and counting - the number of candidates who have benefited from our programs.</p>
          <p className="text-xs">&copy; {new Date().getFullYear()} Pragmatix Learning. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}