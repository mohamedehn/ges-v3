import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit{

  @Input() width!: string;
  @Input() height!: string;
  @Input() buttonText!: string;

  constructor() { }

  ngOnInit(): void {
    this.width = this.width || '250px';
    this.height = this.height || '80px';
  }
}
