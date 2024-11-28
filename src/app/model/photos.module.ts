import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PhotosModule {
  
 };

export interface IPhotos {
  id: string,
  title: string,
  img: string,
  desc: string

};

export let photoList: IPhotos[]=
[
  {
    id: "n",
    title: "The Dandelions visitor",
    img: "./images/portfolio/nature/bee.jpg",
    desc: "On this one warm spring morning, the dandelion was no longer lonley - if only for a moment."
  },
  {
    id: "n",
    title: "On Paving",
    img: "./images/portfolio/nature/daisy.jpg",
    desc: "A single daisy, Growing through paving stone."
  },
  {
    id: "n",
    title: "Slow",
    img: "./images/portfolio/nature/snail.jpg",
    desc: "A snail on its way."
  },
  {
    id: "n",
    title: "Swan River",
    img: "./images/portfolio/nature/swan.jpg",
    desc: "A majestic swan, calling this river its home."
  },
  {
    id: "n",
    title: "Growth",
    img: "./images/portfolio/nature/sprout.jpg",
    desc: ""
  },
  {
    id: "l",
    title: "Blue",
    img: "./images/portfolio/landscape/blue.jpg",
    desc: "A single tree framed by the wast blue skies above."
  },
  {
    id: "l",
    title: "Caucasus",
    img: "./images/portfolio/landscape/caucasus.jpg",
    desc: "A view from atop the mountains."
  },
  {
    id: "l",
    title: "Into the forest",
    img: "./images/portfolio/landscape/forest.jpg",
    desc: "On the way into the forest."
  },
  {
    id: "l",
    title: "Wilderness",
    img: "./images/portfolio/landscape/forest_2.jpg",
    desc: ""
  },
  {
    id: "l",
    title: "Mountain view",
    img: "./images/portfolio/landscape/mountains.jpg",
    desc: "A view from atop the mountains."
  },
  {
    id: "l",
    title: "Sunrise",
    img: "./images/portfolio/landscape/sunrise.jpg",
    desc: ""
  },
  {
    id: "l",
    title: "Sunset",
    img: "./images/portfolio/landscape/sunset.jpg",
    desc: ""
  },
  {
    id: "l",
    title: "Tree",
    img: "./images/portfolio/landscape/tree.jpg",
    desc: ""
  },
  {
    id: "l",
    title: "cozy Village",
    img: "./images/portfolio/landscape/village.jpg",
    desc: ""
  },
  {
    id: "e",
    title: "Drinks",
    img: "./images/portfolio/events/cocktails.jpg",
    desc: "These lovely drinks where served at Millers Wedding."
  },
  {
    id: "e",
    title: "Drink",
    img: "./images/portfolio/events/drink.jpg",
    desc: "Thes lovely drink was served at Millers Wedding."
  },
  {
    id: "e",
    title: "Family reunion",
    img: "./images/portfolio/events/family.jpg",
    desc: "The Smtihs Family Reunion Party"
  },
  {
    id: "e",
    title: "Millers Wedding",
    img: "./images/portfolio/events/groo.jpg",
    desc: "At Millers Wedding."
  },
  {
    id: "e",
    title: "40th Birthday - Jane Doe",
    img: "./images/portfolio/events/holiday-table.jpg",
    desc: "Jane Does 40th birthday Party"
  },
  {
    id: "e",
    title: "Smiths Wedding",
    img: "./images/portfolio/events/newlyweds.jpg",
    desc: "At Millers Wedding."
  },
  {
    id: "e",
    title: "40th Birthday - Jane Doe",
    img: "./images/portfolio/events/skewers.jpg",
    desc: "Jane Does 40th birthday Party"
  },
  {
    id: "e",
    title: "Millers Wedding",
    img: "./images/portfolio/events/wedding.jpg",
    desc: "At Millers Wedding."
  },

 
]
