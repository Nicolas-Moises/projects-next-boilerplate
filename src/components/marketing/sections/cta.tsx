import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Section } from '@/components/ui/section'

export function Cta() {
  return (
    <Section>
      <div className="flex flex-col items-start gap-4 rounded-2xl bg-lightning-yellow-400 p-8 md:items-center lg:flex-row">
        <Image
          src="/logos/ounce-black.svg"
          width={125}
          height={148}
          alt="Missão"
        />
        <span className="max-w-3xl flex-1 font-medium text-black">
          Para construir um partido político no Brasil é necessário a coleta de
          547.043 assinaturas de apoio. Você pode ajudar a construir a Missão
          coletando assinaturas ou doando para ajudar a bancar cada vez mais
          coletores.
        </span>
        <Button className="ml-auto rounded-full" variant="secondary">
          Seja um coletor
        </Button>
      </div>
    </Section>
  )
}
