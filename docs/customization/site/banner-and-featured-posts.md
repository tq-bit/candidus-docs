<script setup>
  import SiteOutput from '../../../components/SiteOutput.vue'
</script>

# Banner & featured posts

When you first see your new Ghost site, you'll see a big banner on the front page. This is your [publication's cover image](https://ghost.org/help/branding-settings/#cover-image). Candidus will remove the cover image in favour of any featured posts you have. In case this is not the behavior you wish, here's how to get your publication's cover image back.


:::info
This feature's default is set to **Featured Posts**. <br/><u>Note that you cannot have both, featured posts AND a cover image, active at the same time.</u>
:::

## Customize this feature

You can change the behavior of the cover image in your design settings:

<ClientOnly> <SiteOutput path="ghost/#/settings/design" /> </ClientOnly> `> Homepage > Select homepage banner style`

Options:

| Homepage banner style | Shows                    | Hides                    |
| --------------------- | ------------------------ | ------------------------ |
| Featured posts        | Slider of featured posts | Publication cover        |
| Homepage banner       | Publication cover        | Slider of featured posts |


## How does it work?

This feature incorporates the following ruleset:

- Check for the selection of 'Homepage banner style'
- Case 1: "Featured posts"
  - Get all featured posts
  - If there are no featured posts -> Gracefully fall back to homepage banner
  - Else, show a slideshow of all featured posts
- Case 2: Homepage banner
  - Show the homepage banner