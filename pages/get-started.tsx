import { type NextPage } from 'next'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, GraduationCap, Users, Video } from "lucide-react"

const GetStartedPage: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F4F4F4]">
      <header className="bg-white shadow-sm top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-center items-center">
          <Image
            src="/images/logo.jpg"
            alt="Pragmatix Learning Logo"
            width={200}
            height={50}
            className="h-24 w-auto"
            priority
          />
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-[#264B78] to-[#0D98B9] text-white py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-left">Pragmatix Pro</h1>
            <p className="text-xl mb-8 text-left">From self-paced learning on interview and resume tips, to one-to-one mentoring, mock interviews, resume reviews, porfolio and personal branding consultation, the following packages offer a wide array of services that will help you crack your dream job!</p>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Users, title: "One-to-One Coaching", description: "Personalized guidance to enhance your skills and career prospects." },
                { icon: Users, title: "One-to-One Coaching", description: "Personalized guidance to enhance your skills and career prospects." },
                { icon: Video, title: "E-Learning Modules", description: "Flexible, self-paced online courses to fit your schedule." },
                { icon: GraduationCap, title: "College Programs", description: "Comprehensive training programs for engineering colleges and business schools." },
                { icon: GraduationCap, title: "College Programs", description: "Comprehensive training programs for engineering colleges and business schools." },
                { icon: GraduationCap, title: "College Programs", description: "Comprehensive training programs for engineering colleges and business schools." },
              ].map((item, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-[#264B78]">
                      <item.icon className="mr-2 h-6 w-6" />
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#333333] mb-4">{item.description}</p>
                    <Button className="w-full bg-[#0D98B9] text-white hover:bg-[#264B78] transition-colors">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#264B78] text-white py-8">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <Image
            src="/images/logoblack.jpg"
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

export default GetStartedPage