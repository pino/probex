import {Component, OnInit} from "@angular/core";
import {Post} from "../../models/post";
import {PostService} from "../../services/post-service";

@Component({
	selector: 'post-list',
	templateUrl: 'app/views/post/post-list.html',
	providers: [PostService]
})
export class PostListComponent implements OnInit {

	private posts: Post[];

	error: string;

	constructor(private postService: PostService) {
	}

	ngOnInit() {
		this.listLatest();
	}

	listLatest() {
        this.postService.listLast(10).subscribe(
            data => this.posts = data,
            error => this.error = "Could not list users"
        );
    }

}