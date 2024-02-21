import {git} from './client'

export async function clone(repoUrl: string, destinationPath: string, branch: string): Promise<void> {
  try {
    await git.clone(repoUrl, destinationPath, {'--branch': branch})
    console.log('Repository cloned successfully!')
  } catch (error) {
    console.error('Failed to clone repository:', error)
  }
}
