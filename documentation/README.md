## Documentation
#
#The documentation for this years Hackathon must be provided as a readme in Markdown format as part of your submission. 
#
#You can find a very good reference to Github flavoured markdown reference in [this cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). If you want something a bit more WYSIWYG for editing then could use [StackEdit](https://stackedit.io/app) which provides a more user friendly interface for generating the Markdown code. Those of you who are [VS Code fans](https://code.visualstudio.com/docs/languages/markdown#_markdown-preview) can edit/preview directly in that interface too.
#
#Examples of things to include are the following.

## Summary

**Category:** Hackathon Category

#What is the purpose of your module? What problem does it solve and how does it do that?

Our module adds additional View option in Experience Editor for the content authors in order to observe all personalization rules on the page.

Right now, in order to check that personalization rules are applied on multiple components 
Content Author (CA) should click on each rendering and check how much Rules were applied on each of them.
This becomes more crusual in case, when multiple renderings should behave based on a single rule
(f.e. change carousel, show another datasource for banners and apply another sorting
if user likes bikes, etc - just an example with 3 components on the same page).

After installing this module, they could see all rules on the page. As a improvement - we might consider adding more details
like Show / Hide component, use another one or change into another datasource. But currently, we focused more on names of
each rule.

Furthermore, it also brings CA to set correct names for rules.

## Pre-requisites

#Does your module rely on other Sitecore modules or frameworks?

#- List any dependencies
#- Or other modules that must be installed
#- Or services that must be enabled/configured
No dependencies, just fresh installation of Sitecore 9.1 would be enough.

## Installation

#Provide detailed instructions on how to install the module, and include screenshots where necessary.

1. Use the Sitecore Installation wizard to install the package: [DisplayAppliedRenderingsPersonalizationRules]
2. Go to experience editor to and apply some personalization rules to the renderings
3. On a View tab check newly added by package checkbox with "Rendering Rules"
4. See new blocks on the page which show up how much rules and which one were added.
5. Profit

## Configuration

#How do you configure your module once it is installed? Are there items that need to be updated with settings, or maybe config files need to have keys updated?
We registered a new button for Experience Editor which adds button item to core database and javascript file with source code.
No additional configuration required.

#Remember you are using Markdown, you can provide code samples too:

#```xml
#<?xml version="1.0"?>
<!--
  Purpose: Configuration settings for my hackathon module
-->
#<configuration xmlns:patch="http://www.sitecore.net/xmlconfig/">
  #<sitecore>
    #<settings>
      #<setting name="MyModule.Setting" value="Hackathon" />
    #</settings>
  </#sitecore>
#</configuration>
#```

## Usage

#Provide documentation  about your module, how do the users use your module, where are things located, what do icons mean, are there any secret shortcuts etc.

#Please include screenshots where necessary. You can add images to the `./images` folder and then link to them from your documentation:

#![Hackathon Logo](images/hackathon.png?raw=true "Hackathon Logo")

#You can embed images of different formats too:

#![Deal With It](images/deal-with-it.gif?raw=true "Deal With It")

#And you can embed external images too:

#![Random](https://placeimg.com/480/240/any "Random")

First of all, navigate to Experience Editor;
Setup some personalization rules on your renderings which are used on this page;
Then, open View tab on top of the page and see Rendering Rulse checkbox;
Click on it, and you will see overlay with a list of names of the applied rules;
Uncheck checkbox in order to remove them.

## Video

#Please provide a video highlighing your Hackathon module submission and provide a link to the video. Either a [direct link](https://youtu.be/kmFyTm85bTMk) to the video, upload it to this documentation folder or maybe upload it to Youtube...

#[![Sitecore Hackathon Video Embedding Alt Text](https://img.youtube.com/vi/EpNhxW4pNKk/0.jpg)](https://youtu.be/kmFyTm85bTM)
https://youtu.be/kmFyTm85bTM