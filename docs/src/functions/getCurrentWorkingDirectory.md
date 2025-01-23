[**@-xun/fs**](../../README.md)

***

[@-xun/fs](../../README.md) / [src](../README.md) / getCurrentWorkingDirectory

# Function: getCurrentWorkingDirectory()

> **getCurrentWorkingDirectory**(): [`AbsolutePath`](../type-aliases/AbsolutePath.md)

Defined in: [src/index.ts:170](https://github.com/Xunnamius/fs-utils/blob/31e13bfb0e388ce1c2e51e4c2a50e9638e833b81/src/index.ts#L170)

This function returns the **current working directory**. It is functionally
identical to calling `process.cwd()`.

This function exists because tools like NPM will change the current working
directory to wherever `package.json` or `node_modules` is. While sensible,
this behavior can be surprising, especially if we're expecting to get the
actual working directory from where the script was actually executed.

This function and its counterpart [getInitialWorkingDirectory](getInitialWorkingDirectory.md) exist to
surface this behavior and make it clear when you'll get the "current working
directory" or the actual working directory from where the script was
executed.

## Returns

[`AbsolutePath`](../type-aliases/AbsolutePath.md)

the result of calling `process.cwd()` (current working directory)

## See

https://docs.npmjs.com/cli/v9/commands/npm-run-script#description
