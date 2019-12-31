---
title: Welcome!
---

Hi. I'm Ming and this is my portfolio/blog/learning notes website. Things are organized in this way:

1. Blog posts are stored in [BLOG]({% link Blog.html%}) page.
2. Projects and practice projects(tutorial projects) are stored in [PROJECTS]({% link Projects.html%}) page.
3. Learning notes(tutorial notes), Building notes(re-explaining practice project code), and other miscellaneous things that "aren't ready to be in a blog post but I want to remember" can be found in [NOTES]({% link Notes.html%}) page.

### Most recent 5 Notes/Blog posts

{% assign notes = site.categories.Notes | size %}
{% assign practiceProjects = site.data.practiceProjects | size %}
{% assign projects = site.data.projects | size %}
{% assign blogPost = site.categories.Blog | size %}

Today, there are {{notes}} notes, {{practiceProjects}} practice projects, {{projects}} projects and {{blogPost}} blog posts.

<ul class="index__ul" >
  {% for post in site.posts limit:5%}
    <li class="index__li">
      <span class="index__date">{{ post.date | date: "%b %d, %Y" }}</span>
      <span class="index__name">
        <a href="{{ post.url | relative_url }}" class="index__link">{{post.categories | array_to_sentence_string | upcase }}: {{ post.title }}</a>
      </span>
    </li>
  {% endfor %}
</ul>

## About me

I'm from Malaysia and native in Chinese Mandarin. I'm a currently [2th year CPA student](https://www.stlawrencecollege.ca/programs-and-courses/full-time/programs/a_m/computer-programmer-analyst/kingston/) at Kingston, Ontario. I started learning how to code at school and by myself in late 2018. As for now, I'm learning React and completing [fcc's Front End Libraries Certification](https://www.freecodecamp.org/).

### Contact Me

I love constructive feedback, criticism, comments about my work. If you would like to share yours with me or just want to say hi, you can reach me by [email](mailto:{{ site.email }}) **{{site.email}}**. I tweet about my daily process on [Twitter]({{ site.social-links.twitter }}) and I'm also on [LinkedIn]({{ site.social-links.linkedIn }}) and [Github]({{ site.social-links.github }}) :)
