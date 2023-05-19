import MainNav from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { buttonVariants } from "@/components/ui/button"
import { marketingConfig } from "@/config/marketing"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Link } from "lucide-react"
import { homepageNavs } from '@/config/homepage';

interface IndexPageProps {
    children: React.ReactNode
  }
  


export default async function IndexPage({children}:IndexPageProps) {
  const navKey = homepageNavs.mainNav.map(item => item.title).join();
 
    return (
        <div className="flex min-h-screen flex-col">
        <header className="bg-primary/80 container sticky top-0 z-40 text-decendFg backdrop-blur-sm">
          <div className="flex h-20 items-center justify-between py-6">
            <MainNav items={marketingConfig.mainNav} key={navKey} />
            <nav>
              <Link
                href="/login"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "sm" }),
                  "px-4"
                )}
              >
                Login
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <SiteFooter links={siteConfig.links}  />
      </div>
    )
  }
  