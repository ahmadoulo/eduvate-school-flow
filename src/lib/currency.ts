export const currencyByCountry: Record<string, { code: string; symbol: string; rate: number }> = {
  MA: { code: 'DH', symbol: 'DH', rate: 1 },
  SN: { code: 'FCFA', symbol: 'FCFA', rate: 70 },
  FR: { code: 'EUR', symbol: '€', rate: 0.09 },
  US: { code: 'USD', symbol: '$', rate: 0.1 },
  DEFAULT: { code: 'DH', symbol: 'DH', rate: 1 },
};

export const detectCountry = (): string => {
  // In production, use an IP geolocation API
  // For now, return Morocco as default
  return 'MA';
};

export const convertPrice = (basePrice: number, countryCode: string): { price: number; currency: string; symbol: string } => {
  const currency = currencyByCountry[countryCode] || currencyByCountry.DEFAULT;
  return {
    price: Math.round(basePrice * currency.rate),
    currency: currency.code,
    symbol: currency.symbol,
  };
};
