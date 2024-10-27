import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, GraduationCap, Users, ArrowRight, CalendarCheck } from "lucide-react"
import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"

const LEARNING_SOLUTIONS = [
  {
    icon: Users,
    title: "Pragmatix Pro",
    description: "Self-paced learning, mock interviews, one-to-one coaching, resume reviews, portfolio consultation and a whole lot more.",
    color: "#06B6B6",
    link: "/pragmatix-pro"
  },
  {
    icon: CalendarCheck,
    title: "One-to-one Mentoring",
    description: "One-to-one mentoring sessions provided by our seasoned career coaches to help you navigate your journey to your first job and beyond.",
    color: "#06B6B6",
    link: "/One-to-one-mentoring"
  },
  {
    icon: GraduationCap,
    title: "College Programs",
    description: "For the last 10 years, we have been the numero uno placement-related training provider to a majority of engineering and management colleges in Kerala. ",
    color: "#06B6B6",
    link: "/College-programs"
  },
]

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F4F4F4]">
      <header className="bg-white shadow-sm top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-center items-center">
          <Image
            src="/images/logo.jpg" // Replace with your actual high-quality logo path
            alt="Pragmatix Learning Logo"
            width={200}
            height={50}
            className="h-32 w-auto"
            priority
          />
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#264B78] to-[#0D98B9] text-white py-18">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Let's get cracking (interviews)!
              </h1>
              <p className="text-xl mb-8">
                Pragmatix Pro - we will help you get your dream job. 
              </p>
              <Button asChild className="bg-[#F0C808] text-[#264B78] hover:bg-[#E85F5C] hover:text-white transition-colors text-xl px-20 py-6">
  <Link href="/pragmatix-pro">
    Shall we get started?
  </Link>
</Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/hero-image.jpeg" // Replace with your actual hero image path
                alt="Students learning"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-18 bg-white">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/learntransformachieve.jpeg" // Replace with your actual hero image path
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
                Pragmatix Pro is our answer to the biggest challenge that fresh engineering and MBA graduates face as they enter the job market for the first time - lack of personalised guidance and mentoring! 
              </p>
              <p className="text-lg text-[#333333] mb-4">
                Through the various packages that we offer, we will you identify gaps that are impeding your growth journey, and get you all set to have a crack at your dream job.
              </p>
              <p className="text-lg text-[#333333] mb-4">
                And did we tell you that you can get a free 30 minute consultation? Get a taste of what we have to offer before taking a decision.
              </p>
              <Button asChild className="bg-[#E85F5C] text-[#264B78] hover:bg-[#F0C808] hover:text-white transition-colors text-xl px-20 py-6">
  <Link href="/pragmatix-pro">
    Explore Pragmatix Pro!
  </Link>
</Button>
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
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex-grow">
                    <item.icon className="w-12 h-12 mb-4" style={{ color: item.color }} />
                    <h3 className="text-xl font-semibold mb-2 text-[#264B78]">{item.title}</h3>
                    <p className="text-[#333333] mb-4">{item.description}</p>
                  </div>
                  {item.link && (
                    <Link href={item.link} passHref legacyBehavior>
                      <a className="inline-block w-full mt-4">
                        <Button className="w-full text-[#0D98B9] hover:text-[#264B78] transition-colors inline-flex items-center justify-center">
                          Learn more <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </Link>
                  )}
                </CardContent>
              </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0D98B9] text-white py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-semibold mb-8">
              Get a headstart to your career with one-to-one mentoring!
            </h2>
            <p className="text-2xl mb-12 max-w-2xl mx-auto">
              Allow our panel of industry experts and seasoned career coaches to help you achieve your professional goals.
            </p>
            <Button asChild className="bg-[#F0C808] text-[#264B78] hover:bg-[#E85F5C] hover:text-white transition-colors text-2xl px-8 py-3">
  <Link href="/One-to-one-mentoring">
    Get started today!
  </Link>
</Button>
          </div>
        </section>
         {/* About Pragmatix Learning Section */}
         <section className="bg-white py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-6xl font-semibold text-center mb-8 text-[#264B78]">
              Pragmatix Learning
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <Image
                  src="/images/logo.jpg"
                  alt="Pragmatix Learning Team"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-lg text-[#333333] mb-4">
                  Pragmatix Learning was founded in 2015 with a vision to bridge the gap between academic education and industry requirements. Our journey began with a small team of passionate educators and industry experts who believed in the power of practical, hands-on learning.
                </p>
                <p className="text-lg text-[#333333] mb-4">
                If you run in placement circles of colleges in Kerala, you’ve surely heard of PRAGMATIX. Over the past few years, PRAGMATIX has become one of Kerala’s leading training and development service providers for educational institutions.
                </p>
                <p className="text-lg text-[#333333]">
                Today, we are as bustling as ever, with a lot more up our sleeves, than just placement training in colleges. Right from organizing summer camps for elementary school students to providing staffing solutions and workshops on artificial intelligence for the corporate workforce, we’ve got it all covered! 
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#264B78] text-white py-8">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <Image
            src="/images/logoblack.jpg" // Replace with your actual high-quality logo path
            alt="Pragmatix Learning Logo"
            width={150}
            height={40}
            className="h-32 w-auto mb-4"
          />
          <p className="text-med mb-2">3 lakh and counting - the number of candidates who have benefited from our programs.</p>
          <p className="text-xs">&copy; {new Date().getFullYear()} Pragmatix Learning. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}