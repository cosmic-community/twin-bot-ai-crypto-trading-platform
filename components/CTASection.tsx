import { SiteSettings } from '@/types'

interface CTASectionProps {
  siteSettings: SiteSettings | null
}

export default function CTASection({ siteSettings }: CTASectionProps) {
  const headline = siteSettings?.metadata?.cta_section_headline || 'Ready to maximize your crypto investments?'
  const description = siteSettings?.metadata?.cta_section_description || 'Join thousands of investors who are already earning consistent returns with our AI-powered trading platform. Start your journey to financial freedom today.'
  const primaryCtaText = siteSettings?.metadata?.primary_cta_text || 'Start Investing'

  return (
    <section className="py-20 bg-background-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {headline}
          </h2>
          
          <p className="text-lg md:text-xl text-foreground-muted mb-12 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <button className="glow-button px-8 py-4 rounded-full font-semibold text-black text-lg w-full sm:w-auto">
              {primaryCtaText} in Twin Bot
            </button>
            <button className="outline-button px-8 py-4 rounded-full font-semibold text-lg w-full sm:w-auto">
              Explore Twin Bot Docs
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}