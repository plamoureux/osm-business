import {EntityFormPage, route, form} from 'skyy/web-components/pages';

import {BusinessForm} from './business-form';

@route('businesses/:id')
@form(BusinessForm)
export class BusinessFormPage extends EntityFormPage {}