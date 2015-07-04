import {EntityListPage} from 'skyy/web-components/pages/entity-list-page';
import {route, list} from 'skyy/web-components/pages/decorators';
import {BusinessList} from 'osm-business/business-list';
@route('businesses', {title: 'Entreprises'})
@list(BusinessList)
export class BusinessListPage extends EntityListPage {}