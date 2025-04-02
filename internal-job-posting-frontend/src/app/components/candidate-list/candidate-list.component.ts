import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../../services/candidate.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-candidate-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {
  candidates: any[] = [];

  constructor(private candidateService: CandidateService) {}

  ngOnInit() {
    this.fetchCandidates();
  }

  fetchCandidates() {
    this.candidateService.getCandidates().subscribe(data => {
      this.candidates = data;
    }, error => {
      console.error('Error fetching candidates:', error);
    });
  }
}

