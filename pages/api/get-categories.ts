import { NextApiHandler } from 'next'

import { query } from '@/lib/db'

const handler: NextApiHandler = async (req, res) => {
  const {
    query: { q }
  } = req

  try {
    if (q !== undefined) {
      const results = await query(
        `
          SELECT * FROM category 
          INNER JOIN product ON category.id = product.category
          WHERE category.name = '${String(q)}'
        `
      )

      return res.status(200).json(results)
    }

    const results = await query(
      `
        SELECT * FROM category
      `
    )

    return res.status(200).json(results)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export default handler
