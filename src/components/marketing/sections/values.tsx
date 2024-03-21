import { Section } from '@/components/ui/section'

const values = [
  {
    id: 0,
    description: 'Fim dos privilégios do funcionalismo',
  },
  {
    id: 1,
    description: 'Endurecimento das leis penais',
  },
  {
    id: 2,
    description: 'Industrialização do Nordeste',
  },
  {
    id: 3,
    description: 'Guerra contra o tráfico de drogas',
  },
  {
    id: 4,
    description: 'Combate à corrupção',
  },
  {
    id: 5,
    description: 'Respeito à responsabilidade fiscal',
  },
]

export function Values() {
  return (
    <Section id="value">
      <div className="mb-16 flex flex-col items-center">
        <span></span>
        <h2 className="mb-4 text-center text-5xl font-black tracking-tight">
          <span className="text-lightning-yellow-400">Valores</span> que
          catalizam
          <br className="hidden md:inline-flex" /> nossos esforços
        </h2>
      </div>
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3">
        {values.map((value) => (
          <div
            key={value.id}
            className="flex items-center justify-center rounded-2xl border border-border p-8 text-lg font-medium hover:bg-muted"
          >
            {value.description}
          </div>
        ))}
      </div>
    </Section>
  )
}
