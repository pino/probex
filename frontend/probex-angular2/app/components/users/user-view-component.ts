import { Component } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user-service';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'user-view',
	templateUrl: 'app/views/users/view.html',
	providers: [ UserService ]
})
export class UserViewComponent implements OnInit {

	private id: number;
	private user: User;

	error: string;

	constructor(
		private route: ActivatedRoute, 
		private userService: UserService) {
	}

	ngOnInit() {
		this.user = new User();
		this.id = +this.route.snapshot.params['id'];
		this.userService.findById(this.id).subscribe(
            data => this.user = data,
            error => this.error = "Could not find user"
        );
	}
}