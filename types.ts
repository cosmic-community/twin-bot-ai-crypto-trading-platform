// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Site Settings
export interface SiteSettings extends CosmicObject {
  type: 'site-settings';
  metadata: {
    site_title?: string;
    hero_headline?: string;
    hero_subheadline?: string;
    primary_cta_text?: string;
    secondary_cta_text?: string;
    cta_section_headline?: string;
    cta_section_description?: string;
    company_description?: string;
    support_email?: string;
    support_phone?: string;
    company_address?: string;
  };
}

// Crypto Price
export interface CryptoPrice extends CosmicObject {
  type: 'crypto-prices';
  metadata: {
    crypto_name?: string;
    symbol?: string;
    current_price?: string;
    change_24h?: string;
    volume_24h?: string;
    market_cap?: string;
    high_24h?: string;
    low_24h?: string;
    coin_logo?: {
      url: string;
      imgix_url: string;
    };
    display_order?: number;
  };
}

// ROI Highlight
export interface ROIHighlight extends CosmicObject {
  type: 'roi-highlights';
  metadata: {
    feature_title?: string;
    feature_value?: string;
    feature_description?: string;
    icon?: string;
    display_order?: number;
  };
}

// Referral Level
export interface ReferralLevel extends CosmicObject {
  type: 'referral-levels';
  metadata: {
    level_name?: string;
    level_number?: number;
    daily_roi_rate?: string;
    requirements?: string;
    is_featured?: boolean;
    display_order?: number;
  };
}

// Bonus Tier
export interface BonusTier extends CosmicObject {
  type: 'bonus-tiers';
  metadata: {
    level?: string;
    bonus_amount?: string;
    level_number?: number;
    terms_note?: string;
    display_order?: number;
  };
}

// Footer Link
export interface FooterLink extends CosmicObject {
  type: 'footer-links';
  metadata: {
    link_text?: string;
    link_url?: string;
    footer_section?: {
      key: string;
      value: string;
    };
    display_order?: number;
    opens_new_tab?: boolean;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip?: number;
}

// Type guards for runtime validation
export function isSiteSettings(obj: CosmicObject): obj is SiteSettings {
  return obj.type === 'site-settings';
}

export function isCryptoPrice(obj: CosmicObject): obj is CryptoPrice {
  return obj.type === 'crypto-prices';
}

export function isROIHighlight(obj: CosmicObject): obj is ROIHighlight {
  return obj.type === 'roi-highlights';
}

export function isReferralLevel(obj: CosmicObject): obj is ReferralLevel {
  return obj.type === 'referral-levels';
}

export function isBonusTier(obj: CosmicObject): obj is BonusTier {
  return obj.type === 'bonus-tiers';
}

export function isFooterLink(obj: CosmicObject): obj is FooterLink {
  return obj.type === 'footer-links';
}

// Utility types
export type CreateObjectData<T> = Omit<T, 'id' | 'created_at' | 'modified_at'>;

// Footer section types
export type FooterSectionKey = 'platform' | 'legal' | 'social';

// Error handling helper
export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}