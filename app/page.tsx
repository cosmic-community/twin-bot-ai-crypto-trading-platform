import { getHomepageData } from '@/lib/cosmic'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import CryptoPrices from '@/components/CryptoPrices'
import ROIHighlights from '@/components/ROIHighlights'
import ReferralLevels from '@/components/ReferralLevels'
import BonusTiers from '@/components/BonusTiers'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default async function HomePage() {
  const data = await getHomepageData()

  const {
    siteSettings,
    cryptoPrices,
    roiHighlights,
    referralLevels,
    bonusTiers,
    footerLinks
  } = data

  return (
    <>
      <Navigation siteSettings={siteSettings} />
      <Hero siteSettings={siteSettings} />
      <CryptoPrices prices={cryptoPrices} />
      <ROIHighlights highlights={roiHighlights} />
      <ReferralLevels levels={referralLevels} />
      <BonusTiers tiers={bonusTiers} />
      <CTASection siteSettings={siteSettings} />
      <Footer siteSettings={siteSettings} footerLinks={footerLinks} />
    </>
  )
}

export const revalidate = 300 // Revalidate every 5 minutes