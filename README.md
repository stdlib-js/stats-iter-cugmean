<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

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

# itercugmean

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an [iterator][mdn-iterator-protocol] which iteratively computes a cumulative [geometric mean][geometric-mean].

<section class="intro">

The [geometric mean][geometric-mean] is defined as the nth root of a product of _n_ numbers.

<!-- <equation class="equation" label="eq:geometric_mean" align="center" raw="\biggl( \prod_{i=0}^{n-1} \biggr)^{\frac{1}{n}} = \sqrt[n]{x_0 x_1 \cdots x_{n-1}}" alt="Equation for the geometric mean."> -->

```math
\biggl( \prod_{i=0}^{n-1} \biggr)^{\frac{1}{n}} = \sqrt[n]{x_0 x_1 \cdots x_{n-1}}
```

<!-- <div class="equation" align="center" data-raw-text="\biggl( \prod_{i=0}^{n-1} \biggr)^{\frac{1}{n}} = \sqrt[n]{x_0 x_1 \cdots x_{n-1}}" data-equation="eq:geometric_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@b38de7dff069561da1cb4710c85fc74433b7eaaa/lib/node_modules/@stdlib/stats/iter/cugmean/docs/img/equation_geometric_mean.svg" alt="Equation for the geometric mean.">
    <br>
</div> -->

<!-- </equation> --> 

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-iter-cugmean
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var itercugmean = require( '@stdlib/stats-iter-cugmean' );
```

#### itercugmean( iterator )

Returns an [iterator][mdn-iterator-protocol] which iteratively computes a cumulative [geometric mean][geometric-mean].

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

var arr = array2iterator( [ 2.0, 1.0, 3.0, 7.0, 5.0 ] );
var it = itercugmean( arr );

var v = it.next().value;
// returns 2.0

v = it.next().value;
// returns ~1.41

v = it.next().value;
// returns ~1.82

v = it.next().value;
// returns ~2.55

v = it.next().value;
// returns ~2.91
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an iterated value is non-numeric (including `NaN`) or negative, the function returns `NaN` for **all** future iterations. If non-numeric and/or negative iterated values are possible, you are advised to provide an [`iterator`][mdn-iterator-protocol] which type checks and handles such values accordingly.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var runif = require( '@stdlib/random-iter-uniform' );
var itercugmean = require( '@stdlib/stats-iter-cugmean' );

// Create an iterator for generating uniformly distributed pseudorandom numbers:
var rand = runif( 0.0, 10.0, {
    'seed': 1234,
    'iter': 100
});

// Create an iterator for iteratively computing a cumulative geometric mean:
var it = itercugmean( rand );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( typeof v.value === 'number' ) {
        console.log( 'gmean: %d', v.value );
    }
    if ( v.done ) {
        break;
    }
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-iter/cuhmean`][@stdlib/stats/iter/cuhmean]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a cumulative harmonic mean.</span>
-   <span class="package-name">[`@stdlib/stats-iter/cumean`][@stdlib/stats/iter/cumean]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a cumulative arithmetic mean.</span>

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

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-iter-cugmean.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-iter-cugmean

[test-image]: https://github.com/stdlib-js/stats-iter-cugmean/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-iter-cugmean/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-iter-cugmean/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-iter-cugmean?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-iter-cugmean.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-iter-cugmean/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-iter-cugmean/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-iter-cugmean/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-iter-cugmean/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-iter-cugmean/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-iter-cugmean/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-iter-cugmean/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-iter-cugmean/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-iter-cugmean/main/LICENSE

[geometric-mean]: https://en.wikipedia.org/wiki/Geometric_mean

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/stats/iter/cuhmean]: https://github.com/stdlib-js/stats-iter-cuhmean

[@stdlib/stats/iter/cumean]: https://github.com/stdlib-js/stats-iter-cumean

<!-- </related-links> -->

</section>

<!-- /.links -->
