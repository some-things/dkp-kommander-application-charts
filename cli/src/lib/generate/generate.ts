import {join} from 'path'
import {getHelmReleases} from '../application/application'
import {getApplicationNames} from '../application/repository'
import {download, extract} from '../helm/chart'
import {getURL} from '../helm/repository'

export default async function generate() {
  const appNames = await getApplicationNames('work/')

  for (const appName of appNames) {
    const helmReleases = await getHelmReleases('work/', appName)

    for (const helmRelease of helmReleases
      // TODO: fix chartmuseum 'local' chart
      .filter((hr: any) => !hr.spec.chart.spec.chart.toString().includes('.tgz'))) {
      // TODO: ensure the docs are more specific as to what is configurable via appdeployments (e.g., multi-chart apps)
      const helmReleaseName = helmRelease.spec.chart.spec.chart
      const helmReleaseRepo = helmRelease.spec.chart.spec.sourceRef.name
      const helmReleaseVersion = helmRelease.spec.chart.spec.version.toString().split('=').pop().split('}')[0]
      const helmReleaseRepositoryURL = await getURL(join('work/', 'common/helm-repositories'), helmReleaseRepo)
      const helmReleaseFileName = `${helmReleaseName}-${helmReleaseVersion}.tgz`

      await download(helmReleaseName, helmReleaseVersion, helmReleaseRepositoryURL, 'generated/')

      await extract(helmReleaseFileName, 'generated/')
    }
  }
}
