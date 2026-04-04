# Lateralus Grammar

TextMate grammar for the [Lateralus](https://github.com/bad-antics/lateralus-lang) programming language.

This repository provides syntax highlighting grammars for editors and tools that support TextMate-compatible grammars, including **VS Code**, **Sublime Text**, **Atom**, and **GitHub** (via [Linguist](https://github.com/github-linguist/linguist)).

## Grammars

| Grammar | Scope | File Extensions |
|---------|-------|-----------------|
| **Lateralus** | `source.ltl` | `.ltl` |
| **Lateralus Assembly** | `source.ltasm` | `.ltasm` |
| **Lateralus Markup** | `text.ltlm` | `.ltlm`, `.ltlml` |
| **Lateralus Config** | `source.ltlcfg` | `.ltlcfg` |
| **Lateralus Notebook** | `source.ltlnb` | `.ltlnb` |

## Language Overview

Lateralus is a statically-typed systems programming language featuring:

- Pipeline operators (`|>`, `~>`, `=>`)
- Pattern matching with algebraic data types
- Hindley-Milner type inference
- Async/await concurrency
- `struct`, `enum`, `impl`, `interface` declarations
- Zero-dependency Python toolchain with 7 backends (VM, C, LLVM, WASM, JVM, CLR, native)

## Samples

The `samples/` directory contains representative real-world Lateralus code for classifier training and testing.

## Usage

### VS Code

Install the [Lateralus extension](https://marketplace.visualstudio.com/items?itemName=lateralus.lateralus-lang) from the VS Code Marketplace.

### GitHub Linguist

This grammar is structured for eventual inclusion in [github-linguist/linguist](https://github.com/github-linguist/linguist). Once accepted, GitHub will natively recognize `.ltl` files with syntax highlighting and language statistics.

## License

[MIT](LICENSE)
