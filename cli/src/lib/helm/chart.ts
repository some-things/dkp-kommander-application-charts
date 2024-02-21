import axios from 'axios'
import dl from 'download'
import {join} from 'path'
import {x} from 'tar'
import YAML from 'yaml'
import {isValidUrl} from '../utils/helpers'

export async function download(chartName: string, chartVersion: string, chartRepoURL: string, path: string) {
  const filteredChartRepoURL = chartRepoURL.replace(/\/$/, '')

  console.log(`processing chart repo ${filteredChartRepoURL}`)

  const chartRepoIndex = await (await axios.get(`${filteredChartRepoURL}/index.yaml`)).data

  const chartRepoIndexData = YAML.parse(chartRepoIndex)

  const chartURLs = chartRepoIndexData['entries'][`${chartName}`].filter(
    (c: any) => c.version === chartVersion && c.name === chartName,
  )[0]['urls']

  const chartFetchURL = isValidUrl(chartURLs[0]) ? chartURLs[0] : `${filteredChartRepoURL}/${chartURLs[0]}`

  try {
    // TODO: replace with axios
    await dl(chartFetchURL, path)
  } catch (e) {
    console.error(`failed to download ${chartFetchURL}: ${e}`)
  }

  return
}

export async function extract(chartFilePath: string, artifactsLocalPath: string) {
  await x({
    file: join(artifactsLocalPath, chartFilePath),
    C: artifactsLocalPath,
  })
}

export function getChartRepository() {}
