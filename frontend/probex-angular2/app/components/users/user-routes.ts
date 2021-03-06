import { Routes } from '@angular/router';
import { UserListComponent } from './user-list-component';
import { UserSignupComponent } from './user-signup-component';
import { UserEditComponent } from './user-edit-component';
import { UserViewComponent } from './user-view-component';
import { AuthGuard } from '../../auth-guard';

export const UserRoutes: Routes = [
	{ 
		path: 'user-list', 
		component: UserListComponent, 
		canActivate: [ AuthGuard ] 
	}, 
	{ 
		path: 'user-signup', 
		component: UserSignupComponent
	}, 
	{ 
		path: 'user-edit/:id', 
		component: UserEditComponent, 
		canActivate: [ AuthGuard ] 
	},
	{ 
		path: 'user-view/:id', 
		component: UserViewComponent, 
		canActivate: [ AuthGuard ] 
	}
];