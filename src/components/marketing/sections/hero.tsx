import Image from 'next/image'

import { ButtonBackgroundShine } from '@/components/ui/button'
import { Section } from '@/components/ui/section'

export const Hero = () => {
  return (
    <Section className="relative flex items-center justify-between gap-6 overflow-clip px-0 py-0">
      <div className="z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 divide-y divide-dashed divide-border px-4 md:grid-cols-[1fr_380px] md:divide-x md:divide-y-0 md:px-0">
        <div className="relative z-10 max-w-4xl space-y-5 px-8 py-28">
          <Image
            src="/logos/ounce-black.svg"
            width={125}
            height={148}
            alt="Missão"
            className="invert"
          />

          <h1 className="text-left text-5xl font-black tracking-tighter text-foreground md:text-7xl">
            A <span className="text-lightning-yellow-400">missão</span> de criar
            o<br className="hidden lg:inline-flex" /> melhor partido do Brasil
          </h1>
          <p className="mb-8 max-w-3xl text-balance text-lg text-muted-foreground">
            Embarque conosco nessa missão e deixe sua marca na história para
            todas as futuras gerações.
          </p>
          <ButtonBackgroundShine className=" px-4 py-3 text-lg tracking-tight">
            Seja um coletor
          </ButtonBackgroundShine>
        </div>

        <div className="bg-ounce relative flex items-center justify-center bg-cover">
          <div className="flex flex-col gap-1 px-6 py-28">
            <div></div>
            <span className="block">Faltam</span>
            <strong className="whitespace-nowrap text-7xl font-semibold tracking-tighter">
              547.043{' '}
            </strong>
            <span className="self-end text-base font-normal tracking-normal">
              apoios válidos
            </span>
          </div>
        </div>
      </div>
    </Section>
  )
}
