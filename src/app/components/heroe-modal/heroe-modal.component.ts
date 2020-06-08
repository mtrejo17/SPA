import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-heroe-modal',
  templateUrl: './heroe-modal.component.html',
  styleUrls: ['./heroe-modal.component.css']
})
export class HeroeModalComponent implements OnInit {
  

  constructor(private modalService: NgbModal) { }

  @Input() heroe: any;
  ngOnInit() {
  }

}
