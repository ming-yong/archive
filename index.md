---
title: Welcome!
---

Hi. I'm Ming and this is my portfolio/blog/learning notes website. Things are organized in this way:

1. Blog posts are stored on the [BLOG]({% link myBlog.html%}) page.
2. Projects and practice projects(small/tutorial projects) are stored on the [PROJECTS]({% link projects.html%}) page.
3. Learning notes(tutorial notes), Building notes(re-explaining practice project code), and other miscellaneous things that "aren't ready to be in a blog post but I want to remember" can be found on the [NOTES]({% link notes.html%}) page.

### Most recent 5 Notes/Blog posts

{% assign notes = site.categories.Notes | size %}
{% assign practiceProjects = site.data.practiceProjects | size %}
{% assign projects = site.data.projects | size %}
{% assign blogPost = site.categories.Blog | size %}

Today, I have {{notes}} notes, {{practiceProjects}} practice projects, {{projects}} projects and {{blogPost}} blog posts.

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

I'm from Malaysia and native in Chinese Mandarin. I'm currently a [2nd year CPA student](https://www.stlawrencecollege.ca/programs-and-courses/full-time/programs/a_m/computer-programmer-analyst/kingston/) at Kingston, Ontario. I started learning how to code at school and by myself in late 2018. As for now, I'm learning React and completing the [fcc's Front End Libraries Certification](https://www.freecodecamp.org/).

### Contact Me

I love constructive feedback, criticism, comments about my work. If you would like to share yours or just want to say hi, you can reach me by [email](mailto:{{ site.email }}) at **{{site.email}}**. I tweet about my daily process on [Twitter]({{ site.social-links.twitter }}). I'm also on [LinkedIn]({{ site.social-links.linkedIn }}) and [Github]({{ site.social-links.github }}) :)
