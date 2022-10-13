import { Component, OnInit } from '@angular/core';
import info from './crew.json'

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  imageSrc = 'assets/crewman.svg';  
  public values: {name: string, bio: string, role: string}[] = info;
  //1st
  doug = info[0].name
  dougPic = info[0].images.png
  dougTitle = info[0].role
  dougBio = info[0].bio
  //2nd
  mark = info[1].name
  markPic = 'assets/mark.png'
  markTitle = info[1].role
  markBio = info[1].bio
  //3rd
  victor = info[2].name
  victorPic = 'assets/victor.png'
  victorTitle =info[2].role
  victorBio = info[2].bio
  //4th
  anou = info[3].name
  anouPic = 'assets/anousheh.png'
  anouTitle = info[3].role
  anouBio = info[3].bio

  constructor() { 
    console.log(info)
    console.log(info[0].images.png)
  }

  ngOnInit(): void {
  }

}
