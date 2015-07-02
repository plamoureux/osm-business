import {EntityForm, header, field} from 'skyy/web-components/entity-form';
import {entityType, component, panel, sideBySide} from 'skyy/web-components';

import {Business} from './business';
//import {AddressForm} from './address-form';
//import {ContactList} from './contact-list';
import {Title as FormTitle} from './business-form/title';

@entityType(Business)
@header({title: {new: 'Nouvelle entreprise', existing: 'name'}})
//@header({title: {type: FormTitle}})

//@sideBySide()
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