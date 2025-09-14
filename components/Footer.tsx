import { SiteSettings, FooterLink, FooterSectionKey } from '@/types'

interface FooterProps {
  siteSettings: SiteSettings | null
  footerLinks: FooterLink[]
}

export default function Footer({ siteSettings, footerLinks }: FooterProps) {
  const companyDescription = siteSettings?.metadata?.company_description || 'Smart crypto investing with guaranteed transparency. Daily ROI up to 1.2%, referral rewards, and secure withdrawals powered by blockchain automation.'
  const supportEmail = siteSettings?.metadata?.support_email || 'support@twinbot.com'
  const supportPhone = siteSettings?.metadata?.support_phone || '+1 (555) 123-4567'
  const companyAddress = siteSettings?.metadata?.company_address || '123 Blockchain Avenue, Crypto City, CC 12345'
  const siteTitle = siteSettings?.metadata?.site_title || 'Twin Bot'

  // Group footer links by section
  const groupedLinks = footerLinks.reduce((acc, link) => {
    const section = link.metadata?.footer_section?.key as FooterSectionKey
    if (section && link.metadata?.link_text && link.metadata?.link_url) {
      if (!acc[section]) {
        acc[section] = []
      }
      acc[section].push(link)
    }
    return acc
  }, {} as Record<FooterSectionKey, FooterLink[]>)

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column A - Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">TB</span>
              </div>
              <span className="text-xl font-bold text-white">{siteTitle}</span>
            </div>
            <p className="text-foreground-muted text-sm leading-relaxed mb-6">
              {companyDescription}
            </p>
            <div>
              <p className="text-white font-medium mb-3">Follow Us</p>
              <div className="flex space-x-3">
                {/* Social media placeholder icons */}
                <div className="w-8 h-8 bg-card rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <span className="text-xs">T</span>
                </div>
                <div className="w-8 h-8 bg-card rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <span className="text-xs">L</span>
                </div>
                <div className="w-8 h-8 bg-card rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <span className="text-xs">D</span>
                </div>
                <div className="w-8 h-8 bg-card rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <span className="text-xs">TG</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column B - Platform Features */}
          <div>
            <h3 className="text-white font-semibold mb-4">Platform Features</h3>
            <ul className="space-y-2">
              {groupedLinks.platform?.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.metadata?.link_url}
                    target={link.metadata?.opens_new_tab ? '_blank' : '_self'}
                    rel={link.metadata?.opens_new_tab ? 'noopener noreferrer' : ''}
                    className="text-foreground-muted hover:text-primary transition-colors text-sm"
                  >
                    {link.metadata?.link_text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column C - Legal & Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal & Resources</h3>
            <ul className="space-y-2">
              {groupedLinks.legal?.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.metadata?.link_url}
                    target={link.metadata?.opens_new_tab ? '_blank' : '_self'}
                    rel={link.metadata?.opens_new_tab ? 'noopener noreferrer' : ''}
                    className="text-foreground-muted hover:text-primary transition-colors text-sm"
                  >
                    {link.metadata?.link_text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column D - Contact & Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 mb-6">
              <div>
                <p className="text-foreground-muted text-sm">Email:</p>
                <a href={`mailto:${supportEmail}`} className="text-primary hover:text-primary/80 transition-colors text-sm">
                  {supportEmail}
                </a>
              </div>
              <div>
                <p className="text-foreground-muted text-sm">Phone:</p>
                <a href={`tel:${supportPhone}`} className="text-primary hover:text-primary/80 transition-colors text-sm">
                  {supportPhone}
                </a>
              </div>
              <div>
                <p className="text-foreground-muted text-sm">Address:</p>
                <p className="text-white text-sm">{companyAddress}</p>
              </div>
            </div>
            
            <div>
              <p className="text-white font-medium mb-3">Stay Updated</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-card border border-card-border rounded-l-lg text-white text-sm focus:outline-none focus:border-primary"
                />
                <button className="px-4 py-2 bg-primary text-black font-medium rounded-r-lg hover:bg-primary/90 transition-colors text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-card-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground-muted text-sm">
              © {currentYear} {siteTitle}. All rights reserved.
            </p>
            
            {/* Social media links in footer */}
            {groupedLinks.social && groupedLinks.social.length > 0 && (
              <div className="flex space-x-4 mt-4 md:mt-0">
                {groupedLinks.social.map((link) => (
                  <a
                    key={link.id}
                    href={link.metadata?.link_url}
                    target={link.metadata?.opens_new_tab ? '_blank' : '_self'}
                    rel={link.metadata?.opens_new_tab ? 'noopener noreferrer' : ''}
                    className="text-foreground-muted hover:text-primary transition-colors text-sm"
                  >
                    {link.metadata?.link_text}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}