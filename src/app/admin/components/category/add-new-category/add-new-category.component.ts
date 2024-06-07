import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-new-category',
  templateUrl: './add-new-category.component.html',
  styleUrls: ['./add-new-category.component.scss']
})
export class AddNewCategoryComponent {
  @Input() modalTitle!: string;
  @Input() isVisible!: boolean;
  @Input() category: any = {};
  @Output() save = new EventEmitter<any>();
  @Output() close = new EventEmitter<void>();

  onSave() {
    this.save.emit(this.category);
  }

  onClose() {
    this.close.emit();
  }
}
