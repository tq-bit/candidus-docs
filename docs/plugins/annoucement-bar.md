<script setup>
  import SocialIcons from '../../components/Socialicons.vue'
  import SiteOutput from '../../components/SiteOutput.vue'
</script>

# Annoucement bar

Have you just created an outstanding article you would like to highlight even above your featured posts? With Candidus, you can now do that using an annoucement bar.
It's a standalone element which can be customized using [Ghost's Code Injection](https://ghost.org/changelog/post-code-injection/)

<ClientOnly> <SiteOutput path="ghost/#/settings/code-injection"  /></ClientOnly>

:::tip ANNOUCEMENTS
Annoucement bars are famous in online-shops and -communities to annouce events or new content. They're often one-liners with a link/CTA at the end
:::

The following section describes how you can implement your own annoucement bar and create a policy on how often it will be shown to a user who already closed it once.

## Add the annoucement bar to your page

The annoucement bar can be added using Candidus' Plugin System. The generic structure looks like this:

> You can find a reference to the properties to customize [at the end of this page](#property-overview)

```html
<script>
window.CANDIDUS = {
  HOMEPAGE_ANNOUCEMENT_BAR: {
  	html: "<p>I've added some super cool stuff to my store! <a style='color: #eee' href='#'>Check it out here</a></p>",
    barColor: "primary",    // theme, primary, secondary, accent
    textColor: "#fabbaf",   // any hex or RBG color of your liking
    remainClosed: "never",  // never, day, week, always
    delayToDisplay: 1000    // in miliseconds
  }
  // ... other plugin options
}
</script>
```

## Example

## Property overview

| Name         | Purpose                                                         | Values                            | Default |
| ------------ | --------------------------------------------------------------- | --------------------------------- | ------- |
| html         | The HTML content to show inside the annoucement bar             | any valid HTML                    | ""      |
| barColor     | The background color of the annoucement bar                     | theme, primary, secondary, accent | theme   |
| textColor    | The color of the text and the closing icon.                     | any valid hex or RBG string       | white   |
| remainClosed | Interval in which annoucements are hidden in consecutive visits | never, day, week, always          | always  |