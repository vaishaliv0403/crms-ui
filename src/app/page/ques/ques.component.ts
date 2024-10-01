import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CommentBoxComponent } from '../../components/comment-box/comment-box.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-ques',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CommentBoxComponent,FormsModule],
  templateUrl: './ques.component.html',
  styleUrl: './ques.component.scss'
})
export class QuesComponent {
  currentPage = 1;
  pageSize = 15; // Number of questions per page
  selectedOption: string = '';
  paginatedQuestions: any[] = [];
  questions = [
    { id: 1, question: 'Is there a history of regulatory issues affecting the customer\'s business?', value: 'Y' },
    { id: 2, question: 'Has the customer faced any recent financial setbacks?', value: 'N' },
    { id: 3, question: 'Has the customer faced any recent financial setbacks?', value: 'N' },
    { id: 4, question: 'Has the customer faced any recent financial setbacks?', value: 'N' },
    { id: 5, question: 'Has the customer faced any recent financial setbacks?', value: 'N' },
    { id: 6, question: 'Is there a history of regulatory issues affecting the customer\'s business?', value: 'Y' },
    { id: 7, question: 'Has the customer faced any recent financial setbacks?', value: 'N' },
    { id: 8, question: 'Has the customer faced any recent financial setbacks?', value: 'N' },
    { id: 9, question: 'Has the customer faced any recent financial setbacks?', value: 'N' },
    { id: 10, question: 'Has the customer faced any recent financial setbacks?', value: 'N' },
    { id: 11, question: 'Is there a history of regulatory issues affecting the customer\'s business?', value: 'Y' },
    { id: 12, question: 'Has the customer faced any recent financial setbacks?', value: 'N' },
    { id: 13, question: 'Has the customer faced any recent financial setbacks?', value: 'N' },
    { id: 14, question: 'Has the customer faced any recent financial setbacks?', value: 'N' },
    { id: 15, question: 'Has the customer faced any recent financial setbacks?', value: 'N' },
    { id: 16, question: 'Is there a history of regulatory issues affecting the customer\'s business?', value: 'Y' },
    { id: 17, question: 'Is there a history of regulatory issues affecting the customer\'s business?', value: 'Y' },
    { id: 18, question: 'Has the customer faced any recent financial setbacks?', value: 'N' },
    { id: 19, question: 'Has the customer faced any recent financial setbacks?', value: 'N' },
    { id: 20, question: 'Has the customer faced any recent financial setbacks?', value: 'N' },
    { id: 21, question: 'Has the customer faced any recent financial setbacks?', value: 'N' },
    { id: 22, question: 'Is there a history of regulatory issues affecting the customer\'s business?', value: 'Y' },
    { id: 23, question: 'Has the customer faced any recent financial setbacks?', value: 'N' },
    { id: 24, question: 'Has the customer faced any recent financial setbacks?', value: 'N' },
    { id: 25, question: 'Has the customer faced any recent financial setbacks?', value: 'N' },
    { id: 26, question: 'Has the customer faced any recent financial setbacks?', value: 'N' },
    { id: 27, question: 'Is there a history of regulatory issues affecting the customer\'s business?', value: 'Y' },
    { id: 28, question: 'Has the customer faced any recent financial setbacks?', value: 'N' },
    { id: 29, question: 'Has the customer faced any recent financial setbacks?', value: 'N' },
    { id: 30, question: 'Has the customer faced any recent financial setbacks?', value: 'N' },
    { id: 31, question: 'Has the customer faced any recent financial setbacks?', value: 'N' },
    { id: 32, question: 'Is there a history of regulatory issues affecting the customer\'s business?', value: 'Y' },
  
  ];
  totalPages = Math.ceil(this.questions.length / this.pageSize);
 

  constructor(private router: Router,private route: ActivatedRoute) {}

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.selectedOption = params['option'] ; 
    });
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


  onRadioChange(event: Event) {
    const target = event.target as HTMLInputElement;
    console.log('change event called');
    console.log(`Selected option: ${target.value}`);
    //this.selectedOption = target.value;
    
    if (target.checked) {
      if (target.value === 'utr') {
        this.router.navigate(['crms/customer/utr']);
        console.log('UTR selected');
      }
      else if (target.value === 'sicr') {
       this.router.navigate(['crms/customer/sicr']);
        console.log('SICR selected');
      }
    }
  }


  
}
