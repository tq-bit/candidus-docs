<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://media.licdn.com/dms/image/v2/D4E03AQGgFYQdiJLVDg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1690220524294?e=1741219200&v=beta&t=dpODWOA7asKTN6xZMzf-WqnoJBCpudm_3EJ-r36MmIM',
    name: 'Tsvetomira Dichevska',
    title: 'My partner in design and life',
    links: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/tsvetomira-dichevska/' }
    ]
  },
  {
    avatar: 'https://media.licdn.com/dms/image/v2/C4D03AQG59yoTp5mHMw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1649258721458?e=1741219200&v=beta&t=s8VxYi5v4qEUiMuMx5QvNgPIv7m3ocG-0Cy6_2RlZZo',
    name: 'Tobias Quante',
    title: 'Myself, a self-taught developer',
    links: [
      { icon: 'github', link: 'https://github.com/tq-bit' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/tobias-quante-764aa1140/' }
    ]
  },
]
</script>

# About the theme

Thank you for taking the time to read how Candidus came to be! We spent lots of time thinking every component of the theme through and hope you're happy with the final result.

## About its creators

With "we", I'm referring to:
<VPTeamMembers size="medium" :members="members" />


## Candidus Philosophy

Candidus, translated from latin, means as much as 'white', 'bright' or 'open'. Its name emphasizes the theme's philosophy. We've built Candidus around three core pillars

![a sketch of an acropolis with three pillars labelled 'Spotlight the content', 'Let it shine, keep it simple' and 'Empower the publisher'](../assets/candidus-principles.png)

### 1. Spotlight the content, don't steal the show

[It takes a visitor of your website 50 milliseconds to decide whether they'll keep reading](https://cxl.com/blog/first-impressions-matter-the-importance-of-great-visual-design/#:~:text=People%20make%20snap%20judgments.,they'll%20stay%20or%20leave.). So you better make a good first impression.

Candidus takes an opinionated, minimalistic approach to keep your audience's attention:

- No overloaded index page. First imressions matter, so it's the page's banner or featured posts, not both.
- Many custom features are disabled by default to make the most of site speed. You can, however, opt-in for conveniences such as [bookmarking](../customization/post/bookmarks.md) and [reading progress](../customization/post/reading-progress.md) if you like to.
- Use our theme colors or bring your own. You get one from Ghost, two from Candidus

### 2. Let it shine, keep it simple

Candidus provides a flat, grid-based layout and emphasizes your content where it's necessary. All theme pages are trimmed to highlight your publication's message and make use of Ghost's fantastic built-in features.

[Read more about built-in Ghost features here](../customization/index.md)

### 3. Peak user experience, empower the publisher

If your audience is more sophisticated, you'll want to keep them engaged. Candidus comes with several feautres you can opt-in for in your administration panel.

[Read more about custom features here](../customization/index.md)

## Technologies

If you're tech savy, you'll want to be sure your site withstands the tooth of time. Candidus is powered by modern technologies and methodologies to ensure a rich user and publisher experience.

- Candidus is built using [Modular SCSS](http://smacss.com/) and [Typescript](https://www.typescriptlang.org/).  This apporach makes code and styles more robust and efficient
- By choosing [Webpack 5](https://webpack.js.org/concepts/why-webpack/) as Candidus' backbone, all pages load only what styles and scripts they need. This increases your site's performance by reducing stress on your reader's browser.
- [Block helpers](https://handlebarsjs.com/guide/block-helpers.html) disable loading scripts of inactive custom features. By doing so, they also improve your site's performance and decrease loading times.
- [Self-hosted fonts](https://blog.q-bit.me/how-to-self-host-google-fonts-part-one/) keep your publication GDPR - compliant and less reliant on third-party infrastructure
- A variety of tests using [HTML-validator](https://validator.w3.org/) & [Lighthouse scoring](https://pagespeed.web.dev/) keep your publication performant and compliant to modern standards. They also ensure for [a11y standards](https://www.a11yproject.com/) to be properly incorporated