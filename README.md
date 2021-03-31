# coc-php-cs-fixer

[PHP CS Fixer](https://github.com/FriendsOfPHP/PHP-CS-Fixer) (PHP Coding Standards Fixer) extension for [coc.nvim](https://github.com/neoclide/coc.nvim)

## Install

`:CocInstall coc-php-cs-fixer`

## Note

Detects the `php-cs-fixer` command. They are prioritized in order from the top.

1. `php-cs-fixer.toolPath`
1. `vendor/bin/php-cs-fixer`
1. `php-cs-fixer` retrieved by the download feature (`:CocCommand php-cs-fixer.download`)
    - Windows: `~/AppData/Local/coc/extension/coc-php-cs-fixer-data/php-cs-fixer`
    - Other: `~/.config/coc/extension/coc-php-cs-fixer-data/php-cs-fixer`

If "1" and "2" above are not detected, the download feature will be executed (The prompt will be displayed)

## Usage

### Format document

**Run from CocCommand**:

- `:CocCommand php-cs-fixer.fix`

**If "php-cs-fixer.enableActionProvider" is "true" (default: true)**:

- `:call CocAction('codeAction')` -> Choose action: "Run: php-cs-fixer.fix"

**If "php-cs-fixer.enableFormatProvider" is "true" (default: false)**:

- `:call CocAction('format')`

## Configuration options

- `php-cs-fixer.enable`: Enable coc-php-cs-fixer extension, default: `true`
- `php-cs-fixer.enableActionProvider`: Enable codeAction provider, default: `true`
- `php-cs-fixer.enableFormatProvider`: Enable format provider, default: `false`
- `php-cs-fixer.toolPath`: The path to the php-cs-fixer tool (Absolute path), default: `""`
- `php-cs-fixer.useCache`: Use a cache file when fixing files (--using-cache), default: `false`
- `php-cs-fixer.allowRisky`: Determines whether risky rules are allowed (--allow-risky), default: `false`
- `php-cs-fixer.config`: Path to a `.php_cs` file (--config), default: `""`
- `php-cs-fixer.rules`: Rules to use when fixing files (--rules), e.g. `"@PSR12,@Symfony"`, default: `"@PSR2"`

## Commands

- `php-cs-fixer.fix`: Run php-cs-fixer fix
- `php-cs-fixer.download`: Download php-cs-fixer

## Code Actions

- `Run: php-cs-fixer.fix`

## TIPS

### Using with other coc extensions

Run from "Code Action" or ":CocCommand" is recommended because it can be used together without any problem even if another coc extension provides the formatting.

- For example, [coc-intelephense](https://github.com/yaegassy/coc-intelephense) + [coc-php-cs-fixer](https://github.com/yaegassy/coc-php-cs-fixer)
- For example, [coc-phpls](https://github.com/marlonfan/coc-phpls) + [coc-php-cs-fixer](https://github.com/yaegassy/coc-php-cs-fixer)

### Equivalent to "organize imports"

The [intelephense](https://github.com/bmewburn/vscode-intelephense) does not currently support "organize imports".

You can add a configuration equivalent to "organize imports" in `php-cs-fixer` to handle this.

**coc-settings.json**:

```jsonc
{
  // ...snip
  "php-cs-fixer.rules": "ordered_imports,no_unused_imports",
  // ...snip
}
```

## License

MIT

---

> This extension is built with [create-coc-extension](https://github.com/fannheyward/create-coc-extension)
