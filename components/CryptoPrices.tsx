'use client'

import { useState, useEffect } from 'react'
import { CryptoPrice } from '@/types'

interface CryptoPricesProps {
  prices: CryptoPrice[]
}

export default function CryptoPrices({ prices: initialPrices }: CryptoPricesProps) {
  const [prices, setPrices] = useState(initialPrices)

  // Simulate price updates every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(currentPrices => 
        currentPrices.map(price => {
          const currentPriceNum = parseFloat(price.metadata?.current_price?.replace(/[$,]/g, '') || '0')
          const changePercent = parseFloat(price.metadata?.change_24h?.replace(/[%+]/g, '') || '0')
          
          // Simulate small price fluctuations
          const fluctuation = (Math.random() - 0.5) * 0.02 // ±1% max change
          const newPrice = currentPriceNum * (1 + fluctuation)
          const newChange = changePercent + fluctuation * 100
          
          return {
            ...price,
            metadata: {
              ...price.metadata,
              current_price: `$${newPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: price.metadata?.symbol === 'BTC' ? 2 : 4 })}`,
              change_24h: `${newChange >= 0 ? '+' : ''}${newChange.toFixed(2)}%`
            }
          }
        })
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const formatChange = (change: string) => {
    const isPositive = change.startsWith('+')
    return {
      isPositive,
      value: change,
      className: isPositive ? 'price-positive' : 'price-negative'
    }
  }

  if (!prices || prices.length === 0) {
    return (
      <section id="prices" className="py-20 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Live Crypto Prices</h2>
            <p className="text-foreground-muted text-lg mb-12">No price data available</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="prices" className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Live Crypto Prices</h2>
          <p className="text-foreground-muted text-lg max-w-3xl mx-auto">
            Real-time cryptocurrency prices and market data powered by our trading algorithms.
          </p>
        </div>

        {/* Price grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prices.map((price) => {
            const changeData = formatChange(price.metadata?.change_24h || '+0.00%')
            
            return (
              <div
                key={price.id}
                className="glass-card rounded-xl p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {price.metadata?.coin_logo?.imgix_url && (
                      <img
                        src={`${price.metadata.coin_logo.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                        alt={`${price.metadata?.crypto_name} logo`}
                        className="w-10 h-10 rounded-full"
                        width={40}
                        height={40}
                      />
                    )}
                    <div>
                      <h3 className="font-semibold text-white">
                        {price.metadata?.crypto_name || price.title}
                      </h3>
                      <p className="text-foreground-muted text-sm">
                        {price.metadata?.symbol}
                      </p>
                    </div>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-sm font-medium ${changeData.className}`}>
                    {changeData.value}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground-muted text-sm">Price</span>
                    <span className="font-bold text-white text-lg">
                      {price.metadata?.current_price}
                    </span>
                  </div>
                  
                  {price.metadata?.volume_24h && (
                    <div className="flex justify-between items-center">
                      <span className="text-foreground-muted text-sm">24h Volume</span>
                      <span className="text-white text-sm">
                        {price.metadata.volume_24h}
                      </span>
                    </div>
                  )}
                  
                  {price.metadata?.market_cap && (
                    <div className="flex justify-between items-center">
                      <span className="text-foreground-muted text-sm">Market Cap</span>
                      <span className="text-white text-sm">
                        {price.metadata.market_cap}
                      </span>
                    </div>
                  )}

                  {price.metadata?.high_24h && price.metadata?.low_24h && (
                    <div className="flex justify-between items-center pt-2 border-t border-card-border">
                      <div className="text-center">
                        <p className="text-foreground-muted text-xs">24h High</p>
                        <p className="text-white text-sm font-medium">{price.metadata.high_24h}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-foreground-muted text-xs">24h Low</p>
                        <p className="text-white text-sm font-medium">{price.metadata.low_24h}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}