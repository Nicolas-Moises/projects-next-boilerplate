import Image from 'next/image'
import Link from 'next/link'

import IconAlert from '@/components/icons/icon-alert'
import IconPdfExport from '@/components/icons/icon-pdf-export'
import IconPdfImport from '@/components/icons/icon-pdf-import'
import { Button } from '@/components/ui/button'
import { Section } from '@/components/ui/section'

export function SendDocuments() {
  return (
    <Section id="support">
      <div className="mb-16 flex flex-col items-center">
        <span></span>
        <h2 className="mb-4 text-center text-5xl font-black tracking-tight">
          Envie seu <span className="text-lightning-yellow-400">apoio</span>
        </h2>
        <p className="max-w-3xl text-balance text-center text-lg text-muted-foreground">
          Para enviar sua assinatura em apoio ao partido, siga estas etapas
          abaixo
        </p>
      </div>

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        <div
          className={`p-0.25 "bg-conic-gradient" rounded-[2.5rem] md:flex even:md:translate-y-[7rem] `}
        >
          <div className="xl:p-15 relative overflow-hidden rounded-[2.4375rem] border border-border bg-popover p-8">
            <div className="absolute left-0 top-0 max-w-full">
              <Image
                className="w-full opacity-10"
                src="/imgs/ounce-pattern.png"
                width={550}
                height={550}
                alt="Grid"
              />
            </div>
            <div className="z-1 relative">
              <div className="mb-4 flex items-start gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lightning-yellow-400 font-semibold text-black">
                  1
                </span>
                <h4 className="flex-1 text-lg font-medium text-foreground">
                  Baixe e imprima a ficha de apoiamento (cada folha contém duas
                  fichas)
                </h4>
              </div>
              <div className="mb-3 flex items-center gap-3">
                <IconAlert className="size-5 text-muted-foreground" />
                <p className="flex-1 text-sm text-accent-foreground">
                  Todos os dados devem ser preenchidos, exceto o telefone, que é
                  opcional.
                </p>
              </div>

              <div className="mb-3 flex items-center gap-3">
                <IconAlert className="size-5 text-muted-foreground" />
                <p className="flex-1 text-sm text-accent-foreground">
                  Para descobrir o título de eleitor, zona do título e UF do
                  título, acesse partidomissao.com/consulta ou clique aqui.
                </p>
              </div>
              <Button variant="outline" className="mt-6 rounded-full" size="lg">
                <span>Baixar Ficha</span>
                <IconPdfExport className="ml-2 size-5" />
              </Button>
            </div>
          </div>
        </div>
        <div
          className={`p-0.25 "bg-conic-gradient" rounded-[2.5rem] md:flex even:md:translate-y-[7rem] `}
        >
          <div className="xl:p-15 relative overflow-hidden rounded-[2.4375rem] border border-border bg-popover p-8">
            <div className="absolute left-0 top-0 max-w-full">
              <Image
                className="w-full opacity-10"
                src="/imgs/ounce-pattern.png"
                width={550}
                height={550}
                alt="Grid"
              />
            </div>
            <div className="z-1 relative">
              <div className="mb-4 flex items-start gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lightning-yellow-400 font-semibold text-black">
                  2
                </span>
                <h4 className="flex-1 text-lg font-medium text-foreground">
                  Após preencher todas as fichas de apoio, envie os apoiamentos
                  para a caixa postal da Missão. Clique no botão “Enviar Ficha”
                  para encontrar o endereço da caixa postal mais próxima de
                  você.
                </h4>
              </div>
              <div className="mb-3 flex items-center gap-3">
                <IconAlert className="size-5 text-muted-foreground" />
                <p className="flex-1 text-sm text-accent-foreground">
                  O apoiamento deve ser feito em papel, não é possível enviar a
                  ficha digitalmente, digitalizada ou por e-mail.
                </p>
              </div>

              <Button variant="outline" className="mt-6 rounded-full" size="lg">
                <span>Enviar Ficha</span>
                <IconPdfImport className="ml-2 size-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 text-center text-sm text-muted-foreground">
        Qualquer dúvida, entre em contato pelo e-mail{' '}
        <Link className="underline hover:text-foreground" href="/">
          falecom@partidomissao.com
        </Link>
      </div>
    </Section>
  )
}
