import { Component } from '@angular/core';

@Component({
  selector: 'app-brand-admin-page',
  templateUrl: './brand-admin-page.component.html',
  styleUrls: ['./brand-admin-page.component.scss']
})
export class BrandAdminPageComponent {
  brands = [
    { id: 1, name: 'Brand 1', image: '/assets/images/brand1.jpg', content: 'Content of Brand 1', selected: false },
    { id: 2, name: 'Brand 2', image: '/assets/images/brand2.jpg', content: 'Content of Brand 2', selected: false }
  ];

  selectedBrand: any = {};
  modalTitle: string = '';
  showAddNewBrandModal: boolean = false;
  showDetailBrandModal: boolean = false;
  showUpdateBrandModal: boolean = false;
  showDeleteBrandModal: boolean = false;
  currentPage: number = 1;
  totalPages: number = 5;
  pageName: string = 'brands';

  toggleSelectAll() {
    const allSelected = this.brands.every(brand => brand.selected);
    this.brands.forEach(brand => brand.selected = !allSelected);
  }

  openAddNewBrandModal() {
    this.selectedBrand = { id: null, name: '', image: '', content: '', selected: false };
    this.modalTitle = 'Create Brand';
    this.showAddNewBrandModal = true;
  }

  closeModal() {
    this.showAddNewBrandModal = false;
    this.showDetailBrandModal = false;
    this.showUpdateBrandModal = false;
    this.showDeleteBrandModal = false;
  }

  saveBrand(brand: any) {
    if (this.modalTitle === 'Create Brand') {
      brand.id = this.brands.length + 1;
      this.brands.push(brand);
    } else {
      const index = this.brands.findIndex(b => b.id === brand.id);
      if (index !== -1) {
        this.brands[index] = brand;
      }
    }
    this.closeModal();
  }

  viewBrand(id: number) {
    const brand = this.brands.find(b => b.id === id);
    this.selectedBrand = { ...brand };
    this.modalTitle = 'View Brand';
    this.showDetailBrandModal = true;
  }

  editBrand(id: number) {
    const brand = this.brands.find(b => b.id === id);
    this.selectedBrand = { ...brand };
    this.modalTitle = 'Edit Brand';
    this.showUpdateBrandModal = true;
  }

  deleteBrand(id: number) {
    this.selectedBrand = this.brands.find(b => b.id === id);
    this.modalTitle = 'Delete Brand';
    this.showDeleteBrandModal = true;
  }

  confirmDelete(id: number) {
    this.brands = this.brands.filter(b => b.id !== id);
    this.closeModal();
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  onSearch(searchTerm: string) {
    console.log('Search term:', searchTerm);
  }
}
