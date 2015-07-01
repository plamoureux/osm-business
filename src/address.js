import {Entity, field} from 'skyy/entity';

@field('building', 'string', {caption: 'Édificee'})
@field('street', 'string', {caption: 'Rue'})
@field('city', 'string', {caption: 'Ville'})
@field('postalCode', 'string', {caption: 'Code postal'})
@field('state', 'lookup', {caption: 'Province', items: {Québec: 'Québec', Ontario: 'Ontario'}})
@field('country', 'lookup', {caption: 'Pays', items: {Canada: 'Canada', France: 'France'}})
export class Address extends Entity {}