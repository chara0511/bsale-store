import { NextApiHandler } from 'next'

import { query } from '@/lib/db'

const handler: NextApiHandler = async (req, res) => {
  const { q } = req.query

  try {
    if (q !== undefined) {
      const results = await query(
        `
          SELECT * FROM product
          WHERE name REGEXP '${String(q)}' 
        `
      )

      return res.status(200).json(results)
    }

    const results = await query(
      `
        SELECT * FROM product
        ORDER BY id ASC
        LIMIT 20
      `
    )

    return res.status(200).json(results)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export default handler
