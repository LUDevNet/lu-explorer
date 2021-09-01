import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  items: Observable<any[]>;

  constructor(/*firestore: AngularFirestore*/) {
    //this.items = firestore.collection('skills', ref => ref.limit(10).where('behaviors.178100', '!=', false)).valueChanges();
  }

  ngOnInit(): void {
  }

}
