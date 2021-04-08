import {
  tshirts,
  tshirt,
  createTshirt,
  updateTshirt,
  deleteTshirt,
} from './tshirts'

describe('tshirts', () => {
  scenario('returns all tshirts', async (scenario) => {
    const result = await tshirts()

    expect(result.length).toEqual(Object.keys(scenario.tshirt).length)
  })

  scenario('returns a single tshirt', async (scenario) => {
    const result = await tshirt({ id: scenario.tshirt.one.id })

    expect(result).toEqual(scenario.tshirt.one)
  })

  scenario('creates a tshirt', async (scenario) => {
    const result = await createTshirt({
      input: { image: 'String', bandSlug: 'String' },
    })

    expect(result.image).toEqual('String')
    expect(result.bandSlug).toEqual('String')
  })

  scenario('updates a tshirt', async (scenario) => {
    const original = await tshirt({ id: scenario.tshirt.one.id })
    const result = await updateTshirt({
      id: original.id,
      input: { image: 'String2' },
    })

    expect(result.image).toEqual('String2')
  })

  scenario('deletes a tshirt', async (scenario) => {
    const original = await deleteTshirt({ id: scenario.tshirt.one.id })
    const result = await tshirt({ id: original.id })

    expect(result).toEqual(null)
  })
})
