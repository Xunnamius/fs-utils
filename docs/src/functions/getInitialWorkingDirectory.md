[**@-xun/fs**](../../README.md)

***

[@-xun/fs](../../README.md) / [src](../README.md) / getInitialWorkingDirectory

# Function: getInitialWorkingDirectory()

> **getInitialWorkingDirectory**(): [`AbsolutePath`](../type-aliases/AbsolutePath.md)

Defined in: [src/index.ts:193](https://github.com/Xunnamius/fs-utils/blob/90c99b3d2da63f3141e91ac832d403aba1f7cec4/src/index.ts#L193)

This function returns the **initial working directory**. This is the value of
`process.cwd()` _before any NPM or NPM-like tooling changed the working
directory_.

This function exists because tools like NPM will change the current working
directory to wherever `package.json` or `node_modules` is. While sensible,
this behavior can be surprising, especially if we're expecting to get the
actual working directory from where the script was actually executed.

This function and its counterpart [getCurrentWorkingDirectory](getCurrentWorkingDirectory.md) exist to
surface this behavior and make it clear when you'll get the "current working
directory" or the actual working directory from where the script was
executed.

## Returns

[`AbsolutePath`](../type-aliases/AbsolutePath.md)

the actual working directory from where the script was executed

## See

https://docs.npmjs.com/cli/v9/commands/npm-run-script#description
