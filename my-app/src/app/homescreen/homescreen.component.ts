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
public filtered:Array<any> = []


  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
    console.log(value)
    //fn to make API call using this value
    const filter$ = ajax<any>(`https://restcountries.com/v3.1/region/${value}`).pipe(
      map(res=>res.response.map(val=> this.filtered.push(val)
      ))
    )
    console.log(this.filtered)


    filter$.subscribe({
      next: value=>console.log(value)
    })
  }






  constructor() {}

  ngOnInit(): void {
   
const countryAll$ =ajax<any>('https://restcountries.com/v3.1/all').pipe(
  map(res=>res.response.map(val=> this.data.push(val)
  
  ))
)
console.log(this.data)


countryAll$.subscribe({
  next: value=>console.log(value)
})

  }


}
