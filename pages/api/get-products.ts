import { NextApiHandler } from 'next'

import { query } from '@/lib/db'

const handler: NextApiHandler = async (_, res) => {
  try {
    const results = await query(`
      SELECT * FROM product
      ORDER BY id DESC
      LIMIT 10
    `)

    return res.json(results)
  } catch (error) {}
}

export default handler
