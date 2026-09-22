<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# cunitspace

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Fill a single-precision complex floating-point strided array with linearly spaced numeric elements which increment by `1` starting from a specified value.



<section class="usage">

## Usage

To use in Observable,

```javascript
cunitspace = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-cunitspace@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var cunitspace = require( 'path/to/vendor/umd/blas-ext-base-cunitspace/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-cunitspace@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.cunitspace;
})();
</script>
```

#### cunitspace( N, start, x, strideX )

Fills a single-precision complex floating-point strided array with linearly spaced numeric elements which increment by `1` starting from a specified value.

```javascript
var Complex64 = require( '@stdlib/complex-float32-ctor' );
var Complex64Array = require( '@stdlib/array-complex64' );

var x = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

cunitspace( x.length, new Complex64( 3.0, 0.0 ), x, 1 );
// x => <Complex64Array>[ 3.0, 0.0, 4.0, 0.0, 5.0, 0.0, 6.0, 0.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **start**: starting [`Complex64`][@stdlib/complex/float32/ctor] value.
-   **x**: input [`Complex64Array`][@stdlib/array/complex64].
-   **strideX**: stride length.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to fill every other element:

<!-- eslint-disable max-len -->

```javascript
var Complex64 = require( '@stdlib/complex-float32-ctor' );
var Complex64Array = require( '@stdlib/array-complex64' );

var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

cunitspace( 3, new Complex64( 3.0, 0.0 ), x, 2 );
// x => <Complex64Array>[ 3.0, 0.0, 3.0, 4.0, 4.0, 0.0, 7.0, 8.0, 5.0, 0.0, 11.0, 12.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable max-len -->

```javascript
var Complex64 = require( '@stdlib/complex-float32-ctor' );
var Complex64Array = require( '@stdlib/array-complex64' );

// Initial array...
var x0 = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

// Create an offset view...
var x1 = new Complex64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Fill every other element...
cunitspace( 3, new Complex64( 3.0, 0.0 ), x1, 2 );
// x0 => <Complex64Array>[ 1.0, 2.0, 3.0, 0.0, 5.0, 6.0, 4.0, 0.0, 9.0, 10.0, 5.0, 0.0 ]
```

#### cunitspace.ndarray( N, start, x, strideX, offsetX )

Fills a single-precision complex floating-point strided array with linearly spaced numeric elements which increment by `1` starting from a specified value using alternative indexing semantics.

```javascript
var Complex64 = require( '@stdlib/complex-float32-ctor' );
var Complex64Array = require( '@stdlib/array-complex64' );

var x = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

cunitspace.ndarray( x.length, new Complex64( 3.0, 0.0 ), x, 1, 0 );
// x => <Complex64Array>[ 3.0, 0.0, 4.0, 0.0, 5.0, 0.0, 6.0, 0.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to access only the last three elements:

<!-- eslint-disable max-len -->

```javascript
var Complex64 = require( '@stdlib/complex-float32-ctor' );
var Complex64Array = require( '@stdlib/array-complex64' );

var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

cunitspace.ndarray( 3, new Complex64( 3.0, 0.0 ), x, 1, x.length-3 );
// x => <Complex64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 3.0, 0.0, 4.0, 0.0, 5.0, 0.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `x` unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-ctor@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-cunitspace@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var xbuf = discreteUniform( 20, -100, 100, {
    'dtype': 'float32'
});
var x = new Complex64Array( xbuf.buffer );
console.log( x );

cunitspace( x.length, new Complex64( 3.0, 0.0 ), x, 1 );
console.log( x );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-cunitspace.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-cunitspace

[test-image]: https://github.com/stdlib-js/blas-ext-base-cunitspace/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-cunitspace/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-cunitspace/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-cunitspace?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-cunitspace.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-cunitspace/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-cunitspace/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-cunitspace/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-cunitspace/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-cunitspace/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-cunitspace/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-cunitspace/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-cunitspace/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-cunitspace/main/LICENSE

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64/tree/umd

[@stdlib/complex/float32/ctor]: https://github.com/stdlib-js/complex-float32-ctor/tree/umd

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
