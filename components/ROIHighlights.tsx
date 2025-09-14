import { ROIHighlight } from '@/types'

interface ROIHighlightsProps {
  highlights: ROIHighlight[]
}

export default function ROIHighlights({ highlights }: ROIHighlightsProps) {
  if (!highlights || highlights.length === 0) {
    return null
  }

  return (
    <section id="roi" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">ROI & Investment Highlights</h2>
          <p className="text-foreground-muted text-lg max-w-3xl mx-auto">
            Discover the key benefits and features that make Twin Bot the perfect choice for your crypto investment journey.
          </p>
        </div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight) => (
            <div
              key={highlight.id}
              className="glass-card rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">
                {highlight.metadata?.icon && (
                  <div className="text-4xl mb-2">{highlight.metadata.icon}</div>
                )}
                <h3 className="text-xl font-bold text-white mb-2">
                  {highlight.metadata?.feature_title || highlight.title}
                </h3>
                <div className="text-2xl font-bold gradient-text mb-2">
                  {highlight.metadata?.feature_value}
                </div>
              </div>
              <p className="text-foreground-muted text-sm leading-relaxed">
                {highlight.metadata?.feature_description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}