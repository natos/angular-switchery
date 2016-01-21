![Build Status](https://travis-ci.org/natos/angular-switchery.svg?branch=master)

# Angular Switchery

[Switchery](https://github.com/abpetkov/switchery) AngularJS Directive. [Switchery](https://github.com/abpetkov/switchery) is a simple component that helps you turn your default HTML checkbox inputs into beautiful iOS 7 style switches in just few simple steps. You can easily customize switches, so that they match your design perfectly.

## TODO

* Improve tests

## Use

```js
var app = angular.module('myApp', ['angular.switchery']);
```

```html
<input type="checkbox" ng-switchery="{size: 'large', color: '#3ab1bb', secondaryColor: '#eeeeee'}">
```

## Credits

The code of this directive was written by [Natan Santolo](http://www.natansantolo.com) and uses [Switchery](https://github.com/abpetkov/switchery) created by [Alexander Petkov](https://github.com/abpetkov)

## License

The MIT License (MIT)

Copyright (c) 2013-2015 Natan Santolo

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.