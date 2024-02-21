oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g cli
$ kapps-charts-cli COMMAND
running command...
$ kapps-charts-cli (--version)
cli/0.0.0 darwin-x64 node-v21.6.1
$ kapps-charts-cli --help [COMMAND]
USAGE
  $ kapps-charts-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`kapps-charts-cli hello PERSON`](#kapps-charts-cli-hello-person)
* [`kapps-charts-cli hello world`](#kapps-charts-cli-hello-world)
* [`kapps-charts-cli help [COMMANDS]`](#kapps-charts-cli-help-commands)
* [`kapps-charts-cli plugins`](#kapps-charts-cli-plugins)
* [`kapps-charts-cli plugins:install PLUGIN...`](#kapps-charts-cli-pluginsinstall-plugin)
* [`kapps-charts-cli plugins:inspect PLUGIN...`](#kapps-charts-cli-pluginsinspect-plugin)
* [`kapps-charts-cli plugins:install PLUGIN...`](#kapps-charts-cli-pluginsinstall-plugin-1)
* [`kapps-charts-cli plugins:link PLUGIN`](#kapps-charts-cli-pluginslink-plugin)
* [`kapps-charts-cli plugins:uninstall PLUGIN...`](#kapps-charts-cli-pluginsuninstall-plugin)
* [`kapps-charts-cli plugins reset`](#kapps-charts-cli-plugins-reset)
* [`kapps-charts-cli plugins:uninstall PLUGIN...`](#kapps-charts-cli-pluginsuninstall-plugin-1)
* [`kapps-charts-cli plugins:uninstall PLUGIN...`](#kapps-charts-cli-pluginsuninstall-plugin-2)
* [`kapps-charts-cli plugins update`](#kapps-charts-cli-plugins-update)

## `kapps-charts-cli hello PERSON`

Say hello

```
USAGE
  $ kapps-charts-cli hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/some-things/dkp-kommander-application-charts/blob/v0.0.0/src/commands/hello/index.ts)_

## `kapps-charts-cli hello world`

Say hello world

```
USAGE
  $ kapps-charts-cli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ kapps-charts-cli hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/some-things/dkp-kommander-application-charts/blob/v0.0.0/src/commands/hello/world.ts)_

## `kapps-charts-cli help [COMMANDS]`

Display help for kapps-charts-cli.

```
USAGE
  $ kapps-charts-cli help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for kapps-charts-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.12/src/commands/help.ts)_

## `kapps-charts-cli plugins`

List installed plugins.

```
USAGE
  $ kapps-charts-cli plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ kapps-charts-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.2/src/commands/plugins/index.ts)_

## `kapps-charts-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ kapps-charts-cli plugins add plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ kapps-charts-cli plugins add

EXAMPLES
  $ kapps-charts-cli plugins add myplugin 

  $ kapps-charts-cli plugins add https://github.com/someuser/someplugin

  $ kapps-charts-cli plugins add someuser/someplugin
```

## `kapps-charts-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ kapps-charts-cli plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ kapps-charts-cli plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.2/src/commands/plugins/inspect.ts)_

## `kapps-charts-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ kapps-charts-cli plugins install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ kapps-charts-cli plugins add

EXAMPLES
  $ kapps-charts-cli plugins install myplugin 

  $ kapps-charts-cli plugins install https://github.com/someuser/someplugin

  $ kapps-charts-cli plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.2/src/commands/plugins/install.ts)_

## `kapps-charts-cli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ kapps-charts-cli plugins link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ kapps-charts-cli plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.2/src/commands/plugins/link.ts)_

## `kapps-charts-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ kapps-charts-cli plugins remove plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ kapps-charts-cli plugins unlink
  $ kapps-charts-cli plugins remove

EXAMPLES
  $ kapps-charts-cli plugins remove myplugin
```

## `kapps-charts-cli plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ kapps-charts-cli plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.2/src/commands/plugins/reset.ts)_

## `kapps-charts-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ kapps-charts-cli plugins uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ kapps-charts-cli plugins unlink
  $ kapps-charts-cli plugins remove

EXAMPLES
  $ kapps-charts-cli plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.2/src/commands/plugins/uninstall.ts)_

## `kapps-charts-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ kapps-charts-cli plugins unlink plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ kapps-charts-cli plugins unlink
  $ kapps-charts-cli plugins remove

EXAMPLES
  $ kapps-charts-cli plugins unlink myplugin
```

## `kapps-charts-cli plugins update`

Update installed plugins.

```
USAGE
  $ kapps-charts-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.2/src/commands/plugins/update.ts)_
<!-- commandsstop -->
