import {Entity, config, entity, field} from 'skyy/entity';
import {Address} from './address';

@config({key: '_id', plural: 'Businesses'})
@field('_id', 'string', {mandatory: true, unique: true})
@field('name', 'string', {caption: 'Nom', mandatory: true, unique: true})
@field('shortName', 'string', {caption: 'Abréviation'})
@field('language', 'radio',  {caption: 'Langue', items: {fr: 'Français', en: 'Anglais'}})
@field('phoneNumber', 'string', {caption: 'Téléphone'})
//@entity('address', Address)
@field('subscription.pricing', 'lookup', {caption: 'Tarification', items: {'Standard 60$': 'Standard 60$', '58.15$': '58.15$'}})
export class Business extends Entity {}