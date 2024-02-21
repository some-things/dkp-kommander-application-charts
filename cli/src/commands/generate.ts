import {Args, Command, Flags} from '@oclif/core'
import generate from '../lib/generate/generate'

export default class Generate extends Command {
  static description = 'describe the command here'

  static examples = ['<%= config.bin %> <%= command.id %>']

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
  }

  static args = {
    file: Args.string({description: 'file to read'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Generate)

    // const name = flags.name ?? 'world'
    // this.log(`hello ${name} from /Users/oq/Documents/dkp-kommander-application-charts/cli/src/commands/generate.ts`)
    // if (args.file && flags.force) {
    //   this.log(`you input --force and --file: ${args.file}`)
    // }
    await generate()
  }
}
