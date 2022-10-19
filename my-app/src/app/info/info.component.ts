import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataStoreService } from '../data-store.service';
import { count, from, map, of } from 'rxjs';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
public Country:any

  constructor(private dataStore:DataStoreService) { }

  ngOnInit(): void {
    this.dataStore.getCountry().pipe(
      map(res=> this.Country = res)
    ).subscribe()
  }

}
