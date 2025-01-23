[**@-xun/fs**](../../README.md)

***

[@-xun/fs](../../README.md) / [src](../README.md) / toDirname

# Function: toDirname()

## Call Signature

> **toDirname**(`path`): [`AbsolutePath`](../type-aliases/AbsolutePath.md)

Defined in: [src/index.ts:114](https://github.com/Xunnamius/fs-utils/blob/31e13bfb0e388ce1c2e51e4c2a50e9638e833b81/src/index.ts#L114)

This function returns the path to `path`'s parent directory.

### Parameters

#### path

[`AbsolutePath`](../type-aliases/AbsolutePath.md)

### Returns

[`AbsolutePath`](../type-aliases/AbsolutePath.md)

### See

dirname

## Call Signature

> **toDirname**(`path`): [`RelativePath`](../type-aliases/RelativePath.md)

Defined in: [src/index.ts:121](https://github.com/Xunnamius/fs-utils/blob/31e13bfb0e388ce1c2e51e4c2a50e9638e833b81/src/index.ts#L121)

This function returns the path to `path`'s parent directory. `"."` is returned
if no non-root parent is derivable.

### Parameters

#### path

[`RelativePath`](../type-aliases/RelativePath.md)

### Returns

[`RelativePath`](../type-aliases/RelativePath.md)

### See

dirname

## Call Signature

> **toDirname**(`path`): [`Path`](../type-aliases/Path.md)

Defined in: [src/index.ts:128](https://github.com/Xunnamius/fs-utils/blob/31e13bfb0e388ce1c2e51e4c2a50e9638e833b81/src/index.ts#L128)

This function returns the path to `path`'s parent directory. `"."` is returned
if no non-root parent is derivable.

### Parameters

#### path

`string` | [`Path`](../type-aliases/Path.md)

### Returns

[`Path`](../type-aliases/Path.md)

### See

dirname