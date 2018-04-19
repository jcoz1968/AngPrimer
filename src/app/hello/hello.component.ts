import { Component, OnInit } from '@angular/core';
import { PEOPLE, Person } from './../person/person';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  greeting: string;
  personName: Person;
  people = PEOPLE;

  constructor() {
  }

  addPerson(personName: string) {
    this.people.push({ name: personName });
  }

  log(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}
