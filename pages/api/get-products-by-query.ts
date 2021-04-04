import { NextApiHandler } from 'next'

import { query } from '@/lib/db'

const handler: NextApiHandler = async (req, res) => {
  const { q } = req.query
  try {
    if (q === undefined) {
      return res.status(400).json({ message: 'Empty, `query` required' })
    }
    const results = await query(
      `
        SELECT * FROM product
        WHERE name REGEXP '${String(q)}' 
      `
    )

    return res.status(200).json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
