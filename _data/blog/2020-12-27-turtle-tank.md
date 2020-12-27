---
template: BlogPost
path: /css-art-turtle-tank
date: 2020-12-27T07:52:50.468Z
title: 'CSS Art: Tank and the Tortugas'
thumbnail: /assets/css-art-red-eared-slider.jpg
---
I'd always been interested in CSS art but didn't consider myself a real artist. That makes sense because the  CSS art my tech bud Allison would send me would HIGHLY [resemble fine art](https://www.vice.com/en/article/9kgx7p/painting-made-with-code-html-pure-css-browser-art-diana-smith). How could I, an elementary school art contest 1998 "runner up", compete with such caliber? 

Number two issue is that CSS art is widely accepted to exist for "no good reason other than fun, just because, and art." If I ever had a modicum of spare time, it seemed more practical to spend it rebuilding my portfolio site, learning marketable skills in a new technology, generally figuring out my life, etc. 

Well, a few years being in the industry and a couple burnouts later, I finally realize that you have to keep the joy in developing in order to bring your best self. Showing up 100% for your employer is great, but don't forget about building stuff for yourself as well!

So I decided to start with something any decent person would love- a turtle! 

## Setup and Tools

I wanted to get going quickly, so I opted to use [Codepen](https://codepen.io/) for the initial build. I also opted to use SCSS instead of plain CSS, again for convenience. To keep the class names nice and neat I used the [BEM methodology](http://getbem.com/introduction/). You could use a text editor and have the HTML + CSS render on your web browser, but ideally you would have hot-reloading set up to avoid having to manually refresh the page after every modification. 

I followed a [tutorial from Coding Artist](https://medium.com/coding-artist/a-beginners-guide-to-pure-css-images-ef9a5d069dd2), but was not motivated by the koala in the example (sorry koalas). So I just took the general concepts and strategies for various shapes and applied it to the much more fun scenario of a turtle chilling in a tank instead. 

## The Build

The build needed the following "components":

* structural elements

  * container for background outside of the tank
  * tank
  * water
* things "inside the structure"

  * sand
  * plant
  * dock
  * turtle

### The Environment

The nesting of these elements proved to be key because I wanted the outside environment to have a solid colored background (pink) that didn't affect the color of the water. The water, in turn, needed to be blue enough but also have an opaque quality. I achieved this effect by building two layers of water - one behind the tank items and one in front with 50% `opacity` and highest `z-index`. 

```html
<!-- HTML -->
<div class="container">
  <div class="tank">
    <div class="tank__water"></div>
    <div class="tank__water-opaque"></div>
  </div>
</div>
```

```scss
// SCSS
.tank {
  border: black 5px solid;
  border-top: none;
  width: 100%;
  height: 100%;
  background: none;

  &__water {
    background-color: lightblue;
    width: 100%;
    height: 90%;
    top: 10%;
    z-index: -10;

    &-opaque {
      background-color: lightblue;
      width: 100%;
      height: 90%;
      top: 10%;
      opacity: 50%;
      z-index: 10;
    }
  }
}
```

### The Things Inside the Environment

Now came the fun part. I had a nice empty tank and all I needed was to add a turtle! 

At the same level as the water layers (children of `tank`), I added the remaining elements - sand, grass, dock, and turtle. 

Originally I had a "representation" of the turtle - just a green rectangle. Very abstract. Eventually I added the shell, head (which contains the eye and red "ear") as well as all the limbs: 

```html
<div class="turtle">
  <div class="turtle__shell"></div>
  <div class="turtle__head">
    <div class="turtle__eye"></div>
    <div class="turtle__red-ear"></div>
  </div>
  <div class="turtle__limb turtle__limb--tail"></div>
  <div class="turtle__limb turtle__limb--arm turtle__limb--arm-left"></div>
  <div class="turtle__limb turtle__limb--arm turtle__limb--arm-right"></div>
  <div class="turtle__limb turtle__limb--leg turtle__limb--leg-left"></div>
  <div class="turtle__limb turtle__limb--leg turtle__limb--leg-right"></div>
</div>
```

Add some styles and the work of art was complete! 

## Animation

I wanted to be able to move my lil friend around, so I added an "animation control" section to the SCSS:

```scss
  .turtle {
    width: 16%;
    height: 10%;
    z-index: 1;

    // ~animation control~
    left: 75%;
    // left: 55%;
    top: -6%;
    // top: 4%;
    // left: 40%;
    // top: 11%;
    // left: 9%;
    // top: 20%;
    // top: 30%;
    // top: 40%;
    // top: 85%;

  transform: scaleX(-1);
    // -webkit-transform: rotate(-30deg);
  }
```

I realize this is a very manual animation process but it was still pretty fun to be able to maneuver turtle around the tank. In the future I could use some JS to truly animate the project.

## Porting over to React

Finally, I wanted to host this as a page on my new personal site built on Gatsby. I set up a page component and used CSS Modules to import the styles from a separate stylesheet (still using SCSS via a `*.module.scss` file). 

A few modifications were now in order. Instead of the conventional way of setting a class in the HTML:

```html
<div class="turtle"></div>
```

Using CSS Modules allows you to dynamically access the classes via import, and with a new naming convention: 

```javascript
import styles from "./turtle-tank.module.scss";

<div className={styles.turtle}>
```

I also quickly saw build errors, and learned that in order to list two or more classes in a single element you must use the following convention: 

```javascript
<div 
  className={`${styles.turtleLimb} ${styles.turtleLimbArm} ${styles.turtleLimbArmLeft}`}
></div>
```

The last adjustment I made was the tank width. Setting an absolute width worked fine while building on desktop in Codepen, but caused the page layout to break on mobile when hosted on an actual webpage.  Setting width to 100% instead sort of solved the issue - the layout was no longer breaking. The turtle, however, was shrinking or stretching according to the window width. As using percentage based widths and heights is a core principle of generating CSS art, this is a fun instance of my favorite thing to tell "bug" finders .... *expected behavior*. 

![GIF of CSS art width being resized in Chrome Developer Tools](/assets/Screen+Recording+2020-12-26+at+23.51.07.gif)

As the common misconception goes, "a turtle will never grow larger than its enclosure." Or put another way, "a turtle's size will always be proportional to its container." 

Here's my soapbox moment: please reconsider adopting a pet turtle unless you are able to provide adequate space for it into adulthood. Turtles can easily live more than 20 years in captivity and they can grow to be as large as dinner plates (12 inches shell length). A common rule-of-thumb is to provide 10 gallons of water per 1 inch of turtle shell.
