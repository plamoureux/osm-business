import {EntityForm} from 'skyy/web-components/entity-form/entity-form';
import {entityType, sideBySide, panel} from 'skyy/web-components/decorators';
import {Business} from 'osm-business/business';
import {header, field} from 'skyy/web-components/entity-form/decorators';
//import {AddressForm} from './address-form';
//import {ContactList} from './contact-list';

@entityType(Business)
@header({title: {new: 'Nouvelle entreprise', existing: 'name'}})///
//@header({title: {type: Title}})

@sideBySide()
@panel('$info')
@field('name')

@sideBySide()
@field('shortName')
@field('language')
@field('phoneNumber')
@panel('$subscription', {title: 'Abonnement'})
@field('subscription.pricing')
/*
@component('address', AddressForm)
@panel('$contactsPanel', {title: 'Contacts'})
@component('contacts', ContactList)
*/
//@component('address', AddressForm)
export class BusinessForm extends EntityForm {}