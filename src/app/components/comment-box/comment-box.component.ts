import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comment-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comment-box.component.html',
  styleUrl: './comment-box.component.scss'
})
export class CommentBoxComponent {
  currentPage = 1;
  pageSize = 5; // Number of questions per page
  
  paginatedQuestions: any[] = [];
  questions = [
    { id: 1, comment: 'filled empty value',added_by: 'risk team user', value: 'Y' },
    { id: 2, comment: 'Disagreed by business team',added_by: 'business team user', value: 'Y' },
    { id: 3, comment: 'this may not be the answer.',added_by: 'risk team user', value: 'Y' },
    { id: 4, comment: 'please check if this is okay.',added_by: 'risk team user', value: 'Y' },
    { id: 5, comment: 'review this again.',added_by: 'risk team user', value: 'Y' },
    { id: 6, comment: 'may be wrong.',added_by: 'business team user', value: 'Y' },
    { id: 7, comment: 'review this again.',added_by: 'risk team user', value: 'Y' },
    { id: 8, comment: 'rejected by business team',added_by: 'risk team user', value: 'Y' },

  
  ];
  totalPages = Math.ceil(this.questions.length / this.pageSize); // Calculate total pages dynamically
  // constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.paginateData();
  }
  paginateData(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedQuestions = this.questions.slice(startIndex, endIndex);
  }
  loadPage(page: number): void {
    this.currentPage = page;
    this.paginateData();
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginateData();
    }
  }
  get visiblePages(): number[] {
    const pages = [];
    const start = Math.max(1, this.currentPage - 1); // Start from current page - 1
    const end = Math.min(this.totalPages, this.currentPage + 1); // End at current page + 1

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    // Ensure the total displayed pages is at most 3
    return pages.length > 3 ? pages.slice(0, 3) : pages;
  }
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginateData();
    }
  }
}
