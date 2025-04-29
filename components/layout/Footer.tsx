import Link from "next/link";
import { cn } from "@/lib/utils";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/public/images/logo.png";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/20">
      <div className="container px-4 py-12 md:py-24 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Studio Information */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-semibold tracking-tight flex items-center gap-2">
            <Image src={logo} alt="HT-Architecte" width={50} height={50} />

            HT-<span className="text-primary">Architecte</span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Creating innovative architectural solutions that reflect the essence of
              modern living and working environments.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="outline" aria-label="LinkedIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Button>
              <Button size="icon" variant="outline" aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Button>
              <Button size="icon" variant="outline" aria-label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                <p className="text-sm">
                  Bloc 4, AIT MELLOUL Bureau N° 02 Imm . <br />
                  ALHYANE, N° 01 Av. Hassan II, Aït Melloul 86153
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <p className="text-sm">+212 655-555-123</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <p className="text-sm">architecteht@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-1 gap-3">
              <Link href="/portfolio" className="text-sm hover:text-primary">
                Portfolio
              </Link>
              <Link href="/services" className="text-sm hover:text-primary">
                Services
              </Link>
              <Link href="/about" className="text-sm hover:text-primary">
                About
              </Link>
              <Link href="/contact" className="text-sm hover:text-primary">
                Contact
              </Link>
              <Link href="/careers" className="text-sm hover:text-primary">
                Careers
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} HT-Architecte. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}