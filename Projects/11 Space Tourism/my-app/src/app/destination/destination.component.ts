import { Component, OnInit } from '@angular/core';
import info from './dest.json'

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {
public values: {name: string, images: object, description: string, distance: string}[] = info;
 imageSrc = 'assets/moon.svg'

//first
  moon = info[0].name
 moonPic = 'assets/moon.svg'
 moonDesc = info[0].description
 moonDist = info[0].distance
 moonTravel = info[0].travel
//second
mars = info[1].name
marsPic = 'assets/mars.png'
marsDesc = info[1].description
marsDist = info[1].distance
marsTravel = info[1].travel
//third
europa = info[2].name
europaPic = 'assets/europa.png'
europaDesc = info[2].description
europaDist = info[2].distance
europaTravel = info[2].travel
//fourth
titan = info[3].name
titanPic = 'assets/titan.png'
titanDesc = info[3].description
titanDist = info[3].distance
titanTravel = info[3].travel

  constructor() {console.log(info)}
 
  ngOnInit(): void {
  }

}
