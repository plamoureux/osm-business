import {EntityList} from 'skyy/web-components/entity-list/entity-list';
import {entityType} from 'skyy/web-components/decorators';
import {column, widget} from 'skyy/web-components/entity-list/decorators';
//import {toolbar, button} from 'skyy/web-components/toolbar/decorators';
import {Business} from './business';
//import {MyWidget} from './widgets/my-widget';
//import {NameColumn} from './business-list/name-column';

@entityType(Business)
//@toolbar()
//@button('createBusiness', {widget: MyWidget, label: 'Créer une entreprise'})
//@column('name', NameColumn)
@column('address.city', {title: 'Ville', class: 'col-sm-2'})
@column('address.country', {title: 'Pays', class: 'col-sm-1'})
export class BusinessList extends EntityList {}