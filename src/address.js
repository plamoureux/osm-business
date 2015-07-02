import {Entity, string, lookup} from 'skyy/entity';

@string('building', {caption: 'Édifice'})
@string('street', {caption: 'Rue'})
@string('city', {caption: 'Ville'})
@string('postalCode', {caption: 'Code postal'})
@lookup('state', {caption: 'Province', 
  items: {Québec: 'Québec', Ontario: 'Ontario'}})
@lookup('country', {caption: 'Pays', 
  items: {Canada: 'Canada', France: 'France'}})
export class Address extends Entity {}