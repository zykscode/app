export type Region = {
  id: string
  name: string
}

export type Town = {
  id: string
  name: string
  regionId: string
}

const regions: Region[] = []
const towns: Town[] = []

export const geoService = {
  listRegions() {
    return regions
  },

  listTownsByRegion(regionId: string) {
    return towns.filter((town) => town.regionId === regionId)
  },
}
