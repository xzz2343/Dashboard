export interface PropertyListing {
  id: string
  address: string
  city: string
  neighborhood: string
  price: number
  bedrooms: number
  bathrooms: number
  sqft: number
  daysOnMarket: number
  listDate: string
  status: 'Active' | 'Pending' | 'Sold'
  soldPrice?: number
}

export const mockListings: PropertyListing[] = [
  // Capitol Hill (~$650k–$850k)
  { id: '1',  address: '412 E Pine St',      city: 'Seattle', neighborhood: 'Capitol Hill', price: 725000,  bedrooms: 2, bathrooms: 1, sqft: 1050, daysOnMarket: 8,  listDate: '2025-05-10', status: 'Active' },
  { id: '2',  address: '1803 Broadway Ave E', city: 'Seattle', neighborhood: 'Capitol Hill', price: 849000,  bedrooms: 3, bathrooms: 2, sqft: 1420, daysOnMarket: 4,  listDate: '2025-05-18', status: 'Active' },
  { id: '3',  address: '623 Belmont Ave E',   city: 'Seattle', neighborhood: 'Capitol Hill', price: 695000,  bedrooms: 2, bathrooms: 1, sqft: 980,  daysOnMarket: 22, listDate: '2025-04-28', status: 'Pending' },
  { id: '4',  address: '906 E Roy St',        city: 'Seattle', neighborhood: 'Capitol Hill', price: 775000,  bedrooms: 3, bathrooms: 2, sqft: 1280, daysOnMarket: 31, listDate: '2025-04-19', status: 'Pending' },
  { id: '5',  address: '1501 E Olive Way',    city: 'Seattle', neighborhood: 'Capitol Hill', price: 659000,  bedrooms: 2, bathrooms: 1, sqft: 890,  daysOnMarket: 47, listDate: '2025-04-03', status: 'Sold',   soldPrice: 651000 },
  { id: '6',  address: '318 Summit Ave E',    city: 'Seattle', neighborhood: 'Capitol Hill', price: 810000,  bedrooms: 3, bathrooms: 2, sqft: 1380, daysOnMarket: 11, listDate: '2025-05-09', status: 'Active' },
  { id: '7',  address: '742 E John St',       city: 'Seattle', neighborhood: 'Capitol Hill', price: 739000,  bedrooms: 2, bathrooms: 2, sqft: 1120, daysOnMarket: 5,  listDate: '2025-05-15', status: 'Active' },
  { id: '8',  address: '2204 E Madison St',   city: 'Seattle', neighborhood: 'Capitol Hill', price: 785000,  bedrooms: 3, bathrooms: 2, sqft: 1310, daysOnMarket: 55, listDate: '2025-03-26', status: 'Sold',   soldPrice: 762000 },
  { id: '9',  address: '1044 E Pike St',      city: 'Seattle', neighborhood: 'Capitol Hill', price: 668000,  bedrooms: 2, bathrooms: 1, sqft: 930,  daysOnMarket: 18, listDate: '2025-05-02', status: 'Active' },
  { id: '10', address: '509 Harvard Ave E',   city: 'Seattle', neighborhood: 'Capitol Hill', price: 835000,  bedrooms: 3, bathrooms: 2, sqft: 1450, daysOnMarket: 7,  listDate: '2025-05-13', status: 'Active' },

  // Ballard (~$580k–$780k)
  { id: '11', address: '5312 24th Ave NW',    city: 'Seattle', neighborhood: 'Ballard', price: 648000,  bedrooms: 3, bathrooms: 1, sqft: 1190, daysOnMarket: 14, listDate: '2025-05-06', status: 'Active' },
  { id: '12', address: '2018 NW 56th St',     city: 'Seattle', neighborhood: 'Ballard', price: 725000,  bedrooms: 3, bathrooms: 2, sqft: 1340, daysOnMarket: 9,  listDate: '2025-05-11', status: 'Active' },
  { id: '13', address: '6104 22nd Ave NW',    city: 'Seattle', neighborhood: 'Ballard', price: 589000,  bedrooms: 2, bathrooms: 1, sqft: 980,  daysOnMarket: 38, listDate: '2025-04-12', status: 'Sold',   soldPrice: 575000 },
  { id: '14', address: '1426 NW Market St',   city: 'Seattle', neighborhood: 'Ballard', price: 762000,  bedrooms: 3, bathrooms: 2, sqft: 1420, daysOnMarket: 6,  listDate: '2025-05-14', status: 'Active' },
  { id: '15', address: '5805 20th Ave NW',    city: 'Seattle', neighborhood: 'Ballard', price: 614000,  bedrooms: 2, bathrooms: 1, sqft: 1050, daysOnMarket: 26, listDate: '2025-04-24', status: 'Pending' },
  { id: '16', address: '2310 NW 65th St',     city: 'Seattle', neighborhood: 'Ballard', price: 695000,  bedrooms: 3, bathrooms: 2, sqft: 1280, daysOnMarket: 17, listDate: '2025-05-03', status: 'Active' },
  { id: '17', address: '1712 NW 58th St',     city: 'Seattle', neighborhood: 'Ballard', price: 579000,  bedrooms: 2, bathrooms: 1, sqft: 940,  daysOnMarket: 42, listDate: '2025-04-08', status: 'Sold',   soldPrice: 565000 },
  { id: '18', address: '6022 28th Ave NW',    city: 'Seattle', neighborhood: 'Ballard', price: 745000,  bedrooms: 3, bathrooms: 2, sqft: 1360, daysOnMarket: 3,  listDate: '2025-05-17', status: 'Active' },
  { id: '19', address: '2805 NW 70th St',     city: 'Seattle', neighborhood: 'Ballard', price: 628000,  bedrooms: 3, bathrooms: 1, sqft: 1150, daysOnMarket: 33, listDate: '2025-04-17', status: 'Pending' },
  { id: '20', address: '5408 26th Ave NW',    city: 'Seattle', neighborhood: 'Ballard', price: 778000,  bedrooms: 4, bathrooms: 2, sqft: 1590, daysOnMarket: 11, listDate: '2025-05-09', status: 'Active' },

  // Queen Anne (~$720k–$1.1M)
  { id: '21', address: '220 W Blaine St',     city: 'Seattle', neighborhood: 'Queen Anne', price: 895000,  bedrooms: 3, bathrooms: 2, sqft: 1620, daysOnMarket: 10, listDate: '2025-05-10', status: 'Active' },
  { id: '22', address: '1104 1st Ave N',      city: 'Seattle', neighborhood: 'Queen Anne', price: 1085000, bedrooms: 4, bathrooms: 3, sqft: 2140, daysOnMarket: 5,  listDate: '2025-05-15', status: 'Active' },
  { id: '23', address: '615 W McGraw St',     city: 'Seattle', neighborhood: 'Queen Anne', price: 738000,  bedrooms: 2, bathrooms: 2, sqft: 1180, daysOnMarket: 29, listDate: '2025-04-21', status: 'Pending' },
  { id: '24', address: '1312 Queen Anne Ave N', city: 'Seattle', neighborhood: 'Queen Anne', price: 965000, bedrooms: 3, bathrooms: 2, sqft: 1780, daysOnMarket: 15, listDate: '2025-05-05', status: 'Active' },
  { id: '25', address: '408 W Raye St',       city: 'Seattle', neighborhood: 'Queen Anne', price: 849000,  bedrooms: 3, bathrooms: 2, sqft: 1490, daysOnMarket: 51, listDate: '2025-03-30', status: 'Sold',   soldPrice: 832000 },
  { id: '26', address: '2105 3rd Ave N',      city: 'Seattle', neighborhood: 'Queen Anne', price: 778000,  bedrooms: 3, bathrooms: 2, sqft: 1320, daysOnMarket: 8,  listDate: '2025-05-12', status: 'Active' },
  { id: '27', address: '516 W Crockett St',   city: 'Seattle', neighborhood: 'Queen Anne', price: 1025000, bedrooms: 4, bathrooms: 3, sqft: 2060, daysOnMarket: 19, listDate: '2025-05-01', status: 'Pending' },
  { id: '28', address: '910 W Howe St',       city: 'Seattle', neighborhood: 'Queen Anne', price: 725000,  bedrooms: 2, bathrooms: 2, sqft: 1140, daysOnMarket: 35, listDate: '2025-04-15', status: 'Sold',   soldPrice: 718000 },
  { id: '29', address: '1708 5th Ave N',      city: 'Seattle', neighborhood: 'Queen Anne', price: 942000,  bedrooms: 3, bathrooms: 3, sqft: 1850, daysOnMarket: 7,  listDate: '2025-05-13', status: 'Active' },
  { id: '30', address: '312 W Olympic Pl',    city: 'Seattle', neighborhood: 'Queen Anne', price: 815000,  bedrooms: 3, bathrooms: 2, sqft: 1420, daysOnMarket: 12, listDate: '2025-05-08', status: 'Active' },

  // Fremont (~$520k–$720k)
  { id: '31', address: '4018 Fremont Ave N',  city: 'Seattle', neighborhood: 'Fremont', price: 625000,  bedrooms: 3, bathrooms: 1, sqft: 1180, daysOnMarket: 16, listDate: '2025-05-04', status: 'Active' },
  { id: '32', address: '3512 Evanston Ave N', city: 'Seattle', neighborhood: 'Fremont', price: 548000,  bedrooms: 2, bathrooms: 1, sqft: 940,  daysOnMarket: 44, listDate: '2025-04-06', status: 'Sold',   soldPrice: 535000 },
  { id: '33', address: '712 N 36th St',       city: 'Seattle', neighborhood: 'Fremont', price: 695000,  bedrooms: 3, bathrooms: 2, sqft: 1310, daysOnMarket: 6,  listDate: '2025-05-14', status: 'Active' },
  { id: '34', address: '4225 Linden Ave N',   city: 'Seattle', neighborhood: 'Fremont', price: 529000,  bedrooms: 2, bathrooms: 1, sqft: 870,  daysOnMarket: 58, listDate: '2025-03-23', status: 'Sold',   soldPrice: 515000 },
  { id: '35', address: '3908 Stone Way N',    city: 'Seattle', neighborhood: 'Fremont', price: 718000,  bedrooms: 3, bathrooms: 2, sqft: 1390, daysOnMarket: 20, listDate: '2025-05-01', status: 'Pending' },
  { id: '36', address: '614 N 41st St',       city: 'Seattle', neighborhood: 'Fremont', price: 579000,  bedrooms: 2, bathrooms: 1, sqft: 980,  daysOnMarket: 9,  listDate: '2025-05-11', status: 'Active' },
  { id: '37', address: '4506 Aurora Ave N',   city: 'Seattle', neighborhood: 'Fremont', price: 648000,  bedrooms: 3, bathrooms: 2, sqft: 1220, daysOnMarket: 27, listDate: '2025-04-23', status: 'Pending' },
  { id: '38', address: '3316 Wallingford Ave N', city: 'Seattle', neighborhood: 'Fremont', price: 598000, bedrooms: 2, bathrooms: 2, sqft: 1060, daysOnMarket: 13, listDate: '2025-05-07', status: 'Active' },
  { id: '39', address: '805 N 34th St',       city: 'Seattle', neighborhood: 'Fremont', price: 672000,  bedrooms: 3, bathrooms: 2, sqft: 1270, daysOnMarket: 4,  listDate: '2025-05-16', status: 'Active' },
  { id: '40', address: '4114 Woodland Park Ave N', city: 'Seattle', neighborhood: 'Fremont', price: 545000, bedrooms: 2, bathrooms: 1, sqft: 900, daysOnMarket: 39, listDate: '2025-04-11', status: 'Sold', soldPrice: 538000 },

  // Madison Park (~$900k–$1.4M)
  { id: '41', address: '2812 E Madison St',   city: 'Seattle', neighborhood: 'Madison Park', price: 1125000, bedrooms: 4, bathrooms: 3, sqft: 2380, daysOnMarket: 12, listDate: '2025-05-08', status: 'Active' },
  { id: '42', address: '3104 E Mercer St',    city: 'Seattle', neighborhood: 'Madison Park', price: 985000,  bedrooms: 3, bathrooms: 2, sqft: 1920, daysOnMarket: 7,  listDate: '2025-05-13', status: 'Active' },
  { id: '43', address: '1806 43rd Ave E',     city: 'Seattle', neighborhood: 'Madison Park', price: 1295000, bedrooms: 4, bathrooms: 3, sqft: 2710, daysOnMarket: 24, listDate: '2025-04-26', status: 'Pending' },
  { id: '44', address: '3418 E Spring St',    city: 'Seattle', neighborhood: 'Madison Park', price: 945000,  bedrooms: 3, bathrooms: 2, sqft: 1840, daysOnMarket: 3,  listDate: '2025-05-17', status: 'Active' },
  { id: '45', address: '2205 44th Ave E',     city: 'Seattle', neighborhood: 'Madison Park', price: 1380000, bedrooms: 5, bathrooms: 4, sqft: 3120, daysOnMarket: 48, listDate: '2025-04-02', status: 'Sold',   soldPrice: 1350000 },
  { id: '46', address: '3612 E Madison St',   city: 'Seattle', neighborhood: 'Madison Park', price: 1060000, bedrooms: 4, bathrooms: 3, sqft: 2240, daysOnMarket: 16, listDate: '2025-05-04', status: 'Active' },
  { id: '47', address: '1918 42nd Ave E',     city: 'Seattle', neighborhood: 'Madison Park', price: 912000,  bedrooms: 3, bathrooms: 2, sqft: 1780, daysOnMarket: 31, listDate: '2025-04-19', status: 'Pending' },
  { id: '48', address: '4022 E Prospect St',  city: 'Seattle', neighborhood: 'Madison Park', price: 1185000, bedrooms: 4, bathrooms: 3, sqft: 2540, daysOnMarket: 9,  listDate: '2025-05-11', status: 'Active' },
  { id: '49', address: '2614 46th Ave E',     city: 'Seattle', neighborhood: 'Madison Park', price: 1245000, bedrooms: 4, bathrooms: 3, sqft: 2640, daysOnMarket: 61, listDate: '2025-03-20', status: 'Sold',   soldPrice: 1210000 },
  { id: '50', address: '3208 E Blaine St',    city: 'Seattle', neighborhood: 'Madison Park', price: 975000,  bedrooms: 3, bathrooms: 2, sqft: 1960, daysOnMarket: 5,  listDate: '2025-05-15', status: 'Active' },
]
