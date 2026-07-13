import { getServerSession } from 'next-auth'
import { authOptions } from './auth-options'

export async function getCurrentUser() {
  return await getServerSession(authOptions)
}
