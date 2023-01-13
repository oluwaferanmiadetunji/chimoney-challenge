export type ProductType = {
  productId: number;
  productName: string;
  global: boolean;
  senderFee: number;
  senderFeePercentage: number;
  denominationType: string;
  recipientCurrencyCode: string;
  minRecipientDenomination: number | null;
  maxRecipientDenomination: number | null;
  senderCurrencyCode: string;
  minSenderDenomination: number | null;
  maxSenderDenomination: number | null;
  fixedRecipientDenominations: any[];
  fixedSenderDenominations: any;
  fixedRecipientToSenderDenominationsMap: any;
  logoUrls: string[];
  brand: { brandId: number | null; brandName: string };
  country: {
    isoName: string;
    name: string;
    flagUrl: string;
  };
  redeemInstruction: {
    concise: string;
    verbose: string;
  };
  img: string;
  description: string;
  available: boolean;
  code: string;
  type: string;
  name: string;
  countryCode: string;
  chi_pvd: string;
};
