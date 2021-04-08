import { db } from 'src/lib/db'

export const bands = () => {
  return db.band.findMany()
}

export const band = ({ id }) => {
  return db.band.findUnique({
    where: { id },
  })
}

export const bandFromSlug = ({ bandSlug }) => {
  return db.band.findUnique({
    where: { slug: bandSlug },
  })
}

export const createBand = ({ input }) => {
  return db.band.create({
    data: input,
  })
}

export const updateBand = ({ id, input }) => {
  return db.band.update({
    data: input,
    where: { id },
  })
}

export const deleteBand = ({ id }) => {
  return db.band.delete({
    where: { id },
  })
}
