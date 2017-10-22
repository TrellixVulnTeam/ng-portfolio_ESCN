import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { StorylineParams } from '../../../models/storyline-params';

const STORYLINE_TYPES = ['text', 'code', 'image'];

@Component({
  selector: 'app-edit-project-storyline',
  styleUrls: ['./edit-project-storyline.component.scss'],
  template: `
    <mat-radio-group class="radio-group" [(ngModel)]="params.type">
      <mat-radio-button class="radio-button" *ngFor="let type of storylineTypes" [value]="type">
        {{ type }}
      </mat-radio-button>
    </mat-radio-group>
    <div class="param-inputs">
      <div *ngIf="params.type === 'text'">
        <mat-form-field class="full-width">
          <textarea matInput [(ngModel)]='params.data.text' placeholder="Text" name="text" value=""></textarea>
        </mat-form-field>
      </div>
      <div *ngIf="params.type === 'code'">
        <mat-form-field class="full-width">
          <textarea matInput [(ngModel)]='params.data.text' placeholder="Code" name="code" value=""></textarea>
        </mat-form-field>
      </div>
      <div *ngIf="params.type === 'image'">
        <mat-form-field class="full-width">
          <input matInput [(ngModel)]='params.data.text' placeholder="Image Url" name="image" value="">
        </mat-form-field>
      </div>
    </div>
    <button mat-raised-button color="primary" *ngIf="newStorylineParams" (click)="saveStorylineComponent()">
      Save Storyline Component
    </button>
  `
})
export class EditProjectStorylineComponent implements OnInit {

  @Output() onSave = new EventEmitter();
  public storylineTypes = STORYLINE_TYPES;
  public params: StorylineParams = {
    type: '',
    data: {}
  };

  constructor() { }

  ngOnInit() {

  }

  saveStorylineComponent() {
    this.onSave.emit(this.params);
  }

}
