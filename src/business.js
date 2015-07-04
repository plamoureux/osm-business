import {Entity} from 'skyy/entity/entity';
import {key, plural, string, radio, entity, lookup} from 'skyy/entity/decorators';
import {Address} from 'osm-business/address';

@key('_id')
@plural('Businesses')
@string('_id', {mandatory: true, unique: true})
@string('name', {caption: 'Nom', mandatory: true, unique: true})
@string('shortName', {caption: 'Abréviation'})
@radio('language', {caption: 'Langue', 
  items: {fr: 'Français', en: 'Anglais'}})
@string('phoneNumber', {caption: 'Téléphone'})
@entity('address', Address)
@lookup('subscription.pricing', {caption: 'Tarification', 
  items: {'Standard 60$': 'Standard 60$', '58.15$': '58.15$'}})
export class Business extends Entity {}