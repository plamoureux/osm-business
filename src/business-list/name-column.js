import _ from 'lodash';
import {computedFrom} from 'aurelia-framework';
import {EntityComponent} from 'skyy/web-components';
import {EditEntity} from 'skyy/web-components/messages';

export class NameColumn extends EntityComponent {
	// TODO : @computedFrom ne fonctionnait pas; à tester.
	// un objet contenant une propriété ne semble pas être supporté.
	// Tester http://eisenbergeffect.bluespire.com/aurelia-computed/
	@computedFrom('business.name', 'business.shortName')
	get completeName() {
		let name = this.business.name;
		if (!_.isEmpty(this.business.shortName)) {
		  name += ` (${this.business.shortName})`;
		}
		return name;
  }

	editEntity() {
		this.publish(new EditEntity(this.business));
		//////
	}
}