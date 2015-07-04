import {EntityList} from 'skyy/web-components/entity-list/entity-list';
import {entityType} from 'skyy/web-components/decorators';
import {Business} from 'osm-business/business';
import {toolbar, button} from 'skyy/web-components/toolbar/decorators';
import {MyWidget} from 'osm-business/widgets/my-widget';
import {column} from 'skyy/web-components/entity-list/decorators';
import {NameColumn} from 'osm-business/business-list/name-column';
@entityType(Business) //
@toolbar()
@button('createBusiness', 
  {widget: MyWidget, label: 'Créer une entreprise'})
@column('name', NameColumn, {title: 'Nom', class: 'col-sm-6'})
@column('address.city', {title: 'Ville', class: 'col-sm-2'})
@column('address.country', {title: 'Pays', class: 'col-sm-1'})
export class BusinessList extends EntityList {}