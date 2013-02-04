# Socialfan

Animated, pop-out fan of links to personal social real-estate. Just me playing with jquery, CSS3 animations, and gravatar.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/mchail/socialfan/master/dist/socialfan.min.js
[max]: https://raw.github.com/mchail/socialfan/master/dist/socialfan.js

Download the [css](https://raw.github.com/mchail/socialfan/master/src/socialfan.css)

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/socialfan.min.js"></script>
<link rel="stylesheet" href="src/socialfan.css">
<script>
	$(document).ready(function() {
		$('.socialfan').socialfan({
			email: "mchail@gmail.com",
			services: {
				github: "mchail",
				linkedIn: "mchail",
				facebook: "smchail",
				twitter: "smchail"
			}
			});
	});
</script>
```

## Examples
[demo](http://mchail.github.com/socialfan)

## License
Copyright (c) 2013 Steve McHail  
Licensed under the MIT, GPL licenses.
