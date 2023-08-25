import { Component, EventEmitter, Output} from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
    enteredContent = '';
    enteredTitle = '';
    @Output() postCreated = new EventEmitter();

    onAddPost(postForm: NgForm){
        let post = {
            title: postForm.value.title, 
            content: postForm.value.content};

        this.postCreated.emit(post);
    }

}