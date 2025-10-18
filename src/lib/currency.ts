export const currencyByCountry: Record<string, { code: string; symbol: string; rate: number }> = {
  MA: { code: 'MAD', symbol: 'MAD', rate: 10 },
  SN: { code: 'FCFA', symbol: 'FCFA', rate: 600 },
  FR: { code: 'EUR', symbol: '€', rate: 1 },
  US: { code: 'USD', symbol: '$', rate: 1.1 },
  DEFAULT: { code: 'EUR', symbol: '€', rate: 1 },
};

export const detectCountry = (): string => {
  // In production, use an IP geolocation API
  // For now, return default
  return 'FR';
};

export const convertPrice = (basePrice: number, countryCode: string): { price: number; currency: string; symbol: string } => {
  const currency = currencyByCountry[countryCode] || currencyByCountry.DEFAULT;
  return {
    price: Math.round(basePrice * currency.rate),
    currency: currency.code,
    symbol: currency.symbol,
  };
};
