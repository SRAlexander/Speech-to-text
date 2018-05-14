import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-azure',
  templateUrl: './azure.component.html',
  styleUrls: ['./azure.component.css']
})
export class AzureComponent implements OnInit {
  @Input() private wavBase64String = '';

  constructor() { }

  ngOnInit() {
  }

}
