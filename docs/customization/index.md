<script setup>
  import SiteInput from '../../components/SiteInput.vue';
  import SiteOutput from '../../components/SiteOutput.vue';
</script>

# Customize your site

During the development of Candidus, we asked ourselves: What would a blog look like we'd like to read and publish on? We've also looked closely at several other publications to get a clear picture of what works well in the real world and what doesn't.

The result was a literal potpourri of fonts, colors and features.

## Enter your blog's URL

If you haven't done it already in the [welcome page](/), you can enter your blog's domain in the input field below. This documentation will then automatically create links to the relevant settings.


<SiteInput />

Example: <SiteOutput path="ghost/#/settings/design" />

## About Candidus customization

### Spotlight the content, don't steal the show

We want to highlight the written content rather than its surroundings. As a consequence, many of Candidus' features are disabled by default to eliminate possibly unwanted distractions and optimize performance.

At the same time, we wanted to go far beyond Ghost's defaults. So we leave it up to you, the publisher, to customize your site or leave it as it is.

### Peak user experience, empower the publisher

To give you full control, we make heavy use of Ghost's built-in [Custom Settings feature](https://ghost.org/docs/themes/custom-settings/). The following pages will guide you through Candidus' features and how to enable them.

All of the coming posts share the following basic structure:

- How to activate / customize a feature
- How does it work?

:::info CODE SNIPPETS
The 'How does it work' sections includes code snippets from the actual Candidus Project. This documentation is licensed under the MIT License, so unless otherwisely noted, you can use all of them in your own theme or project.
:::

## Customizations vs. Plugins

Plugins are loosely coupled modules and not handled in Ghost's admin settings. They differ from Candidus Customizations insofar as

- customizations are built into Candidus itself and tightly coupled with the theme. They're integrated using Ghost's Custom Settings feature
- plugins are open source third-party packages or built on them. They're integrated using Ghost's Code Injection feature