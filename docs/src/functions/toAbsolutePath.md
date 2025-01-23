[**@-xun/fs**](../../README.md)

***

[@-xun/fs](../../README.md) / [src](../README.md) / toAbsolutePath

# Function: toAbsolutePath()

> **toAbsolutePath**(...`paths`): [`AbsolutePath`](../type-aliases/AbsolutePath.md)

Defined in: [src/index.ts:45](https://github.com/Xunnamius/fs-utils/blob/31e13bfb0e388ce1c2e51e4c2a50e9638e833b81/src/index.ts#L45)

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
