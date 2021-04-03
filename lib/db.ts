import serverlessMysql from 'serverless-mysql'

const db = serverlessMysql({
  config: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD
  }
})

export const query = async (
  q: string,
  values: Array<string | number> | string | number = []
): Promise<unknown> => {
  try {
    const results = await db.query(q, values)
    await db.end()

    return results
  } catch (e) {
    throw Error(e.message)
  }
}
