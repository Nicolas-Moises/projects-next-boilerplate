'use client'

import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { motion, useAnimate } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { Button, ButtonBackgroundShine } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { siteConfig } from '@/config/site-config'
import { useScroll } from '@/hooks/use-scroll'
import { cn } from '@/lib/utils'

const config = siteConfig.header

export const Header = () => {
  const { scrolled } = useScroll()
  const [refLogo, animate] = useAnimate()
  const [refCTA] = useAnimate()

  React.useEffect(() => {
    animate(
      refLogo.current,
      {
        x: scrolled ? -35 : -100,
        opacity: scrolled ? 1 : 0,
      },
      { duration: 0.3 },
    )
    animate(
      refCTA.current,
      {
        x: scrolled ? 120 : 180,
        opacity: scrolled ? 1 : 0,
      },
      { duration: 0.3 },
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrolled])

  return (
    <header className="pointer-events-none sticky top-0 z-50 w-full border-b border-dashed border-border backdrop-blur-sm duration-500 animate-in fade-in slide-in-from-top-2">
      <div className="container relative flex h-16 items-center justify-between border-x border-dashed border-border px-4 sm:px-8">
        <div
          className={cn('pointer-events-auto', {
            'pointer-events-none': scrolled,
          })}
        >
          <Link
            href="/"
            className={cn(
              'mr-8 flex items-center space-x-2 transition-all duration-300 hover:opacity-80',
              {
                'translate-x-[-10px] opacity-0 hover:opacity-0': scrolled,
              },
            )}
            suppressHydrationWarning
          >
            <Image
              src={siteConfig.global.logo}
              alt={siteConfig.global.name}
              loading="lazy"
              width={20}
              height={20}
            />
            <span className="inline-block font-bold">
              <Image
                src={siteConfig.global.logoMin}
                alt={siteConfig.global.name}
                loading="lazy"
                width={75}
                height={20}
              />
            </span>
          </Link>
        </div>
        <div
          className={cn(
            'pointer-events-auto absolute left-1/2 top-1/2 mr-8 hidden translate-x-[-50%] translate-y-[-50%] rounded-full bg-gray-300/0 px-3 py-[6px] transition-all duration-300 lg:block',
            {
              'border border-border bg-card shadow-md': scrolled,
            },
          )}
        >
          <div className="overflow-hidden">
            <div
              suppressHydrationWarning
              className={cn('relative transition-all duration-300', {
                'ml-[40px] mr-[120px]': scrolled,
              })}
            >
              <motion.div
                ref={refLogo}
                className="absolute"
                initial={{ x: -100, y: 4, opacity: 0 }}
              >
                <Link href="/">
                  <Image
                    src={siteConfig.global.logo}
                    alt={siteConfig.global.name}
                    loading="lazy"
                    width={20}
                    height={20}
                    className="aspect-[auto 30 / 30] object-cover"
                  />
                </Link>
              </motion.div>
              <Nav items={config.nav.links} />
              <motion.div
                ref={refCTA}
                className="absolute right-0"
                initial={{ x: 0, y: -28, opacity: 0 }}
              >
                <Button
                  className="h-7 rounded-full px-3 text-xs"
                  variant="outline"
                >
                  {config.cta.primary.label}
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
        <div
          suppressHydrationWarning
          className={cn(
            'pointer-events-auto hidden items-center space-x-4 transition-all duration-300 lg:flex',
            {
              'pointer-events-none translate-x-[10px] opacity-0': scrolled,
            },
          )}
        >
          <div className="flex items-center space-x-2">
            <Button className="h-7 rounded-full px-3 text-xs" variant="outline">
              {config.cta.primary.label}
            </Button>
          </div>
        </div>
        <MobileNav />
      </div>
    </header>
  )
}

interface NavItem {
  label: string
  href?: string
  disabled?: boolean
  external?: boolean
}

interface NavProps {
  items: NavItem[]
  direction?: 'column' | 'row'
  onNavItemClick?: () => void
}

const Nav = (props: NavProps) => {
  const { items, direction = 'row', onNavItemClick } = props
  const pathname = usePathname()

  return (
    <nav
      className={cn('flex items-center gap-0 sm:gap-2', {
        'flex-col gap-2': direction === 'column',
      })}
    >
      {items?.map(
        (item, index) =>
          item.href && (
            <Link
              key={index}
              href={item.href}
              className={cn(
                'w-full whitespace-nowrap rounded-full px-4 py-1 text-center text-sm font-medium transition-all hover:text-foreground',
                item.disabled && 'cursor-not-allowed opacity-80',
                item.href === pathname
                  ? 'bg-foreground/10 text-foreground'
                  : 'text-foreground/80',
              )}
              onClick={onNavItemClick}
            >
              {item.label}
            </Link>
          ),
      )}
    </nav>
  )
}

const MobileNav = () => {
  const [open, setOpen] = React.useState<boolean>(false)
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="pointer-events-auto lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button size="icon">
            <HamburgerMenuIcon />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className=" w-56 bg-card pt-12 ">
          <div className="flex flex-col space-y-8">
            <Link
              href="/"
              className="flex justify-center transition-all hover:opacity-80"
              onClick={handleClose}
            >
              <Image
                src={siteConfig.global.logo}
                alt={siteConfig.global.name}
                loading="lazy"
                width={30}
                height={30}
                className="aspect-[auto 30 / 30] object-cover"
              />
            </Link>
            <Nav
              items={config.nav.links}
              direction="column"
              onNavItemClick={handleClose}
            />
            <ButtonBackgroundShine size="sm">
              {config.cta.primary.label}
            </ButtonBackgroundShine>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
