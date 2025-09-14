import { BonusTier } from '@/types'

interface BonusTiersProps {
  tiers: BonusTier[]
}

export default function BonusTiers({ tiers }: BonusTiersProps) {
  if (!tiers || tiers.length === 0) {
    return null
  }

  // Filter for L5-L9 bonus tiers
  const bonusTiers = tiers.filter(tier => 
    tier.metadata?.level_number && tier.metadata.level_number >= 5
  )

  if (bonusTiers.length === 0) {
    return null
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Exclusive Bonuses (L5 – L9)</h2>
          <p className="text-foreground-muted text-lg max-w-3xl mx-auto">
            Unlock premium rewards as you reach higher levels. Each bonus tier offers substantial monthly rewards.
          </p>
        </div>

        {/* Bonus tiers grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {bonusTiers.map((tier) => (
            <div
              key={tier.id}
              className="glass-card rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">
                <div className="text-lg font-bold text-primary mb-2">
                  {tier.metadata?.level}
                </div>
                <div className="text-3xl font-bold gradient-text">
                  {tier.metadata?.bonus_amount}
                </div>
              </div>
              
              {tier.metadata?.terms_note && (
                <div className="border-t border-card-border pt-4">
                  <div 
                    className="text-foreground-muted text-xs leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: tier.metadata.terms_note }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Terms note */}
        <div className="text-center">
          <div className="bg-card rounded-lg p-6 max-w-4xl mx-auto">
            <p className="text-foreground-muted text-sm leading-relaxed">
              <strong>Note:</strong> To claim all bonuses, the returns should not have crossed 2× returns. 
              If anybody crossed 2× returns and available the bonus is un-met, they should top-up or 
              re-invest within 24h; otherwise the commission and bonuses will be flushed to admin.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}