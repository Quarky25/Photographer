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
  img: string

};

export let photoList: IPhotos[]=
[
  {
    id: "n",
    title: "",
    img: "./images/portfolio/nature/bee.jpg"
  },
  {
    id: "n",
    title: "",
    img: "./images/portfolio/nature/daisy.jpg"
  },
  {
    id: "n",
    title: "",
    img: "./images/portfolio/nature/snail.jpg"
  },
  {
    id: "n",
    title: "",
    img: "./images/portfolio/nature/swan.jpg"
  },
  {
    id: "n",
    title: "",
    img: "./images/portfolio/nature/sprout.jpg"
  },
  {
    id: "l",
    title: "",
    img: "./images/portfolio/landscape/blue.jpg"
  },
  {
    id: "l",
    title: "",
    img: "./images/portfolio/landscape/caucasus.jpg"
  },
  {
    id: "l",
    title: "",
    img: "./images/portfolio/landscape/forest.jpg"
  },
  {
    id: "l",
    title: "",
    img: "./images/portfolio/landscape/forest_2.jpg"
  },
  {
    id: "l",
    title: "",
    img: "./images/portfolio/landscape/mountains.jpg"
  },
  {
    id: "l",
    title: "",
    img: "./images/portfolio/landscape/sunrise.jpg"
  },
  {
    id: "l",
    title: "",
    img: "./images/portfolio/landscape/sunset.jpg"
  },
  {
    id: "l",
    title: "",
    img: "./images/portfolio/landscape/tree.jpg"
  },
  {
    id: "l",
    title: "",
    img: "./images/portfolio/landscape/village.jpg"
  },
  {
    id: "e",
    title: "",
    img: "./images/portfolio/events/cocktails.jpg"
  },
  {
    id: "e",
    title: "",
    img: "./images/portfolio/events/drink.jpg"
  },
  {
    id: "e",
    title: "",
    img: "./images/portfolio/events/family.jpg"
  },
  {
    id: "e",
    title: "",
    img: "./images/portfolio/events/groo.jpg"
  },
  {
    id: "e",
    title: "",
    img: "./images/portfolio/events/holiday-table.jpg"
  },
  {
    id: "e",
    title: "",
    img: "./images/portfolio/events/newlyweds.jpg"
  },
  {
    id: "e",
    title: "",
    img: "./images/portfolio/events/skewers.jpg"
  },
  {
    id: "e",
    title: "",
    img: "./images/portfolio/events/wedding.jpg"
  },
]
