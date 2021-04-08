import { bands, band, createBand, updateBand, deleteBand } from './bands'

describe('bands', () => {
  scenario('returns all bands', async (scenario) => {
    const result = await bands()

    expect(result.length).toEqual(Object.keys(scenario.band).length)
  })

  scenario('returns a single band', async (scenario) => {
    const result = await band({ id: scenario.band.one.id })

    expect(result).toEqual(scenario.band.one)
  })

  scenario('creates a band', async (scenario) => {
    const result = await createBand({
      input: { slug: 'String1623085', name: 'String' },
    })

    expect(result.slug).toEqual('String1623085')
    expect(result.name).toEqual('String')
  })

  scenario('updates a band', async (scenario) => {
    const original = await band({ id: scenario.band.one.id })
    const result = await updateBand({
      id: original.id,
      input: { slug: 'String63711002' },
    })

    expect(result.slug).toEqual('String63711002')
  })

  scenario('deletes a band', async (scenario) => {
    const original = await deleteBand({ id: scenario.band.one.id })
    const result = await band({ id: original.id })

    expect(result).toEqual(null)
  })
})
