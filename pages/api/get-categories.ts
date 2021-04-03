import { NextApiHandler } from 'next'

import { query } from '@/lib/db'

const handler: NextApiHandler = async (_, res) => {
  try {
    const results = await query(`
      SELECT * FROM category
    `)

    return res.status(200).json(results)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export default handler
