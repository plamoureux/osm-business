import {EntityList, column, widget} from 'skyy/web-components/entity-list';
import {entityType} from 'skyy/web-components';
import {toolbar, button} from 'skyy/web-components/toolbar';

import {Business} from './business';
import {NameColumn} from './business-list/name-column';
import {MyWidget} from './widgets/my-widget';

@entityType(Business)
@toolbar()
@button('createBusiness', 
  {widget: MyWidget, label: 'Créer une entreprise'})
@column('name', NameColumn, {title: 'Nom', class: 'col-sm-6'})
@column('address.city', {title: 'Ville', class: 'col-sm-2'})
@column('address.country', {title: 'Pays', class: 'col-sm-1'})
export class BusinessList extends EntityList {}