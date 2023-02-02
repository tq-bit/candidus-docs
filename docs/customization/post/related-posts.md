<script setup>
  import SiteOutput from '../../../components/SiteOutput.vue'
</script>

# Related posts

Keep your users engaged by suggesting additional posts after they're done reading. The three latest articles of either the primary tag of the current post or the author will be displayed right under the posts's primary content (or the social bar, if it's enabled).

:::info
This feature is **enabled** by default.
:::

## Activate this feature

This feature can be enabled in your Ghost design settings under

<ClientOnly> <SiteOutput path="ghost/#/settings/design" /></ClientOnly>  `> Posts > Show related posts`

## How does it work?

The type of posts suggested is determined by the main tag of the current article.

> If the current article is tagged with 'Javascript', all suggested posts will have a primary tag of Javascript

If no primary tag is available, three articles from the same author will be shown instead.