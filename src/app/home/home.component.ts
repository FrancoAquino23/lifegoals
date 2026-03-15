import { Component, OnInit } from '@angular/core';
import { MetaService } from '../services/meta.service';
import { Meta } from '../models/meta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  misMetas: Meta[] = [];
  nuevaMeta: string = '';

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.getMetas().subscribe(data => {
      this.misMetas = data;
    });
  }

  agregar(): void {
    if (this.nuevaMeta.trim()) {
      this.metaService.addMeta({ meta: this.nuevaMeta }).then(() => {
        this.nuevaMeta = '';
      });
    }
  }

  borrar(id: string | undefined): void {
    if (id) {
      this.metaService.deleteMeta(id);
    }
  }
}
