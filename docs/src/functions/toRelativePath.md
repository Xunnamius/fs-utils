[**@-xun/fs**](../../README.md)

***

[@-xun/fs](../../README.md) / [src](../README.md) / toRelativePath

# Function: toRelativePath()

## Call Signature

> **toRelativePath**(`from`, `to`): [`RelativePath`](../type-aliases/RelativePath.md)

Defined in: [src/index.ts:69](https://github.com/Xunnamius/fs-utils/blob/90c99b3d2da63f3141e91ac832d403aba1f7cec4/src/index.ts#L69)

This function returns the calculated [RelativePath](../type-aliases/RelativePath.md) from `from` to
`to`.

If `from === to` and/or `from` and `to` point to the same location, the empty
string `''` is returned. Otherwise, if `to`/`from` are not
[AbsolutePath](../type-aliases/AbsolutePath.md)s, `process.cwd()` will be prepended to them before
calculation.

Note that the returned path will never start with `./` (this prefix is
elided), but may start with
`../`.

### Parameters

#### from

`string`

#### to

`string`

### Returns

[`RelativePath`](../type-aliases/RelativePath.md)

### See

resolve

## Call Signature

> **toRelativePath**(`to`): [`RelativePath`](../type-aliases/RelativePath.md)

Defined in: [src/index.ts:79](https://github.com/Xunnamius/fs-utils/blob/90c99b3d2da63f3141e91ac832d403aba1f7cec4/src/index.ts#L79)

This function returns `to` as a [RelativePath](../type-aliases/RelativePath.md).

If `to` is already relative and/or is the empty string (`""`), it is returned
as-is without any modifications. Otherwise, a [RelativePath](../type-aliases/RelativePath.md) from
`process.cwd()` to `to` will be returned.

### Parameters

#### to

`string`

### Returns

[`RelativePath`](../type-aliases/RelativePath.md)

### See

resolve
