import Image from 'next/image'
import Link from 'next/link'

import IconDiscord from '@/components/icons/icon-discord'
import IconFacebook from '@/components/icons/icon-facebook'
import IconInstagram from '@/components/icons/icon-instagram'
import IconTelegram from '@/components/icons/icon-telegram'
import IconTiktok from '@/components/icons/icon-tiktok'
import IconTwitter from '@/components/icons/icon-twitter'
import IconWhatsApp from '@/components/icons/icon-whatsapp'
import IconYoutube from '@/components/icons/icon-youtube'
import { Section } from '@/components/ui/section'

export const collabApps = [
  {
    id: '0',
    title: 'X',
    icon: IconTwitter,
  },
  {
    id: '1',
    title: 'Facebook',
    icon: IconFacebook,
  },
  {
    id: '2',
    title: 'Instagram',
    icon: IconInstagram,
  },
  {
    id: '3',
    title: 'WhatsApp',
    icon: IconWhatsApp,
  },
  {
    id: '4',
    title: 'Telegram',
    icon: IconTelegram,
  },
  {
    id: '5',
    title: 'TikTok',
    icon: IconTiktok,
  },
  {
    id: '6',
    title: 'Youtube',
    icon: IconYoutube,
  },
  {
    id: '7',
    title: 'Discord',
    icon: IconDiscord,
  },
]

export function Social() {
  return (
    <Section>
      <div className="mb-16 flex flex-col items-center">
        <span></span>
        <h2 className="mb-4 text-center text-5xl font-black tracking-tight">
          Siga a <span className="text-lightning-yellow-400">missão</span> nas
          redes sociais
        </h2>
        <p className="max-w-3xl text-balance text-center text-lg text-muted-foreground">
          Acompanhe a Missão nas redes sociais e fique por dentro de mutirões de
          coleta e outras ações!
        </p>
      </div>
      <div className="border-n-6 scale:75 relative left-1/2 flex aspect-square w-[22rem] -translate-x-1/2 rounded-full border md:scale-100">
        <div className="border-n-6 m-auto flex aspect-square w-60 rounded-full border">
          <div className="bg-conic-gradient m-auto aspect-square w-[6rem] rounded-full p-[0.2rem]">
            <div className="bg-n-8 flex h-full w-full items-center justify-center rounded-full">
              <Image
                src="/logos/ounce.svg"
                width={48}
                height={48}
                alt="Logo Missão"
              />
            </div>
          </div>
        </div>

        <ul className="">
          {collabApps.map((app, index) => (
            <li
              key={app.id}
              className={` absolute left-1/2 top-0 -ml-[1.6rem] h-1/2 origin-bottom rotate-${
                index * 45
              }`}
            >
              <Link
                href="/"
                className={`bg-n-7 border-n-1/15 group relative -top-[1.6rem] flex h-[3.2rem] w-[3.2rem] rounded-xl border transition-colors duration-150 hover:border-lightning-yellow-400 -rotate-${
                  index * 45
                }`}
              >
                <app.icon className="m-auto size-5 text-muted-foreground transition-colors duration-150 group-hover:text-lightning-yellow-400" />
                <span className="sr-only">Link para {app.title}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* <LeftCurve />
      <RightCurve /> */}
      </div>
    </Section>
  )
}
