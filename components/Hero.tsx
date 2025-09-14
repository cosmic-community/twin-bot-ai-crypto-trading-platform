import { SiteSettings } from '@/types'

interface HeroProps {
  siteSettings: SiteSettings | null
}

export default function Hero({ siteSettings }: HeroProps) {
  const headline = siteSettings?.metadata?.hero_headline || 'SMART CRYPTO INVESTING BOT WITH GUARANTEED TRANSPARENCY'
  const subheadline = siteSettings?.metadata?.hero_subheadline || 'Daily ROI up to 1.2%, referral rewards, and secure withdrawals — powered by blockchain automation.'
  const primaryCtaText = siteSettings?.metadata?.primary_cta_text || 'Start Investing'
  const secondaryCtaText = siteSettings?.metadata?.secondary_cta_text || 'Learn More'

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-hero-gradient"></div>
      <div className="absolute inset-0 bg-aurora-gradient"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            {headline}
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-foreground-muted mb-12 max-w-4xl mx-auto leading-relaxed">
            {subheadline}
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <button className="glow-button px-8 py-4 rounded-full font-semibold text-black text-lg w-full sm:w-auto">
              {primaryCtaText}
            </button>
            <button className="outline-button px-8 py-4 rounded-full font-semibold text-lg w-full sm:w-auto">
              {secondaryCtaText}
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}