<script setup>
  import SiteOutput from '../../../components/SiteOutput.vue'
</script>

# Call to action

If your goal is to increase your subscriber count, a call to action is your most crucial element. Candidus allows you not only to customize its text, but also to add an image. If you do not wish to maintain memberships yourself, you can use one of your social profiles.


:::info
Currently supported social profiles are:
- Facebook
- Twitter (default)
- Dev.to
:::

CTA is displayed in three places:

| Page     | Position                                                     | Enabled                           |
| -------- | ------------------------------------------------------------ | --------------------------------- |
| Homepage | The homepage, next to all latest publications                | always                            |
| Author   | The author section, next to the author's latest publications | always                            |
| Post     | At the bottom of each post                                   | if you have subscriptions enabled |


## Customize this feature

You can change the behavior of the cover image in your design settings:

<ClientOnly> <SiteOutput path="ghost/#/settings/design" /> </ClientOnly>

- `> Site-wide > Subscription CTA text` (if subscriptions are enabled)
- `> Site-wide > Subscription card text` (if subscriptions are enabled)
- `> Site-wide > Subscription card text disabled` (if subscriptions are disabled)
- `> Site-wide > Subscription card image` (always)
- `> Homepage  > Select social media when subscription is disabled`  (if subscriptions are disabled)
- `> Homepage  > Social media url when subscription is disabled` (if subscriptions are disabled)

## How does it work?

The texts are straightforward. Depending on whether or not subscriptions are enabled, they will show a message for interested readers. The optional card image makes your CTA more visually appealing. You should choose one that goes well with your chosen [primary color](./colors.md).

For a blue theme, how about a starry night full of stars?

![](../../assets/candidus-feature-cta-card-background.png)

Make a red theme more fiery:

![](../../assets/candidus-feature-cta-card-background_red.png)

Add colors if you aim for a monochrome theme:

![](../../assets/candidus-feature-cta-card-background_dark.png)