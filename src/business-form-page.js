import {EntityFormPage} from 'skyy/web-components/pages/entity-form-page';
import {route, form} from 'skyy/web-components/pages/decorators';
import {BusinessForm} from 'osm-business/business-form';
@route('businesses/:id')
@form(BusinessForm)
export class BusinessFormPage extends EntityFormPage {}