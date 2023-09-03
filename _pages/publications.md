---
layout: page
permalink: /research/
title: research
description: A collection of my research publications and presentations.
years: [2023, "Submitted"]
nav: True
nav_order: 2
---
<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f {{ site.scholar.bibliography }} -q @*[year={{y}}]* %}
{% endfor %}


</div>
