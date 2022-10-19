import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { count, from, map, of } from 'rxjs';
import { ajax } from 'rxjs/ajax'



@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})



export class HomescreenComponent implements OnInit {


public data:Array<any> = []


  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
    console.log(value)
    //fn to make API call using this value
    ajax(``)
  }






  constructor() {}

  ngOnInit(): void {
   
const countryAll$ =ajax<any>('https://restcountries.com/v3.1/all').pipe(
  map(res=>res.response.map(user=> this.data.push(user)
  
  ))
)
console.log(this.data)


countryAll$.subscribe({
  next: value=>console.log(value)
})

  }


}
