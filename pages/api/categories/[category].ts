import { NextApiHandler } from 'next'

import { query } from '@/lib/db'

const handler: NextApiHandler = async (req, res) => {
  const { category, sort } = req.query

  try {
    if (sort !== undefined) {
      const results = await query(
        `
          SELECT * FROM category 
          INNER JOIN product ON category.id = product.category
          WHERE category.name = ?
          ORDER BY price ${
            sort === 'price-asc' ? 'ASC' : sort === 'price-desc' ? 'DESC' : ''
          }
        `,
        category // Query with placeholders (?)
      )

      return res.status(200).json(results)
    }

    const results = await query(
        `
          SELECT * FROM category 
          INNER JOIN product ON category.id = product.category
          WHERE category.name = ?
        `,
        category
    )

    return res.status(200).json(results)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export default handler
