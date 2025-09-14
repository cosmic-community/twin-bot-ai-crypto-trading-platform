import { createBucketClient } from '@cosmicjs/sdk'
import type { 
  SiteSettings, 
  CryptoPrice, 
  ROIHighlight, 
  ReferralLevel, 
  BonusTier, 
  FooterLink,
  CosmicResponse,
  hasStatus
} from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Helper function for error handling
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Fetch site settings
export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    const response = await cosmic.objects
      .find({ type: 'site-settings' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    const siteSettings = response.objects[0] as SiteSettings;
    
    if (!siteSettings) {
      return null;
    }
    
    return siteSettings;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    console.error('Error fetching site settings:', error);
    throw new Error('Failed to fetch site settings');
  }
}

// Fetch crypto prices
export async function getCryptoPrices(): Promise<CryptoPrice[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'crypto-prices' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    // Manual sorting by display_order
    return (response.objects as CryptoPrice[]).sort((a, b) => {
      const orderA = a.metadata?.display_order ?? 999;
      const orderB = b.metadata?.display_order ?? 999;
      return orderA - orderB;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching crypto prices:', error);
    throw new Error('Failed to fetch crypto prices');
  }
}

// Fetch ROI highlights
export async function getROIHighlights(): Promise<ROIHighlight[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'roi-highlights' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    // Manual sorting by display_order
    return (response.objects as ROIHighlight[]).sort((a, b) => {
      const orderA = a.metadata?.display_order ?? 999;
      const orderB = b.metadata?.display_order ?? 999;
      return orderA - orderB;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching ROI highlights:', error);
    throw new Error('Failed to fetch ROI highlights');
  }
}

// Fetch referral levels
export async function getReferralLevels(): Promise<ReferralLevel[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'referral-levels' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    // Manual sorting by level_number
    return (response.objects as ReferralLevel[]).sort((a, b) => {
      const levelA = a.metadata?.level_number ?? 999;
      const levelB = b.metadata?.level_number ?? 999;
      return levelA - levelB;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching referral levels:', error);
    throw new Error('Failed to fetch referral levels');
  }
}

// Fetch bonus tiers
export async function getBonusTiers(): Promise<BonusTier[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'bonus-tiers' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    // Manual sorting by level_number
    return (response.objects as BonusTier[]).sort((a, b) => {
      const levelA = a.metadata?.level_number ?? 999;
      const levelB = b.metadata?.level_number ?? 999;
      return levelA - levelB;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching bonus tiers:', error);
    throw new Error('Failed to fetch bonus tiers');
  }
}

// Fetch footer links
export async function getFooterLinks(): Promise<FooterLink[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'footer-links' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    // Manual sorting by display_order
    return (response.objects as FooterLink[]).sort((a, b) => {
      const orderA = a.metadata?.display_order ?? 999;
      const orderB = b.metadata?.display_order ?? 999;
      return orderA - orderB;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching footer links:', error);
    throw new Error('Failed to fetch footer links');
  }
}

// Fetch all data for the homepage
export async function getHomepageData() {
  try {
    const [
      siteSettings,
      cryptoPrices,
      roiHighlights,
      referralLevels,
      bonusTiers,
      footerLinks
    ] = await Promise.all([
      getSiteSettings(),
      getCryptoPrices(),
      getROIHighlights(),
      getReferralLevels(),
      getBonusTiers(),
      getFooterLinks()
    ]);

    return {
      siteSettings,
      cryptoPrices,
      roiHighlights,
      referralLevels,
      bonusTiers,
      footerLinks
    };
  } catch (error) {
    console.error('Error fetching homepage data:', error);
    throw new Error('Failed to fetch homepage data');
  }
}