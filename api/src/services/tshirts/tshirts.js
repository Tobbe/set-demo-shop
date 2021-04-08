import { db } from 'src/lib/db'

export const tshirts = async ({ bandSlug }) => {
  console.log('getting tshirts', bandSlug)
  if (bandSlug) {
    const ts = await db.tshirt.findMany({ where: { bandSlug }})
    console.log('tshirts', ts)
    return ts;
  }

  return db.tshirt.findMany()
}

export const tshirt = ({ id }) => {
  return db.tshirt.findUnique({
    where: { id },
  })
}

export const createTshirt = ({ input }) => {
  return db.tshirt.create({
    data: input,
  })
}

export const updateTshirt = ({ id, input }) => {
  return db.tshirt.update({
    data: input,
    where: { id },
  })
}

export const deleteTshirt = ({ id }) => {
  return db.tshirt.delete({
    where: { id },
  })
}
