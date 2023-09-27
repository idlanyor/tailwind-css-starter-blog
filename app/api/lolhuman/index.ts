import type { NextApiRequest, NextApiResponse } from 'next'
import siteMetadata from '@/data/siteMetadata'

const apiBaseUrl = {
  lolhuman: 'https://api.lolhuman.xyz',
}

const apiKey = {
  lolhuman: {
    key: 'apikey',
    value: siteMetadata.apikey,
  },
}

/**
 *
 * @param {string} apiName
 * @returns {Promise<Response>}
 */
const api = async (apiName: string): Promise<Response> => {
  const url = new URL(apiBaseUrl[apiName])
  url.searchParams.append(apiKey[apiName].key, apiKey[apiName].value)

  const response = await fetch(url.toString())

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  return response
}

export default api
