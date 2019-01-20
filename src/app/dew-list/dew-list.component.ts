import { Component, OnInit } from '@angular/core';

import { Dew } from '../dew';
import { DewService } from '../dew.service';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dew-list',
  templateUrl: './dew-list.component.html',
  styleUrls: ['./dew-list.component.css']
})
export class DewListComponent implements OnInit {
  dews: Dew[];

  constructor(private dewService: DewService) { }

  ngOnInit() {
    this.getDewList();
  }
  
  getDewList(): void {
    this.dewService.getDewList()
      .subscribe(dews => this.dews = dews);
  }

  addNewDew(name, description): void {
    if (name.value !== '' && description.value !== '') {
      this.dewService.addDew({ name: name.value, description: description.value, completed: false });
      name.value = '';
      description.value = '';
    }
  }

  updateDewCompleted(completed, dew) {
    dew.completed = completed;
    this.dewService.updateDew(dew);
  }

  deleteDew(dew) {
    this.dewService.deleteDew(dew);
  }

  harvestDews() {
    this.dewService.removeAllDews();
  }

  drop(event: CdkDragDrop<Dew[]>) {
    moveItemInArray(this.dews, event.previousIndex, event.currentIndex);
  }
}
