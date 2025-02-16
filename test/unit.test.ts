// * These tests ensure the exported interface under test functions as expected.

import { relative } from 'node:path';

import {
  getCurrentWorkingDirectory,
  isAbsolutePath,
  isRelativePath,
  toAbsolutePath,
  toDirname,
  toPath,
  toRelativePath
} from 'universe';

import type { AbsolutePath, RelativePath } from 'universe';

const cwd = getCurrentWorkingDirectory();

describe('::toAbsolutePath', () => {
  it('returns an absolute path', () => {
    expect.hasAssertions();

    expect(toAbsolutePath('/pretend/it/does/exist')).toBe('/pretend/it/does/exist');
    expect(toAbsolutePath('pretend/it/does/exist')).toBe(`${cwd}/pretend/it/does/exist`);
  });
});

describe('::toRelativePath', () => {
  it('returns a relative path from a single absolute argument path using cwd', () => {
    expect.hasAssertions();

    expect(toRelativePath(`${cwd}/pretend/it/does/exist`)).toBe('pretend/it/does/exist');
  });

  it('returns a single relative argument path as-is', () => {
    expect.hasAssertions();

    expect(toRelativePath('pretend/it/does/exist')).toBe('pretend/it/does/exist');
    expect(toRelativePath('pretend')).toBe('pretend');
  });

  it('returns a relative path from two arguments', () => {
    expect.hasAssertions();

    expect(toRelativePath('/a/b/c/x', '/a/b/1/2/3')).toBe('../../1/2/3');
    expect(toRelativePath('/a/b/1/2/3', '/a/b/c/x')).toBe('../../../c/x');
    expect(toRelativePath('/a/b/1/2/3', /* `${cwd}/` + */ 'a/b/c/x')).toBe(
      relative('/a/b/1/2/3', '/') + `${cwd}/a/b/c/x`
    );
    expect(toRelativePath('pretend/it', 'does/exist')).toBe(
      toRelativePath(`${cwd}/pretend/it`, 'does/exist')
    );

    // * Edge cases

    expect(toRelativePath('', '/a/b/1/2/3')).toBe(
      relative(getCurrentWorkingDirectory(), '/') + '/a/b/1/2/3'
    );

    expect(toRelativePath('/a/b/1/2/3', '')).toBe(relative('/a/b/1/2/3', '/') + cwd);
    expect(toRelativePath('', '1/2/3')).toBe('1/2/3');
    expect(toRelativePath('1/2/3', '')).toBe('../../..');
    expect(toRelativePath('1/2', '1/2/3/..')).toBe('');
  });

  it('returns "" when from === to', () => {
    expect.hasAssertions();
    expect(toRelativePath('/pretend', '/pretend')).toBe('');
  });

  it('returns "" when from points to to', () => {
    expect.hasAssertions();
    expect(toRelativePath('1/2/3/..', '1/2')).toBe('');
  });

  it('returns "" when passed ("", "")', () => {
    expect.hasAssertions();
    expect(toRelativePath('', '')).toBe('');
  });

  it('returns "" when passed ("")', () => {
    expect.hasAssertions();
    expect(toRelativePath('')).toBe('');
  });
});

describe('::toPath', () => {
  it('returns an AbsolutePath or RelativePath or Path depending on inputs', () => {
    expect.hasAssertions();

    expect(toPath('pretend/it/does/exist')).toBe('pretend/it/does/exist');
    expect(toPath('pretend', 'it', 'does', 'exist')).toBe('pretend/it/does/exist');
    expect(toPath('/', 'pretend', 'it', 'does', 'exist')).toBe('/pretend/it/does/exist');

    const p1: AbsolutePath = toPath('something' as AbsolutePath, 'here');
    // @ts-expect-error: should fail or something is wrong
    const p2: RelativePath = toPath('something' as AbsolutePath, 'here');
    // @ts-expect-error: should fail or something is wrong
    const p3: AbsolutePath = toPath('something' as RelativePath, 'here');
    const p4: RelativePath = toPath('something' as RelativePath, 'here');
    const p5: AbsolutePath = toPath('something' as AbsolutePath, 'here' as RelativePath);
    const p6: RelativePath = toPath('something' as RelativePath, 'here' as AbsolutePath);

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    void p1, p2, p3, p4, p5, p6;
  });

  it('elides unnecessary dot path components', () => {
    expect.hasAssertions();

    expect(toPath('./pretend/it/does/exist')).toBe('pretend/it/does/exist');
    expect(toPath('./pretend/./it/does/.exist')).toBe('pretend/it/does/.exist');
    expect(toPath('./pretend/./it/../does/.exist')).toBe('pretend/does/.exist');
  });

  it('returns "." when receiving empty arguments', () => {
    expect.hasAssertions();
    expect(toPath('')).toBe('.');
    expect(toPath('', '')).toBe('.');
  });
});

describe('::toDirname', () => {
  it('returns an AbsolutePath or RelativePath or Path depending on inputs', () => {
    expect.hasAssertions();

    expect(toDirname('pretend/it/does/exist')).toBe('pretend/it/does');
    expect(toDirname(toPath('pretend', 'it', 'does', 'exist'))).toBe('pretend/it/does');
    expect(toDirname(toAbsolutePath('/', 'pretend', 'it', 'does', 'exist'))).toBe(
      '/pretend/it/does'
    );

    const p1: AbsolutePath = toDirname('/something/here' as AbsolutePath);
    // @ts-expect-error: should fail or something is wrong
    const p2: RelativePath = toDirname('something/here' as AbsolutePath);
    // @ts-expect-error: should fail or something is wrong
    const p3: AbsolutePath = toDirname('something/here' as RelativePath);
    const p4: RelativePath = toDirname('something/here' as RelativePath);
    const p5: AbsolutePath = toDirname(
      toPath('/something' as AbsolutePath, 'here' as RelativePath)
    );
    const p6: RelativePath = toDirname(
      toPath('something' as RelativePath, 'here' as AbsolutePath)
    );

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    void p1, p2, p3, p4, p5, p6;
  });
});

describe('::isAbsolutePath', () => {
  it('returns true iff the given path is an AbsolutePath', () => {
    expect.hasAssertions();

    expect(isAbsolutePath('')).toBeFalse();
    expect(isAbsolutePath('.')).toBeFalse();
    expect(isAbsolutePath('..')).toBeFalse();
    expect(isAbsolutePath('./')).toBeFalse();
    expect(isAbsolutePath('../')).toBeFalse();
    expect(isAbsolutePath('pretend/it/does/exist')).toBeFalse();
    expect(isAbsolutePath('/pretend/it/does/exist')).toBeTrue();
    expect(isAbsolutePath('/')).toBeTrue();
  });
});

describe('::isRelativePath', () => {
  it('returns true iff the given path is an AbsolutePath', () => {
    expect.hasAssertions();

    expect(isRelativePath('')).toBeTrue();
    expect(isRelativePath('.')).toBeTrue();
    expect(isRelativePath('..')).toBeTrue();
    expect(isRelativePath('./')).toBeTrue();
    expect(isRelativePath('../')).toBeTrue();
    expect(isRelativePath('pretend/it/does/exist')).toBeTrue();
    expect(isRelativePath('/pretend/it/does/exist')).toBeFalse();
    expect(isRelativePath('/')).toBeFalse();
  });
});
