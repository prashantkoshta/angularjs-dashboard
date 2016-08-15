import { Component } from '@angular/core';
import { AuthorService } from './author.service';

@Component({
    selector : 'authors',
    moduleId:module.id,
    templateUrl : './view/authors.component.html',
    
    providers : [AuthorService]
})
export class AuthorsComponent {
    authors : string[];
    constructor(authorService:AuthorService){
        this.authors = authorService.getAuthors();
    }
}