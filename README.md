# Tailwind Zen intersection animation plugin

Create beautiful intersection animation with TW Zen.

It can be used with frameworks - SvelteKit, Next.js, etc. - and with simple HTML pages.

- Automatically suspends the animation, when element is not intersected, saves energy.
- Turns off animations in reduced motion mode.
- Supports responsive design.
- There is no third-party dependency.
- Free and Open Source.

Check out the <@TODO URL is here>

## Configuration

Before using it, you need to add to `tailwind.config.js` the plugin and the safelist:

```
plugins: [require('tw-zen')],
safelist: ['zen--suspend', 'zen--off', 'zen--reduced']
```

## Features

- `zen-fade` fade-in content
- `zen-pop-up` content moves up with fade-in
- `zen-from-left` content moves from left to right with fade-in
- `zen-from-right` content moves from right to left with fade-in
- `zen-spin-forever` constantly rotating content

For example:

```html
<!-- pure HTML, and Svelte -->
<a class="zen-once zen-pop-up">
	<!-- react -->
	<image className="zen-pause zen-spin-forever"></image
></a>
```

All animations will repeat constantly unless you add `zen-once`, for example: `zen-once zen-pop-up` The use of `zen-once` is recommended.

The `zen-spin-forever` rotates the content forever, even when it is not on the screen. If you want to suspend the rotation (saving energy), then add `zen-pause` class, `zen-pause zen-spin-forever`

Breakpoint handling:

- Turn off animation with `max-lg:zen--off`, it will not be animated below `lg` size.
- Turn off animation with `lg:zen--off`, it will not be animated above `lg` size.

```html
<a class="zen-once zen-pop-up max-lg:zen--off"></a>
```

## Starting intersection plugin

**Don't forget to start the intersection handler in the code if you're using a framework! In plain HTML codes it starts automatically.**

There are examples for using with frameworks.

- Next.js example: https://github.com/patoi/tw-zen-example-nextjs
- SvelteKit example: https://github.com/patoi/tw-zen-example-sveltekit
