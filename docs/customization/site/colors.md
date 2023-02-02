<script setup>
  import SiteOutput from '../../../components/SiteOutput.vue';
  import Color from '../../../components/Color.vue'
</script>

# Customize Candidus colors

Candidus ships with two default colors and uses [Ghost's accent color](https://ghost.org/help/branding-settings/). All three can be customized under the design section in Ghost's admin panel.

:::tip GHOST ACCENT COLOR
Ghost's default color is not automatically changed when you upload the theme. <br/> You must manually change it to `#bdc5d4`
:::


## Customize this feature

You can change the default colors in your design settings:

<ClientOnly> <SiteOutput path="ghost/#/settings/design" /></ClientOnly>

- `Settings > Design > Site Wide > Primary/Secondary Color`
- `Settings > Design > Brand > Accent color`

## Default colors

We ship (and recommend) a combination of the following three colors:

<Color text="Primary Color: Dark Blue - Hex Code #3f4d63" color="#3f4d63"/>
<Color text="Secondary Color: Light Orange - Hex Code #f7c59f" color="#f7c59f"/>
<Color text="Ghost Accent Color: Light Blue - Hex Code #bdc5d4" color="#bdc5d4"/>

## Considerations when changing colors

The default pallette is optimized to be displayed with [Candidus' light and dark theme](../../customization/site/theming.md). If you decide to make changes, we recommend considering the following points:

- Consider [color theory](https://en.wikipedia.org/wiki/Color_theory). Use it to give visitors a sense of formality or a warm welcome
- Check how the colors play together with the theme's font family
- Have a look at [all sites of the theme](../../intro/pages.md) in light & dark mode




## How does it work?

All three colors variables are directly injected into the DOM. They're available on every page and operate independently from all other style parts of the theme.

:::tip MIND THE SYNTAX
Please note that this is Ghost Handlebars syntax. Implementing theming is commonly done by giving the root-element a special CSS - class or data-attribute
:::

This is the ruleset that incorporates Candidus' primary and secondary colors.

```hbs
<style>
  :root {
    {{#if @custom.primary_color}}
      --color-primary: {{@custom.primary_color}};
    {{/if}}
    {{#if @custom.secondary_color}}
      --color-secondary: {{@custom.secondary_color}};
    {{/if}}
  }
</style>
```

Ghost's accent color is injected in a very similar fashion:

```hbs
<style>
  :root {
      --ghost-accent-color: #bdc5d4;
  }
</style>
```
