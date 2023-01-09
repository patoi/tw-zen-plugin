# Tailwind Zen intersection animation plugin

Create beautiful intersection animation with TW Zen.

It can be used with frameworks - SvelteKit, Next.js, etc. - and with simple HTML pages.

- Automatically suspends the animation, when element is not intersected, saves energy.
- Turns off animations in reduced motion mode.
- Supports responsive design.
- There is no third-party dependency.
- Free and Open Source.

Check out the https://tw-zen-site.vercel.app/ page.

`pnpm add -D @patoi/tw-zen-plugin` or `npm install -D  @patoi/tw-zen-plugin`

## Configuration

Before using it, you need to add to `tailwind.config.js` the plugin and the safelist:

```
plugins: [require('@patoi/tw-zen-plugin')],
safelist: ['zen--suspend', 'zen--off', 'zen--reduced']
```

## Features

Add classes to block-level elements.
When block-level element intersected with view, animation has triggered.

**Note** that padding increases the size of the block-level element, so the content may not be visible on the screen yet, but the animation will begin.

- `zen-fade` fade-in content
- `zen-pop-up` content moves up with fade-in
- `zen-from-left` content moves from left to right with fade-in
- `zen-from-right` content moves from right to left with fade-in
- `zen-spin-forever` constantly rotating content

For example:

```html
<!-- no-framework and Svelte -->
<div class="zen-once zen-pop-up">...</div>
<!-- react -->
<Image className="zen-pause zen-spin-forever" />
```

**If you are not using a framework, just HTML/JS,** then put the script at the end of the HTML page before the html element:

```html
<script src="https://unpkg.com/@patoi/tw-zen-plugin@1.1.1/init.min.js" />
```

Check https://www.npmjs.com/package/@patoi/tw-zen-plugin page for latest version number.

All animations will repeat constantly unless you add `zen-once`, for example: `zen-once zen-pop-up` The use of `zen-once` is recommended.

The `zen-spin-forever` rotates the content forever, even when it is not on the screen. If you want to suspend the rotation (saving energy), then add `zen-pause` class, `zen-pause zen-spin-forever`

**Breakpoint handling (except `zen-spin-forever`):**

- Turn off animation with `max-lg:zen--off`, it will not be animated below `lg` size.
- Turn off animation with `lg:zen--off`, it will not be animated above `lg` size.

In case of `zen-spin-forever` (or `zen-custom-animation`, see later) just write `max-lg:zen-spin-forever` or `lg:zen-spin-forever`

```html
<div class="zen-once zen-pop-up max-lg:zen--off">...</div>
```

**Tailwind way to customize:**

```html
  <!-- delaying animation with 5s -->
  <div class="zen-fade zen-once delay-[5000ms]">...</div>
  <!-- animation's duration is 2s -->
  <div class="zen-fade zen-once duration-[2000ms]">...</div>
```

**To extend animations,** start your style with `zen-` in your base css file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  /* fast rotating animation */
  .zen-custom-animation {
    @apply animate-[spin_2s_linear_infinite]
  }
}
```

## Starting intersection plugin

**Don't forget to start the intersection handler in the code if you're using a framework! In plain HTML codes it starts automatically.**

There are examples for using with frameworks.

- Next.js example: https://github.com/patoi/tw-zen-example-nextjs
- SvelteKit example: https://github.com/patoi/tw-zen-example-sveltekit
