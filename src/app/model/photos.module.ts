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
  desc: string,
  award: boolean

};

export let photoList: IPhotos[]=
[
  {
    id: "n",
    title: "The Dandelions visitor",
    img: "./images/portfolio/nature/bee.jpg",
    desc: "On this one warm spring morning, the dandelion was no longer lonley - if only for a moment.",
    award: false
  },
  {
    id: "n",
    title: "On Paving",
    img: "./images/portfolio/nature/daisy.jpg",
    desc: "A single daisy, Growing through paving stone.",
    award: false
  },
  {
    id: "n",
    title: "Slow",
    img: "./images/portfolio/nature/snail.jpg",
    desc: "A snail on its way.",
    award: false
  },
  {
    id: "n",
    title: "Swan River",
    img: "./images/portfolio/nature/swan.jpg",
    desc: "A majestic swan, calling this river its home.",
    award: false
  },
  {
    id: "n",
    title: "Growth",
    img: "./images/portfolio/nature/sprout.jpg",
    desc: "",
    award: false
  },
  {
    id: "l",
    title: "Blue",
    img: "./images/portfolio/landscape/blue.jpg",
    desc: "A single tree framed by the wast blue skies above.",
    award: false
  },
  {
    id: "l",
    title: "Caucasus",
    img: "./images/portfolio/landscape/caucasus.jpg",
    desc: "A view from atop the mountains.",
    award: false
  },
  {
    id: "l",
    title: "Into the forest",
    img: "./images/portfolio/landscape/forest.jpg",
    desc: "On the way into the forest.",
    award: false
  },
  {
    id: "l",
    title: "Wilderness",
    img: "./images/portfolio/landscape/forest_2.jpg",
    desc: "",
    award: false
  },
  {
    id: "l",
    title: "Mountain view",
    img: "./images/portfolio/landscape/mountains.jpg",
    desc: "A view from atop the mountains.",
    award: false
  },
  {
    id: "l",
    title: "Sunrise",
    img: "./images/portfolio/landscape/sunrise.jpg",
    desc: "",
    award: false
  },
  {
    id: "l",
    title: "Sunset",
    img: "./images/portfolio/landscape/sunset.jpg",
    desc: "",
    award: false
  },
  {
    id: "l",
    title: "Tree",
    img: "./images/portfolio/landscape/tree.jpg",
    desc: "",
    award: false
  },
  {
    id: "l",
    title: "cozy Village",
    img: "./images/portfolio/landscape/village.jpg",
    desc: "",
    award: false
  },
  {
    id: "e",
    title: "Drinks",
    img: "./images/portfolio/events/cocktails.jpg",
    desc: "These lovely drinks where served at Millers Wedding.",
    award: false
  },
  {
    id: "e",
    title: "Drink",
    img: "./images/portfolio/events/drink.jpg",
    desc: "Thes lovely drink was served at Millers Wedding.",
    award: false
  },
  {
    id: "e",
    title: "Family reunion",
    img: "./images/portfolio/events/family.jpg",
    desc: "The Smtihs Family Reunion Party",
    award: false
  },
  {
    id: "e",
    title: "Millers Wedding",
    img: "./images/portfolio/events/groo.jpg",
    desc: "At Millers Wedding.",
    award: false
  },
  {
    id: "e",
    title: "40th Birthday - Jane Doe",
    img: "./images/portfolio/events/holiday-table.jpg",
    desc: "Jane Does 40th birthday Party",
    award: false
  },
  {
    id: "e",
    title: "Smiths Wedding",
    img: "./images/portfolio/events/newlyweds.jpg",
    desc: "At Millers Wedding.",
    award: false
  },
  {
    id: "e",
    title: "40th Birthday - Jane Doe",
    img: "./images/portfolio/events/skewers.jpg",
    desc: "Jane Does 40th birthday Party",
    award: false
  },
  {
    id: "e",
    title: "Millers Wedding",
    img: "./images/portfolio/events/wedding.jpg",
    desc: "At Millers Wedding.",
    award: false
  },
  {
    id: "l",
    title: "Wild Waves",
    img: "./images/home/ocean.jpg",
    desc: "A breathtaking moment captured at the moment of sunset.",
    award: true
  },
  {
    id: "n",
    title: "The bunnies journey",
    img: "./images/home/park.webp",
    desc: "A group of fluffy wanderers.",
    award: true

  },
  {
    id: "l",
    title: "One moment",
    img: "./images/home/sunset.jpg",
    desc: "A breathtaking moment captured at the moment of sunset.",
    award: true

  },

]
