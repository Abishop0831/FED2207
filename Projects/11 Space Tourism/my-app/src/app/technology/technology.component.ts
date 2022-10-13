import { Component, OnInit } from '@angular/core';
import info from './technoogy.json'

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  public values: {name: string, images:object, description: string}[] = info;

  //first
  launchV = info[0].name
  launchD = info[0].description
  launchPc = 'assets/launchPc.jpg'
  //second
  spaceP = info[1].name
  spaceD = info[1].description
  spacePc = 'assets/spaceportPc.jpg'
  //third
  capPcName = info[2].name
  capPcD = info[2].description
  capPcImg = 'assets/spacecapPc.jpg'

  constructor() { }

  ngOnInit(): void {
  }

}
