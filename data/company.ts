export const company = {
  name: "JOWAY COMMERCE LLC",
  shortName: "JOWAY",
  tagline: "Contemporary coastal living, well designed.",
  description:
    "JOWAY COMMERCE LLC is a contemporary lifestyle retailer offering thoughtfully chosen pieces for home, travel, and everyday living — designed for bright rooms, easy weekends, and a slower, sunlit pace.",
  email: "jowaycommercellc@gmail.com",
  address: {
    street: "4000 OCEAN BEACH BLVD",
    street2: "APT 3B",
    city: "COCOA BEACH",
    state: "FL",
    zip: "32931",
    country: "United States",
  },
  copyright: `© ${new Date().getFullYear()} JOWAY COMMERCE LLC. All rights reserved.`,
};

export function formatAddressLines(): string[] {
  return [
    company.address.street,
    company.address.street2,
    `${company.address.city}, ${company.address.state} ${company.address.zip}`,
  ];
}

export function formatAddressInline(): string {
  return formatAddressLines().join(", ");
}
