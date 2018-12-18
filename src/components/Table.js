import React, {Component} from 'react';
import {usersJSON} from '../data';
import Person from './Person';

export default class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: usersJSON
		}
	}

	componentWillReceiveProps() {
		
	}

    // complete the comparators
	compareByAge(a, b) {
		
	}

	compareByName(a, b) {
		
	}

	compareByPoints(a, b) {
		
	}

	compareByRank(a, b) {
		
	}

	render() {	
		// console.log('state',this.state.users);
		return (<div>
			<table className="table table-striped">
				<thead>
					<tr key="head">
						<th>Age</th>
						<th>Name</th>
						<th>Points</th>
						<th>Rank</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						{this.state.users.map( data => {
							return <Person person={data}></Person>;
						})}
					</tr>
				</tbody>
			</table>
		</div>)
	}
}
