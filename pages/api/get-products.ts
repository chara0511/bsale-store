import { NextApiHandler } from 'next'

import { query } from '@/lib/db'

const handler: NextApiHandler = async (req, res) => {
  const { q, sort } = req.query

  try {
    if (q !== undefined && sort !== undefined) {
      const results = await query(
        `
          SELECT * FROM product
          WHERE name REGEXP ? 
          ORDER BY price ?
        `,
        [String(q), String(sort)] // Query with placeholders (?) to prevent SQL Injection
      )

      return res.status(200).json(results)
    }

    if (sort !== undefined) {
      const results = await query(
        `
          SELECT * FROM product
          ORDER BY price ?
        `,
        String(sort)
      )

      return res.status(200).json(results)
    }

    if (q !== undefined) {
      const results = await query(
        `
          SELECT * FROM product
          WHERE name REGEXP ?
        `,
        String(q)
      )

      return res.status(200).json(results)
    }

    const results = await query(
      `
        SELECT * FROM product
        ORDER BY id ASC
      `
    )

    return res.status(200).json(results)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export default handler
