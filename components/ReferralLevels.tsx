import { ReferralLevel } from '@/types'

interface ReferralLevelsProps {
  levels: ReferralLevel[]
}

export default function ReferralLevels({ levels }: ReferralLevelsProps) {
  if (!levels || levels.length === 0) {
    return null
  }

  return (
    <section id="referral" className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Referral & Ranking System</h2>
          <p className="text-foreground-muted text-lg max-w-3xl mx-auto">
            Level up your earnings through our tiered referral system. Higher levels unlock better ROI rates and exclusive bonuses.
          </p>
        </div>

        {/* Levels grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {levels.map((level) => (
            <div
              key={level.id}
              className={`glass-card rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300 ${
                level.metadata?.is_featured ? 'level-featured' : ''
              }`}
            >
              <div className="mb-4">
                <div className="text-lg font-bold text-primary mb-2">
                  {level.metadata?.level_name}
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  {level.metadata?.daily_roi_rate}
                </div>
                <div className="text-xs text-foreground-muted uppercase tracking-wide">
                  Daily ROI
                </div>
              </div>
              
              <div className="border-t border-card-border pt-4">
                <p className="text-foreground-muted text-sm leading-relaxed">
                  {level.metadata?.requirements}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}