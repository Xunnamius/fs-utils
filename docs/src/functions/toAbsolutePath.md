[**@-xun/fs**](../../README.md)

***

[@-xun/fs](../../README.md) / [src](../README.md) / toAbsolutePath

# Function: toAbsolutePath()

> **toAbsolutePath**(...`paths`): [`AbsolutePath`](../type-aliases/AbsolutePath.md)

Defined in: [src/index.ts:45](https://github.com/Xunnamius/fs-utils/blob/90c99b3d2da63f3141e91ac832d403aba1f7cec4/src/index.ts#L45)

This function resolves the right-most argument (AKA `to`) to an
[AbsolutePath](../type-aliases/AbsolutePath.md).

If `to` isn't already absolute, the remaining arguments are prepended in
right-to-left order until an absolute path is formed. If, after prepending
all other arguments, no absolute path is formed, the current working
directory is then prepended.

The resulting path is normalized and, unless the resulting path refers to the
root directory, trailing slashes are removed.

## Parameters

### paths

...`string`[]

A sequence of paths or path segments.

## Returns

[`AbsolutePath`](../type-aliases/AbsolutePath.md)

## See

resolve
