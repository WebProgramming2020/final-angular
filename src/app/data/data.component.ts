import { Component, OnInit, Input} from '@angular/core';
import { IData } from '../idata';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  @Input() conversionData:IData;
  constructor() { }

  ngOnInit(): void {
  }

}
