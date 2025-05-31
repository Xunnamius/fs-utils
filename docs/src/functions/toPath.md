[**@-xun/fs**](../../README.md)

***

[@-xun/fs](../../README.md) / [src](../README.md) / toPath

# Function: toPath()

## Call Signature

> **toPath**(...`paths`): [`AbsolutePath`](../type-aliases/AbsolutePath.md)

Defined in: [src/index.ts:102](https://github.com/Xunnamius/fs-utils/blob/90c99b3d2da63f3141e91ac832d403aba1f7cec4/src/index.ts#L102)

This function joins all arguments together and normalizes the resulting path.

**WARNING:** during normalization, dot path components representing the
"current" working directory, i.e. `"."`, are **elided** from the resulting
path. For instance:

`toPath('./my/path/to/a/file') === 'my/path/to/a/file'`\
`toPath('my/path/./to/a/.file') === 'my/path/to/a/.file'`

### Parameters

#### paths

...\[[`AbsolutePath`](../type-aliases/AbsolutePath.md), ...(string \| Path)\[\]\]

### Returns

[`AbsolutePath`](../type-aliases/AbsolutePath.md)

### See

resolve

## Call Signature

> **toPath**(...`paths`): [`RelativePath`](../type-aliases/RelativePath.md)

Defined in: [src/index.ts:103](https://github.com/Xunnamius/fs-utils/blob/90c99b3d2da63f3141e91ac832d403aba1f7cec4/src/index.ts#L103)

This function joins all arguments together and normalizes the resulting path.

**WARNING:** during normalization, dot path components representing the
"current" working directory, i.e. `"."`, are **elided** from the resulting
path. For instance:

`toPath('./my/path/to/a/file') === 'my/path/to/a/file'`\
`toPath('my/path/./to/a/.file') === 'my/path/to/a/.file'`

### Parameters

#### paths

...\[[`RelativePath`](../type-aliases/RelativePath.md), ...(string \| Path)\[\]\]

### Returns

[`RelativePath`](../type-aliases/RelativePath.md)

### See

resolve

## Call Signature

> **toPath**(...`paths`): [`Path`](../type-aliases/Path.md)

Defined in: [src/index.ts:104](https://github.com/Xunnamius/fs-utils/blob/90c99b3d2da63f3141e91ac832d403aba1f7cec4/src/index.ts#L104)

This function joins all arguments together and normalizes the resulting path.

**WARNING:** during normalization, dot path components representing the
"current" working directory, i.e. `"."`, are **elided** from the resulting
path. For instance:

`toPath('./my/path/to/a/file') === 'my/path/to/a/file'`\
`toPath('my/path/./to/a/.file') === 'my/path/to/a/.file'`

### Parameters

#### paths

...(`string` \| [`Path`](../type-aliases/Path.md))[]

### Returns

[`Path`](../type-aliases/Path.md)

### See

resolve
