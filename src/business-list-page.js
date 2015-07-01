import {EntityListPage, route, list} from 'skyy/web-components/pages';
import {BusinessList} from './business-list';

@route('businesses', {title: 'Entreprises'})
@list(BusinessList)
export class BusinessListPage extends EntityListPage {}