<script setup>
  import SiteInput from '../../../components/SiteInput.vue';
  import Color from '../../../components/Color.vue'
</script>

# Customize Candidus colors

The default Candidus theme ships with two default colors. It also [Ghost's accent colour](https://ghost.org/help/branding-settings/) for smaller elements, such as buttons and tags. All three can be customized under the design section in Ghost's admin panel.

- `Settings > Design > Site Wide > Primary/Secondary Color`
- `Settings > Design > Brand > Accent color`

<SiteInput path="ghost/#/settings/design"></SiteInput>

## Considerations when changing colors

The default pallette is optimized to be displayed with [Candidus' light and dark theme](../../customization/theming.md). If you decide to make changes, we recommend considering the following points:

- Consider [color theory](https://en.wikipedia.org/wiki/Color_theory). Use it to give visitors a sense of formality or a warm welcome
- Check how the colors play together with the theme's font family
- Have a look at [all sites of the theme](../../intro/pages.md) in light & dark mode

## Default colors

We ship (and recommend) a combination of the following three colors:

<Color text="Primary Color: Dark Blue - Hex Code #3f4d63" color="#3f4d63"/>
<Color text="Secondary Color: Light Orange - Hex Code #f7c59f" color="#f7c59f"/>
<Color text="Ghost Accent Color: Light Blue - Hex Code #bdc5d4" color="#bdc5d4"/>