import {clone} from '../git/clone'

export default async function fetch() {
  console.log('Executing fetch...')

  await clone('https://github.com/mesosphere/kommander-applications.git', 'work', 'v2.7.0')
}
