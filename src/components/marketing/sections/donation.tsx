'use client'
import { CheckIcon } from '@radix-ui/react-icons'

import IconCopy from '@/components/icons/icon-copy'
import { Button } from '@/components/ui/button'
import { Section } from '@/components/ui/section'
import useCopyToClipboard from '@/hooks/use-copy-to-clipboard'

export function Donation() {
  const { copyToClipboard, isCopied } = useCopyToClipboard()
  return (
    <Section>
      <div className="flex flex-col items-center">
        <span></span>
        <h2 className="mb-4 text-center text-5xl font-black tracking-tight">
          Contamos com sua{' '}
          <span className="text-lightning-yellow-400">doação</span>
        </h2>
        <p className="max-w-3xl text-balance text-center text-lg text-muted-foreground">
          Para que a Missão seja cumprida, precisamos da sua ajuda. Doe qualquer
          valor via Pix!
        </p>

        <div className="mt-10 flex h-12 max-w-3xl items-center rounded-xl border border-border">
          <span className="px-4">pix@partidomissao.com</span>
          <Button
            className="h-full rounded-l-none rounded-r-xl"
            onClick={() => copyToClipboard('pix@partidomissao.com')}
          >
            {isCopied ? (
              <CheckIcon className="size-5 text-zinc-800" />
            ) : (
              <IconCopy className="size-5 text-zinc-800" />
            )}
            <span className="sr-only">Copiar pix</span>
          </Button>
        </div>
      </div>
    </Section>
  )
}
